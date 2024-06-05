import { Metadata } from "next";
import getAllUsers from "../lib/getAllUsers";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Users'
}

export default async function usersPage() {
    //const usersData: Promise<User[]> = getAllUsers();
    const usersData = getAllUsers();
    
    const users = await usersData;
    //console.log('hello');

    const content = (
        <section>
            <h2>
                <Link href="/">Back to Home</Link>
            </h2><br />
            {
                users.map((user: User) => {
                    return (
                        <>
                            <p key={user.id}>
                                <b><Link href={`/users/${user.id}`}>{user.name}</Link></b>
                                <br />
                                E-mail: {user.email}<br />
                                Phone: {user.phone}<br />
                                Website: {user.website}<br />
                                Company: {user.company.name}
                            </p>
                            <br />

                        </>
                    )
                })
            }
        </section>
    )


    return content
}
