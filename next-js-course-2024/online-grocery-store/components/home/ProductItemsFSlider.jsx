import { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import ProductItemDetailPopup from "../ProductItemDetailPopup";
import Image from "next/image";
import Link from "next/link";

function ProductItemsFSlider({ product }) {
  const [openDialog, setOpenDialog] = useState(false);

  let regularPrice = product.mrp;
  let sellingPrice = product.sellingPrice;
  let percentage;
  if (sellingPrice) {
    percentage = ((regularPrice - sellingPrice) / regularPrice * 100).toFixed(2);
  }


  return (
    <div style={{ marginRight: '15px', marginBottom: '15px' }} className="relative p-2 md:p-6 flex flex-col items-center justify-center gap-3 border rounded-lg hover:scale-105 hover:shadow-lg transition-all ease-in-out cursor-pointer">
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
          <h2 className="text-green-800 text-lg text-center">{product.name}</h2>
          <div className="flex gap-3 items-center justify-center py-3">
            {product.sellingPrice && <h3 className="font-bold text-lg text-center">{product.sellingPrice} Tk</h3>}
            <h3 className={`font-bold text-lg ${sellingPrice && 'line-through text-gray-500'}`}>{regularPrice} Tk</h3>
          </div>
        </div>
      </Link>
      <div className="absolute text-sm right-0 top-2 text-white bg-primary px-[3px]">
        {percentage && <span>Save {percentage}%</span>}
      </div>
      <Button onClick={() => setOpenDialog(true)} variant="outline" className="text-primary hover:text-white hover:bg-primary">
        View
      </Button>
      <Dialog open={openDialog} onOpenChange={() => setOpenDialog(false)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="hidden">Are you absolutely sure?</DialogTitle>
            <DialogDescription asChild>
              <ProductItemDetailPopup product={product} setOpenDialog={setOpenDialog} />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ProductItemsFSlider;
