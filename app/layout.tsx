import { inter } from '@/app/ui/fonts';
import '@/app/ui/global.css';
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
	  <SpeedInsights />
    </html>
  );
}
