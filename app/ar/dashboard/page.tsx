import { translations } from "@/lib/translations";

export default function DashboardAR() {
  const t = translations.ar;
  return (
    <div className="p-10 rtl">
      <h1 className="text-3xl font-bold mb-6">{t.dashboardTitle}</h1>
      <p>هنا تظهر إحصائيات المستخدم ومشاريعه.</p>
    </div>
  );
}
