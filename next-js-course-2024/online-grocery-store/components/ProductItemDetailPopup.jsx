import Image from 'next/image';
import { Button } from './ui/button';
import { ShoppingBasket } from 'lucide-react';
import { useState } from 'react';

function ProductItemDetailPopup({ product }) {
    const [productTotalPrice, setProductTotalPrice] = useState(
        product.sellingPrice ? product.sellingPrice : product.mrp
    )
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 p-7 bg-white text-black">
            <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + product?.images[0]?.url} width={500} height={200} alt={product.name} className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg" />
            <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-bold">{product.name}</h2>
                <p className="text-sm text-gray-500">{product.description}</p>
                <div className="flex gap-3">
                    {product.sellingPrice &&
                        <h3 className="font-bold text-3xl">{product.sellingPrice} Tk</h3>}
                    <h3 className={`font-bold text-3xl ${product.sellingPrice && 'line-through text-gray-500'}`}>{product.mrp} Tk</h3>
                </div>
                <h3 className="font-medium text-lg">Quantity ({product.itemQuantityType})</h3>
                <div className="flex flex-col items-baseline gap-3">
                    <div className="flex gap-3 items-center">
                        <div className="flex gap-10 items-center border px-5 text-lg">
                            <button disabled={quantity == 1} onClick={() => setQuantity(quantity-1)} className="p-2">-</button>
                            <h4>{quantity}</h4>
                            <button onClick={() => setQuantity(quantity+1)} className="p-2">+</button>
                        </div>
                        <h4 className="text-2xl font-bold"> = {(quantity * productTotalPrice).toFixed(2)} Tk</h4>
                    </div>
                    <Button className="flex gap-3">
                        <ShoppingBasket />
                        Add To Cart
                    </Button>
                </div>
                <h3><span className="font-bold">Category: </span>{product.categories[0].name}</h3>
            </div>
        </div>
    )
}

export default ProductItemDetailPopup;
