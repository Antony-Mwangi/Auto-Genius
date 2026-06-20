import "./globals.css";

import { CartProvider } from "@/app/context/CartContext";
import { AuthProvider } from "@/app/context/AuthContext";

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

            {children}

          </CartProvider>
        </AuthProvider>

      </body>
    </html>
  );
}