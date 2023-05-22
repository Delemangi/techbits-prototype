/// <reference types="vite/client" />

type User = {
  id: string;
  username: string;
  cart: CartItem[];
};

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
};

type CartItem = Product & { quantity: number };
