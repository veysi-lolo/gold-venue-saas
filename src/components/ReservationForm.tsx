"use client";

import { useState } from "react";
import toast from "react-hot-toast";

const EVENT_TYPES = [
  { value: "düğün", label: "Düğün" },
  { value: "nişan", label: "Nişan" },
  { value: "kına", label: "Kına Gecesi" },
  { value: "özel", label: "Özel Etkinlik" },
] as const;

export default function ReservationForm({
  venueId,
  venueName,
}: {
  venueId?: string;
  venueName?: string;
}) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    eventDate: "",
    eventType: "düğün" as string,
    guestCount: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, venueId, venueName }),
      });
      if (!res.ok) throw new Error("Rezervasyon oluşturulamadı");
      toast.success("Rezervasyon talebiniz alındı!");
      setForm({
        customerName: "",
        customerEmail: "",
        customerPhone: "",
        eventDate: "",
        eventType: "düğün",
        guestCount: "",
        notes: "",
      });
    } catch {
      toast.error("Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium mb-1">Ad Soyad</label>
          <input
            name="customerName"
            value={form.customerName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:ring-2 focus:ring-terracotta focus:border-transparent outline-none"
            placeholder="Adınız Soyadınız"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">E-posta</label>
          <input
            name="customerEmail"
            type="email"
            value={form.customerEmail}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:ring-2 focus:ring-terracotta focus:border-transparent outline-none"
            placeholder="ornek@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Telefon</label>
          <input
            name="customerPhone"
            type="tel"
            value={form.customerPhone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:ring-2 focus:ring-terracotta focus:border-transparent outline-none"
            placeholder="+90 5XX XXX XX XX"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Etkinlik Tarihi</label>
          <input
            name="eventDate"
            type="date"
            value={form.eventDate}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:ring-2 focus:ring-terracotta focus:border-transparent outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Etkinlik Türü</label>
          <select
            name="eventType"
            value={form.eventType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:ring-2 focus:ring-terracotta focus:border-transparent outline-none"
          >
            {EVENT_TYPES.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Misafir Sayısı</label>
          <input
            name="guestCount"
            type="number"
            min="1"
            value={form.guestCount}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:ring-2 focus:ring-terracotta focus:border-transparent outline-none"
            placeholder="Tahmini misafir sayısı"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Notlar (Opsiyonel)</label>
        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          rows={3}
          className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:ring-2 focus:ring-terracotta focus:border-transparent outline-none resize-none"
          placeholder="Özel istekleriniz varsa belirtiniz..."
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-terracotta hover:bg-terracotta-dark text-white py-3 rounded-md font-semibold transition disabled:opacity-50"
      >
        {loading ? "Gönderiliyor..." : "Rezervasyon Talebi Gönder"}
      </button>
    </form>
  );
}
