"use client";
import GlobalApi from '@/actions/GlobalApi';
import PopUpModal from '@/components/PopUpModal';
import { CarTaxiFront, Delete } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'sonner';
import { UpdateCartContext } from '@/app/context/UpdateCartContext';

function Cart() {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [cartItemList, setCartItemList] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [stockWarning, setStockWarning] = useState(null);

    const [isOpen, setIsOpen] = useState(false);
    let [popUpImage, setPopUpImage] = useState("");
    let [headingText, setHeadingText] = useState("");

    const { updateCart, setUpdateCart } = useContext(UpdateCartContext);

    async function getCartData() {
        const cartList = await GlobalApi.getCartItems(user.id, token);
        setCartItemList(cartList);
        //console.log(cartItemList);
    }

    useEffect(() => {
        const jwt = sessionStorage.getItem("jwt");
        const userData = JSON.parse(sessionStorage.getItem("user"));
        if (jwt) {
            setToken(jwt);
            setUser(userData);
        } else {
            router.push("/sign-in");
        }
    }, []);

    useEffect(() => {
        if (user && token) {
            getCartData();
        }
    }, [user, token, updateCart]);

    // Function to handle increasing quantity
    /* const handleIncreaseQty = (cartItem) => {
        const updatedCartItems = cartItemList.map(item =>
            item.id === cartItem.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItemList(updatedCartItems);
    }; */

    /*   const handleIncreaseQty = (cartItem) => {
          setCartItemList(cartItemList.map(item => {
              if (item.id === cartItem.id) {
                  item.quantity += 1; // Directly increment quantity
              }
              return item;
          }));
      }; */

    // Function to handle decreasing quantity
    /*  const handleDecreaseQty = (cartItem) => {
         if (cartItem.quantity > 1) {
             const updatedCartItems = cartItemList.map(item =>
                 item.id === cartItem.id ? { ...item, quantity: item.quantity - 1 } : item
             );
             setCartItemList(updatedCartItems);
         }
     }; */

    /*     const handleDecreaseQty = (cartItem) => {
            if (cartItem.quantity > 1) {
                setCartItemList(cartItemList.map(item => {
                    if (item.id === cartItem.id) {
                        item.quantity -= 1; // Directly decrement quantity
                    }
                    return item;
                }));
            }
        }; */

    const handleIncreaseQty = (cartItem) => {
        setCartItemList(cartItemList.map(item => {
            if (item.id === cartItem.id) {
                if (item.quantity < item.stock) {
                    //if (item.quantity < 5) {
                    item.quantity += 1;
                    setStockWarning(null); // Clear warning if quantity is within stock
                    //GlobalApi.updateCartItem(item.id, { quantity: item.quantity, amount: item.amount * item.quantity }, token);
                    //GlobalApi.updateCartItem(item.id, { quantity: item.quantity }, token);
                } else {
                    setHeadingText(`Only ${item.stock} items left in stock!`);
                    setPopUpImage("/images/insufficient.jpg");
                    setIsOpen(true);
                    setStockWarning(`Only ${item.stock} available in stock`); // Set warning if stock exceeded
                }
            }
            return item;
        }));
    };

    const handleDecreaseQty = (cartItem) => {
        //console.log(cartItem.id);
        if (cartItem.quantity > 1) {
            setCartItemList(cartItemList.map(item => {
                if (item.id === cartItem.id) {
                    item.quantity -= 1;
                    setStockWarning(null); // Clear warning when quantity decreases
                    //GlobalApi.updateCartItem(item.id, { quantity: item.quantity, amount: item.amount * item.quantity }, token);
                    //GlobalApi.updateCartItem(item.id, { quantity: item.quantity }, token);
                }
                return item;
            }));
        }
    };

    function onDeleteCartItem(cartItemId) {
        //alert(cartItemId);
        GlobalApi.deleteCartItem(cartItemId, token).then(() => {
            toast('Item removed!');
            getCartData();
            setUpdateCart(!updateCart);
        });
    }

    // Calculate total amount whenever cartItemList changes
    /*     useEffect(() => {
            const total = cartItemList.reduce((acc, item) => acc + item.amount * item.quantity, 0);
            setTotalAmount(total);
        }, [cartItemList]); */

    useEffect(() => {
        /* Using for loop:
        let total = 0;
        for (let i = 0; i < cartItemList.length; i++) {
            total += cartItemList[i].amount * cartItemList[i].quantity;
        }
        setTotalAmount(total); */

        //Using forEach loop:
        let total = 0;
        cartItemList.forEach(item => {
            total += item.amount * item.quantity;
        });
        setTotalAmount(total);
    }, [cartItemList]);

    async function goCheckoutPage() {
        if (token) {
            // Update all cart items in Strapi before navigating
            for (const item of cartItemList) {
                //await GlobalApi.updateCartItem(item.id, { quantity: item.quantity, amount: item.amount * item.quantity }, token);
                await GlobalApi.updateCartItem(item.id, { quantity: item.quantity }, token);
            }
            router.push("/checkout");
            router.refresh();
        } else {
            router.push("/sign-in");
        }
    }



    return (
        <div className="bg-gray-100 h-auto py-8 ">
            <div className="container mx-auto px-4 xl:w-[1300px]">
                <h1 className="flex gap-2 font-semibold mb-4 bg-white p-3"><CarTaxiFront />My Cart</h1>
                {/* Display stock warning if it exists */}
                {stockWarning && <div className="stock-warning">{stockWarning}</div>}
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-3/4">
                        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th className="text-left font-semibold">Product</th>
                                        <th className="text-center font-semibold">Price</th>
                                        <th className="text-center font-semibold">Quantity</th>
                                        <th className="text-center font-semibold">Total</th>
                                        <th className="text-center font-semibold">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItemList.map((cartItem) => (
                                        <tr key={cartItem.id}>
                                            <td className="py-4 xl:w-40 flex flex-col items-center px-0 m-0">
                                                <div className="">
                                                    <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + cartItem.image} width={90} height={90} alt={cartItem.name} className="border h-16 w-16 mr-4 object-contain" />
                                                </div>
                                                <div className="text-sm p-2">{cartItem.name}</div>
                                            </td>
                                            <td className="py-4 text-center">Tk {cartItem.amount}</td>
                                            <td className="py-4">
                                                <div className="flex items-center justify-center">
                                                    <button onClick={() => handleDecreaseQty(cartItem)} className={`${cartItem.quantity <= 1 ? 'btn-disabled' : ''} border rounded-md py-2 px-4 mr-2`}>-</button>
                                                    <span className="text-center w-8">{cartItem.quantity}</span>
                                                    {/* <button onClick={() => handleIncreaseQty(cartItem)} className="border rounded-md py-2 px-4 ml-2">+</button> */}
                                                    <button onClick={() => handleIncreaseQty(cartItem)}
                                                        className={`border rounded-md py-2 px-4 ml-2 btn-increase ${cartItem.quantity >= cartItem.stock ? 'btn-disabled' : ''}`}
                                                        disabled={cartItem.quantity >= cartItem.stock} // Disable if quantity reaches stock >= cartItem.stock
                                                    >+</button>
                                                </div>
                                            </td>
                                            <td className="py-4 text-center">Tk {cartItem.amount * cartItem.quantity}</td>
                                            <td className="py-4 flex justify-end">
                                                <Delete onClick={() => onDeleteCartItem(cartItem.id)} className="text-primary cursor-pointer" />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="md:w-1/4">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-lg font-semibold mb-4">Summary</h2>
                            <div className="flex justify-between mb-2">
                                <span>Subtotal</span>
                                <span>Tk {totalAmount.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Taxes</span>
                                {/* <span>Tk {(totalAmount * 0.1).toFixed(2)}</span> */}
                                <span>0.00</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Shipping</span>
                                <span>Tk 0.00</span>
                            </div>
                            <hr className="my-2" />
                            <div className="flex justify-between mb-2">
                                <span className="font-semibold">Total</span>
                                {/* <span className="font-semibold">Tk {(totalAmount * 1.1).toFixed(2)}</span> */}
                                <span className="font-semibold">Tk {totalAmount.toFixed(2)}</span>
                            </div>
                            <button onClick={() => goCheckoutPage()} className="bg-primary text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
                            <Link href={"/shop"}>
                                <button className="bg-white text-black py-2 px-4 border rounded-lg mt-4 w-full">Continue Shopping</button>
                            </Link>
                            <div className="mt-4 flex flex-wrap justify-center gap-4">
                                <Image src="/images/master.webp" width={256} height={100} alt="card1" className="w-10 object-contain" />
                                <Image src="/images/visa.webp" width={256} height={100} alt="card2" className="w-10 object-contain" />
                                <Image src="/images/american-express.webp" width={256} height={100} alt="card3" className="w-10 object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PopUpModal setIsOpen={setIsOpen} isOpen={isOpen} heading={headingText} popUpImage={popUpImage} />
        </div>
    );
}

export default Cart;
