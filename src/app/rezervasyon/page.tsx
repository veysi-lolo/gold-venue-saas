import ReservationForm from "@/components/ReservationForm";

export default function ReservationPage() {
  return (
    <section className="py-16 bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-matte-black mb-3">
            Rezervasyon <span className="text-gold">Talebi</span>
          </h1>
          <p className="text-gray-600">
            Formu doldurarak mekan rezervasyon talebinizi iletin. Ekibimiz en
            kısa sürede sizinle iletişime geçecektir.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-8">
          <ReservationForm />
        </div>
      </div>
    </section>
  );
}
