import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function OdemeBasarili() {
  return (
    <section className="py-20 bg-cream min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-md p-12 text-center max-w-md">
        <CheckCircle size={64} className="text-green-500 mx-auto mb-6" />
        <h1 className="text-2xl font-bold text-matte-black mb-3">
          Ödeme Başarılı!
        </h1>
        <p className="text-gray-600 mb-8">
          Kapora ödemeniz alınmıştır. Rezervasyonunuz onaylandığında SMS ve
          e-posta ile bilgilendirileceksiniz.
        </p>
        <Link
          href="/"
          className="bg-terracotta hover:bg-terracotta-dark text-white px-6 py-3 rounded-md font-semibold transition"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </section>
  );
}
