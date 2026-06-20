"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";

export default function RegisterPage() {
  const router = useRouter();
  const { register } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const success = register({
      name,
      email,
      password,
    });

    if (!success) {
      setError("An account with this email already exists.");
      setLoading(false);
      return;
    }

    setLoading(false);
    router.push("/login");
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-[#0b0f14] text-white">
      {/* LEFT FORM */}
      <div className="flex items-center justify-center p-10">
        <div className="w-full max-w-md">
          <h2 className="mb-6 text-3xl font-bold text-teal-400">
            Create Account
          </h2>

          <form onSubmit={handleRegister} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
                focus:border-orange-500
              "
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              required
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
                bg-teal-500
                py-3
                font-semibold
                text-white
                shadow-lg
                shadow-teal-500/40
                transition
                hover:scale-[1.02]
                hover:bg-teal-400
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <p className="mt-5 text-sm text-gray-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-orange-400 hover:text-orange-300"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden flex-col justify-center bg-gradient-to-br from-orange-500/10 to-cyan-500/10 p-16 md:flex">
        <h1 className="text-4xl font-bold leading-tight">
          Join the{" "}
          <span className="text-orange-500">
            AutoSpare Network
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-300">
          Create an account to save your orders, manage your cart,
          track purchases, and enjoy a faster checkout experience.
        </p>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-inner">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xl text-orange-500">✓</span>
              <span>Save your shopping cart</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xl text-teal-400">✓</span>
              <span>Track your orders easily</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xl text-cyan-400">✓</span>
              <span>Fast checkout on future purchases</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}