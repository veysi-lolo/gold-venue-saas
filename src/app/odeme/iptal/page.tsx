import Link from "next/link";
import { XCircle } from "lucide-react";

export default function OdemeIptal() {
  return (
    <section className="py-20 bg-cream min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-md p-12 text-center max-w-md">
        <XCircle size={64} className="text-red-500 mx-auto mb-6" />
        <h1 className="text-2xl font-bold text-matte-black mb-3">
          Ödeme İptal Edildi
        </h1>
        <p className="text-gray-600 mb-8">
          Ödeme işleminiz iptal edilmiştir. Dilediğiniz zaman tekrar
          deneyebilirsiniz.
        </p>
        <Link
          href="/mekanlar"
          className="bg-terracotta hover:bg-terracotta-dark text-white px-6 py-3 rounded-md font-semibold transition"
        >
          Mekanlara Dön
        </Link>
      </div>
    </section>
  );
}
