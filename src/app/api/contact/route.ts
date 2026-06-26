import { NextRequest, NextResponse } from "next/server";
import { getFirebaseDb } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    const db = getFirebaseDb();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Tüm alanları doldurun." },
        { status: 400 }
      );
    }

    await addDoc(collection(db, "contacts"), {
      name,
      email,
      message,
      createdAt: serverTimestamp(),
    });

    return NextResponse.json({ message: "Mesajınız alındı." });
  } catch (error) {
    console.error("Contact error:", error);
    return NextResponse.json(
      { error: "Mesaj gönderilemedi." },
      { status: 500 }
    );
  }
}
