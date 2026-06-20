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

    // Redirect to customer dashboard
    router.push("/account");
    router.refresh();
  };

  return (
    <div className="min-h-screen grid bg-[#0b0f14] text-white md:grid-cols-2">
      {/* LEFT SIDE */}
      <div className="flex items-center justify-center p-10">
        <div className="w-full max-w-md">
          <h2 className="mb-2 text-3xl font-bold text-orange-500">
            Welcome Back
          </h2>

          <p className="mb-8 text-gray-400">
            Sign in to manage your orders, cart and account.
          </p>

          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >
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
              <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                rounded-xl
                bg-orange-500
                py-3
                font-semibold
                text-white
                transition
                hover:bg-orange-400
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-400">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-teal-400 hover:text-teal-300"
            >
              Create Account
            </Link>
          </p>

          <div className="mt-8 rounded-2xl border border-orange-500/20 bg-orange-500/5 p-5">
            <h3 className="font-semibold text-orange-400">
              Continue as Guest
            </h3>

            <p className="mt-2 text-sm text-gray-300">
              You can browse products, add items to your cart and checkout
              without creating an account. Register later to save your order
              history and receive faster future checkouts.
            </p>

            <Link
              href="/shop"
              className="
                mt-4
                inline-block
                rounded-lg
                border
                border-orange-500
                px-4
                py-2
                text-sm
                font-medium
                text-orange-400
                transition
                hover:bg-orange-500
                hover:text-white
              "
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden flex-col justify-center bg-gradient-to-br from-teal-500/10 to-cyan-500/10 p-16 md:flex">
        <h1 className="text-5xl font-bold leading-tight">
          Find Genuine{" "}
          <span className="text-teal-400">
            Auto Spare Parts
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-300">
          Search thousands of quality parts for Toyota, Nissan, Mazda,
          Subaru, Honda, Mitsubishi and many other vehicles.
        </p>

        <div className="mt-12 space-y-5 rounded-2xl border border-white/10 bg-white/5 p-8">
          <div className="flex items-center gap-4">
            <div className="text-2xl text-orange-500">
              🛒
            </div>

            <div>
              <h3 className="font-semibold">
                Save Your Cart
              </h3>

              <p className="text-sm text-gray-400">
                Continue where you left off.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-2xl text-teal-400">
              📦
            </div>

            <div>
              <h3 className="font-semibold">
                Track Orders
              </h3>

              <p className="text-sm text-gray-400">
                Monitor every purchase from one dashboard.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-2xl text-cyan-400">
              ⚡
            </div>

            <div>
              <h3 className="font-semibold">
                Faster Checkout
              </h3>

              <p className="text-sm text-gray-400">
                Your details are remembered for future orders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}