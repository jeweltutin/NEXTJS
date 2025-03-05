"use client";
import GlobalApi from "@/actions/GlobalApi";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignJustify, Building, Home, LayoutGrid, StoreIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function DropDown() {
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        getCategoryList();
    }, [])

    /**
     * Get Category List
     */
    const getCategoryList = () => {
        GlobalApi.getCategories().then(resp => {
            //console.log("CategoryList Resp:", resp);
            setCategoryList(resp.data.data);
        })
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <h2 className="items-center border rounded-full p-2 md:px-10 bg-slate-200 cursor-pointer">
                    <div className="hidden md:flex gap-2">
                        <LayoutGrid className="h-5 w-5 mt-[3px]" /> Category
                    </div>
                    <div className="block md:hidden">
                        <AlignJustify className="h-5 w-5" />
                    </div>
                </h2>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <div className="block md:hidden">
                    <DropdownMenuLabel>Menu</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <Link href={"/"}>
                        <DropdownMenuItem className="flex gap-4 items-center cursor-pointer">
                            <Home /> <h4>Home</h4>
                        </DropdownMenuItem>
                    </Link>
                    <Link href={"/about"}>
                        <DropdownMenuItem className="flex gap-4 items-center cursor-pointer">
                            <Building /><h4>About</h4>
                        </DropdownMenuItem>
                    </Link>
                    <Link href={"/campaign"}>
                        <DropdownMenuItem className="flex gap-4 items-center cursor-pointer">
                            <StoreIcon /> <h4>Campaign</h4>
                        </DropdownMenuItem>
                    </Link>
                </div>
                <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {categoryList.map((category, index) => (
                    <Link href={"/category/" + category.slug} key={index}>
                        <DropdownMenuItem key={index} className="flex gap-4 items-center cursor-pointer">
                            <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + category?.icon[0]?.url} unoptimized={true} alt="icon" width={30} height={30} />
                            <h4 className="text-lg">
                                {category.name}
                            </h4>
                        </DropdownMenuItem>
                    </Link>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DropDown
