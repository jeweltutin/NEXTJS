"use client";
import React, { Fragment, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { AiTwotoneFolderOpen } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { HiDuplicate } from "react-icons/hi";
import { MdAdd, MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";
import AddTask from "./AddTask";
import AddSubTask from "./AddSubTask";
import { useRouter } from "next/navigation";
import ConfirmationDialog from "../Dialogs";
import { useDuplicateTaskMutation, useTrashTaskMutation } from "@/app/redux/slices/api/taskApiSlice";
import { toast } from "sonner";

const TaskDialog = ({ task }) => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const router = useRouter();
  const [deleteTask] = useTrashTaskMutation();
  const [duplicateTask] = useDuplicateTaskMutation();

  const duplicateHandler = async () => {
    try {
      const res = await duplicateTask(task._id).unwrap();
      toast.success(res?.message, {
        className: "sonner-toast-success"
      });
      setTimeout(() => {
        setOpenDialog(false);
        window.location.reload();
      }, 500);
    } catch (err) {
      console.log(err);
      toast.error(err?.data?.message || err.error, {
        className: "sonner-toast-error"
      }); 
    }
  };
  const deleteClicks = () => {
    //alert("Are you sure?");
    setOpenDialog(true);
  };
  const deleteHandler = async () => {
    try {
      const res = await deleteTask({
        id: task._id,
        isTrashed: "trash",
      }).unwrap();
      toast.success(res?.message, {
        className: "sonner-toast-success"
      });
      setTimeout(() => {
        setOpenDialog(false);
        window.location.reload();
      }, 500);
    } catch (err) {
      console.log(err);
      toast.error(err?.data?.message || err.error, {
        className: "sonner-toast-error"
      });
    }
  };

  const items = [
    {
      label: "Open Task",
      icon: <AiTwotoneFolderOpen className='mr-2 h-5 w-5' aria-hidden='true' />,
      // onClick: () => router.push(`/tasks/${task._id}`),
      onClick: () => router.push(`/tasks/task/${task._id}`),
    },
    {
      label: "Edit",
      icon: <MdOutlineEdit className='mr-2 h-5 w-5' aria-hidden='true' />,
      onClick: () => setOpenEdit(true),
    },
    {
      label: "Add Sub-Task",
      icon: <MdAdd className='mr-2 h-5 w-5' aria-hidden='true' />,
      onClick: () => setOpenModal(true),
    },
    {
      label: "Duplicate",
      icon: <HiDuplicate className='mr-2 h-5 w-5' aria-hidden='true' />,
      onClick: () => duplicateHandler(),
    },
  ];

  return (
    <>
      <div>
        <Menu as='div' className='relative inline-block text-left'>
          <MenuButton className='inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-600 '>
            <BsThreeDots />
          </MenuButton>

          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <MenuItems className='absolute p-4 right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none'>
              <div className='px-1 py-1 space-y-2'>
                {items.map((el) => (
                  <MenuItem key={el.label}>
                    <button onClick={el?.onClick} className="data-[active]:bg-blue-500 data-[active]:text-white text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm">
                      {el.icon}
                      {el.label}
                    </button>
                  </MenuItem>
                ))}
              </div>

              <div className='px-1 py-1'>
                <MenuItem>
                  <button onClick={() => deleteClicks()} className="data-[active]:bg-blue-500 data-[active]:text-white group flex w-full items-center rounded-md px-2 py-2 text-sm text-red-900">
                    <RiDeleteBin6Line className='mr-2 h-5 w-5 text-red-400' aria-hidden='true' />
                    Delete
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </Transition>
        </Menu>
      </div>

      <AddTask
        open={openEdit}
        setOpen={setOpenEdit}
        task={task}
        key={new Date().getTime()}
      />

      <AddSubTask openModal={openModal} setOpenModal={setOpenModal} id={task._id} />

      <ConfirmationDialog
        open={openDialog}
        setOpen={setOpenDialog}
        onClick={deleteHandler}
      />
    </>
  );
};

export default TaskDialog;