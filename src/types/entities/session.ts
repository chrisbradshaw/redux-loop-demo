export interface SessionCartItem {
  id: string;
  pc_product_id: number;
}

// TODO: update `null` types with the actual types. We may also want to convert some of the `string`
// types to string literal union types to constrain their values.
export interface Session {
  applied_promotions: null;
  cart_type_analytics: string;
  hto_limit_reached: boolean;
  hto_quantity: number;
  hto_quantity_remaining: number;
  items: SessionCartItem[];
  id: string;
  pc_product_id: number;
  qualified_promotions: null;
  quantity: number;
  customer: null;
  seconds_since_arrival: number;
}
