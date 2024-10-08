"use client";
import localFont from "next/font/local";
import { Outfit } from 'next/font/google';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { usePathname } from "next/navigation";
import { UpdateCartContext } from "./context/UpdateCartContext";
import { useState } from "react";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const outfit = Outfit({
  subsets: ['latin']
})

/* export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}; */

export default function RootLayout({ children }) {
  const urlcheck = usePathname();
  const showHeader = urlcheck == "/sign-in" || urlcheck == "/create-account" ? false : true;

  const [updateCart, setUpdateCart] = useState(false);
  return (
    <html lang="en">
      {/* <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}> */}
      <body className={outfit.className}>
        <UpdateCartContext.Provider value={{updateCart, setUpdateCart}}>
          {showHeader && <Header />}
          {children}
          {showHeader && <Footer />}
          <Toaster />
        </UpdateCartContext.Provider>
      </body>
    </html>
  );
}
