"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // SIMPLE DEMO AUTH (replace later with backend)
    if (email === "admin@shop.com" && password === "admin123") {
      localStorage.setItem(
        "adminUser",
        JSON.stringify({
          email,
          role: "admin",
        })
      );

      router.push("/admin");
    } else {
      alert("Invalid admin credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0f14] text-white">
      <div className="w-[350px] space-y-4">
        <h1 className="text-2xl font-bold text-orange-500">
          Admin Login
        </h1>

        <input
          className="w-full p-3 bg-white/5 border border-white/10 rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full p-3 bg-white/5 border border-white/10 rounded"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-orange-500 py-3 rounded font-bold"
        >
          Login
        </button>
      </div>
    </div>
  );
}