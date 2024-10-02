import GlobalApi from '@/actions/GlobalApi';
import ProductList from '@/components/ProductList';
import TopCategoryList from '@/components/TopCategoryList';

async function ProductCategory({ params }) {
    const productList = await GlobalApi.getProductsByCategory(params.categoryName);
    //console.log("Products:", productList);
    const categoryList = await GlobalApi.getCategoryList();
    return (
        <div>
            <h2 className="p-4 mb-6  bg-primary text-white font-bold text-3xl text-center capitalize">
                {/* {params.categoryName} */}
                {(params.categoryName).split('-').join(' ')}
            </h2>
            <TopCategoryList categoryList={categoryList} selectedCategory={params.categoryName} />
            <div className="p-5 md:p-10">
                <ProductList productList={productList} />
            </div>
        </div>
    )
}

export default ProductCategory;
