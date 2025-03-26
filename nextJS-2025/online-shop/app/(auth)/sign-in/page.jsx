"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import logo from "@/public/images/logo.png";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
//import GlobalApi from '@/actions/GlobalApi';
import BackendApi from '@/actions/BackendApi';
import { toast } from 'sonner';
import { LoaderIcon } from 'lucide-react';

function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loader, setLoader] = useState();
  const router = useRouter();

  /*   useEffect(() => {
      const jwt = sessionStorage.getItem('jwt');
      if (jwt) {
        router.push("/");
      }
    }, []) */

  useEffect(() => {
    const jwt = sessionStorage.getItem('jwt');
    const user = JSON.parse(sessionStorage.getItem('user'));

    if (jwt && user) {
      // Check the user's role and navigate accordingly
      const userRole = user.role;

      if (userRole === 'admin' || userRole === 'manager' || userRole === 'editor') {
        router.push("/dx-admin/dashboard");  // Redirect to dashboard for admin, manager, or editor
      } else if (userRole === 'user' || userRole === 'customer') {
        router.push("/");  // Redirect to home page for user or customer
      }
    }
  }, [router]);
  /*   const onSignIn = async () => {
      setLoader(true);
      try {
        const resp = await BackendApi.signIn(email, password);
        console.log("API Response:", resp.data);  // Log the full response
  
        sessionStorage.setItem("user", JSON.stringify(resp.data.user));
        sessionStorage.setItem("jwt", resp.data.token);
  
        toast("Login Successful!");
        router.push("/");
      } catch (error) {
        console.error(error);
        toast(error?.response?.data?.error?.message || "Something went wrong!");
      } finally {
        setLoader(false);
      }
    }; */

  const onSignIn = async () => {
    setLoader(true);
    try {
      const resp = await BackendApi.signIn(email, password);
      console.log("API Response:", resp.data);  // Log the full response

      // Store user data and token in sessionStorage
      sessionStorage.setItem("user", JSON.stringify(resp.data.user));
      sessionStorage.setItem("jwt", resp.data.token);

      // Get the user role
      const userRole = resp.data.user.role;

      // Check the user role and navigate to the appropriate page
      if (userRole === 'admin' || userRole === 'manager' || userRole === 'editor') {
        router.push("/dx-admin/dashboard");  // Redirect to dashboard for admin, manager, or editor
      } else if (userRole === 'user' || userRole === 'customer') {
        router.push("/");  // Redirect to home page for user or customer
      } else {
        // Handle undefined roles, if necessary
        toast("Invalid role detected");
      }

      toast("Login Successful!");
    } catch (error) {
      console.error(error);
      toast(error?.response?.data?.error?.message || "Something went wrong!");
    } finally {
      setLoader(false);
    }
  };



  return (
    <div className="flex items-baseline justify-center my-36">
      <div className="flex flex-col items-center justify-center p-10 bg-slate-100 border-gray-200">
        <Image src={logo} alt='logo' className="w-[200px] h-auto" />
        <h2 className="font-bold text-3xl">Sign In to Account</h2>
        <h3 className="text-gray-500">Enter your Email and Password to Sign In</h3>
        <div className="w-full flex flex-col gap-5 mt-7">
          <Input onChange={(e) => setEmail(e.target.value)} className="bg-background h-11" placeholder="name@example.com" />
          <Input onChange={(e) => setPassword(e.target.value)} className="bg-background h-11" type="password" placeholder="Password" />

          <Button onClick={() => onSignIn()} disabled={!(email || password)} className="h-11">
            {loader ? <LoaderIcon className="animate-spin" /> : "Sign In"}
          </Button>
          <p>
            Don't have an account ?
            <Link className="text-blue-500" href="/create-account"> Click here to create new account</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignIn;
