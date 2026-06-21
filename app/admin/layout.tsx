"use client";
import AdminGuard from "./AdminGuard";
import Sidebar from "@/app/components/admin/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#0b0f14] text-white">
      <Sidebar />

      <main className="flex-1 p-8 overflow-auto">
        <AdminGuard>{children}</AdminGuard>
      </main>
    </div>
  );
}