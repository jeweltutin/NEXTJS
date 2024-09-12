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
import { UserContext } from "@/context";
import { useContext } from "react";


function SingleUserCard({ user }) {
    const { setCurrentEditedId, setDialog, setAddNewUserFormData } = useContext(UserContext);

    async function handleDelete(getCurrentUserId) {
        if (window.confirm("Delete the item?")) {
            const result = await deleteUserAction(getCurrentUserId, "/user-management");
        }
    }

    function handleEdit(getCurrentUser){
        setDialog(true);
        setAddNewUserFormData({
            name: getCurrentUser?.name,
            email: getCurrentUser?.email,
            phone: getCurrentUser?.phone,
            address: getCurrentUser?.address
        });
        setCurrentEditedId(getCurrentUser?._id);
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
                <Button onClick={() =>  handleEdit(user)}>Edit</Button>
                <Button onClick={() => handleDelete(user?._id)} variant="destructive">Delete</Button>
            </CardFooter>
        </Card>
    )
}

export default SingleUserCard;
