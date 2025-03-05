"use client"
import GlobalApi from "@/actions/GlobalApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowBigRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "sonner";


function Checkout() {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    const [totalCartItem, setTotalCartItem] = useState(0);
    const [cartItemList, setCartItemList] = useState([]);
    const [subTotal, setSubTotal] = useState(0);

    const [userName, setUserName ] = useState();
    const [email, setEmail ] = useState();
    const [phone, setPhone ] = useState();
    const [zip, setZip ] = useState();
    const [address, setAddress ] = useState();

    useEffect(() => {
        const jwt = sessionStorage.getItem("jwt");
        const userData = JSON.parse(sessionStorage.getItem("user"));

        if (jwt) {
            setIsLoggedIn(true);
            setToken(jwt);
            setUser(userData);
        }else{
            router.push("/sign-in"); 
        }

    }, []);

    useEffect(() => {
        getCartItems();
    }, [user, token]);

    const getCartItems = async () => {
        if (user && token) {
            const cartList = await GlobalApi.getCartItemsForOrder(user.id, token);
            setTotalCartItem(cartList?.length);
            setCartItemList(cartList);
        }
    }

    useEffect(() => {
        const total = cartItemList.reduce((sum, element) => sum + element.amount, 0);
        setSubTotal(total);
    }, [cartItemList]);

    const calculateTotalAmount = () => {
        const tax = 0.2; // For 2% tax
        const deliveryCharge = 60;
        const totalAmount = (subTotal+deliveryCharge);
        return totalAmount;
    }

    const placeOrder = () => {
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
                orderItemList:  cartItemList 
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
            <h2 className="p-3 bg-primary text-xl font-bold text-center text-white">Checkout</h2>
            <div className="p-5 px-5 md:px-10 grid grid-cols-1 md:grid-cols-3 py-8">
                <div className="md:col-span-2 md:mx-20 mx-7 order-2 md:order-1 mt-6">
                    <h2 className="font-bold text-3xl">Billing Details</h2>
                    <div className="grid grid-cols-2 gap-10 mt-3">
                        <Input onChange={(e) => setUserName(e.target.value)} placeholder="Name" className="h-10"  />
                        <Input onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="h-10" />
                    </div>
                    <div className="grid grid-cols-2 gap-10 mt-3">
                        <Input onChange={(e) => setPhone(e.target.value)} placeholder="Phone"className="h-10"  />
                        <Input onChange={(e) => setZip(e.target.value)} placeholder="Zip" className="h-10" />
                    </div>
                    <div className="mt-3">
                        <Input onChange={(e) => setAddress(e.target.value)} placeholder="Address" className="h-10" />
                    </div>
                </div>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nam est fuga. Dolor dolores consequuntur rerum sit nulla, optio delectus ducimus libero ratione temporibus molestiae, quia vero rem odit excepturi!
                </div>
                <div className="mx-10 border order-1 md:order-2">
                    <h2 className="p-3 bg-gray-200 font-bold text-center">Total Cart ({totalCartItem})</h2>
                    <div className="p-4 flex flex-col gap-4">
                        <h2 className="font-bold flex justify-between">Subtotal: <span>tk {subTotal}</span></h2>
                        <hr></hr>
                        <h2 className="flex justify-between">Delivery: <span>tk 60</span></h2>
                        <h2 className="flex justify-between">Tax (2%): <span>tk 10</span></h2>
                        <hr></hr>
                        <h2 className="flex justify-between">Total: <span>tk {calculateTotalAmount()}</span></h2>
                        <Button onClick={() => placeOrder()} disabled={!(userName&&email&&phone&&address)} >Place Order <ArrowBigRight /> </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
