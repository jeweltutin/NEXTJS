"use client";
import GlobalApi from "@/actions/GlobalApi";
import { UpdateCartContext } from "@/app/context/UpdateCartContext";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { toast } from "sonner";
import PopUpModal from "./PopUpModal";

function ProductDetails({ theProduct }) {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    //const defaultImageUrl = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080";
    const defaultImageUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL + theProduct[0].images[0].url;
    const item1ImageUrl = "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080";
    const item2ImageUrl = "https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080";
    const item3ImageUrl = "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080";
    const item4ImageUrl = "https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080";

    const [showImage, setShowImage] = useState(defaultImageUrl);

    const token = sessionStorage.getItem("jwt");
    const user = JSON.parse(sessionStorage.getItem('user'));

    const [loading, setLoading] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const { updateCart, setUpdateCart } = useContext(UpdateCartContext);

    const [productPrice, setProductTotalPrice] = useState(
        theProduct[0].sellingPrice ? theProduct[0].sellingPrice : theProduct[0].mrp
    )

    //console.log("The Product:", theProduct);

    let [headingText, setHeadingText] = useState("");
    let [popUpImage, setPopUpImage] = useState("");

    let num = 314340;
    console.log(new Intl.NumberFormat().format(num));
    num = new Intl.NumberFormat('en-IN').format(num);

    function changeImage(src, whichImage) {
        //document.getElementById('mainImage').src = src;
        if (whichImage == 1) {
            setShowImage(item1ImageUrl);
        } else if (whichImage == 2) {
            setShowImage(item2ImageUrl);
        } else if (whichImage == 3) {
            setShowImage(item3ImageUrl);
        } else if (whichImage == 4) {
            setShowImage(item4ImageUrl);
        } else {
            setShowImage(defaultImageUrl);
        }
    }

    const AddingCart = () => {
        setLoading(true);
        if (!token) {
            router.push("/sign-in");
            setLoading(false);
            return;
        }
        if (theProduct[0].stock <= 0) {
            // No stock available
            setHeadingText("This product is temporarily out of stock.");
            setPopUpImage("/images/out-of-stock.jpg");
            setIsOpen(true);
            return false;
        } else if (theProduct[0].stock < quantity) {
            // Insufficient stock
            setHeadingText(`Only ${theProduct[0].stock} items left in stock!`);
            setPopUpImage("/images/insufficient.jpg");
            setIsOpen(true);
            return false;
        } else {
            // Enough stock available
            setPopUpImage("/images/addtocartIcon.png");
            setHeadingText(`${theProduct[0].name } added to cart successfully!`);
            setIsOpen(true);
        }
        const data = {
            data: {
                quantity: quantity,
                amount: (quantity * productPrice),
                products: theProduct[0].documentId,
                users_permissions_user: user.id,
                userId: user.id,
                productId: theProduct[0].id
            }
        }
        //console.log(data);
        GlobalApi.addToCart(user.id, theProduct[0].id, productPrice, data, token).then(resp => {
            //console.log(resp);
            toast("Added to Cart");
            setUpdateCart(!updateCart);
            setLoading(false);
        }, (e) => {
            console.log(e);
            toast("Error! while adding to cart");
            setLoading(false);
        })
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/2 px-4 mb-8">
                    {/* <img src={showImage} alt="Product" className="w-full h-auto rounded-lg shadow-md mb-4" id="mainImage" /> */}
                    <img src={showImage} alt="Product" className="w-full h-auto rounded-lg shadow-md p-10 mb-4 max-h-[500px] object-contain" id="mainImage" />
                    <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                        <img src={item1ImageUrl} alt="Thumbnail 1"
                            className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                            onClick={() => changeImage(showImage, 1)} />
                        <img src={item2ImageUrl} alt="Thumbnail 2"
                            className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                            onClick={() => changeImage(showImage, 2)} />
                        <img src={item3ImageUrl} alt="Thumbnail 3"
                            className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                            onClick={() => changeImage(showImage, 3)} />
                        <img src={item4ImageUrl} alt="Thumbnail 4"
                            className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                            onClick={() => changeImage(showImage, 4)} />

                        {/* <img src={item4ImageUrl} alt="Thumbnail 4"
                                className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                                onclick="changeImage(this.src)" /> */}
                    </div>
                </div>

                <div className="w-full md:w-1/2 px-4">
                    <h2 className="text-3xl font-bold mb-2">{theProduct[0].name}</h2>
                    <p className="text-gray-600 mb-4">SKU: WH1000XM4</p>
                    {/* <p className="text-gray-600 mb-4">{ num }</p> */}
                    <div className="mb-4">
                        <span className="text-2xl font-bold mr-2">Tk {theProduct[0].sellingPrice ? theProduct[0].sellingPrice : theProduct[0].mrp}</span>
                        <span className="text-gray-500 line-through">{theProduct[0].sellingPrice ? "Tk " + theProduct[0].mrp : ""}</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-500">
                            <path fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-500">
                            <path fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-500">
                            <path fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-500">
                            <path fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-500">
                            <path fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                clipRule="evenodd" />
                        </svg>
                        <span className="ml-2 text-gray-600">4.5 (120 reviews)</span>
                    </div>
                    <p className="text-gray-700 mb-6">
                        {theProduct[0].description}
                    </p>
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Color:</h3>
                        <div className="flex space-x-2">
                            <button className="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"></button>
                            <button className="w-8 h-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"></button>
                            <button className="w-8 h-8 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
                        </div>
                    </div>

                    <div className="mb-6 flex gap-3">
                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
                        <input type="number" onChange={(e) => setQuantity(e.target.value)} min="1" defaultValue="1" className="w-12 text-center rounded-md border-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                        <p className="text-sm">
                            {theProduct[0].stock <= 0 ? (
                                <span className="text-red-600">{"Out of Stock"}</span>
                            ) : theProduct[0].stock < 15 ? (
                                <span className="text-yellow-500">{"Limited Stock"}</span>
                            ) : (
                                <span className="text-green-600">
                                    Available Stock: {theProduct[0].stock}
                                </span>
                            )}
                        </p>
                        <div>
                            <PopUpModal setIsOpen={setIsOpen} isOpen={isOpen} heading={headingText} popUpImage={popUpImage} />
                        </div>
                    </div>

                    <div className="flex space-x-4 mb-6">
                        <button onClick={() => AddingCart()} className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                            Add to Cart
                        </button>
                        <button
                            className="bg-gray-200 flex gap-2 items-center  text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                            Wishlist
                        </button>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Industry-leading noise cancellation</li>
                            <li>30-hour battery life</li>
                            <li>Touch sensor controls</li>
                            <li>Speak-to-chat technology</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
