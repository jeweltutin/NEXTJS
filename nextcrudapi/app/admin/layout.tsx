"use client"
import { Inter } from 'next/font/google';

import Header from "@/app/components/admin/Header";
import Sidebar from "@/app/components/admin/Sidebar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })


export default function DashboardLayout({ children, }: { children: React.ReactNode }) {

    /*useEffect(() => {
        const authData = JSON.parse(localStorage.getItem("userInfo") as string);
        if (authData) {
            console.log(authData.role);
        } else {
            console.log('Unauthorized - User Info not found');
        }
    },
        //setUserName(authData.userName);
        []);*/

    const router = useRouter();
    const authData = JSON.parse(localStorage.getItem("userInfo") as string);
    useEffect(() => {

        if (authData?.role !== 'admin' && !authData) {
            router.push('/login/v1')
        }
    },
        []);

    return (
        // <html lang="en" className="dark">
        <div>
            {authData ? <div className="flex">
                <div className="basis-[12%] h-[100vh] border">
                    <Sidebar />
                    {/* {authData.userName} */}
                </div>
                <div className="basis-[88%] border">
                    <Header authData={authData} />
                    <div className="max-w-full mx-auto mt-4">
                        {children}
                    </div>
                </div>
            </div> : null}
        </div>
    )
}
