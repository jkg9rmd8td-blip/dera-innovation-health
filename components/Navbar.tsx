"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const lang = pathname.startsWith("/en") ? "en" : "ar";

  const toggleLang = () => {
    if (lang === "ar") router.push(pathname.replace("/ar", "/en"));
    else router.push(pathname.replace("/en", "/ar"));
  };

  return (
    <nav className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-800">درع الابتكار الصحي</h1>
      <div className="flex gap-6">
        <Link href={`/${lang}`}>{lang === "ar" ? "الرئيسية" : "Home"}</Link>
        <Link href={`/${lang}/dashboard`}>{lang === "ar" ? "لوحة التحكم" : "Dashboard"}</Link>
        <Link href={`/${lang}/teams`}>{lang === "ar" ? "الفرق" : "Teams"}</Link>
        <Link href={`/${lang}/challenges`}>{lang === "ar" ? "التحديات" : "Challenges"}</Link>
        <Link href={`/${lang}/ai`}>{lang === "ar" ? "مساعد الابتكار" : "AI Assistant"}</Link>
        <button onClick={toggleLang} className="border px-2 rounded">
          {lang === "ar" ? "English" : "عربي"}
        </button>
      </div>
    </nav>
  );
}
