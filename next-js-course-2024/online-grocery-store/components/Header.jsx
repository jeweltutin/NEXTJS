"use client";
import { CircleUserRound, Search, ShoppingBag, ShoppingBasket } from "lucide-react";
import Image from "next/image"
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
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import CartItemList from "./CartItemList";
import { toast } from "sonner";


function Header() {
    //const [isLoggedIn, setIsLoggedIn] = useState(null);
    //const [user, setUser] = useState("");
    //const [token, setToken] = useState("");
    const isLoggedIn = sessionStorage.getItem("jwt") ? true : false;
    const user = JSON.parse(sessionStorage.getItem('user'));
    const token = sessionStorage.getItem("jwt");
    const [totalCartItem, setTotalCartItem] = useState(0);
    const router = useRouter();

    const { updateCart, setUpdateCart } = useContext(UpdateCartContext);
    const [cartItemList, setCartItemList] = useState([]);

    useEffect(() => {
        getCartItems();
    }, [updateCart]);

    /*     useEffect(() => {
            const isLoggedIn = window.sessionStorage.getItem("jwt") ? true : false;
            setIsLoggedIn(isLoggedIn);
        }, []);
    
        useEffect(() => {
            const token = window.sessionStorage.getItem("jwt");
            setToken(token);
        }, []);
    
        useEffect(() => {
            const user = window.JSON.parse(sessionStorage.getItem('user'));
            setUser(user);
        }, []); */

    const onSignOut = () => {
        sessionStorage.clear();
        router.push("/sign-in");
    }

    /**
     * Used to get Total cart Item
     */
    const getCartItems = async () => {
        const cartList = await GlobalApi.getCartItems(user.id, token);
        console.log(cartList);
        setTotalCartItem(cartList?.length);
        setCartItemList(cartList);
    }

    const onDeleteItem = (id) => {
        //alert(token);
        GlobalApi.deleteCartItem(id, token).then(resp => {
            toast('Item removed !');
            getCartItems();
        })
    }

    return (
        <div className="flex p-5 shadow-md justify-between">
            <div className="flex items-center gap-8">
                <Link href={"/"}>
                    <Image src="/images/logo.png" alt="logo" width={150} height={150} />
                </Link>
                <DropDown />
                <div className="md:flex hidden gap-3 items-center border rounded-full p-2 px-5 ">
                    <Search />
                    <input type="text" className="outline-none" placeholder="Search" />
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
                            <SheetDescription>
                                <CartItemList  cartItemList={cartItemList} onDeleteItem={onDeleteItem} />
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>

                {!isLoggedIn ?
                    <Link href="/sign-in">
                        <Button>Login</Button>
                    </Link> :
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <CircleUserRound className="h-10 w-10 bg-green-100 text-primary p-2 rounded-full cursor-pointer" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>My Order</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => onSignOut()}>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                }
            </div>
        </div>
    )
}

export default Header;
