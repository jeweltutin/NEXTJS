import GlobalApi from '@/actions/GlobalApi';
import ProductCategoryClient from '@/components/ProductCategoryClient';


async function ProductCategoryPage({ params }) {
    const initialProductList = await GlobalApi.getProductsByCategory(params.categoryName);
    const categoryList = await GlobalApi.getCategoryList();
    const theCategory = await GlobalApi.singleCategory(params.categoryName);

    // Pass the category ID to get the filtered brands
    const brandsForFilter = await GlobalApi.getBrandsForFilter(theCategory[0].slug);
    //console.log("brandsForFilter: ", theCategory[0].id);
    
    return (
        <ProductCategoryClient
            initialProductList={initialProductList}
            categoryList={categoryList}
            theCategory={theCategory}
            categoryName={params.categoryName}
            brands={brandsForFilter}
        />
    );
}

export default ProductCategoryPage;
