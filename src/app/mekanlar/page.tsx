import VenueCard from "@/components/VenueCard";
import type { Venue } from "@/types";

const SAMPLE_VENUES: Venue[] = [
  {
    id: "1",
    name: "Boğaz Sarayı",
    description:
      "Boğaz manzaralı, 500 kişilik muhteşem düğün salonu. Modern ve klasik mimarinin buluştuğu eşsiz bir mekan.",
    capacity: 500,
    pricePerEvent: 150000,
    images: [],
    amenities: ["Otopark", "Vale", "Ses Sistemi", "Işık Sistemi"],
    address: "Beşiktaş, İstanbul",
    city: "İstanbul",
    available: true,
  },
  {
    id: "2",
    name: "Altın Bahçe",
    description:
      "Doğayla iç içe açık hava düğün mekanı. Geniş bahçesi ve şık dekorasyonuyla unutulmaz anlar yaşatır.",
    capacity: 300,
    pricePerEvent: 95000,
    images: [],
    amenities: ["Bahçe", "Havuz", "Ses Sistemi", "Catering"],
    address: "Çekmeköy, İstanbul",
    city: "İstanbul",
    available: true,
  },
  {
    id: "3",
    name: "Crystal Hall",
    description:
      "Kristal avizeler ve mermer zeminle süslenmiş lüks düğün salonu. VIP hizmet anlayışıyla fark yaratır.",
    capacity: 800,
    pricePerEvent: 250000,
    images: [],
    amenities: ["VIP Oda", "Kuaför", "Otopark", "Bridal Suite"],
    address: "Bakırköy, İstanbul",
    city: "İstanbul",
    available: true,
  },
  {
    id: "4",
    name: "Deniz Yıldızı",
    description:
      "Deniz kenarında romantik bir düğün mekanı. Gün batımı manzarası eşliğinde hayalinizdeki düğünü yaşayın.",
    capacity: 200,
    pricePerEvent: 120000,
    images: [],
    amenities: ["Deniz Manzarası", "İskele", "Ses Sistemi", "Aydınlatma"],
    address: "Büyükçekmece, İstanbul",
    city: "İstanbul",
    available: true,
  },
];

export default function MekanlarPage() {
  return (
    <section className="py-16 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-matte-black mb-3">
            Düğün <span className="text-gold">Mekanlarımız</span>
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Size en uygun mekanı seçin, detayları inceleyin ve hemen rezervasyon
            yapın.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SAMPLE_VENUES.map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </div>
      </div>
    </section>
  );
}
