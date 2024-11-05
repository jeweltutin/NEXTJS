import GlobalApi from '@/actions/GlobalApi';
import PriceSlider from '@/components/PriceSlider';
import ProductList from '@/components/ProductList';
import TopCategoryList from '@/components/TopCategoryList';
import Image from 'next/image';

async function ProductCategory({ params }) {
    const productList = await GlobalApi.getProductsByCategory(params.categoryName);
    //console.log("Products:", productList);
    const categoryList = await GlobalApi.getCategoryList();
    const theCategory = await GlobalApi.singleCategory(params.categoryName);
    //console.log("The Category:", theCategory[0].banner.url);

    return (
        <div className="container mx-auto">
            <div className="relative">

                <div className="mb-7 border rounded-md">
                    <Image src={theCategory[0]?.banner?.url ? process.env.NEXT_PUBLIC_BACKEND_BASE_URL + theCategory[0]?.banner?.url : '/images/default-cat-banner.jpg'} width={600} height={200} alt="" className="w-full max-h-[270px] object-cover" />
                </div>
                <h2 className="absolute right-0 top-0 p-2 mb-6 bg-primary bg-opacity-75 rounded-2xl text-white text-2xl text-center capitalize">
                    {/* {params.categoryName} */}
                    {(params.categoryName).split('-').join(' ')}
                </h2>
            </div>

            <TopCategoryList categoryList={categoryList} selectedCategory={params.categoryName} />
            
            <div className="md:flex md:flex-row gap-4 py-5 md:py-10">
                <div className="basis-1/4">
                    <PriceSlider />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia cum autem odio error qui nobis officiis, hic, explicabo omnis nisi earum ipsam. Animi doloremque consequatur adipisci nam! Cum, nemo assumenda?
                </div>
                <div>
                    <ProductList productList={productList} />
                </div>
            </div>
        </div>
    )
}

export default ProductCategory;
