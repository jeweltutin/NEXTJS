import { fetchAuthUserAction } from "@/actions";
import Logout from "@/components/log-out";
import { redirect } from "next/navigation";


export default async function Home() {
  const currentUser = await fetchAuthUserAction();

  if (!currentUser?.success)  redirect("/sign-in");
  

  return (
    <div>
      <h1>Next JS Authentication</h1>
      <h2> User Name : {currentUser?.data?.userName}</h2>
      <h2> User email : {currentUser?.data?.email}</h2>
      <Logout />
    </div>
  );
}
