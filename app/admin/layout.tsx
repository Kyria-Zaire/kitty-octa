import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard | Kitty-Octa",
  description: "Dashboard d'administration pour surveiller le trafic et les statistiques du site.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-layout">
      {children}
    </div>
  );
}
