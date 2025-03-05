import React from 'react'

function FirstSection() {
    return (
        <section className="container mx-auto mt-5 mb-2 hidden px-2.5 lg:mb-10 lg:block lg:px-0 2xl:px-2">
            <div className="flex flex-wrap md:-mx-2 2xl:-mx-2.5">
                <div className="px-1 mb-2 lg:mb-0 md:px-2 2xl:px-2.5 w-[50%] lg:w-[25%]">
                    <div className="bg-white shadow-attrButton md: shadow-2xl rounded-[5px] flex items-center lg:items-center lg:justify-center p-2 md:p-3 h-full">
                        <img alt="60 mins delivery" loading="lazy" width="100" height="101" decoding="async" data-nimg="1" className="mr-2 w-7 md:w-10 2xl:w-[52px] 2xl:mr-3.5" src="https://d2t8nl1y0ie1km.cloudfront.net/images/thumbs/65efebe2733cb673c88abce1_Trust%201.png" />
                        <h2 className="font-medium text-[11px] md:text-sm 2xl:text-base capitalize md:max-w-[calc(100%-50px)] 2xl:max-w-[calc(100%-70px)]">60 mins delivery
                            <span className="hidden font-normal text-[13px] 2xl:text-sm normal-case md:line-clamp-2">Free shipping over 400Tk
                            </span>
                        </h2>
                    </div>
                </div>
                <div className="px-1 mb-2 lg:mb-0 md:px-2 2xl:px-2.5 w-[50%] lg:w-[25%]">
                    <div className="bg-white shadow-attrButton md:shadow-2xl rounded-[5px] flex items-center lg:items-center lg:justify-center p-2 md:p-3 h-full">
                        <img alt="Authorized Products" loading="lazy" width="100" height="101" decoding="async" data-nimg="1" className="mr-2 w-7 md:w-10 2xl:w-[52px] 2xl:mr-3.5" src="https://d2t8nl1y0ie1km.cloudfront.net/images/thumbs/65effead733cb673c88b318d_Trust%202.png" />
                        <h2 className="font-medium text-[11px] md:text-sm 2xl:text-base capitalize md:max-w-[calc(100%-50px)] 2xl:max-w-[calc(100%-70px)]">Authorized Products
                            <span className="hidden font-normal text-[13px] 2xl:text-sm normal-case md:line-clamp-2">within 30 days for an exchange</span></h2>
                    </div>
                </div>
                <div className="px-1 mb-2 lg:mb-0 md:px-2 2xl:px-2.5 w-[50%] lg:w-[25%]">
                    <div className="bg-white shadow-attrButton md:shadow-2xl rounded-[5px] flex items-center lg:items-center lg:justify-center p-2 md:p-3 h-full">
                        <img alt="Customer Service Support " loading="lazy" width="100" height="101" decoding="async" data-nimg="1" className="mr-2 w-7 md:w-10 2xl:w-[52px] 2xl:mr-3.5" src="https://d2t8nl1y0ie1km.cloudfront.net/images/thumbs/65effff052799b9600bdf486_Trust%203.png" />
                        <h2 className="font-medium text-[11px] md:text-sm 2xl:text-base capitalize md:max-w-[calc(100%-50px)] 2xl:max-w-[calc(100%-70px)]">Customer Service Support
                            <span className="hidden font-normal text-[13px] 2xl:text-sm normal-case md:line-clamp-2">9am to 9pm</span>
                        </h2>
                    </div>
                </div>
                <div className="px-1 mb-2 lg:mb-0 md:px-2 2xl:px-2.5 w-[50%] lg:w-[25%]">
                    <div className="bg-white shadow-attrButton md:shadow-2xl rounded-[5px] flex items-center lg:items-center lg:justify-center p-2 md:p-3 h-full">
                        <img alt="Flexible Payments" loading="lazy" width="100" height="101" decoding="async" data-nimg="1" className="mr-2 w-7 md:w-10 2xl:w-[52px] 2xl:mr-3.5" src="https://d2t8nl1y0ie1km.cloudfront.net/images/thumbs/65f0004052799b9600bdf48c_Trust%204.png" />
                        <h2 className="font-medium text-[11px] md:text-sm 2xl:text-base capitalize md:max-w-[calc(100%-50px)] 2xl:max-w-[calc(100%-70px)]">Flexible Payments
                            <span className="hidden font-normal text-[13px] 2xl:text-sm normal-case md:line-clamp-2">Pay with multiple credit cards</span>
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FirstSection
