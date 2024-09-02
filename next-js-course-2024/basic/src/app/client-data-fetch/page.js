"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

//useEffect hook
//swr, useSwr hook
//with loading state

export default function ClientSideDataFetching() {

    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    async function fetchListOfUsers() {
        try {
            setLoading(true);
            const apiResponse = await fetch('https://dummyjson.com/users');
            const result = await apiResponse.json();

            if (result?.users) {
                setUsers(result.users);
                setLoading(false);
            }
        } catch (error) {
            throw new Error(error);
            setUsers([]);
            setLoading(false);
        }
    }


    useEffect(() => {
        fetchListOfUsers();
    }, [])

    if (loading) return <h3 className="font-extrabold text-3xl">Loading users! please wait</h3>

    return (
        <div className="">
            <h1 className="text-4xl font-bold text-center p-5 border-b-2 border-gray-300 mb-3">Server side data fetching<br/><small>User List Page</small></h1>
            <div className="flex justify-center">
                {users && users.length > 0 ?
                    <table className="w-full max-w-[950px] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th className="px-6 py-3">Name</th>
                                <th className="px-6 py-3">Email</th>
                                <th className="px-6 py-3">Age</th>
                                <th className="px-6 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <td className="px-6 py-3">{user.firstName} {user.lastName}</td>
                                    <td className="px-6 py-3">{user.email}</td>
                                    <td className="px-6 py-3">{user.age}</td>
                                    <td className="px-6 py-3">
                                        <Link href={`/server-data-fetch/${user.id}`} className="text-green-600">Details</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    : <h3> No user found </h3>
                }
            </div>
        </div>
    )
}
