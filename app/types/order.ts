import { CartItem } from "@/app/context/CartContext";

export interface Order {
  id: string;
  userEmail: string;
  customerName: string;

  items: CartItem[];

  totalItems: number;
  totalAmount: number;

  paymentMethod: string;
  deliveryMethod: string;

  phone: string;
  address: string;

  status: string;

  createdAt: string;
}