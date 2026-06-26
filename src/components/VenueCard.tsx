import Link from "next/link";
import { MapPin, Users } from "lucide-react";
import type { Venue } from "@/types";

export default function VenueCard({ venue }: { venue: Venue }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
      <div className="h-56 bg-cream flex items-center justify-center">
        {venue.images[0] ? (
          <img
            src={venue.images[0]}
            alt={venue.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-gray-400 text-sm">Fotoğraf yok</span>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-matte-black mb-1">
          {venue.name}
        </h3>
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <MapPin size={14} /> {venue.city}
          </span>
          <span className="flex items-center gap-1">
            <Users size={14} /> {venue.capacity} kişi
          </span>
        </div>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {venue.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-terracotta font-bold text-lg">
            ₺{venue.pricePerEvent.toLocaleString("tr-TR")}
          </span>
          <Link
            href={`/mekanlar/${venue.id}`}
            className="bg-matte-black text-white px-4 py-2 rounded-md text-sm hover:bg-matte-black-light transition"
          >
            Detay Gör
          </Link>
        </div>
      </div>
    </div>
  );
}
