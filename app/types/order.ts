export type OrderStatus =
  | "Pending"
  | "Processing"
  | "Shipped"
  | "Delivered";

export interface Order {
  id: string;

  userEmail: string;
  userName: string;

  phone: string;
  location: string;

  items: {
    id: string;
    name: string;
    price: number;
    quantity: number;
  }[];

  totalItems: number;
  totalAmount: number;

  paymentMethod: "mpesa" | "cash";

  status: OrderStatus;

  createdAt: string;
}