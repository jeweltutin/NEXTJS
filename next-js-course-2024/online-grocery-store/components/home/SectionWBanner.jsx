import Link from 'next/link';

function SectionWBanner() {
    return (
        <div className="container mx-auto lg:px-0 2xl:px-2 mb-5 md:mb-10">
            <div className="grid grid-cols-2 md:grid-cols-11 gap-2.5 md:gap-3.5 px-2 md:-mx-2">
                <Link className="order-1 md:order-2 md:row-span-2 col-span-2 md:col-span-7 relative before:block before:pt-[43%] md:before:pt-[41.5%] rounded-[10px] overflow-hidden" aria-label="Shwapno Banner" href="/Gadget">
                    <img alt="Gadget" title="Gadget" loading="lazy" decoding="async" className="w-full h-full object-cover absolute inset-0" src={"/images/Proton%20Mobile_1552.jpeg"} />
                </Link>
                <Link className="order-2 md:order-1 md:col-span-4 relative before:block before:pt-[75%] md:before:pt-[35.5%] rounded-[10px] overflow-hidden" aria-label="Home Cleaning" href="/home-cleaning">
                    <img alt="Home Cleaning" title="Home Cleaning" loading="lazy" decoding="async" className="w-full h-full object-cover absolute inset-0" src={"/images/Home care banner_1552.png"} />
                </Link>
                <Link className="order-3 md:col-span-4 relative before:block before:pt-[75%] md:before:pt-[35.5%] rounded-[10px] overflow-hidden" aria-label="Fish & Meat" href="/meat-and-fish">
                    <img alt="Fish & Meat" title="Fish & Meat" loading="lazy" decoding="async" className="w-full h-full object-cover absolute inset-0" src={"/images/Fresh fish & meat banner_1552.png"} />
                </Link>
            </div>
        </div>
    )
}

export default SectionWBanner;
