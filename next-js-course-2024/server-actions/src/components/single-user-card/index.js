"use client";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button";
import { deleteUserAction } from "@/actions";



function SingleUserCard({ user }) {

    async function handleDelete(getCurrentUserId) {
        if (window.confirm("Delete the item?")) {
            const result = await deleteUserAction(getCurrentUserId, "/user-management");
        }
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle>{ user?.name }</CardTitle>
                <CardDescription>{ user?.email }</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{ user?.phone }</p>
                <p>{ user?.address }</p>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button>Edit</Button>
                <Button onClick={() => handleDelete(user?._id)} variant="destructive">Delete</Button>
            </CardFooter>
        </Card>
    )
}

export default SingleUserCard;
