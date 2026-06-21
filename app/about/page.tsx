"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0b0f14] text-white flex flex-col">

      {/* HEADER */}
      <header className="border-b border-white/10 bg-[#111827]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center font-bold text-black">
              A
            </div>

            <div>
              <h1 className="text-xl font-bold text-orange-500">
                AUTOGENIUS
              </h1>
              <p className="text-xs text-gray-400">
                Spare Parts LTD
              </p>
            </div>
          </Link>

          {/* NAV */}
          <nav className="flex items-center gap-6 text-sm text-gray-300">
            <Link href="/" className="hover:text-orange-400">Home</Link>
            <Link href="/shop" className="hover:text-orange-400">Shop</Link>
            <Link href="/login" className="hover:text-orange-400">Login</Link>
            <Link
              href="/register"
              className="rounded-lg bg-orange-500 px-4 py-2 font-semibold text-white hover:bg-orange-400"
            >
              Register
            </Link>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-extrabold tracking-wide text-orange-500">
          AUTOGENIUS SPARE PARTS LTD
        </h1>

        <p className="mt-6 text-xl font-semibold text-white">
          PRECISION PARTS. SMARTER SOLUTIONS. ABSOLUTE RELIABILITY.
        </p>
      </section>

      {/* WHO WE ARE */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
        <p className="text-gray-300">
          Autogenius Spare Parts Ltd is built on a foundation of Excellence, Innovation, and Reliability.
        </p>
      </section>

      {/* GENIUS FACTOR */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8">

        <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:scale-105 transition-all duration-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-6 rounded-full bg-orange-400" />
            <h3 className="font-bold text-lg">The Auto</h3>
          </div>

          <p className="text-gray-400">
            Represents the machine—Japanese automotive perfection, precision engineering, and specialized product knowledge.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:scale-105 transition-all duration-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-6 rounded-full bg-teal-400" />
            <h3 className="font-bold text-lg">The Genius</h3>
          </div>

          <p className="text-gray-400">
            Represents the system—smart execution, proactive planning, and structured flawless delivery.
          </p>
        </div>

      </section>

      {/* VISION & MISSION */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8">

        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <h3 className="text-lg font-bold mb-2 text-orange-400">Vision</h3>
          <p className="text-gray-400">
            To be the ultimate benchmark of automotive excellence and innovation, empowering every vehicle owner with smart, reliable spare parts solutions.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <h3 className="text-lg font-bold mb-2 text-teal-400">Mission</h3>
          <p className="text-gray-400">
            To eliminate downtime by providing high-quality Japanese automotive parts with a smart, data-driven supply chain.
          </p>
        </div>

      </section>

      {/* VALUES */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-6">Our Values</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-5 bg-white/5 rounded-lg border border-white/10">
            UNCOMPROMISING EXCELLENCE
          </div>

          <div className="p-5 bg-white/5 rounded-lg border border-white/10">
            PROACTIVE INNOVATION
          </div>

          <div className="p-5 bg-white/5 rounded-lg border border-white/10">
            ABSOLUTE RELIABILITY
          </div>

          <div className="p-5 bg-white/5 rounded-lg border border-white/10">
            INTEGRITY IN MOTION
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-20 border-t border-white/10 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-8 py-10 grid md:grid-cols-3 gap-8 text-gray-400">

          <div>
            <h3 className="text-orange-500 font-bold text-lg">
              AUTOGENIUS
            </h3>
            <p className="mt-2 text-sm">
              Precision automotive spare parts supplier in Kenya.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <p>Kirinyaga Road, MSP Plaza B-02</p>
            <p>+254 714 200 500</p>
            <p>autogeniusspares25@gmail.com</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link href="/shop" className="hover:text-orange-400">Shop</Link>
              <Link href="/login" className="hover:text-orange-400">Login</Link>
              <Link href="/register" className="hover:text-orange-400">Register</Link>
            </div>
          </div>

        </div>

        <div className="text-center text-xs text-gray-500 py-4 border-t border-white/10">
          © {new Date().getFullYear()} AUTOGENIUS Spare Parts LTD. All rights reserved.
        </div>
      </footer>

    </main>
  );
}