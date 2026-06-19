import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/app/components/Providers";

export const metadata: Metadata = {
  title: "AutoSpare",
  description: "Premium automotive spare parts marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}