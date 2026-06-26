import { NextRequest, NextResponse } from "next/server";
import { getFirebaseDb } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const db = getFirebaseDb();
    const {
      customerName,
      customerEmail,
      customerPhone,
      eventDate,
      eventType,
      guestCount,
      venueId,
      venueName,
      notes,
    } = body;

    if (!customerName || !customerEmail || !customerPhone || !eventDate || !guestCount) {
      return NextResponse.json(
        { error: "Tüm zorunlu alanları doldurun." },
        { status: 400 }
      );
    }

    const docRef = await addDoc(collection(db, "reservations"), {
      customerName,
      customerEmail,
      customerPhone,
      eventDate,
      eventType: eventType || "düğün",
      guestCount: Number(guestCount),
      venueId: venueId || null,
      venueName: venueName || null,
      notes: notes || "",
      status: "beklemede",
      paymentStatus: "ödenmedi",
      createdAt: serverTimestamp(),
    });

    return NextResponse.json({ id: docRef.id, message: "Rezervasyon oluşturuldu." });
  } catch (error) {
    console.error("Reservation error:", error);
    return NextResponse.json(
      { error: "Rezervasyon oluşturulamadı." },
      { status: 500 }
    );
  }
}
