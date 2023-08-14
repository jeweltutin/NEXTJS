'use client'
import { deleteTodo } from "@/api";
import { MyTask } from "@/types/tasks";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiEdit, FiTrash2 } from 'react-icons/fi';

interface TaskProps {
    task: MyTask;
}

/*type TaskProps = {
   task: MyTask;
}*/

const Task: React.FC<TaskProps> = ({ task }) => {
    const router = useRouter();

    const deleteTask = async (taskId: string) => {
        //alert(taskId);
        if (window.confirm("Delete?")) {
            await deleteTodo(taskId);
            router.refresh();
        }
    }
    return (
        <tr key={task.id}>
            <td>{task.id}</td>
            <td className="w-50">{task.text}</td>
            <td>{task.time}</td>
            <td className="flex gap-5">
                <Link href={`/task/edit/${task.id}`}><FiEdit className="text-blue-500" size={20} /></Link>
                <button onClick={(e) => deleteTask(task.id)}><FiTrash2 className="text-red-500" size={20} /></button>
            </td>
        </tr>
    )
}

export default Task;
