import Image from 'next/image';
import { Button } from './ui/button';
import { LoaderCircle, ShoppingBasket } from 'lucide-react';
import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import GlobalApi from '@/actions/GlobalApi';
import { toast } from 'sonner';
import { UpdateCartContext } from '@/app/context/UpdateCartContext';
import PopUpModal from './PopUpModal';

/* import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"; */
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";



function ProductItemDetailPopup({ product, setOpenDialog }) {
    const token = sessionStorage.getItem("jwt");
    const user = JSON.parse(sessionStorage.getItem('user'));

    const [productPrice, setProductTotalPrice] = useState(
        product.sellingPrice ? product.sellingPrice : product.mrp
    )
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const { updateCart, setUpdateCart } = useContext(UpdateCartContext);

    //const [isOpen, setIsOpen] = useState(false);
    //let [headingText, setHeadingText] = useState("");
    //let [popUpImage, setPopUpImage] = useState("");

    const AddingCart = () => {
        setLoading(true);
        if (!token) {
            router.push("/sign-in");
            setLoading(false);
            return;
        }
        if (product.stock <= 0) {
            // No stock available
            //setHeadingText("This product is temporarily out of stock.");
            //setPopUpImage("/images/out-of-stock.jpg");
            setLoading(false);
            //setIsOpen(true);
            /* setTimeout(() => {
                setOPenDialog(false);
            }, 3000);  */

            alert("This product is temporarily out of stock.");
            setOpenDialog(false);
            return false;
        } else if (product.stock < quantity) {
            // Insufficient stock
            /* setHeadingText(`Only ${product.stock} items left in stock!`);
            setPopUpImage("/images/insufficient.jpg");
            setIsOpen(true);
            setTimeout(() => {
                setOPenDialog(false);
            }, 3000);  */
            setLoading(false);
            alert(`Only ${product.stock} items left in stock!`);
            setOpenDialog(false);
            return false;
        } else {
            // Enough stock available
            /* setPopUpImage("/images/addtocartIcon.png");
            setHeadingText("Product added to cart successfully!");
            setIsOpen(true);
            setTimeout(() => {
                setOPenDialog(false);
            }, 3000); */
            //alert("Added to cart successfully!");
            toast("Added to Cart");
        }
        const data = {
            data: {
                quantity: quantity,
                amount: (quantity * productPrice).toFixed(2),
                products: product.id,
                users_permissions_user: user.id,
                userId: user.id,
                productId: product.id,
                stock: product.stock
            }
        }
        console.log(data);
        GlobalApi.addToCart(user.id, product.id, productPrice, data, token).then(resp => {
            console.log(resp);
            //toast("Added to Cart");
            setUpdateCart(!updateCart);
            setLoading(false);
            setOpenDialog(false);
            //setIsOpen(true);
        }, (e) => {
            console.log(e);
            toast("Error! while adding to cart");
            setLoading(false);
        })
    }

    return (
        <div>
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
                                <button disabled={quantity == 1} onClick={() => setQuantity(quantity - 1)} className="p-2">-</button>
                                <h4>{quantity}</h4>
                                <button onClick={() => setQuantity(quantity + 1)} className="p-2">+</button>
                            </div>
                            <h4 className="text-2xl font-bold"> = {(quantity * productPrice).toFixed(2)} Tk</h4>
                        </div>
                        <Button onClick={() => AddingCart()} disabled={loading} className="flex gap-3">
                            <ShoppingBasket />
                            {loading ? "Wait .." + <LoaderCircle className="animate-spin" /> : "Add To Cart"}
                        </Button>
                    </div>
                    {product && product.categories &&
                        <h3><span className="font-bold">Category: </span>{product?.categories[0]?.name}</h3>
                    }
                </div>
            </div>
            {/* <div>
                <PopUpModal setIsOpen={setIsOpen} isOpen={isOpen} heading={headingText} popUpImage={popUpImage} />
            </div> */}
        </div>
    )
}

export default ProductItemDetailPopup;
