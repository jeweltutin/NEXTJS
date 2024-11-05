import GlobalApi from '@/actions/GlobalApi';
import ProductCategoryClient from '@/components/ProductCategoryClient';


async function ProductCategoryPage({ params }) {
    const initialProductList = await GlobalApi.getProductsByCategory(params.categoryName);
    const categoryList = await GlobalApi.getCategoryList();
    const theCategory = await GlobalApi.singleCategory(params.categoryName);

    return (
        <ProductCategoryClient
            initialProductList={initialProductList}
            categoryList={categoryList}
            theCategory={theCategory}
            categoryName={params.categoryName}
        />
    );
}

export default ProductCategoryPage;
