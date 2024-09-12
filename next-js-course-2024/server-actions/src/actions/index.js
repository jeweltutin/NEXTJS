"use server";

import connectToDB from "@/database";
import User from "@/models/user";
import { revalidatePath } from "next/cache";

/* export async function fetchListOfProducts(){
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data?.products; 
} */

export async function addNewUserActions(formData, pathToRevalidate) {
    await connectToDB();
    try {
        const newlyCreatedUser = await User.create(formData);
        if (newlyCreatedUser) {
            revalidatePath(pathToRevalidate);
            return {
                success: true,
                message: "User added successfully"
            }
        } else {
            return {
                success: false,
                message: "Error occured! Please try again"
            }
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Something went wrong!"
        }
    }
}

export async function fetchUsersAction() {
    await connectToDB();
    try {
        const listOfUsers = await User.find({});
        if (listOfUsers) {
            return {
                success: true,
                //users: listOfUsers
                users: JSON.parse(JSON.stringify(listOfUsers))
            }
        } else {
            return {
                success: false,
                message: "Error occured! Please try again"
            }
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Something went wrong!"
        }
    }
}

export async function editUserAction(currentUserId, formData, pathToRevalidate) {
    await connectToDB();
    try {
        const { name, email, phone, address } = formData;
        const updateUser = await User.findByIdAndUpdate(
            {
                _id: currentUserId
            },
            { name, email, phone, address },
            { new: true }
        )
        if (updateUser) {
            revalidatePath(pathToRevalidate);
            return {
                success: true,
                message: "User updated successfully!"
            }
        } else {
            return {
                success: false,
                message: "Not able to update the user! Please try again"
            }
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Something went wrong!"
        }
    }


}

export async function deleteUserAction(currentUserId, pathToRevalidate) {
    await connectToDB();
    try {
        const deletedUser = await User.findByIdAndDelete(currentUserId);
        if (deletedUser) {
            revalidatePath(pathToRevalidate);
            return {
                success: true,
                message: "User deleted successfully"
            }
        } else {
            console.log(error);
            return {
                success: false,
                message: "Not able perform delete operation"
            }
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Something went wrong!"
        }
    }
}