"use client";
import { CircleUserRound, Search, ShoppingBag, ShoppingBasket } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import DropDown from "./DropDown";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import GlobalApi from "@/actions/GlobalApi";
import { UpdateCartContext } from "@/app/context/UpdateCartContext";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import CartItemList from "./CartItemList";
import { toast } from "sonner";
import SearchComponent from "./Search";

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [totalCartItem, setTotalCartItem] = useState(0);
    const router = useRouter();
    const { updateCart } = useContext(UpdateCartContext);
    const [cartItemList, setCartItemList] = useState([]);
    const [subTotal, setSubTotal] = useState(0);

    useEffect(() => {
        const jwt = sessionStorage.getItem("jwt");
        const userData = JSON.parse(sessionStorage.getItem("user"));

        if (jwt) {
            setIsLoggedIn(true);
            setToken(jwt);
            setUser(userData);
        }
    }, []);

    useEffect(() => {
        getCartItems();
    }, [updateCart, user, token]);

    const onSignOut = () => {
        sessionStorage.clear();
        setIsLoggedIn(false);
        setUser(null);
        setToken(null);
        router.push("/sign-in");
    }

    const getCartItems = async () => {
        if (user && token) {
            const cartList = await GlobalApi.getCartItems(user.id, token);
            setTotalCartItem(cartList?.length);
            setCartItemList(cartList);
        }
    }

    const onDeleteItem = (id) => {
        GlobalApi.deleteCartItem(id, token).then(() => {
            toast('Item removed!');
            getCartItems();
        });
    }

    useEffect(() => {
        const total = cartItemList.reduce((sum, element) => sum + element.amount, 0);
        setSubTotal(total.toFixed(2));
    }, [cartItemList]);

    return (
        <div className="flex p-5 shadow-md justify-between fixed top-0 left-0 right-0 bg-white z-10">
            <div className="flex items-center gap-8">
                <Link href={"/"}>
                    <Image src="/images/logo.png" alt="logo" width={150} height={150} />
                </Link>
                <DropDown />
                <div className="md:flex hidden gap-3 items-center border rounded-full p-2 px-5 ">
                    <Search />
                    {/* <input type="text" className="outline-none" placeholder="Search" /> */}
                    <SearchComponent />
                </div>
            </div>
            <div className="flex gap-5 items-center">
                <Sheet>
                    <SheetTrigger>
                        <h4 className="flex gap-2 items-center">
                            <ShoppingBasket className="h-7 w-7" />
                            <span className="bg-primary text-white px-2 rounded-full">{totalCartItem}</span>
                        </h4>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle className="bg-primary text-white font-bold text-lg p-2">My Cart</SheetTitle>
                            <SheetDescription asChild>
                                <CartItemList cartItemList={cartItemList} onDeleteItem={onDeleteItem} />
                            </SheetDescription>
                        </SheetHeader>
                        <SheetClose asChild>
                            <div className="absolute w-[90%] bottom-6 flex flex-col">
                                <h2 className="text-lg font-bold flex justify-between">Subtotal <span>Tk {subTotal}</span></h2>
                                <Button onClick={() => router.push(token ? '/checkout' : '/sign-in')} >Checkout</Button>
                            </div>
                        </SheetClose>
                    </SheetContent>
                </Sheet>

                {!isLoggedIn ? (
                    <Link href="/sign-in">
                        <Button>Login</Button>
                    </Link>
                ) : (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <CircleUserRound className="h-10 w-10 bg-green-100 text-primary p-2 rounded-full cursor-pointer" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <Link href={'/my-order'}>
                                <DropdownMenuItem>My Order</DropdownMenuItem>
                            </Link>
                            <DropdownMenuItem onClick={onSignOut}>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )}
            </div>
        </div>
    );
}

export default Header;
