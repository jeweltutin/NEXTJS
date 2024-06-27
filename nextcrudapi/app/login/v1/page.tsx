'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //const [authData, setAuthData] = useState("");
    const [message, setMessage] = useState('You are not logged in');

    if (typeof window !== "undefined") {
        //const userData = localStorage.getItem("userInfo") || "";
        const userData = JSON.parse(localStorage.getItem("userInfo") as string) || "";
        //console.log(userData.token);
        if (userData.token) {
            router.push('/admin/dashboard');
        } else {
            //console.log('Not logged In');
        }
    }

    /* useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("userInfo") as string) || "";
        if (userData.token) {
            setAuthData(authData);
            router.push('/admin/dashboard');
        }
    }) */

    async function submitForm(e: any) {
        e.preventDefault();
        /* const data = await fetch('http://localhost:5000/api/user/Login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        }).then((getToken) => getToken.json()) */

        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        };

        const data = await fetch('http://localhost:5000/api/user/login', config)
            .then((uInfo) => uInfo.json());

        const token = data.token;
        const userName = data.name;
        const role = data.role;

        //console.log(data.token);

        const UserData: any = {
            token,
            userName,
            role
        }
        if (token) {
            setMessage(`Welcome ${userName} and you are ${data.role ? 'an admin' : 'not an admin'}`)
            //localStorage.setItem('userInfo', data);
            localStorage.setItem('userInfo', JSON.stringify(UserData));
            //router.push('/admin/dashboard');
        } else {
            setMessage('Something went wrong');
            //console.log("Not logged in");
        }
    }
    return (
        <>
            <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                <div className='max-w-container container side_padding flex justify-center md:justify-center items-center'>
                    <div className='max-w-400 bggray-200 w-300 rounded-lg  py-4 px-4 shadow-md shadow-slate-400 text-center'>
                        <p className='text-subtitle font-semibold text-brand_bg'>
                            Log in My Admin
                        </p>
                        <p>
                            {message}
                        </p>

                        <form className=' text-center mt-8'>
                            <div className='flex flex-col space-y-8 items-center justify-start'>
                                <div className='relative w-full'>
                                    <input
                                        name='email'
                                        type='text'
                                        className='bg-gray-50 w-full text-black text-red border-[1px] border-gray-300 focus:border-blue-300 text-sm py-1 h-10  px-2 rounded-lg outline-none'
                                        placeholder='Enter your email address'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />

                                </div>

                                <div className='relative w-full'>
                                    <input
                                        name='password'
                                        type='password'
                                        className='bg-gray-50 text-black text-red border-[1px] border-gray-300 focus:border-blue-300  text-sm py-1 h-10 w-full   px-2 rounded-lg outline-none'
                                        placeholder='Enter your password'
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <button
                                    className='w-full cursor-pointer rounded-lg para hover:bg-brand_color hover:text-brand_bg border-[1px] font-semibold hover:border-brand_bg bg-brand_bg py-1 text-center subtitle text-brand_color shadow-md'
                                    onClick={submitForm}
                                >
                                    Log in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Login

