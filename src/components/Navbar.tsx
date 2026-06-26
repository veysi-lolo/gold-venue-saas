"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-matte-black text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold tracking-wide">
            <span className="text-gold">Gold</span> Venue
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-gold transition">
              Ana Sayfa
            </Link>
            <Link href="/mekanlar" className="hover:text-gold transition">
              Mekanlar
            </Link>
            <Link href="/hakkimizda" className="hover:text-gold transition">
              Hakkımızda
            </Link>
            <Link href="/iletisim" className="hover:text-gold transition">
              İletişim
            </Link>
            <Link
              href="/rezervasyon"
              className="bg-terracotta hover:bg-terracotta-dark text-white px-5 py-2 rounded-md transition font-medium"
            >
              Rezervasyon Yap
            </Link>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
            aria-label="Menü"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-matte-black-light px-4 pb-4 space-y-3">
          <Link href="/" className="block hover:text-gold transition" onClick={() => setOpen(false)}>
            Ana Sayfa
          </Link>
          <Link href="/mekanlar" className="block hover:text-gold transition" onClick={() => setOpen(false)}>
            Mekanlar
          </Link>
          <Link href="/hakkimizda" className="block hover:text-gold transition" onClick={() => setOpen(false)}>
            Hakkımızda
          </Link>
          <Link href="/iletisim" className="block hover:text-gold transition" onClick={() => setOpen(false)}>
            İletişim
          </Link>
          <Link
            href="/rezervasyon"
            className="block bg-terracotta hover:bg-terracotta-dark text-white px-4 py-2 rounded-md text-center transition"
            onClick={() => setOpen(false)}
          >
            Rezervasyon Yap
          </Link>
        </div>
      )}
    </nav>
  );
}
