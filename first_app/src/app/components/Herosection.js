import heroStyles from "@/app/styles/herosection.module.css"
import commonStyles from "@/app/styles/common.module.css"

import Link from "next/link"
import Image from "next/image";

// Google font use https://nextjs.org/docs/pages/building-your-application/optimizing/fonts

import { Mulish } from 'next/font/google';

const mulish = Mulish({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap'
})

const Herosection = ({ title, imageUrl }) => {
    return (
        <main className={heroStyles.main_section}>
            <div className={commonStyles.container}>
                <div className={commonStyles.grid_two_section}>
                    <div className={heroStyles.hero_content}>
                        <h2 style={{ fontSize: 45 + 'px', fontWeight: "bold", }} className={mulish.className}>{title}</h2>
                        <p className={mulish.className}> From award-winning dramas to blockbuster action movies, we&apos;ve got you covered. Browse
                            our
                            selection of the latest and greatest movies, and find your new favorite today.
                        </p>
                        <Link href="/movie">
                            <button className={mulish.className}>
                                Explore Movies
                            </button>
                        </Link>
                    </div>
                    <div className={heroStyles.hero_image}>
                        <Image src={imageUrl} alt="watching netflix" width={500} height={500} />
                    </div>
                </div>
            </div>
            {/* // Divider code used from https://www.shapedivider.app/ */}
            <div className={heroStyles["custom-shape-divider-bottom-1688888871"]}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={heroStyles["commshape-fill"]}></path>
                </svg>
            </div>
        </main>
    )
}

export default Herosection
