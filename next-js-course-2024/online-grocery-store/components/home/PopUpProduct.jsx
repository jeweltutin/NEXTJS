import React from 'react'
import ProductItemDetailPopup from '../ProductItemDetailPopup';
import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

function PopUpProduct({ product, setOpenDialog }) {
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle className="hidden">Are you absolutely sure?</DialogTitle>
                <DialogDescription asChild>
                    <ProductItemDetailPopup product={product} setOpenDialog={setOpenDialog} />
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    )
}

export default PopUpProduct
