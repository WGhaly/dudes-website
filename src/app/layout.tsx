import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DUDES Advertising - Whatever It Is, We Do It",
  description: "With more than 15 years of experience in Marketing, Advertising and customer experience, we are eager to re-write your brand story and achieve tangible results together.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
