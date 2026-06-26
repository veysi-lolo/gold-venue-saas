import { NextRequest, NextResponse } from "next/server";
import twilio from "twilio";

function getClient() {
  return twilio(process.env.TWILIO_ACCOUNT_SID!, process.env.TWILIO_AUTH_TOKEN!);
}

export async function POST(req: NextRequest) {
  try {
    const { to, message } = await req.json();

    if (!to || !message) {
      return NextResponse.json(
        { error: "Telefon numarası ve mesaj gerekli." },
        { status: 400 }
      );
    }

    const result = await getClient().messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER!,
      to,
    });

    return NextResponse.json({ sid: result.sid });
  } catch (error) {
    console.error("SMS error:", error);
    return NextResponse.json(
      { error: "SMS gönderilemedi." },
      { status: 500 }
    );
  }
}
