import Image from "next/image";
import Link from "next/link";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaClock,
} from "react-icons/fa";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0b0f14] text-white">

      {/* NAVBAR */}

      <header className="border-b border-white/10 bg-[#111827]">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">

          {/* LOGO */}

          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <Image
              src="/logo.jpeg"
              alt="AUTOGENIUS Spare Parts LTD"
              width={55}
              height={55}
              priority
              className="rounded-full"
            />

            <div>
              <h1 className="text-2xl font-bold text-orange-500">
                AUTOGENIUS
              </h1>

              <p className="text-xs text-gray-400">
                Spare Parts LTD
              </p>
            </div>
          </Link>

          {/* NAVIGATION */}

          <nav className="flex items-center gap-6 text-sm">

            <Link
              href="/shop"
              className="transition hover:text-orange-400"
            >
              Shop
            </Link>

            <Link
              href="/login"
              className="transition hover:text-orange-400"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="rounded-lg bg-orange-500 px-5 py-2 font-semibold transition hover:bg-orange-400"
            >
              Register
            </Link>

          </nav>

        </div>

      </header>

      {/* HERO */}

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-8 py-20 md:grid-cols-2">

        <div>

          <h2 className="text-5xl font-bold leading-tight">

            Genuine

            <span className="text-orange-500">
              {" "}Auto Spare Parts
            </span>

            <br />

            Delivered Fast

          </h2>

          <p className="mt-6 text-lg text-gray-400">

            AUTOGENIUS Spare Parts LTD supplies quality engine,
            suspension, braking and electrical parts for Toyota,
            Nissan, Subaru, Honda, Mazda, Mitsubishi and many
            other vehicles across Kenya.

          </p>

          <div className="mt-10 flex gap-4">

            <Link
              href="/shop"
              className="rounded-lg bg-orange-500 px-7 py-3 font-semibold shadow-lg shadow-orange-500/30 transition hover:bg-orange-400"
            >
              Shop Now
            </Link>

            <Link
              href="/login"
              className="rounded-lg border border-teal-400 px-7 py-3 font-semibold transition hover:bg-teal-400 hover:text-black"
            >
              Login
            </Link>

          </div>

        </div>

        {/* COMPANY CARD */}

        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">

          <h3 className="text-2xl font-bold text-orange-400">
            AUTOGENIUS Spare Parts LTD
          </h3>

          <div className="mt-6 space-y-5 text-gray-300">

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-orange-500" />
              <div>
                <p className="font-semibold text-white">
                  Location
                </p>

                <p>
                  Kirinyaga Road
                  <br />
                  MSP PLAZA
                  <br />
                  Shop B-02
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaPhoneAlt className="mt-1 text-orange-500" />
              <div>
                <p className="font-semibold text-white">
                  Phone
                </p>

                <p>+254 714 200 500</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaEnvelope className="mt-1 text-orange-500" />
              <div>
                <p className="font-semibold text-white">
                  Email
                </p>

                <p>autogeniusspares25@gmail.com</p>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-white/10 bg-[#111827]">

        <div className="mx-auto grid max-w-7xl gap-10 px-8 py-12 md:grid-cols-4">

          {/* COMPANY */}

          <div>

            <div className="flex items-center gap-3">

              <Image
                src="/logo.png"
                alt="AUTOGENIUS"
                width={45}
                height={45}
                className="rounded-full"
              />

              <div>

                <h3 className="text-lg font-bold text-orange-500">
                  AUTOGENIUS
                </h3>

                <p className="text-xs text-gray-400">
                  Spare Parts LTD
                </p>

              </div>

            </div>

            <p className="mt-5 text-sm leading-7 text-gray-400">
              Your trusted destination for genuine automotive
              spare parts, reliable service and fast delivery
              across Kenya.
            </p>

          </div>

          {/* CONTACT */}

          <div>

            <h4 className="mb-5 text-lg font-semibold text-white">
              Contact
            </h4>

            <div className="space-y-4 text-sm text-gray-400">

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-orange-500" />
                <span>+254 714 200 500</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-orange-500" />
                <span>autogeniusspares25@gmail.com</span>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-orange-500" />
                <span>
                  Kirinyaga Rd,
                  <br />
                  MSP PLAZA,
                  <br />
                  Shop B-02
                </span>
              </div>

            </div>

          </div>

          {/* SALES */}

          <div>

            <h4 className="mb-5 text-lg font-semibold text-white">
              Sales Executive
            </h4>

            <p className="font-semibold text-orange-400">
              Ponciano Mutua
            </p>

            <div className="mt-5 flex items-center gap-3 text-gray-400">

              <FaClock className="text-orange-500" />

              <span>
                Mon - Sat
                <br />
                8:00 AM - 6:00 PM
              </span>

            </div>

          </div>

          {/* SOCIALS */}

          <div>

            <h4 className="mb-5 text-lg font-semibold text-white">
              Connect With Us
            </h4>

            <div className="flex gap-4">

              <a
                href="#"
                className="rounded-full bg-white/10 p-3 transition hover:bg-orange-500"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="rounded-full bg-white/10 p-3 transition hover:bg-orange-500"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/254714200500"
                target="_blank"
                className="rounded-full bg-white/10 p-3 transition hover:bg-green-600"
              >
                <FaWhatsapp />
              </a>

            </div>

            <Link
              href="/shop"
              className="mt-8 inline-block rounded-lg bg-orange-500 px-5 py-3 font-semibold transition hover:bg-orange-400"
            >
              Start Shopping
            </Link>

          </div>

        </div>

        {/* BOTTOM BAR */}

        <div className="border-t border-white/10 py-5 text-center text-sm text-gray-500">

          © {new Date().getFullYear()} AUTOGENIUS Spare Parts LTD.
          All Rights Reserved.

        </div>

      </footer>

    </main>
  );
}