import { translations } from "@/lib/translations";

export default function DashboardEN() {
  const t = translations.en;
  return (
    <div className="p-10 ltr">
      <h1 className="text-3xl font-bold mb-6">{t.dashboardTitle}</h1>
      <p>Here you can see user stats and projects.</p>
    </div>
  );
}
