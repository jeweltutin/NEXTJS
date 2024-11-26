"use client";
import {
    MdDashboard,
    MdOutlineAddTask,
    MdOutlinePendingActions,
    MdSettings,
    MdTaskAlt,
  } from "react-icons/md";
  import { FaTasks, FaTrashAlt, FaUsers } from "react-icons/fa";
import { useSelector } from "react-redux";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

function Sidebar() {
    const { user } = useSelector((state) => state.auth);
    const pathName = usePathname();
    const path = pathName.split("/")[1];
    
    const linkData = [
        {
            label: "Dashboard",
            link: "dashboard",
            icon: <MdDashboard />,
        },
        {
            label: "Tasks",
            link: "tasks",
            icon: <FaTasks />,
        },
        {
            label: "Completed",
            link: "completed/completed",
            icon: <MdTaskAlt />,
        },
        {
            label: "In Progress",
            link: "in-progress/in progress",
            icon: <MdOutlinePendingActions />,
        },
        {
            label: "To Do",
            link: "todo/todo",
            icon: <MdOutlinePendingActions />,
        },
        {
            label: "Team",
            link: "team",
            icon: <FaUsers />,
        },
        {
            label: "Trash",
            link: "trashed",
            icon: <FaTrashAlt />,
        },
    ];
    const sidebarLinks = user?.isAdmin ? linkData : linkData.slice(0, 5);

    return (
        <div className='w-full  h-full flex flex-col gap-6 p-5'>
        <h1 className='flex gap-1 items-center'>
          <p className='bg-blue-600 p-2 rounded-full'>
            <MdOutlineAddTask className='text-white text-2xl font-black' />
          </p>
          <span className='text-2xl font-bold text-black'>TaskMe</span>
        </h1>
        <p>
            {path}
        </p>
  
        <div className='flex-1 flex flex-col gap-y-5 py-8'>
          {linkData.map((link) => ( 
            <Link href={link.link} key={link.label} className={clsx(
                "w-full lg:w-3/4 flex gap-2 px-3 py-2 rounded-full items-center text-gray-800 text-base hover:bg-[#2564ed2d]",
                path === link.link.split("/")[0] ? "bg-blue-700 text-neutral-100" : ""
              )}>
                {link.icon}<span className='hover:text-[#2564ed]'>{link.label}</span>
            </Link>
          ))}
        </div>
  
        <div className=''>
          <button className='w-full flex gap-2 p-2 items-center text-lg text-gray-800'>
            <MdSettings />
            <span>Settings</span>
          </button>
        </div>
      </div>
    )
}

export default Sidebar;
