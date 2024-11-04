"use client";
const { default: axios } = require("axios");


const axiosClient = axios.create({
    //baseURL: 'http://localhost:1337/api'
    baseURL: 'http://127.0.0.1:1337/api'
})

import GlobalApi from "@/actions/GlobalApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowBigRight, BikeIcon, HomeIcon, WalletCards } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import Image from "next/image";

function Checkout() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const productSlug = searchParams.get("productSlug");

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    const [totalCartItem, setTotalCartItem] = useState(0);
    const [cartItemList, setCartItemList] = useState([]);
    const [product, setProduct] = useState(null); // Store individual product data
    const [subTotal, setSubTotal] = useState(0);

    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [zip, setZip] = useState();
    const [address, setAddress] = useState();
    const [shippingCharge, setShippingCharge] = useState();
    const [isChecked, setIsChecked] = useState(false);

    // Check if the user is logged in
    useEffect(() => {
        const jwt = sessionStorage.getItem("jwt");
        const userData = JSON.parse(sessionStorage.getItem("user"));

        if (jwt) {
            setIsLoggedIn(true);
            setToken(jwt);
            setUser(userData);
        } else {
            router.push("/sign-in");
        }
    }, []);

    // Fetch the product or cart items based on `productSlug`
    useEffect(() => {
        if (productSlug) {
            fetchProductDetails();
        } else if (user && token) {
            getCartItems();
        }
    }, [user, token, productSlug]);

    // Fetch single product details if `productSlug` is present
    const fetchProductDetails = async () => {
        try {
            const productData = await GlobalApi.getSingleProduct(productSlug);
            //console.log("productData", productData[0]);
            setProduct(productData[0]);
            setSubTotal(productData.price); // Assuming productData includes a price property
        } catch (error) {
            console.error("Failed to fetch product:", error);
        }
    };

    // Fetch all cart items if there’s no `productId`
    const getCartItems = async () => {
        if (user && token) {
            const cartList = await GlobalApi.getCartItemsForOrder(user.id, token);
            //console.log("cartList:", cartList);
            setTotalCartItem(cartList?.length);
            setCartItemList(cartList);
        }
    };

    useEffect(() => {
        const total = cartItemList.reduce((sum, item) => sum + item.amount, 0);
        setSubTotal(total);
    }, [cartItemList]);

    const onOptionChange = (e) => setShippingCharge(e.target.value);

    const checkHandler = () => setIsChecked(!isChecked);

    const calculateTotalAmount = () => {
        const sCharge = parseInt(shippingCharge) || 0;
        if (subTotal) {
            return subTotal + sCharge;
        } else if (product) {
            if (product.sellingPrice) {
                return product.sellingPrice + sCharge;
            } else {
                return product.mrp + sCharge;
            }
        } else {
            return 0;
        }

    };


    /* const placeOrder = () => {
        if (!isChecked) {
            alert("Please accept the Terms & Conditions!");
            return;
        }
        if (!shippingCharge) {
            alert("Please select a shipping method!");
            return;
        }
        if (subTotal <= 0) {
            alert("Order cannot be processed.");
            return;
        }

        const orderData = {
            data: {
                paymentId: "pay00087",
                userId: user.id,
                subTotal: productSlug ? price : subTotal,
                totalAmount: calculateTotalAmount(),
                username: userName,
                email,
                phone,
                zip,
                address,
                orderItemList: productSlug ? [{ product: product.id, quantity: 1, amount: product.sellingPrice ? product.sellingPrice : product.mrp }] : cartItemList,
            },
        };

        GlobalApi.createOrder(orderData, token).then(() => {
            toast("Order placed successfully!");
            if (!productSlug) {
                cartItemList.forEach((item) => {
                    GlobalApi.deleteCartItem(item.id, token);
                });
                getCartItems();
            }
            router.replace("/order-confirmation");
        });
    };
 */


    const placeOrder = async () => {
        if (!isChecked) {
            alert("Please accept the Terms & Conditions!");
            return;
        }
        if (!shippingCharge) {
            alert("Please select a shipping method!");
            return;
        }
        if (subTotal <= 0) {
            alert("Order cannot be processed.");
            return;
        }

        const orderData = {
            data: {
                paymentId: "pay00087",  // Use a dynamic payment ID based on actual payment processing
                userId: user.id,
                subTotal: productSlug ? (product?.sellingPrice ? product?.sellingPrice : product?.mrp) : subTotal,
                totalAmount: calculateTotalAmount(),
                username: userName,
                email,
                phone,
                zip,
                address,
                orderItemList: productSlug
                    ? [{ product: product.documentId, quantity: 1, name: product.name, amount: product.sellingPrice ? product.sellingPrice : product.mrp }]
                    : cartItemList,
            },
        };

        try {
            // Step 1: Place the Order
            const orderResponse = await GlobalApi.createOrder(orderData, token);
            console.log(orderData.data.orderItemList);
            // Step 2: Update Stock for Each Item in the Order
            const stockUpdatePromises = orderData.data.orderItemList.map(async (item) => {
                const response = await axiosClient.get(`/products/${item.product}`, {
                    headers: { Authorization: "Bearer " + token }
                });
                const product = response.data.data;
                console.log("Up Pro:", product);

                // Update stock based on the order quantity
                return axiosClient.put(`/products/${item.product}`, {
                    data: { stock: product.stock - item.quantity }
                }, {
                    headers: { Authorization: "Bearer " + token }
                });
            });

            // Wait for all stock updates to complete
            await Promise.all(stockUpdatePromises);

            // Success Message
            toast("Order placed successfully!");

            // Clear the cart if necessary
            if (!productSlug) {
                cartItemList.forEach((item) => {
                    GlobalApi.deleteCartItem(item.id, token);
                });
                getCartItems();
            }

            // Redirect to order confirmation
            router.replace("/order-confirmation");
        } catch (error) {
            alert("Failed to place order: " + error.message);
        }
    };

    return (
        <div className="">
            <hr />
            {console.log(product)}
            {/* <h2 className="p-3 bg-primary text-xl font-bold text-center text-white">Checkout</h2> */}
            <div className="pt-3 pl-10">
                <h2 className="capitalize text-2xl text-gray-500">Three steps checkout</h2>
                <p className="text-gray-400">
                    Please enter details below to complete purchase
                </p>
            </div>
            <div className="p-5 grid grid-cols-1 xl:grid-cols-4 py-8">
                <div className="md:mx-5 xl:col-span-2 mx-7">
                    <h2 className="flex gap-2 font-bold uppercase bg-primary p-2 text-white"><HomeIcon></HomeIcon> Billing Details</h2>
                    <div className="grid grid-cols-2 gap-10 mt-3">
                        <Input onChange={(e) => setUserName(e.target.value)} placeholder="Name" className="h-10" />
                        <Input onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="h-10" />
                    </div>
                    <div className="grid grid-cols-2 gap-10 mt-3">
                        <Input onChange={(e) => setPhone(e.target.value)} placeholder="Phone" className="h-10" />
                        <Input onChange={(e) => setZip(e.target.value)} placeholder="Zip" className="h-10" />
                    </div>
                    <div className="mt-3">
                        {/* <Input onChange={(e) => setAddress(e.target.value)} placeholder="Address" className="h-10" /> */}
                        <Textarea rows={5} onChange={(e) => setAddress(e.target.value)} placeholder="Type your address here." />
                    </div>
                </div>
                <div className="md:mx-10 mx-7 sm:pt-4 md:pt-0">
                    <h2 className="flex gap-2 font-bold uppercase bg-primary p-2 text-white mb-4 sm:pt-2"><BikeIcon></BikeIcon> Shipping Methods</h2>
                    <RadioGroup defaultValue="60" className="pb-8">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem
                                type="radio"
                                onClick={onOptionChange}
                                checked={shippingCharge === "60"}
                                value="60"
                                id="option-one"
                            />
                            <Label htmlFor="option-one">Inside Dhaka (60)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem
                                type="radio"
                                onClick={onOptionChange}
                                checked={shippingCharge === "120"}
                                value="120"
                                id="option-two"
                            />
                            <Label htmlFor="option-two">Outside Dhaka (120)</Label>
                        </div>
                    </RadioGroup>

                    <hr className="p-5" />
                    <div className="sm: pb-8">
                        <h2 className="flex gap-2 font-bold uppercase bg-primary p-2 text-white mb-4"><WalletCards></WalletCards> Payment Methods</h2>
                        <RadioGroup defaultValue="option-one">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="option-one" id="option-one" />
                                <Label htmlFor="option-one">Online Payment</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="option-two" id="option-two" />
                                <Label htmlFor="option-two">Cash on Delivery</Label>
                            </div>
                        </RadioGroup>
                    </div>
                </div>
                {/* Order Summary */}
                {/* <div>
                    <h2 className="p-3 bg-gray-200 font-bold text-center">
                        {productSlug ? "Order" : "Cart"} Summary
                    </h2>
                    {productSlug && product ? (
                        <div>
                            <h3>{product.name}</h3>
                            <p>Price: ${product.price}</p>
                        </div>
                    ) : (
                        <div>
                            <h3>Total Cart ({totalCartItem})</h3>
                            <p>Subtotal: ${subTotal}</p>
                        </div>
                    )}
                    <p>Shipping: ${shippingCharge || 0}</p>
                    <p>Total: ${calculateTotalAmount()}</p>
                    <Button onClick={placeOrder} disabled={!(userName && email && phone && address)}>
                        Place Order <ArrowBigRight />
                    </Button>
                </div> */}

                <div className="mx-10 border">
                    <h2 className="p-3 bg-gray-200 font-bold text-center">
                        {productSlug ? "Order" : "Cart"} Summary
                    </h2>
                    <div className="p-4 flex flex-col gap-4">
                        {productSlug && product ? (
                            <div className="flex justify-between items-center">
                                <div className="flex flex-col justify-center items-center gap-1">
                                    <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + product.images[0].url} width={60} height={40} alt="product Image" />
                                    <h3 className="text-grey-400"><small>{product.name}</small></h3>
                                </div>
                                <div>
                                    Qty : 1
                                </div>
                                <div>
                                    BDT {product.sellingPrice ? product.sellingPrice : product.mrp}
                                </div>
                            </div>
                        ) : ""}
                        <div>
                            {!product ? <h2 className="flex justify-between">Total Cart: <span> ({totalCartItem}) Items</span></h2> : ""}
                            <h2 className="flex justify-between">Subtotal: <span>BDT {subTotal ? subTotal : (product?.sellingPrice ? product?.sellingPrice : product?.mrp)}</span></h2>
                        </div>
                        <hr></hr>
                        <h2 className="flex justify-between">Shipping: <span>BDT {shippingCharge || 0}</span></h2>
                        <h2 className="flex justify-between">Tax (0%): <span>BDT 00</span></h2>
                        <hr></hr>
                        <h2 className="flex font-bold justify-between">
                            {/* Total: <span>BDT {product ? (product.sellingPrice ? product.sellingPrice : product.mrp) : calculateTotalAmount()}</span> */}
                            Total: <span>BDT {calculateTotalAmount()}</span>
                        </h2>
                        <div className="items-top flex space-x-2">
                            <Checkbox id="terms1" type="checkbox"
                                checked={isChecked}
                                onClick={checkHandler} />
                            <div className="grid gap-1.5 leading-none">
                                <label htmlFor="terms1" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Accept terms and conditions
                                </label>
                                <p className="text-sm text-muted-foreground">
                                    You agree to our <Link className="text-blue-600" href={"#"}>Terms & Conditions</Link> and Privacy Policy.
                                </p>
                            </div>
                        </div>

                        <Button onClick={() => placeOrder()} disabled={!(userName && email && phone && address)} >Place Order <ArrowBigRight /> </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
