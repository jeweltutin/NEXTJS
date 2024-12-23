"use client";

import clsx from "clsx";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import AddUser from "@/app/components/AddUser";
import ConfirmationDialog, { UserAction } from "@/app/components/Dialogs";
import Title from "@/app/components/Title";
import Button from "@/app/components/Button";
import {
  useDeleteUserMutation,
  useEditUserMutation,
  useGetTeamListQuery,
  useUserActionMutation,
} from "@/app/redux/slices/api/userApiSlice";
import { getInitials } from "@/app/utils";
import { toast } from "sonner";

const Team = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [open, setOpen] = useState(false);
  const [openAction, setOpenAction] = useState(false);
  const [selected, setSelected] = useState(null);

  const { data: userData, isLoading, refetch, error } = useGetTeamListQuery();
  const [deleteUser] = useDeleteUserMutation();
  const [userAction] = useUserActionMutation();

  const userActionHandler = async () => {
    try {
      const result = await userAction({
        isActive: !selected?.isActive,
        id: selected?._id,
      }).unwrap();
      refetch();
      toast.success(result.message, {
        className: 'bg-green-500 text-white'
      });
      refetch();
      setSelected(null);
      setOpenAction(false);
    } catch (err) {
      console.error(err);
      toast.error(err?.data?.message || "An error occurred", {
        className: 'bg-red-500 text-white'
      });
    }
  }

  const handleDelete = async () => {
    try {
      const result = await deleteUser(selected._id).unwrap();
      refetch();
      toast.success(result.message);
      setSelected(null);
      setOpenDialog(false);
    } catch (err) {
      console.error(err);
      toast.error(err?.data?.message || "An error occurred");
    }
  };

  const handleDeleteClick = (id) => {
    setSelected({ _id: id });
    setOpenDialog(true);
  };

  const handleCreateUserClick = () => {
    setSelected(null); // Clear any pre-selected user data
    setOpen(true);    // Open the modal
  };

  const handleEditClick = (user) => {
    setSelected(user);
    setOpen(true);
  };

  const handleStatusClick = (el) => {
    setSelected(el);;
    setOpenAction(true);
  }

  const TableHeader = () => (
    <thead className="border-b border-gray-300">
      <tr className="text-black text-left">
        <th className="py-2">Full Name</th>
        <th className="py-2">Title</th>
        <th className="py-2">Email</th>
        <th className="py-2">Role</th>
        <th className="py-2">Active</th>
        <th className="py-2 text-right">Actions</th>
      </tr>
    </thead>
  );

  const TableRow = ({ user }) => (
    <tr className="border-b border-gray-200 text-gray-600 hover:bg-gray-400/10">
      <td className="p-2">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full text-white flex items-center justify-center text-sm bg-blue-700">
            <span className="text-xs md:text-sm text-center">{getInitials(user.name)}</span>
          </div>
          {user.name}
        </div>
      </td>
      <td className="p-2">{user.title}</td>
      <td className="p-2">{user.email || "N/A"}</td>
      <td className="p-2">{user.role}</td>
      <td className="p-2">
        <button
          onClick={() => handleStatusClick(user)}
          className={clsx(
            "w-fit px-4 py-1 rounded-full",
            user?.isActive ? "bg-blue-200" : "bg-yellow-100"
          )}
        >
          {user?.isActive ? "Active" : "Disabled"}
        </button>
      </td>
      <td className="p-2 flex gap-4 justify-end">
        <Button
          addClasses="text-blue-600 hover:text-blue-500 font-semibold sm:px-0"
          label="Edit"
          type="button"
          onClick={() => handleEditClick(user)}
        />
        <Button
          addClasses="text-red-700 hover:text-red-500 font-semibold sm:px-0"
          label="Delete"
          type="button"
          onClick={() => handleDeleteClick(user?._id)}
        />
      </td>
    </tr>
  );

  return (
    <div className="w-full md:px-1 px-0 mb-6">
      <div className="flex items-center justify-between mb-8">
        <Title title="Team Members" />
        <Button
          label="Add New User"
          icon={<IoMdAdd className="text-lg" />}
          addClasses="flex flex-row-reverse gap-1 items-center bg-blue-600 text-white rounded-md 2xl:py-2.5"
          onClick={handleCreateUserClick}
        />
      </div>
      <div className="bg-white px-2 md:px-4 py-4 shadow-md rounded">
        <div className="overflow-x-auto">
          <table className="w-full mb-5">
            <TableHeader />
            <tbody>
              {userData?.map((user, index) => (
                <TableRow key={index} user={user} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <AddUser open={open} setOpen={setOpen} userData={selected} refetch={refetch} />

      <ConfirmationDialog       // Delete Modal
        open={openDialog}
        setOpen={setOpenDialog}
        onClick={handleDelete}
      />

      <UserAction openAction={openAction} setOpenAction={setOpenAction} onClick={userActionHandler} refetch={refetch} />
    </div>
  );
};

export default Team;
