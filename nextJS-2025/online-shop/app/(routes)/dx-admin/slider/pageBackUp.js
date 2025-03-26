"use client";
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import SliderTable from '@/components/backend/sections/SliderTable';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';


function Slider() {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [slides, setSlides] = useState([]); // State to store slides
    const [loading, setLoading] = useState(true); // State to manage loading state
    const [error, setError] = useState(null); // State to manage error

    // Check for token and user in sessionStorage
    useEffect(() => {
        const jwt = sessionStorage.getItem("jwt");
        const userData = JSON.parse(sessionStorage.getItem("user"));
        if (jwt) {
            setToken(jwt);
            setUser(userData);
        } else {
            router.push("/sign-in");
        }
    }, [router]);

    // Fetch slides when user and token are available
    useEffect(() => {
        if (user && token) {
            getAllSlides();
        }
    }, [user, token]);

    // Fetch slides function
    async function getAllSlides() {
        try {
            setLoading(true); // Start loading
            const response = await axios.get("http://localhost:5000/api/slide", {
                headers: {
                    Authorization: `Bearer ${token}`, // Use the token from state
                },
            });
            setSlides(response.data); // Update slides state
        } catch (err) {
            setError("Failed to fetch slides"); // Handle error
            console.error(err);
        } finally {
            setLoading(false); // Stop loading
        }
    }

    if (loading) return <p>Loading slides...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                <div className="flex items-center gap-2 px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem className="hidden md:block">
                                <BreadcrumbLink href="#">
                                    Building Your Application
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="hidden md:block" />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </header>
            <main className="p-6 space-y-6">
                <SliderTable sliderData={slides} />
            </main>
        </div>
    );
}

export default Slider;
