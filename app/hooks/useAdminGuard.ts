"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function useAdminGuard() {
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(
      localStorage.getItem("currentUser") || "null"
    );

    if (!user || user.role !== "admin") {
      router.push("/admin/login");
    }
  }, []);
}