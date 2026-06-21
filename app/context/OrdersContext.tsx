"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export interface Order {
  id: string;

  customerName: string;
  customerEmail: string;

  phone: string;
  location: string;

  paymentMethod: string;

  items: any[];

  totalItems: number;
  totalAmount: number;

  status: string;

  createdAt: string;
}

interface OrdersContextType {
  orders: Order[];

  addOrder: (order: Order) => void;

  updateStatus: (
    id: string,
    status: string
  ) => void;

  deleteOrder: (id: string) => void;
}

const OrdersContext =
  createContext<OrdersContextType | null>(null);

export function OrdersProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [orders, setOrders] =
    useState<Order[]>([]);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("orders") || "[]"
    );

    setOrders(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "orders",
      JSON.stringify(orders)
    );
  }, [orders]);

  const addOrder = (order: Order) => {
    setOrders((prev) => [order, ...prev]);
  };

  const updateStatus = (
    id: string,
    status: string
  ) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id
          ? {
              ...order,
              status,
            }
          : order
      )
    );
  };

  const deleteOrder = (id: string) => {
    setOrders((prev) =>
      prev.filter(
        (order) => order.id !== id
      )
    );
  };

  return (
    <OrdersContext.Provider
      value={{
        orders,
        addOrder,
        updateStatus,
        deleteOrder,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
}

export function useOrders() {
  const context =
    useContext(OrdersContext);

  if (!context) {
    throw new Error(
      "useOrders must be used inside OrdersProvider"
    );
  }

  return context;
}