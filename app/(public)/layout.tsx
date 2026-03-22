import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LenisProvider } from "@/components/layout/LenisProvider";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LenisProvider>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </LenisProvider>
  );
}
