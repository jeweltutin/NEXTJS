import clsx from "clsx";
import React, { useEffect, useState } from "react";
import {
    MdAttachFile,
    MdKeyboardArrowDown,
    MdKeyboardArrowUp,
    MdKeyboardDoubleArrowUp,
} from "react-icons/md";
import { useSelector } from "react-redux";
import { BGS, PRIOTITYSTYELS, TASK_TYPE, formatDate } from "../utils";
import TaskDialog from "./task/TaskDialog";
import { BiMessageAltDetail } from "react-icons/bi";
import { FaList } from "react-icons/fa";
import UserInfo from "./UserInfo";
import { IoMdAdd } from "react-icons/io";
import AddSubTask from "./task/AddSubTask";
import { AiTwotoneFolderOpen } from "react-icons/ai";
import Link from "next/link";
// import AddSubTask from "./task/AddSubTask";

const ICONS = {
    high: <MdKeyboardDoubleArrowUp />,
    medium: <MdKeyboardArrowUp />,
    low: <MdKeyboardArrowDown />,
};

const TaskCard = ({ task }) => {
    const { user } = useSelector((state) => state.auth);
    const [openModal, setOpenModal] = useState(false);

    //console.log("USER in Task: ", user?.data.isAdmin);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // Set to true after the component mounts on the client
    }, []);

    if (!isClient) {
        return null; // Return nothing during SSR
    }

    //console.log(user.isAdmin);

    return (
        <>
            <div className='w-full h-fit bg-white shadow-md p-4 rounded'>
                <div className='w-full flex justify-between'>
                    <div className={clsx(
                        "flex flex-1 gap-1 items-center text-sm font-medium",
                        PRIOTITYSTYELS[task?.priority]
                    )}>
                        <span className='text-lg'>{ICONS[task?.priority]}</span>
                        <span className='uppercase'>{task?.priority} Priority</span>
                    </div>

                    {user?.data?.isAdmin && <TaskDialog task={task} /> ||
                        <Link href={`/tasks/task/${task._id}`} className="flex items-center gap-2 px-2 bg-gray-400 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" >
                            <AiTwotoneFolderOpen className="h-5 w-5" aria-hidden="true" />
                            <span className="font-medium">Details</span>
                        </Link>}
                </div>

                <>
                    <div className='flex items-center gap-2'>
                        <div className={clsx("w-4 h-4 rounded-full", TASK_TYPE[task.stage])} />
                        <h4 className='line-clamp-1 text-black'>{task?.title}</h4>
                    </div>
                    <span className='text-sm text-gray-600'>
                        {formatDate(new Date(task?.date))}
                    </span>
                </>

                <div className='w-full border-t border-gray-200 my-2' />
                <div className='flex items-center justify-between mb-2'>
                    <div className='flex items-center gap-3'>
                        <div className='flex gap-1 items-center text-sm text-gray-600'>
                            <BiMessageAltDetail />
                            <span>{task?.activities?.length}</span>
                        </div>
                        <div className='flex gap-1 items-center text-sm text-gray-600 '>
                            <MdAttachFile />
                            <span>{task?.assets?.length}</span>
                        </div>
                        <div className='flex gap-1 items-center text-sm text-gray-600 '>
                            <FaList />
                            <span>0/{task?.subTasks?.length}</span>
                        </div>
                    </div>

                    <div className='flex flex-row-reverse'>
                        {task?.team?.map((m, index) => (
                            <div key={index}
                                className={clsx(
                                    "w-7 h-7 rounded-full text-white flex items-center justify-center text-sm -mr-1",
                                    BGS[index % BGS?.length]
                                )}>
                                <UserInfo user={m} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* sub tasks */}
                {task?.subTasks?.length > 0 ? (
                    <div className='py-4 border-t border-gray-200'>
                        <h5 className='text-base line-clamp-1 text-black'>
                            {task?.subTasks[0].title}
                        </h5>

                        <div className='p-4 space-x-8'>
                            <span className='text-sm text-gray-600'>
                                {formatDate(new Date(task?.subTasks[0]?.date))}
                            </span>
                            <span className='bg-blue-600/10 px-3 py-1 rounded0full text-blue-700 font-medium'>
                                {task?.subTasks[0].tag}
                            </span>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className='py-4 border-t border-gray-200'>
                            <span className='text-gray-500'>No Sub Task</span>
                        </div>
                    </>
                )}

                <div className='w-full pb-2'>
                    <button onClick={() => setOpenModal(true)} disabled={user?.isAdmin ? true : false}
                        className='w-[170px] flex gap-2 p-[5px] rounded items-center text-sm text-white bg-gray-400 font-semibold disabled:cursor-not-allowed disabled::text-gray-300'>
                        <IoMdAdd className='text-lg' />
                        <span>ADD SUBTASK</span>
                    </button>
                </div>
            </div>

            <AddSubTask openModal={openModal} setOpenModal={setOpenModal} id={task._id} />
        </>
    );
};

export default TaskCard;