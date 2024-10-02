"use client";
import { CircleUserRound, Search, ShoppingBag } from "lucide-react";
import Image from "next/image"
import { Button } from "./ui/button";
import DropDown from "./DropDown";
import Link from "next/link";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
  

function Header() {
    const isLoggedIn = sessionStorage.getItem("jwt") ? true : false;
    const router = useRouter();

    const onSignOut = () => {
        sessionStorage.clear();
        router.push("/sign-in");
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
                <h4 className="flex gap-2 items-center"><ShoppingBag /> 0</h4>
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
