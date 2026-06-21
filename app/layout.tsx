import "./globals.css";

import { CartProvider } from "@/app/context/CartContext";
import { AuthProvider } from "@/app/context/AuthContext";
import { OrdersProvider } from "@/app/context/OrdersContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body>

        <AuthProvider>

          <CartProvider>

            <OrdersProvider>

              {children}

            </OrdersProvider>

          </CartProvider>

        </AuthProvider>

      </body>

    </html>
  );
}