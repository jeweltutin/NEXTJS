
import TaskList from "@/app/components/TaskList";
import Link from "next/link";
import { getAllTasks } from "@/api";
import AdminTaskList from "@/app/components/admin/AdminTaskList";

const Tasks = async () => {
    const allTasks = await getAllTasks();
    return (
        <>
            <div className="text-center my-5 flex flex-col gap-4">
                <h1 className="text-2xl font-bold">Todo List App</h1>
                <Link className="btn bg-teal-700 max-w-4xl text-white mx-auto" href="/admin/tasks/add-new">Add Task</Link>
            </div>
            <AdminTaskList allTasksList={allTasks} />
        </>
    )
}

export default Tasks
