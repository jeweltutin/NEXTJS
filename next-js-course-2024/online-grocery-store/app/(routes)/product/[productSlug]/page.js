import GlobalApi from "@/actions/GlobalApi";
import ProductDetails from "@/components/ProductDetails";


async function Product({ params }) {
    const productSlug = params.productSlug;
    const theProduct = await GlobalApi.getSingleProduct(productSlug);
    //console.log(theProduct);
    return (
        <div className="bg-gray-100">
            <ProductDetails theProduct={theProduct}/>
        </div>
    )
}

export default Product
