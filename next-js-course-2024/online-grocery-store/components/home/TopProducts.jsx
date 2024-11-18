import Image from 'next/image';
import Link from 'next/link';


function TopProducts({ productList }) {
    if (!productList || productList.length === 0) {
        return (
            <div className="text-center mt-10">
                {/* <p>No products found based on your filters.</p> */}
                <Loading />
            </div>
        );
    }

    return (
        <div className="mt-1 px-5 xl:px-1 ">
            <div className="pb-5 w-full">
                <Image src={"/images/offer.png"} width={1400} height={200} alt="banner" className="object-contain w-full max-h-[300px]" />
            </div>
            <h2 className="text-green-600 font-bold text-2xl py-4">
                Recommended for you
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 mt-6">
                {productList.map((product, index) => {
                    // Calculate regularPrice, sellingPrice, and percentage here
                    const regularPrice = product.mrp;
                    const sellingPrice = product.sellingPrice;
                    let percentage;

                    if (sellingPrice && regularPrice) {
                        percentage = ((regularPrice - sellingPrice) / regularPrice * 100).toFixed(2);
                    }

                    return (
                        <div className="relative p-2 md:p-6 flex flex-col items-center justify-center gap-3 border rounded-lg hover:scale-105 hover:shadow-lg transition-all ease-in-out cursor-pointer" key={product.slug}>
                            <Link href={"/product/" + product.slug}>
                                <div className="">
                                    {product?.images?.length > 0 && (
                                        <Image
                                            src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + product.images[0]?.url}
                                            width={500}
                                            height={200}
                                            alt={product.name}
                                            className="group-hover:scale-125 transition-all ease-in-out h-[200px] w-[200px] object-contain"
                                        />
                                    )}
                                    <h2 className="text-green-800 text-lg text-center">
                                        {product.name}
                                    </h2>
                                    <div className="flex gap-3 items-center justify-center py-3">
                                        {sellingPrice &&
                                            <h3 className="font-bold text-lg text-center">{sellingPrice} Tk</h3>}
                                        {regularPrice && (
                                            <h3 className={`font-bold text-lg ${sellingPrice && 'line-through text-gray-500'}`}>{regularPrice} Tk</h3>
                                        )}
                                    </div>
                                </div>
                            </Link>
                            <div className="absolute text-sm right-0 top-2 text-white bg-primary px-[3px]">
                                {percentage && <span>Save {percentage}%</span>}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default TopProducts;
