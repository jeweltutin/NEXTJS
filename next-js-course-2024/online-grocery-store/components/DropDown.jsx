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
import { LayoutGrid } from "lucide-react";
import Image from "next/image";
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
                <h2 className="hidden md:flex gap-2 items-center border rounded-full p-2 px-10 bg-slate-200 cursor-pointer">
                    <LayoutGrid className="h-5 w-5" /> Category
                </h2>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {categoryList.map((category, index) => (
                    <DropdownMenuItem key={index} className="flex gap-4 items-center cursor-pointer">
                        <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + category?.icon[0]?.url} unoptimized={true} alt="icon" width={30} height={30} />
                        <h4 className="text-lg">
                            {category.name}
                        </h4>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DropDown
