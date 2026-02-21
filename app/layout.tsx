import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "درع الابتكار الصحي",
  description: "منصة تمكين الابتكار في القطاع الصحي بالطائف",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
