"use client"
import { useState } from "react";

interface ShipmentDetails {
  carrier_id: string;
  service_code: string;
  ship_to: {
    name: string;
    phone: string;
    address_line1: string;
    city_locality: string;
    state_province: string;
    postal_code: string;
    country_code: string;
    address_residential_indicator: string;
  };
  ship_from: {
    name: string;
    company_name: string;
    phone: string;
    address_line1: string;
    city_locality: string;
    state_province: string;
    postal_code: string;
    country_code: string;
    address_residential_indicator: string;
  };
  packages: {
    weight: { value: number; unit: string };
    dimensions: { height: number; width: number; length: number; unit: string };
  }[];
}

export default function Home() {
  const [shipmentDetails, setShipmentDetails] = useState<ShipmentDetails>({
    carrier_id: process.env.NEXT_PUBLIC_SHIPENGINE_FIRST_COURIER || "",
    service_code: "ups_ground",
    ship_to: {
      name: "",
      phone: "",
      address_line1: "",
      city_locality: "",
      state_province: "",
      postal_code: "",
      country_code: "US",
      address_residential_indicator: "yes",
    },
    ship_from: {
      name: "John Doe",
      company_name: "Example Corp",
      phone: "+1 555-555-5555",
      address_line1: "4301 Bull Creek Rd",
      city_locality: "Austin",
      state_province: "TX",
      postal_code: "78731",
      country_code: "US",
      address_residential_indicator: "no",
    },
    packages: [
      {
        weight: { value: 20, unit: "ounce" },
        dimensions: { height: 6, width: 12, length: 24, unit: "inch" },
      },
    ],
  });

  const [labelData, setLabelData] = useState<any>(null);
  const [error, setError] = useState<string>("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof ShipmentDetails["ship_to"],
    isShipTo = true
  ) => {
    const updatedDetails = { ...shipmentDetails };
    if (isShipTo) {
      updatedDetails.ship_to[field] = e.target.value;
    } else {
      updatedDetails.ship_from[field] = e.target.value;
    }
    setShipmentDetails(updatedDetails);
  };

  const createLabel = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/shipengine/get-rates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ shipmentDetails }),
      });

      if (response.ok) {
        const data = await response.json();
        setLabelData(data);
        setError("");
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Failed to create label");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Create a Shipping Label</h1>

      {/* Recipient Form */}
      <div className="mt-4">
        <h2 className="font-semibold">Recipient Information</h2>
        <input
          type="text"
          placeholder="Name"
          className="border p-2 mt-2 block"
          onChange={(e) => handleInputChange(e, "name")}
        />
        <input
          type="text"
          placeholder="Phone"
          className="border p-2 mt-2 block"
          onChange={(e) => handleInputChange(e, "phone")}
        />
        <input
          type="text"
          placeholder="Address Line 1"
          className="border p-2 mt-2 block"
          onChange={(e) => handleInputChange(e, "address_line1")}
        />
        <input
          type="text"
          placeholder="City"
          className="border p-2 mt-2 block"
          onChange={(e) => handleInputChange(e, "city_locality")}
        />
        <input
          type="text"
          placeholder="State"
          className="border p-2 mt-2 block"
          onChange={(e) => handleInputChange(e, "state_province")}
        />
        <input
          type="text"
          placeholder="Postal Code"
          className="border p-2 mt-2 block"
          onChange={(e) => handleInputChange(e, "postal_code")}
        />
      </div>

      <button
        onClick={createLabel}
        className="bg-blue-500 text-white px-4 py-2 mt-4"
      >
        Create Label
      </button>

      {/* Label Display */}
      {labelData && (
        <div className="mt-6">
          <h2 className="text-xl font-bold">Label Created</h2>
          <p>Tracking Number: {labelData.tracking_number}</p>
          <a href={labelData.label_download.pdf} target="_blank" rel="noopener noreferrer" className="text-blue-500">
            Download Label (PDF)
          </a>
        </div>
      )}

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}
