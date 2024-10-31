"use client";
import Image from 'next/image';
import { Button } from './ui/button';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import ProductItemDetailPopup from './ProductItemDetailPopup';
import { useState } from 'react';
import Link from 'next/link';

function ProductItem({ product }) {
    const [openDialog, setOPenDialog] = useState(false);

    let regularPrice = product.mrp;
    let sellingPrice = product.sellingPrice;
    let percentage;
    if (sellingPrice) {
        percentage = ((regularPrice - sellingPrice) / (regularPrice) * 100).toFixed(2); 
    }
    
    return (
        <div className="relative p-2 md:p-6 flex flex-col items-center justify-center gap-3 border rounded-lg hover:scale-105 hover:shadow-lg transition-all ease-in-out cursor-pointer">
            <Link href={"/product/" + product.slug}>
                <div className="">
                    <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + product?.images[0]?.url} width={500} height={200} alt={product.name} className="group-hover:scale-125 transition-all ease-in-out h-[200px] w-[200px] object-contain" />
                    <h2 className="text-green-800 text-lg text-center">
                        {product.name}
                    </h2>
                    <div className="flex gap-3 items-center justify-center py-3">
                        {product.sellingPrice &&
                            <h3 className="font-bold text-lg text-center">{product.sellingPrice} Tk</h3>}
                        <h3 className={`font-bold text-lg ${sellingPrice && 'line-through text-gray-500'}`}>{regularPrice} Tk</h3>
                    </div>
                </div>
            </Link>
            <div className="absolute text-sm right-0 top-2 text-white bg-primary px-[3px]">
                {percentage && <span>Save {percentage}%</span>}
            </div>
            <Button onClick={() => setOPenDialog(true)} variant="outline" className="text-primary hover:text-white hover:bg-primary">View</  Button>
            <Dialog open={openDialog} onOpenChange={() => {
                setOPenDialog(false)
            }}>
                {/* <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline" className="text-primary hover:text-white hover:bg-primary">Add to cart</  Button>
                    </DialogTrigger> */}
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="hidden">Are you absolutely sure?</DialogTitle>
                        <DialogDescription asChild>
                            <ProductItemDetailPopup product={product} setOPenDialog={setOPenDialog} />
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default ProductItem;
