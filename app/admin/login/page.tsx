"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const admin = users.find(
      (u: any) =>
        u.email === email &&
        u.password === password &&
        u.role === "admin"
    );

    if (!admin) {
      alert("Invalid admin credentials");
      return;
    }

    localStorage.setItem(
      "currentUser",
      JSON.stringify(admin)
    );

    router.push("/admin");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0f14] text-white">
      <div className="w-full max-w-md bg-[#121821] p-8 rounded-xl border border-white/10">

        <h1 className="text-3xl font-bold text-orange-500 mb-6">
          Admin Login
        </h1>

        <input
          placeholder="Email"
          className="w-full mb-4 p-3 rounded bg-white/5"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 rounded bg-white/5"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-orange-500 py-3 rounded font-bold"
        >
          Login as Admin
        </button>

      </div>
    </div>
  );
}