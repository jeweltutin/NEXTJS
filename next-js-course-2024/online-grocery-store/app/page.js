import GlobalApi from "@/actions/GlobalApi";
import CategorySection from "@/components/CategorySection";
import FirstSection from "@/components/home/FirstSection";
import PopularProductsSlider from "@/components/home/PopularProductsSlider";
import SectionWBanner from "@/components/home/SectionWBanner";
import SmartWatchProductsSlider from "@/components/home/SmartWatchProductsSlider";
import TopProducts from "@/components/home/TopProducts";
//import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default async function Home() {
  const sliderList = await GlobalApi.getSliders();
  const categoryList = await GlobalApi.getCategoryList();
  //const productList = await GlobalApi.getAllProducts();
  const dec12Products = await GlobalApi.fetchTop12Products();
  const randomProducts = await GlobalApi.fetchRandom12Products();
  const watchCat12ProDec = await GlobalApi.fetch12ProductsInACategory();

  return (
    <div className="p-10 px-5 md:px-16">
      <Slider sliderList={sliderList} />
      <FirstSection />
      <div className="container mx-auto ">
        <CategorySection categoryList={categoryList} />
        <div>
          <PopularProductsSlider productList={randomProducts} />
        </div>
        <div>
          <SmartWatchProductsSlider productList={ watchCat12ProDec }/>
        </div>
        <div>
          <SectionWBanner />
        </div>
        <TopProducts productList={dec12Products} />
        <div>
          <Image src="/images/delivery-img.png" width={1000} height={300} alt="delivery-banner" className="w-full lg:h-[400px] object-contain" />
        </div>
      </div>
    </div>
  );
}
