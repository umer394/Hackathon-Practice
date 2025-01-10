export default {
    name: 'mockproductsdata',
    title: 'Mock Products',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true 
        }
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'sizes',
        title: 'Sizes',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'number',
      },
      {
        name: 'stock_quantity',
        title: 'Stock Quantity',
        type: 'number',
      },
      {
        name: 'discount_percent',
        title: 'Discount Percent',
        type: 'number',
      },
      {
        name: 'department',
        title: 'Department',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'total_orders',
        title: 'Total Orders',
        type: 'number',
      },
      {
        name: 'brand',
        title: 'Brand',
        type: 'string',
      },
      {
        name: 'color',
        title: 'Color',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
      },
      {
        name: 'gender',
        title: 'Gender',
        type: 'string',
      },
      {
        name: 'id',
        title: 'ID',
        type: 'string',
      },
    ],
  };
  