import { LucideTrash2 } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";


function CartItemList({ cartItemList, onDeleteItem }) {
    //console.log("Cart Items:", cartItemList);

    return (
        <div>
            <div className="h-[700px] overflow-auto">
                {cartItemList.map((cart, index) => (
                    <div key={index} className="flex justify-between items-center p-2 mb-5">
                        <div className="flex gap-6 items-center">
                            <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + cart.image} width={90} height={90} alt={cart.name} className="border p-2 w-auto h-auto max-h-[90px] object-contain" />
                            <div>
                                <h2 className="font-bold">{cart.name}</h2>
                                {cart.color && <h3 className="text-sm"><small>Color: {cart.color}</small></h3> }
                                <h3 className="text-sm"><small>Quantity: {cart.quantity}</small></h3>
                                <h4 className="text-lg font-bold">Tk {cart.amount}</h4>
                            </div>                           
                        </div>
                        <LucideTrash2 onClick={() => onDeleteItem(cart.id)} className="cursor-pointer" />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default CartItemList
