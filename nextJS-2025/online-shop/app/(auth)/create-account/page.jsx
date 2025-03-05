"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import logo from "@/public/images/logo.png";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import GlobalApi from '@/actions/GlobalApi';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { LoaderIcon } from 'lucide-react';

function CreateAccount() {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();
    const [loader,setLoader] = useState();
    const router = useRouter();

    useEffect(() => {
        const jwt = sessionStorage.getItem('jwt');
        if (jwt) {
            router.push("/");
        }
    }, [])

    const onCreateAccount = () => {
        setLoader(true);
        GlobalApi.registerUser(username, email, password).then(resp => {
            console.log(resp.data.user);
            console.log(resp.data.jwt);

            sessionStorage.setItem('user', JSON.stringify(resp.data.user));
            sessionStorage.setItem('jwt', resp.data.jwt);           
            toast("Account Created Successfully");
            router.push("/");
            setLoader(false);
        }, (error) => {
            //toast("Error while creating account");
            toast(error?.response?.data?.error?.message);
            setLoader(false);
        })
    }

    return (
        <div className="flex items-baseline justify-center my-32">
            <div className="flex flex-col items-center justify-center p-10 bg-slate-100 border-gray-200">
                <Image src={logo} alt='logo' className="w-[200px] h-auto" />
                <h2 className="font-bold text-3xl">Create an Account</h2>
                <h3 className="text-gray-500">Enter your Email and Password to create an account</h3>
                <div className="w-full flex flex-col gap-5 mt-7">
                    <Input onChange={(e) => setUsername(e.target.value)} className="bg-background h-11" placeholder="Username" />
                    <Input onChange={(e) => setEmail(e.target.value)} className="bg-background h-11" placeholder="name@example.com" />
                    {/* <Input onChange={(e) => setPhone(e.target.value)} className="bg-background" placeholder="Phone Number" /> */}
                    <Input onChange={(e) => setPassword(e.target.value)} className="bg-background h-11" type="password" placeholder="Password" />

                    <Button onClick={() => onCreateAccount()} disabled={!(username || email || password)} className="h-11">
                        {loader ? <LoaderIcon className="animate-spin" /> : "Create an Account"}
                    </Button>
                    <p>
                        Already have an account
                        <Link className="text-blue-500" href="/sign-in"> Click here to Sign In</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount;
