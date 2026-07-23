export interface Bouquet {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface CartItem {
  bouquet: Bouquet;
  quantity: number;
}
