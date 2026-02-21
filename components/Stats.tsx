"use client";
import { translations } from "@/lib/translations";

interface StatsProps {
  lang: "ar" | "en";
}

export default function Stats({ lang }: StatsProps) {
  const t = translations[lang];
  return (
    <section className="py-16 px-6 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <h2 className="text-4xl font-bold text-blue-800">12</h2>
          <p>{t.statsHospitals}</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-blue-800">48</h2>
          <p>{t.statsTeams}</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-blue-800">27</h2>
          <p>{t.statsProjects}</p>
        </div>
      </div>
    </section>
  );
}
