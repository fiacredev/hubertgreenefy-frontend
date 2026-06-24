export const metadata = {
  title: "Admin Dashboard",
  description: "Admin area",
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
  return <>{children}</>;
}