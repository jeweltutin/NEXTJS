import GlobalApi from "@/actions/GlobalApi";
import CategorySection from "@/components/CategorySection";
import FirstSection from "@/components/home/FirstSection";
import PopularProductsSlider from "@/components/home/PopularProductsSlider";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default async function Home() {
  const sliderList = await GlobalApi.getSliders();
  const categoryList = await GlobalApi.getCategoryList();
  const productList = await GlobalApi.getAllProducts();

  return (
    <div className="p-10 px-5 md:px-16">
      <Slider sliderList={sliderList} />
      <FirstSection />
      <div className="container mx-auto ">
        <CategorySection categoryList={categoryList} />
        <div>
          <PopularProductsSlider productList={productList} />
        </div>
        <ProductList productList={productList} />
        <div>
          <Image src={"/images/x-watch.jpg"} width={1550} height={200} alt="banner" className="object-contain" />
        </div>
        <div>
          <Image src="/images/delivery-img.png" width={1000} height={300} alt="delivery-banner" className="w-full lg:h-[400px] object-contain" />
        </div>
      </div>
    </div>
  );
}
