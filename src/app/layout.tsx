export const metadata = {
  title: "Dobby",
  description: "Dobby AI",
};

import "../global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="custom-scrollbar">{children}</body>
    </html>
  );
}
