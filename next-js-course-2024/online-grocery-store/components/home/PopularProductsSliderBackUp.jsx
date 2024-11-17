"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import ProductItemDetailPopup from "../ProductItemDetailPopup";
import Image from "next/image";
import Link from "next/link";

function PopularProductsSlider({ productList }) {
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null); // Store the selected product

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 768, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <div>
            <Carousel responsive={responsive}>
                {productList.map((product, index) => {
                    let regularPrice = product.mrp;
                    let sellingPrice = product.sellingPrice;
                    let percentage;

                    if (sellingPrice) {
                        percentage = ((regularPrice - sellingPrice) / regularPrice * 100).toFixed(2);
                    } else {
                        percentage = null;
                    }

                    return (
                        <div
                            key={index}
                            className="relative p-2 md:p-6 flex flex-col items-center justify-center gap-3 border rounded-lg hover:scale-105 hover:shadow-lg transition-all ease-in-out cursor-pointer"
                            style={{ marginRight: '15px', marginBottom: '15px' }} // Add gap between items here
                        >
                            {/* Product Image */}
                            <Link href={"/product/" + product.slug} passHref>
                                <div className="group">
                                    {product?.images?.length > 0 && (
                                        <Image
                                            src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + product.images[0]?.url}
                                            width={500}
                                            height={200}
                                            alt={product.name}
                                            className="group-hover:scale-125 transition-all ease-in-out h-[200px] w-[200px] object-contain"
                                        />
                                    )}
                                    <h2 className="text-green-800 text-lg text-center">{product.name}</h2>
                                    <div className="flex gap-3 items-center justify-center py-3">
                                        {product.sellingPrice && (
                                            <h3 className="font-bold text-lg text-center">{product.sellingPrice} Tk</h3>
                                        )}
                                        <h3 className={`font-bold text-lg ${sellingPrice && 'line-through text-gray-500'}`} >
                                            {regularPrice} Tk
                                        </h3>
                                    </div>

                                    {/* Discount Information */}
                                    {percentage && (
                                        <div className="absolute text-sm right-0 top-2 text-white bg-primary px-[3px]">
                                            Save {percentage}%
                                        </div>
                                    )}
                                </div>
                            </Link>

                            {/* View Button */}
                            <Button
                                onClick={() => {
                                    setSelectedProduct(product); // Set the selected product
                                    setOpenDialog(true); // Open the dialog
                                }}
                                variant="outline"
                                className="text-primary hover:text-white hover:bg-primary"
                            >
                                View
                            </Button>

                            {/* Dialog for Product Details */}
                            <Dialog open={openDialog} onOpenChange={() => setOpenDialog(false)} className="dialog-overlay">
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle className="hidden">Are you absolutely sure?</DialogTitle>
                                        <DialogDescription asChild>
                                            {selectedProduct && (
                                                <ProductItemDetailPopup
                                                    product={selectedProduct}
                                                    setOpenDialog={setOpenDialog}
                                                />
                                            )}
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
}

export default PopularProductsSlider;
