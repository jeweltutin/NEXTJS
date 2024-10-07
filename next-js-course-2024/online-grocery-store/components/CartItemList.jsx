import { LucideTrash2 } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"
import { useEffect, useState } from "react"


function CartItemList({ cartItemList, onDeleteItem }) {
    const [subTotal, setSubTotal] =  useState(0);

    useEffect(() => {
        let total = 0;
        cartItemList.forEach(element => {
            total=total+element.amount
        });
        setSubTotal(total.toFixed(2));
    },[cartItemList]);

    return (
        <div>
            <div className="h-[700px] overflow-auto">
                {cartItemList.map((cart, index) => (
                    <div className="flex justify-between items-center p-2 mb-5">
                        <div className="flex gap-6 items-center">
                            <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + cart.image} width={90} height={90} alt={cart.name} className="border p-2 max-h-[90px] object-contain" />
                            <div>
                                <h2 className="font-bold">{cart.name}</h2>
                                <h3>Quantity {cart.quantity}</h3>
                                <h4 className="text-lg font-bold">Tk {cart.amount}</h4>
                            </div>                           
                        </div>
                        <LucideTrash2 onClick={() => onDeleteItem(cart.id)} className="cu rsor-pointer" />
                    </div>
                ))}
            </div>
            <div className="absolute w-[90%] bottom-6 flex flex-col">
                <h2 className="text-lg font-bold flex justify-between">Subtotal <span>Tk {subTotal}</span></h2>
                <Button>View Cart</Button>
            </div>
        </div>
    )
}

export default CartItemList
