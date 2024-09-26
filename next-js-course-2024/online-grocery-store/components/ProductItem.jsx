import Image from 'next/image';
import { Button } from './ui/button';

function ProductItem({ product }) {

    return (
        <div className="p-2 md:p-6 flex flex-col items-center justify-center gap-3 border rounded-lg">
            <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + product?.images[0]?.url} width={500} height={200} alt={product.name} className="group-hover:scale-125 transition-all ease-in-out h-[200px] w-[200px] object-contain" />
            <h2 className="text-green-800">
                {product.name}
            </h2>
            <h3>{product.mrp} Tk</h3>
            <Button variant="outline">Add to cart</Button>
        </div>
    )
}

export default ProductItem;
