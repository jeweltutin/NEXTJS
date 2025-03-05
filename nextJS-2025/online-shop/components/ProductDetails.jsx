"use client";
import GlobalApi from "@/actions/GlobalApi";
import { UpdateCartContext } from "@/app/context/UpdateCartContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { toast } from "sonner";
import PopUpModal from "./PopUpModal";
import { CarIcon, CircleOffIcon, DollarSignIcon, MapPin, WalletCards } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReactMarkdown from 'react-markdown';
import ProductList from "./ProductList";
import WishlistButton from "./WishlistButton";

function ProductDetails({ theProduct }) {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);

    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    //const defaultImageUrl = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080";
    const defaultImageUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL + theProduct[0].images[0].url;
    const item1ImageUrl = "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080";
    const item2ImageUrl = "https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080";
    const item3ImageUrl = "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080";
    const item4ImageUrl = "https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080";

    const [showImage, setShowImage] = useState(defaultImageUrl);
    const [loading, setLoading] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const { updateCart, setUpdateCart } = useContext(UpdateCartContext);

    const [productPrice, setProductTotalPrice] = useState(
        theProduct[0].sellingPrice ? theProduct[0].sellingPrice : theProduct[0].mrp
    )
    //console.log("The Product:", theProduct);

    let [headingText, setHeadingText] = useState("");
    let [popUpImage, setPopUpImage] = useState("");
    const [selectedColor, setSelectedColor] = useState(null);

    useEffect(() => {
        const storedToken = sessionStorage.getItem("jwt");
        const storedUser = sessionStorage.getItem("user");

        if (storedToken) setToken(storedToken);
        if (storedUser) setUser(JSON.parse(storedUser));
    }, []);

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

    // Set the default color to the first available color when the component mounts
    useEffect(() => {
        if (theProduct[0].colors.length > 0) {
            setSelectedColor(theProduct[0].colors[0].name);
        }
    }, [theProduct]);

    const productColor = (color) => {
        setSelectedColor(color);
    };

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
        } else if (theProduct[0].colors.length > 0 && !selectedColor) {
            alert("Please select a color before adding to cart.");
            return false;
        } else {
            // Enough stock available
            setPopUpImage("/images/addtocartIcon.png");
            setHeadingText(`${theProduct[0].name} added to cart successfully!`);
            setIsOpen(true);
        }
        // Add to cart logic here
        console.log("Product added to cart with color:", selectedColor);

        const data = {
            data: {
                quantity: quantity,
                amount: (quantity * productPrice),
                color: selectedColor,
                products: theProduct[0].documentId,
                users_permissions_user: user.id,
                userId: user.id,
                productId: theProduct[0].id,
                stock: theProduct[0].stock
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

    function buyNow() {
        alert("Buy Now");
        // Navigate to checkout with only the productId
        const productSlug = theProduct[0].slug;
        router.push(`/checkout?productSlug=${productSlug}`);
    }

    const categorySlug = theProduct[0].categories[0].slug;
    //console.log(categorySlug);

    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        async function fetchRelatedProducts() {
            try {
                const products = await GlobalApi.getRelatedProducts(categorySlug);
                setRelatedProducts(products);
                console.log("Related Products:", products);
            } catch (error) {
                console.error('Error fetching related products:', error);
            }
        }

        // Only fetch if categorySlug exists
        if (categorySlug) {
            fetchRelatedProducts();
        }
    }, [categorySlug]); // Include categorySlug as a dependency



    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 p-4">
                <div className="col-span-3 mx-auto px-4 py-8 bg-white">
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
                            <div className="flex justify-between">
                                <p className="text-gray-600 mb-4">SKU: WH1000XM4</p>
                                {/* <div className="">
                                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#34a52c">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                        <g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#1a8922" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> </g>
                                    </svg>
                                    <svg width="25px" height="25px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0" />
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                                        <g id="SVGRepo_iconCarrier"> <path d="M4.03553 1C1.80677 1 0 2.80677 0 5.03553C0 6.10582 0.42517 7.13228 1.18198 7.88909L7.14645 13.8536C7.34171 14.0488 7.65829 14.0488 7.85355 13.8536L13.818 7.88909C14.5748 7.13228 15 6.10582 15 5.03553C15 2.80677 13.1932 1 10.9645 1C9.89418 1 8.86772 1.42517 8.11091 2.18198L7.5 2.79289L6.88909 2.18198C6.13228 1.42517 5.10582 1 4.03553 1Z" fill="#199a22" /> </g>
                                    </svg>
                                </div> */}
                                <WishlistButton productId={theProduct[0].id} user={user} token={token}/>
                            </div>
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
                            {/* <p>{(theProduct[0].colors).length}</p> */}
                            {(theProduct[0].colors).length > 0 ?
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold mb-2">Color:</h3>
                                    {/* <div>
                            {console.log(theProduct[0].colors[0].code)}
                            {
                                theProduct[0].colors.map((color, index) => (
                                    <ul key={index}>
                                        <li>{color.name}</li>
                                        <li>{color.code}</li>
                                    </ul>
                                ))
                            }
                            </div> */}
                                    <div className="flex space-x-2">
                                        {
                                            theProduct[0].colors.map((color, index) => (
                                                // <button onClick={() => productColor(color.name)} key={index} className="w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" style={{ backgroundColor: color.code }}></button>
                                                <button
                                                    onClick={() => productColor(color.name)}
                                                    key={index}
                                                    className={`w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedColor === color.name ? 'ring-2 ring-blue-500' : ''}`}
                                                    style={{ backgroundColor: color.code }}
                                                ></button>
                                            ))
                                        }
                                        {/* <div>
                                <button className="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"></button>
                                <button className="w-8 h-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"></button>
                                <button className="w-8 h-8 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
                                <button
                                    className={`w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${bgColor}`}
                                    style={{ backgroundColor: bgColor }} // Fallback for inline style
                                ></button>
                                <button className="w-8 h-8 bg-[#FF00AA] rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
                            </div> */}
                                    </div>
                                </div> : ""
                            }

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
                                <button onClick={() => buyNow()} className="bg-gray-200 flex gap-2 items-center  text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg> */}
                                    <WalletCards />Buy Now
                                </button>
                                {/* <Link href={{
                                pathname: '/about',
                                query: { course: ["JavaScript", "Java", "Data Strucutre"] },
                            }}>
                                About Page
                            </Link> */}
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
                <div className="bg-white">
                    <div className="p-4">
                        <h3 className="py-3 flex">Delivery Options</h3>
                        <div className="flex gap-3 pb-3">
                            <MapPin></MapPin> Cash on Delivery Available
                        </div>
                        <div className="flex gap-3">
                            <CarIcon></CarIcon> Standard Delivery

                        </div>
                        <p className="pl-10 text-sm text-gray-500 pb-3">
                            Inside Dhaka 60 tk<br />
                            Outside Dhaka 120 tk
                        </p>
                    </div>
                    <hr />
                    <div className="flex justify-center items-center pt-5 hover:scale-105 transition-all">
                        <Image className="object-cover border-4 rounded-md" src={"/images/Super_September.jpg"} width={310} height={400} alt="right banner" />
                    </div>
                    <div className="p-4">
                        <h3 className="py-3">Return & Warranty </h3>
                        <div className="flex gap-3 pb-3">
                            <DollarSignIcon></DollarSignIcon> Cash on Delivery Available
                        </div>
                        <div className="flex gap-3">
                            <CarIcon></CarIcon> 7 Days Returns

                        </div>
                        <div className="flex gap-3 pt-3">
                            <CircleOffIcon></CircleOffIcon>
                            Warranty not available
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <Tabs defaultValue="details" className="">
                    <TabsList>
                        <TabsTrigger value="details">Details</TabsTrigger>
                        <TabsTrigger value="warranty">Warranty</TabsTrigger>
                        <TabsTrigger value="review">Review</TabsTrigger>
                    </TabsList>
                    <TabsContent value="details" className="w-full bg-white p-4">
                        <ReactMarkdown>{theProduct[0].details || "No content available"}</ReactMarkdown>
                    </TabsContent>
                    <TabsContent className="w-full bg-white p-4" value="warranty">{theProduct[0].warranty}</TabsContent>
                    <TabsContent value="review">
                        Reviews (0) :
                        5 out of 5
                    </TabsContent>
                </Tabs>
            </div>
            <div className="mx-4 p-4 bg-white">
                <h2 className="text-green-600 font-bold text-2xl pt-4 pl-1">Related Products</h2>
                <ProductList productList={relatedProducts} />
            </div>
        </div>
    )
}

export default ProductDetails;
