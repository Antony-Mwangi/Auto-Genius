"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const success = login(email, password);

    if (!success) {
      setError("Invalid email or password.");
      setLoading(false);
      return;
    }

    setLoading(false);

    router.push("/");
    router.refresh();
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-[#0b0f14] text-white">
      {/* LEFT FORM */}
      <div className="flex items-center justify-center p-10">
        <div className="w-full max-w-md">

          <h2 className="mb-6 text-3xl font-bold text-orange-500">
            Welcome Back
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="
                w-full
                rounded-lg
                border
                border-white/10
                bg-white/5
                px-4
                py-3
                shadow-inner
                shadow-black/40
                outline-none
                focus:border-teal-400
              "
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="
                w-full
                rounded-lg
                border
                border-white/10
                bg-white/5
                px-4
                py-3
                shadow-inner
                shadow-black/40
                outline-none
                focus:border-cyan-400
              "
            />

            {error && (
              <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                rounded-lg
                bg-orange-500
                py-3
                font-semibold
                text-white
                shadow-lg
                shadow-orange-500/40
                transition
                hover:scale-[1.02]
                hover:bg-orange-400
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>

          </form>

          <p className="mt-5 text-sm text-gray-400">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-medium text-teal-400 hover:text-teal-300"
            >
              Register
            </Link>
          </p>

          <div className="mt-8 rounded-xl border border-orange-500/20 bg-orange-500/5 p-4 text-sm text-gray-300">
            <p className="font-semibold text-orange-400">
              Guest Shopping
            </p>

            <p className="mt-2">
              You can continue shopping without signing in. Create an
              account later to save your orders and track deliveries.
            </p>
          </div>

        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="hidden md:flex flex-col justify-center bg-gradient-to-br from-teal-500/10 to-cyan-500/10 p-16">

        <h1 className="text-4xl font-bold leading-tight">
          Power Your Garage with{" "}
          <span className="text-teal-400">
            Precision Parts
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-300">
          Browse thousands of quality spare parts for Toyota, Nissan,
          Mazda, Subaru, Honda, Mitsubishi and many more vehicles.
        </p>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-inner">

          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <span className="text-xl text-orange-500">✓</span>
              <span>Quick and secure login</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xl text-teal-400">✓</span>
              <span>Track your orders anytime</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xl text-cyan-400">✓</span>
              <span>Fast checkout and saved information</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}