"use client";

import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import toast from "react-hot-toast";

export default function IletisimPage() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      toast.success("Mesajınız gönderildi!");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 bg-cream min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-matte-black mb-3 text-center">
          İletişim
        </h1>
        <p className="text-gray-600 text-center mb-12">
          Sorularınız veya önerileriniz için bizimle iletişime geçin.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-xl font-bold mb-6">Bize Yazın</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                value={form.name}
                onChange={(e) =>
                  setForm((p) => ({ ...p, name: e.target.value }))
                }
                required
                placeholder="Adınız"
                className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:ring-2 focus:ring-terracotta focus:border-transparent outline-none"
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm((p) => ({ ...p, email: e.target.value }))
                }
                required
                placeholder="E-posta adresiniz"
                className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:ring-2 focus:ring-terracotta focus:border-transparent outline-none"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={(e) =>
                  setForm((p) => ({ ...p, message: e.target.value }))
                }
                required
                rows={5}
                placeholder="Mesajınız..."
                className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:ring-2 focus:ring-terracotta focus:border-transparent outline-none resize-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-terracotta hover:bg-terracotta-dark text-white py-3 rounded-md font-semibold transition disabled:opacity-50"
              >
                {loading ? "Gönderiliyor..." : "Gönder"}
              </button>
            </form>
          </div>

          <div className="bg-matte-black text-white rounded-xl shadow-md p-8 flex flex-col justify-center space-y-6">
            <h2 className="text-xl font-bold text-gold">İletişim Bilgileri</h2>
            <div className="flex items-center gap-3">
              <Phone size={20} className="text-terracotta" />
              <span>+90 (212) 555 00 00</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={20} className="text-terracotta" />
              <span>info@goldvenue.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={20} className="text-terracotta" />
              <span>Levent, Beşiktaş / İstanbul</span>
            </div>
            <div className="pt-4 border-t border-gray-700">
              <p className="text-sm text-gray-400">
                Pazartesi - Cumartesi: 09:00 - 19:00
                <br />
                Pazar: 10:00 - 17:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
