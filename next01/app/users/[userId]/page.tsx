import getUser from "@/app/lib/getUser"
import getUserPosts from "@/app/lib/getUserPosts"
import { Suspense } from "react"
import UserPosts from "./components/userPosts"
import { Metadata } from "next"
import getAllUsers from "@/app/lib/getAllUsers"
import { notFound } from 'next/navigation'

type Params = {
    params: {
        userId: string
    }
}

export async function generateMetadata({ params: { userId } }: Params): Promise<Metadata> {
    const userData: Promise<User> = getUser(userId);
    const user: User = await userData;

    if (!user.name) {
        return {
            title: "User Not Found"
        }
    }

    return {
        title: user.name,
        description: `This is the page of ${user.name}`
    }
}

export default async function userPage({ params: { userId } }: Params) {
    const userData: Promise<User> = getUser(userId);
    const userPostsData: Promise<Post[]> = getUserPosts(userId);
    //const [user, userPosts] = await Promise.all([userData, userPostsData]);

    const user = await userData;

    if (!user.name) return notFound();

    return (
        <>
            <h2>{user.name}</h2><br />
            <h3>{user.email}</h3><br />
            <hr />
            <Suspense fallback={<h2>Loading...</h2>}>
                <UserPosts promise={userPostsData} />
                {/* <UserPosts posts={userPosts} />  */}
            </Suspense>
        </>
    )
}

export async function generateStaticParams() {
    const userData: Promise<User[]> = getAllUsers();
    const users = await userData;

    return users.map(user => ({
        userId: user.id.toString()
    }))
}