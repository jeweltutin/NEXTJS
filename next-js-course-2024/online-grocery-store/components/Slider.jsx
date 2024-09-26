import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";


function Slider({ sliderList }) {
    //console.log(sliderList);
    //const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:1337';
    return (
        <Carousel opts={{
            align: "start",
            loop: true,
        }}>
            <CarouselContent>
                {sliderList.map((slide, index) => {
                    return (
                        <CarouselItem>
                            {/* <Image src="/images/banner.png" width={1000} height={400} alt="slide" /> */}
                            <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + slide.image[0].url} width={1080} height={400} className="w-full h-[200px] md:h-[550px] object-cover rounded-2xl  " alt="slide" />
                            {/* {console.log(slide.image[0].url)} */}
                        </CarouselItem>
                    )
                })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>

    )
}

export default Slider
