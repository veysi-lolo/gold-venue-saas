import { MapPin, Users, Check } from "lucide-react";
import ReservationForm from "@/components/ReservationForm";

export default async function VenueDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const venue = {
    id,
    name: "Boğaz Sarayı",
    description:
      "Boğaz manzaralı, 500 kişilik muhteşem düğün salonu. Modern ve klasik mimarinin buluştuğu eşsiz bir mekan. Profesyonel ekibimizle hayalinizdeki düğünü gerçeğe dönüştürüyoruz.",
    capacity: 500,
    pricePerEvent: 150000,
    images: [],
    amenities: ["Otopark", "Vale", "Ses Sistemi", "Işık Sistemi", "Catering", "Bridal Suite"],
    address: "Beşiktaş, İstanbul",
    city: "İstanbul",
    available: true,
  };

  return (
    <section className="py-16 bg-cream min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="h-72 bg-matte-black flex items-center justify-center">
            <span className="text-gray-500">Mekan Fotoğrafı</span>
          </div>
          <div className="p-8">
            <h1 className="text-3xl font-bold text-matte-black mb-2">
              {venue.name}
            </h1>
            <div className="flex items-center gap-4 text-gray-500 mb-4">
              <span className="flex items-center gap-1">
                <MapPin size={16} /> {venue.address}
              </span>
              <span className="flex items-center gap-1">
                <Users size={16} /> {venue.capacity} kişi kapasite
              </span>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {venue.description}
            </p>

            <div className="mb-8">
              <h3 className="font-semibold text-lg mb-3">Olanaklar</h3>
              <div className="flex flex-wrap gap-3">
                {venue.amenities.map((a) => (
                  <span
                    key={a}
                    className="flex items-center gap-1 bg-cream px-3 py-1.5 rounded-full text-sm"
                  >
                    <Check size={14} className="text-terracotta" /> {a}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-terracotta/5 rounded-lg p-4 mb-8 flex items-center justify-between">
              <span className="text-gray-700">Etkinlik Ücreti</span>
              <span className="text-2xl font-bold text-terracotta">
                ₺{venue.pricePerEvent.toLocaleString("tr-TR")}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 mt-8">
          <h2 className="text-2xl font-bold text-matte-black mb-6">
            Rezervasyon Talebi
          </h2>
          <ReservationForm venueId={venue.id} venueName={venue.name} />
        </div>
      </div>
    </section>
  );
}
