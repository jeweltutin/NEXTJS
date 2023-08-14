
import TaskList from "@/app/components/TaskList";
import Header from "@/app/components/admin/Header";
import Sidebar from "@/app/components/admin/Sidebar";
import Link from "next/link";
import { getAllTasks } from "@/api";

const Tasks = async () => {
    const allTasks = await getAllTasks();
    return (
        <>
           <TaskList allTasksList={allTasks}/>
        </>
    )
}

export default Tasks
