export interface Venue {
  id: string;
  name: string;
  description: string;
  capacity: number;
  pricePerEvent: number;
  images: string[];
  amenities: string[];
  address: string;
  city: string;
  available: boolean;
}

export interface Reservation {
  id: string;
  venueId: string;
  venueName: string;
  userId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  eventDate: string;
  eventType: "düğün" | "nişan" | "kına" | "özel";
  guestCount: number;
  totalPrice: number;
  status: "beklemede" | "onaylandı" | "iptal";
  paymentStatus: "ödenmedi" | "kapora" | "tamamen_ödendi";
  stripePaymentId?: string;
  notes?: string;
  createdAt: string;
}

export interface User {
  uid: string;
  email: string;
  displayName: string;
  role: "admin" | "customer";
  phone?: string;
}
