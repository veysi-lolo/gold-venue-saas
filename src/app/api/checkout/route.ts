import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2026-06-24.dahlia",
  });
}

export async function POST(req: NextRequest) {
  try {
    const { reservationId, amount, venueName } = await req.json();
    const stripe = getStripe();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "try",
            product_data: {
              name: `${venueName} - Kapora Ödemesi`,
            },
            unit_amount: amount * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      metadata: { reservationId },
      success_url: `${req.nextUrl.origin}/odeme/basarili?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.nextUrl.origin}/odeme/iptal`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Ödeme oturumu oluşturulamadı." },
      { status: 500 }
    );
  }
}
