"use client";
import clsx from "clsx";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
// import ConfirmatioDialog, { UserAction } from "../components/Dialogs";
import AddUser from "@/app/components/AddUser";
import { summary } from "@/app/data";
import Button from "@/app/components/Button";
import ConfirmationDialog from "@/app/components/Dialogs";
import Title from "@/app/components/Title";
import { useDeleteUserMutation, useEditUserMutation, useGetTeamListQuery } from "@/app/redux/slices/api/userApiSlice";
import { getInitials } from "@/app/utils";
import { toast } from "sonner";
import { isAction } from "@reduxjs/toolkit";

const Team = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [selected, setSelected] = useState(null);

    /* const { data: userData, isloading, error } = useGetTeamListQuery(null, {
        pollingInterval: 60000, // Fetch every 60 seconds
    }); */

    const { data: userData, isloading, refetch, error } = useGetTeamListQuery();
    console.log(userData, error);
    const [deleteUser] = useDeleteUserMutation();
    const [editUser] = useEditUserMutation();

    const userEditHandler = async () => {
        try {
            const result = await editUser({
                isAction: !selected?.isActive,
                id: selected?._id
            });
            refetch();
            toast.success(result.data.message);
            setSelected(null);
            setTimeout(() => {
                setOpenEdit(false);
            }, 500);
        } catch (err) {
            console.log(err);
            toast.err(err?.data?.message || err.error);
        }
    };
    const deleteHandler = async () => {
        try {
            const result = await deleteUser(selected);
            refetch();  
            toast.success(result.data.message);
            setSelected(null);
            setTimeout(() => {
                setOpenEdit(false);
            }, 500);
        } catch (err) {
            console.log(err);
            toast.err(err?.data?.message || err.error);
        }
     };

    const deleteClick = (id) => {
        setSelected(id);
        setOpenDialog(true);
    };

    const createUserClick = () => {
        setSelected(null);
        setOpen(true);
    }

    const userStatusClick = (el) => {
        setSelected(el);
        setOpen(true);
    }

    const editClick = (el) => {
        setSelected(el);
        setOpen(true);
    };

    //console.log(selected);

    const TableHeader = () => (
        <thead className='border-b border-gray-300'>
            <tr className='text-black text-left'>
                <th className='py-2'>Full Name</th>
                <th className='py-2'>Title</th>
                <th className='py-2'>Email</th>
                <th className='py-2'>Role</th>
                <th className='py-2'>Active</th>
            </tr>
        </thead>
    );

    const TableRow = ({ user }) => (
        <tr className='border-b border-gray-200 text-gray-600 hover:bg-gray-400/10'>
            <td className='p-2'>
                <div className='flex items-center gap-3'>
                    <div className='w-9 h-9 rounded-full text-white flex items-center justify-center text-sm bg-blue-700'>
                        <span className='text-xs md:text-sm text-center'>
                            {getInitials(user.name)}
                        </span>
                    </div>
                    {user.name}
                </div>
            </td>

            <td className='p-2'>{user.title}</td>
            <td className='p-2'>{user.email || "user.emal.com"}</td>
            <td className='p-2'>{user.role}</td>

            <td>
                <button 
                    onClick={() => userStatusClick(user)}
                    className={clsx(
                        "w-fit px-4 py-1 rounded-full",
                        user?.isActive ? "bg-blue-200" : "bg-yellow-100"
                    )}
                >
                    {user?.isActive ? "Active" : "Disabled"}
                </button>
            </td>

            <td className='p-2 flex gap-4 justify-end'>
                <Button
                    addClasses='text-blue-600 hover:text-blue-500 font-semibold sm:px-0'
                    label='Edit'
                    type='button'
                    onClick={() => editClick(user)}
                />

                <Button
                    addClasses='text-red-700 hover:text-red-500 font-semibold sm:px-0'
                    label='Delete'
                    type='button'
                    onClick={() => deleteClick(user?._id)}
                />
            </td>
        </tr>
    );

    return (
        <>
            <div className='w-full md:px-1 px-0 mb-6'>
                <div className='flex items-center justify-between mb-8'>
                    <Title title='  Team Members' />
                    <Button
                        label='Add New User'
                        icon={<IoMdAdd className='text-lg' />}
                        addClasses='flex flex-row-reverse gap-1 items-center bg-blue-600 text-white rounded-md 2xl:py-2.5'
                        //onClick={() => { setSelected(null); setOpen(true)} }
                        onClick={() => createUserClick()}
                    />
                </div>

                <div className='bg-white px-2 md:px-4 py-4 shadow-md rounded'>
                    <div className='overflow-x-auto'>
                        <table className='w-full mb-5'>
                            <TableHeader />
                            <tbody>
                                {/* {summary?.users?.map((user, index) => ( */}
                                {userData?.map((user, index) => (
                                    <TableRow key={index} user={user} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <AddUser
                open={open}
                setOpen={setOpen}
                userData={selected || ""}
                key={new Date().getTime().toString()}
            />

            <ConfirmationDialog
                open={openDialog}
                setOpen={setOpenDialog}
                onClick={deleteHandler}
            />
            {/* 
            <UserAction
                open={openAction}
                setOpen={setOpenAction}
                onClick={userActionHandler}
            /> */}
        </>
    );
};

export default Team;