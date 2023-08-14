import { Inter } from 'next/font/google';

import Header from "@/app/components/admin/Header";
import Sidebar from "@/app/components/admin/Sidebar";
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })


export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        // <html lang="en" className="dark">
        <html lang="en" className="scroll-smooth">
            <body className={inter.className}>
                <div className="flex">
                    <div className="basis-[12%] h-[100vh] border">
                        <Sidebar />
                    </div>
                    <div className="basis-[88%] border">
                        <Header />
                        <div className="max-w-full mx-auto mt-4">
                            {children}
                        </div>
                    </div>
                </div>
            </body>
        </html>
    )
}
