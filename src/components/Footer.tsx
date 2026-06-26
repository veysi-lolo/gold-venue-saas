import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-matte-black text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-gold">Gold</span> Venue
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Hayalinizdeki düğünü gerçeğe dönüştürüyoruz. En özel gününüz için
              en özel mekanları sunuyoruz.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gold">Hızlı Bağlantılar</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/mekanlar" className="hover:text-white transition">
                  Mekanlar
                </Link>
              </li>
              <li>
                <Link href="/rezervasyon" className="hover:text-white transition">
                  Rezervasyon
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="hover:text-white transition">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-white transition">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gold">İletişim</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📍 İstanbul, Türkiye</li>
              <li>📞 +90 (212) 555 00 00</li>
              <li>✉️ info@goldvenue.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Gold Venue. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
