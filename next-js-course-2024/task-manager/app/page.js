"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const user = "";

    if (user) {
      router.replace("/dashboard");

    } else {
      router.replace("/log-in");
      //router.push("/log-in");
    }
  }, [])

  return (
    <div></div>
  );
}
