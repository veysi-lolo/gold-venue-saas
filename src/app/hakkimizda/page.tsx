export default function HakkimizdaPage() {
  return (
    <section className="py-16 bg-cream min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-matte-black mb-3 text-center">
          Hakkımızda
        </h1>
        <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">
          Gold Venue olarak, hayalinizdeki düğünü gerçeğe dönüştürmek için
          buradayız.
        </p>

        <div className="bg-white rounded-xl shadow-md p-8 space-y-6 leading-relaxed text-gray-700">
          <p>
            <span className="text-gold font-bold">Gold Venue</span>, İstanbul'un
            en prestijli düğün mekanlarını tek bir platformda buluşturan online
            rezervasyon sistemidir. 2024 yılında kurulan şirketimiz, çiftlerin en
            özel günlerini planlamalarını kolaylaştırmayı amaçlamaktadır.
          </p>
          <p>
            Platformumuzda yer alan tüm mekanlar, uzman ekibimiz tarafından
            titizlikle seçilmiş ve kalite standartlarımıza uygunlukları kontrol
            edilmiştir. Her mekan için detaylı bilgi, fotoğraflar ve şeffaf
            fiyatlandırma sunuyoruz.
          </p>
          <p>
            Online rezervasyon sistemimiz sayesinde, istediğiniz mekanı
            istediğiniz tarihte kolayca ayırtabilir, güvenli ödeme altyapımızla
            kapora ödemelerinizi gerçekleştirebilirsiniz.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            {[
              { num: "50+", label: "Mekan" },
              { num: "1.200+", label: "Mutlu Çift" },
              { num: "4.9/5", label: "Müşteri Memnuniyeti" },
            ].map((s) => (
              <div
                key={s.label}
                className="text-center bg-cream rounded-lg p-6"
              >
                <div className="text-3xl font-bold text-terracotta mb-1">
                  {s.num}
                </div>
                <div className="text-sm text-gray-600">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
