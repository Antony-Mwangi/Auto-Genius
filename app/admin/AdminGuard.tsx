"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";

export default function AdminGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const adminUser = JSON.parse(
      localStorage.getItem("adminUser") || "null"
    );

    // no admin logged in → redirect
    if (!adminUser || adminUser.role !== "admin") {
      router.push("/admin/login");
    }
  }, [router]);

  if (!user) return null;

  return <>{children}</>;
}