import HomeLayout from "@/components/layouts/homeLayout";

import HomeSlider from "@/components/frontend/homeSlider";
import OurStory from "@/components/frontend/home/ourStory";
import Service from "@/components/frontend/home/service";
import { Metadata } from "next";

// import HomeSliderStatic from "@/components/frontend/homeSliderStatic";

export const metadata: Metadata = {
    title: 'Web Info',
    description: 'This is a business website'
}


async function getSliderData() {
    //const res = await fetch('http://localhost:5000/api/slide/all');
    //const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}/api/slide/all`);
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}/api/slide/all`, { next: { revalidate:10 } });

    return res.json();
}


export default async function Home() {
    const all_slides = await getSliderData();
    //console.log(`${process.env.NEXT_PUBLIC_SERVER_HOST}/api/slider/all`);
    return (
        <main className="w-screen">
            <HomeLayout>
                <div className='h-full w-full  md:w-screen'>
                    <HomeSlider slides={all_slides} />
                    {/* <HomeSliderStatic /> */}
                    <OurStory />
                    <Service />
                </div>
            </HomeLayout>
        </main>
    )
}