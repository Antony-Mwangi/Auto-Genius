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

    // Redirect directly to customer dashboard
    router.push("/account");
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-[#0b0f14] text-white">

      {/* LEFT FORM */}
      <div className="flex items-center justify-center p-10">
        <div className="w-full max-w-md">

          <h2 className="mb-2 text-3xl font-bold text-teal-400">
            Create Account
          </h2>

          <p className="mb-8 text-gray-400">
            Join AutoSpare and start shopping genuine vehicle parts.
          </p>

          <form
            onSubmit={handleRegister}
            className="space-y-5"
          >
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-4
                py-3
                outline-none
                transition
                focus:border-orange-500
              "
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-4
                py-3
                outline-none
                transition
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
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-4
                py-3
                outline-none
                transition
                focus:border-cyan-400
              "
            />

            {error && (
              <div className="rounded-lg bg-red-500/10 border border-red-500/30 p-3 text-sm text-red-400">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                rounded-xl
                bg-teal-500
                py-3
                font-semibold
                transition
                hover:bg-teal-400
                disabled:opacity-50
              "
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-orange-400 hover:text-orange-300"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="hidden md:flex flex-col justify-center bg-gradient-to-br from-orange-500/10 to-cyan-500/10 p-16">

        <h1 className="text-5xl font-bold leading-tight">
          Welcome to{" "}
          <span className="text-orange-500">
            AutoSpare
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-300">
          Shop genuine spare parts for Toyota, Nissan, Subaru,
          Honda, Mazda and many more.
        </p>

        <div className="mt-12 space-y-5 rounded-2xl border border-white/10 bg-white/5 p-8">

          <div className="flex items-center gap-4">
            <div className="text-2xl text-orange-500">
              🚗
            </div>

            <div>
              <h3 className="font-semibold">
                Genuine Parts
              </h3>

              <p className="text-sm text-gray-400">
                Trusted brands and verified suppliers.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-2xl text-teal-400">
              🛒
            </div>

            <div>
              <h3 className="font-semibold">
                Save Your Cart
              </h3>

              <p className="text-sm text-gray-400">
                Continue shopping anytime.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-2xl text-cyan-400">
              📦
            </div>

            <div>
              <h3 className="font-semibold">
                Track Orders
              </h3>

              <p className="text-sm text-gray-400">
                View order history and delivery status.
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}