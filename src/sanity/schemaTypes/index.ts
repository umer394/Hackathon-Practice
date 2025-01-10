import { type SchemaTypeDefinition } from 'sanity'
import productsItem from './productsItem'
import flashsales from './flashsales'
import selling from './selling'


import mockproductsdata from "./mocproductsdata"


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productsItem,flashsales,selling,mockproductsdata]
}
