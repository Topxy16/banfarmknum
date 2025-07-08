"use client"
import Link from 'next/link'
import Aside from '../app/components/aside'
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["500"],
  display: "swap",
  variable: "--font-kanit",
});

export default function RootLayout({

  children,
}: Readonly<{

  children: React.ReactNode;

}>) {
  return (
    <html lang="th">
      <body className={`${kanit.className} font-sans antialiased`}>
        
        <Aside />
        <div className="p-4 mt-14 md:ml-64">
          {children}
        </div>
      </body>
    </html>
  );
}