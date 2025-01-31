import type { Metadata } from "next";
import { Great_Vibes } from "@next/font/google";
import Providers from "./providers";

import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";

// const inter = Inter({ subsets: ["latin"] });

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});

export const metadata: Metadata = {
  title: "FoodTuck - Savor the Speed, Relish the Quality",
  description: "A Culinary Creation by Wajahat Ali",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={greatVibes.variable}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          <Header />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
