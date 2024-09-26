import GlobalApi from "@/actions/GlobalApi";
import CategorySection from "@/components/CategorySection";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default async function Home() {
  const sliderList = await GlobalApi.getSliders();
  const categoryList = await GlobalApi.getCategoryList();
  const productList = await GlobalApi.getAllProducts();
  
  return (
    <div className="p-5 md:px-15 px-16">
      <Slider sliderList={sliderList} />
      <CategorySection categoryList={categoryList} />
      <ProductList productList={productList} />
    </div>
  );
}
