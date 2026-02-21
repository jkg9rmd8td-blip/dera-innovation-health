"use client";
import { translations } from "@/lib/translations";

interface HeroProps {
  lang: "ar" | "en";
}

export default function Hero({ lang }: HeroProps) {
  const t = translations[lang];
  return (
    <section
      className={`text-center py-24 px-6 ${
        lang === "ar" ? "rtl" : "ltr"
      } bg-gradient-to-l from-blue-100 to-white`}
    >
      <h1 className="text-5xl font-bold text-blue-900 mb-6">{t.heroTitle}</h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">{t.heroDesc}</p>
      <div className="flex justify-center gap-4">
        <button className="bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800">
          {t.joinButton}
        </button>
        <button className="border border-blue-700 text-blue-700 px-6 py-3 rounded-xl hover:bg-blue-50">
          {t.challengeButton}
        </button>
      </div>
    </section>
  );
}
