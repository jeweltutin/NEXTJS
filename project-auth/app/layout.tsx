'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Redux Project',
  description: 'Practice website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className='font-garet' suppressHydrationWarning={true}>
        <Provider store={store}>
          {children}
        </Provider>  
      </body>
    </html>
  )
}
