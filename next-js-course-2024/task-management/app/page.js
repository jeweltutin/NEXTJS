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
    <div>
      <h2>Build your work’s foundation with tasks</h2>
      <p>
        Plan, organize, and collaborate on any project with tasks
        that adapt to any workflow or type of work.
      </p>
    </div>
  );
}
