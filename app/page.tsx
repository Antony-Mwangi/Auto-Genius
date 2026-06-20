import Link from "next/link";

export default function HomePage() {
  return (

    <main className="min-h-screen bg-[#0b0f14] text-white">

      {/* NAV */}
      <header className="flex items-center justify-between px-8 py-5 border-b border-white/10">
        <h1 className="text-2xl font-bold text-orange-500">
          AutoSpare
        </h1>

        <nav className="flex gap-6 text-sm text-gray-300">
          <Link href="/login">Login</Link>
          <Link href="/register" className="text-teal-400">
            Register
          </Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-10 px-10 py-20 items-center">

        {/* LEFT */}
        <div>
          <h2 className="text-5xl font-bold leading-tight">
            Premium <span className="text-orange-500">Car Spares</span>
            <br />
            Built for Performance
          </h2>

          <p className="text-gray-400 mt-5">
            Discover high-quality automotive parts with fast delivery and trusted sourcing.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/shop"
              className="bg-orange-500 px-6 py-3 rounded-lg shadow-lg shadow-orange-500/30"
            >
            shop now
            </Link>

            <Link
              href="/login"
              className="border border-teal-400 px-6 py-3 rounded-lg"
            >
              Login
            </Link>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative">
          <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-full"></div>

          <div className="relative p-10 rounded-2xl border border-white/10 bg-white/5 shadow-xl">
            <h3 className="text-xl font-semibold text-teal-300">
              Engine Performance Parts
            </h3>

            <p className="text-gray-400 mt-3">
              Boost your vehicle efficiency with premium engineered components.
            </p>

            <div className="mt-6 h-40 bg-gradient-to-br from-orange-500/20 to-teal-500/10 rounded-xl"></div>
          </div>
        </div>
      </section>
    </main>
  );
}