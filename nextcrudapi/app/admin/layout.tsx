"use client"
import { Inter } from 'next/font/google';

import Header from "@/app/components/admin/Header";
import Sidebar from "@/app/components/admin/Sidebar";
import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import { useRouter } from 'next/navigation';
import { UserContext } from "@/app/layout";

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
    
    //const [authData, setAuthData] = useState("");

    //const authData = JSON.parse(localStorage.getItem("userInfo") as string); //error ReferenceError: localStorage is not defined
  /*   useEffect(() => {
        let authData;
        authData= JSON.parse(localStorage.getItem("userInfo") as string) || "";
        setAuthData(authData);
        if (authData?.role !== 'admin' && !authData) {
            router.push('/login/v1')
        }
        }, []); */

    const authData = useContext(UserContext);
    
  

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
            </div> : <strong>Authentication failed!</strong>}
        </div>
    )
}
