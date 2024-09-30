import { Search, ShoppingBag } from "lucide-react";
import Image from "next/image"
import { Button } from "./ui/button";
import DropDown from "./DropDown";
import Link from "next/link";

function Header() {
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
                <Button>Login</Button>
            </div>
        </div>
    )
}

export default Header;
