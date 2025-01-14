"use client";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Mylayout({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    console.log(isDarkMode);
    return (
        <div className={`min-h-screen transition-all duration-500 ease-in-out ${isDarkMode ? "bg-dark-image text-white" : "bg-light-image text-black"}`}>
            <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <main className={`container mx-auto rounded-2xl py-12 ${isDarkMode ? "bg-black test-white" : "bg-white text-black"}`}>
                {children}
            </main>
            <Footer />
        </div>
    )
}