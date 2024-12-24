"use client";
import { summary } from '@/app/data';
import {MdAdminPanelSettings} from "react-icons/md";
import { LuClipboardEdit } from "react-icons/lu";
import { FaNewspaper, FaUsers } from "react-icons/fa";
import { FaArrowsToDot } from "react-icons/fa6";
import Card from '@/app/components/Card';
import Chart from '@/app/components/Home/Chart';
import TaskTable from '@/app/components/Home/TaskTable';
import UserTable from '@/app/components/Home/UserTable';
import { useGetDashboardStatsQuery } from '@/app/redux/slices/api/taskApiSlice';
import Loader from '@/app/components/Loader';

function Dashboard() {
    const totals = summary.tasks;

    const { data, isLoading, error } = useGetDashboardStatsQuery();
    //const totals = data?.tasks;
    if (isLoading) (
        <div className='py-10'>
            <Loader />
        </div>
    )

    const stats = [
        {
            _id: "1",
            label: "TOTAL TASK",
            total: data?.totalTasks || 0,
            icon: <FaNewspaper />,
            bg: "bg-[#1d4ed8]",
        },
        {
            _id: "2",
            label: "COMPLTED TASK",
            total: totals["completed"] || 0,
            icon: <MdAdminPanelSettings />,
            bg: "bg-[#0f766e]",
        },
        {
            _id: "3",
            label: "TASK IN PROGRESS ",
            total: totals["in progress"] || 0,
            icon: <LuClipboardEdit />,
            bg: "bg-[#f59e0b]",
        },
        {
            _id: "4",
            label: "TODOS",
            total: totals["todo"],
            icon: <FaArrowsToDot />,
            bg: "bg-[#be185d]" || 0,
        },
    ];

    

    return (
        <div className='h-full py-4'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                {stats.map(({ icon, bg, label, total }, index) => (
                    <Card key={index} icon={icon} bg={bg} label={label} count={total} />
                ))}
            </div>

            <div className='w-full bg-white my-16 p-4 rounded shadow-sm'>
                <h4 className='text-xl text-gray-600 font-semibold'>
                    Chart by Priority
                </h4>
                <Chart />
            </div>

            <div className='w-full flex flex-col md:flex-row gap-4 2xl:gap-10 py-8'>
                {/* /left */}

                <TaskTable tasks={summary.last10Task} />

                {/* /right */}

                <UserTable users={summary.users} />
            </div>
        </div>
    )
}

export default Dashboard
