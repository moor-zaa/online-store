import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components/layout";

export const metadata: Metadata = {
  title: {
    template: "%s - Online Shop",
    default: "online store",
  },
  description: "ONline Shop store, Your one stop shop for all your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins antialiased bg-shop-light-pink">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
