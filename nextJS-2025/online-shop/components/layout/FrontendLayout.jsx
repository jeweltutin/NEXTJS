"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { usePathname } from "next/navigation";
import { UpdateCartContext } from "@/app/context/UpdateCartContext";
import React, { useState } from "react";
import NextBreadcrumb from "@/components/NextBreadcrumb";
import BackendLayout from "./BackendLayout";


export default function FrontendLayout({ children }) {
    const urlcheck = usePathname();
    const isAdminPage = urlcheck.startsWith("/dx-admin"); // Check if it's an admin page
    const showHeader = !["/sign-in", "/create-account"].includes(urlcheck);

    const [updateCart, setUpdateCart] = useState(false);

    if (isAdminPage) {
        // Render Admin Layout if it's an admin page
        return <BackendLayout>{children}</BackendLayout>;
    }

    return (
        <React.Fragment>
            <UpdateCartContext.Provider value={{ updateCart, setUpdateCart }}>
                {showHeader && <Header />}
                <div className="mt-24">
                    <NextBreadcrumb
                        homeElement={"Home"}
                        separator={<span> / </span>}
                        activeClasses="text-amber-500"
                        containerClasses="flex p-2 bg-white"
                        listClasses="hover:underline mx-2"
                        capitalizeLinks
                    />
                    {children}
                    {showHeader && <Footer />}
                </div>
                <Toaster />
            </UpdateCartContext.Provider>
        </React.Fragment>
    );
}
