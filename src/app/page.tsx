import Link from "next/link";
import { Star, Calendar, Shield } from "lucide-react";

const FEATURES = [
  {
    icon: Star,
    title: "Özenle Seçilmiş Mekanlar",
    desc: "İstanbul'un en prestijli düğün mekanlarını sizin için bir araya getirdik.",
  },
  {
    icon: Calendar,
    title: "Kolay Rezervasyon",
    desc: "Online rezervasyon sistemiyle istediğiniz tarihi anında ayırtın.",
  },
  {
    icon: Shield,
    title: "Güvenli Ödeme",
    desc: "Stripe altyapısıyla güvenli ödeme, kapora ve taksit seçenekleri.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-matte-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Hayalinizdeki Düğün Mekanını
            <br />
            <span className="text-gold">Gold Venue</span> ile Bulun
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            En özel gününüz için en özel mekanları keşfedin. Kolay rezervasyon,
            güvenli ödeme ve profesyonel hizmet bir arada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/mekanlar"
              className="bg-terracotta hover:bg-terracotta-dark text-white px-8 py-3.5 rounded-md font-semibold text-lg transition"
            >
              Mekanları Keşfet
            </Link>
            <Link
              href="/rezervasyon"
              className="border-2 border-gold text-gold hover:bg-gold hover:text-matte-black px-8 py-3.5 rounded-md font-semibold text-lg transition"
            >
              Hemen Rezervasyon Yap
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-matte-black">
            Neden <span className="text-gold">Gold Venue</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition"
              >
                <div className="w-14 h-14 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <f.icon className="text-terracotta" size={28} />
                </div>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-matte-black text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Hayalinizdeki Mekanı Bulmaya Hazır mısınız?
          </h2>
          <p className="text-gray-400 mb-8">
            Ücretsiz keşif turu için hemen iletişime geçin veya online
            rezervasyon yapın.
          </p>
          <Link
            href="/iletisim"
            className="bg-terracotta hover:bg-terracotta-dark text-white px-8 py-3.5 rounded-md font-semibold text-lg transition"
          >
            Bize Ulaşın
          </Link>
        </div>
      </section>
    </>
  );
}
