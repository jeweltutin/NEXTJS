"use client"
import GlobalApi from "@/actions/GlobalApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowBigRight, BikeIcon, HomeIcon, Wallet, WalletCards } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "sonner";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea"

import Link from "next/link";



function Checkout() {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    const [totalCartItem, setTotalCartItem] = useState(0);
    const [cartItemList, setCartItemList] = useState([]);
    const [subTotal, setSubTotal] = useState(0);

    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [zip, setZip] = useState();
    const [address, setAddress] = useState();
    const [shippingCharge, setShippingCharge] = useState();
    const [isChecked, setIsCecked] = useState(false);

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

    useEffect(() => {
        getCartItems();
    }, [user, token]);

    const getCartItems = async () => {
        if (user && token) {
            const cartList = await GlobalApi.getCartItemsForOrder(user.id, token);
            //console.log("Order pg Items:", cartList);
            setTotalCartItem(cartList?.length);
            setCartItemList(cartList);
        }
    }

    useEffect(() => {
        const total = cartItemList.reduce((sum, element) => sum + element.amount, 0);
        setSubTotal(total);
    }, [cartItemList]);

    const onOptionChange = e => {
        setShippingCharge(e.target.value);
    };

    const checkHandler = () => {
        setIsCecked(!isChecked);

    }

    const calculateTotalAmount = () => {
        const sCharge = parseInt(shippingCharge)
        let totalAmount = 0;
        const tax = 0.2; // For 2% tax
        //console.log(typeof shippingCharge);
        if (isNaN(sCharge)) {
            totalAmount = subTotal;
        } else {
            totalAmount = (subTotal + sCharge);
        }
        return totalAmount;
    }

    const placeOrder = () => {
        if (isChecked == false) {
            alert("Please Read and Accept our Terms & Conditions to Place Order!");
            return false;
        }else if(shippingCharge == undefined){
            alert("Please Select Shipping Method!");
            return false;
        }else if(subTotal <= 0){
            alert("Sorry Order can't be processed!");
            return false;
        }else{
            //alert(subTotal);
        }

        //alert(shippingCharge);

        const orderData = {
            data: {
                paymentId: "pay00087",
                userId: user.id,
                subTotal: subTotal,
                totalAmount: calculateTotalAmount(),
                username: userName,
                email: email,
                phone: phone,
                zip: zip,
                address: address,
                /* orderItemList: [
                    {
                        product: 5,
                        quantity: 2,
                        price: 100
                    }
                ]     */
                orderItemList: cartItemList
            }
        }

        //console.log(cartItemList);
        GlobalApi.createOrder(orderData, token).then(resp => {
            //console.log(resp);
            toast("Order places successfully !");
            cartItemList.forEach((item, index) => {
                try {
                    GlobalApi.deleteCartItem(item.id, token).then(resp => {
                        //
                    })

                } catch (error) {
                    console.log(error);
                }
                getCartItems();
                router.replace("/order-confirmation");
            })
        })
    }

    return (
        <div className="">
            <hr />
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
                    {/* <p>Shipping Charge: {shippingCharge}</p> */}
                    {/*      <div>
                        <h3>Select Pizza Size</h3>

                        <input type="radio" name="topping" value="Regular" id="regular" checked={topping === "Regular"} onChange={onOptionChange} />
                        <label htmlFor="regular">Regular</label>

                        <input type="radio" name="topping" value="Medium" id="medium" checked={topping === "Medium"} onChange={onOptionChange} />
                        <label htmlFor="medium">Medium</label>

                        <input type="radio" name="topping" value="Large" id="large" checked={topping === "Large"} onChange={onOptionChange} />
                        <label htmlFor="large">Large</label>

                        <p>
                            Select topping <strong>{topping}</strong>
                        </p>
                    </div> */}
                </div>
                <div className="mx-10 border">
                    <h2 className="p-3 bg-gray-200 font-bold text-center">Total Cart ({totalCartItem})</h2>
                    <div className="p-4 flex flex-col gap-4">
                        <h2 className="font-bold flex justify-between">Subtotal: <span>tk {subTotal}</span></h2>
                        <hr></hr>
                        <h2 className="flex justify-between">Delivery: <span>tk { shippingCharge }</span></h2>
                        <h2 className="flex justify-between">Tax (0%): <span>tk 00</span></h2>
                        <hr></hr>
                        <h2 className="flex justify-between">Total: <span>tk {calculateTotalAmount()}</span></h2>
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
    )
}

export default Checkout
