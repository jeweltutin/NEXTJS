"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Card } from "@/components/ui/card";

import { faker } from "@faker-js/faker";

import Image from "next/image";

export default function galleryFaker() {
    const [data, setData] = useState([]);

    const generateFakeData = useCallback(() => {
        const newImage = faker.image.urlPicsumPhotos();
        return { image: newImage };
    }, [data]);

    const resetLocalStorage = () => {
        localStorage.removeItem("fakeUserData");
        setData([]); // Reset the data state in the component
    };

    useEffect(() => {
        // Check if data is already present in localStorage
        const storedData = localStorage.getItem("fakeUserData");

        if (storedData) {
            setData(JSON.parse(storedData));
        } else {
            // If data is not present, generate new data and store it in localStorage
            const newData = Array.from({ length: 50 }, generateFakeData);
            setData(newData);
            localStorage.setItem("fakeUserData", JSON.stringify(newData));
        }
    }, [generateFakeData]);


    return (
        <>
            {/* <button onClick={resetLocalStorage}>Reset Local Storage</button> */}
            <>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4  px-20 py-6">
                    {data.map((data, idx) => {
                        return (
                            <Card key={idx} className="">
                                <div className="group flex transform flex-col transition-all duration-200">
                                    <div className="overflow-hidden rounded-sm">
                                        <Image
                                            src={data.image}
                                            alt=""
                                            width={400}
                                            height={300}
                                            className="w-[400px] h-[300px] transform object-cover transition-all duration-200 group-hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </>
        </>
    );
}