"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      // ✅ simple redirect (NO auth context)
      router.push("/");
      router.refresh();

    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-[#0b0f14] text-white">

      {/* LEFT FORM */}
      <div className="flex items-center justify-center p-10">
        <div className="w-full max-w-md">

          <h2 className="text-3xl font-bold text-orange-500 mb-6">
            Welcome Back
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">

            <input
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10
              shadow-inner shadow-black/40 focus:border-teal-400 outline-none"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10
              shadow-inner shadow-black/40 focus:border-teal-400 outline-none"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            {error && (
              <p className="text-red-400 text-sm">{error}</p>
            )}

            <button
              disabled={loading}
              className="w-full py-3 rounded-lg bg-orange-500
              shadow-lg shadow-orange-500/40 hover:scale-[1.02] transition
              disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>

          </form>

          <p className="text-sm text-gray-400 mt-5">
            Don’t have an account?{" "}
            <Link href="/register" className="text-teal-400">
              Register
            </Link>
          </p>

        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="hidden md:flex flex-col justify-center p-16 bg-gradient-to-br from-teal-500/10 to-cyan-500/10">

        <h1 className="text-4xl font-bold">
          Power Your Garage with{" "}
          <span className="text-teal-400">Precision Parts</span>
        </h1>

        <p className="text-gray-300 mt-6">
          Access thousands of verified spare parts for Japanese and European vehicles.
        </p>

        <div className="mt-10 h-60 rounded-2xl border border-white/10 bg-white/5 shadow-inner" />

      </div>

    </div>
  );
}