import HomeLayout from "@/components/layouts/homeLayout";

import HomeSlider from "@/components/frontend/homeSlider";


export default function Home() {
    return (
        <main className="w-screen">
            <HomeLayout>
                <div className='h-full w-full  md:w-screen'>
                    <HomeSlider />
                </div>
            </HomeLayout>
        </main>
    )
}