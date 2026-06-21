"use client";

import AdminGuard from "./AdminGuard";
import AdminNavbar from "@/app/components/admin/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0b0f14] text-white">

      {/* TOP NAVBAR */}
      <AdminNavbar />

      {/* PAGE CONTENT */}
      <main className="p-6">
        <AdminGuard>{children}</AdminGuard>
      </main>

    </div>
  );
}