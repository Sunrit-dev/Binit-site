import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: { default: "Binit — Spot It. Snap It. Solve It.", template: "%s · Binit" },
  description:
    "AI-powered civic waste intelligence for Kolkata Urban and Gram Panchayat zones. Report waste, classify severity, dispatch collection crews, and track resolution.",
  manifest: "/manifest.webmanifest",
  applicationName: "Binit",
  keywords: ["waste", "civic tech", "AI", "Kolkata", "recycling", "smart city"],
  icons: {
    icon: [{ url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" }],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  appleWebApp: {
    capable: true,
    title: "Binit",
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  themeColor: "#040d09",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}