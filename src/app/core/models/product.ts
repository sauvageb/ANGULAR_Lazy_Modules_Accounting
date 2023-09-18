import {TVA} from "./tva";

export interface Product {
  id: string;
  description: string;
  priceHT: number;
  tva: TVA;
}
