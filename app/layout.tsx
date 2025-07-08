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
        <nav className="fixed top-0 z-50 w-full bg-white border-b-3 border-gray-200">
          <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start rtl:justify-end">
                <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center mr-4 p-1 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                  <span className="sr-only">Open sidebar</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
                  </svg>
                </button>
                <span className="text-xl font-semibold sm:text-md whitespace-nowrap">บ้านฟาร์มขนม</span>
              </div>
            </div>
          </div>
        </nav>

        <Aside />
        <div className="p-4 mt-14 md:ml-64">
          {children}
        </div>
      </body>
    </html>
  );
}