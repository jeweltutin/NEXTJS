import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import BootstarpClient from '@/components/bootstarpClient';

import Footer from '@/components/footer';
import Header from '../components/header';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home',
  description: 'This is our home page',
}

export default function RootLayout({ children, }: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <BootstarpClient />
      </body>
    </html>
  )
}
