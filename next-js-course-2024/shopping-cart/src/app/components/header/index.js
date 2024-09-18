"use client";

import Link from "next/link";

import { loginAction, logoutAction } from "@/actions";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";

function Header({ getSession }) {
    //console.log(getSession, "getSession in header");

    async function handleOauthSignOut() {
        await logoutAction();
    }

    async function handleOauthSignIn() {
        await loginAction();
    }

    return (
        <header className="relative min-h-[90px]">
            <div className="flex  tracking-wide w-full fixed z-50 py-4 px-4 shadow-md bg-white">
                <div className="flex flex-wrap items-center justify-between gap-5 w-full pl-20">
                    <Link href={"/"}><Image src="/images/logo.jpg" alt="logo" width={70} height={70}/></Link>
                </div>
                <ul className="flex gap-6 items-center justify-center mr-10">
                    <li className="text-lg font-semibold">
                        <Link href={"/"}>Products</Link>
                    </li>
                    <li className="text-lg font-semibold">
                        <Link href={"/cart"}>Cart</Link>
                    </li>
                </ul>
                <div className="flex space-x-3 pt-3">
                    <form action={getSession?.user ? handleOauthSignOut : handleOauthSignIn}>
                        <Button type="submit">{getSession?.user ? "Logout" : "Login"}</Button>
                    </form>
                </div>
            </div>
        </header>
    );
}

export default Header;