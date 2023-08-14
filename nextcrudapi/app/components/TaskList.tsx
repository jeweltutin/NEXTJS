"use client"
import { deleteMyTask } from "@/api";
import { MyTask } from "@/types/tasks"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiEdit, FiTrash2 } from 'react-icons/fi';


interface TodoListProps {
    allTasksList: MyTask[];
}

type Props = {
    allTasksList: MyTask[];
}

//Also can use React.FC<>
//const TodoList: React.FunctionComponent<TodoListProps> = ({ allTasksList }) => {
const TaskList = ({ allTasksList }: Props) => {
    const router = useRouter();

    const deleteTask = async (taskId: string) => {
        //alert(taskId);
        if (window.confirm("Delete?")) {
            await deleteMyTask(taskId);
            router.refresh();
        }
    }

    return (
        <div className="overflow-x-auto">
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="p-1.5 w-full inline-block align-middle">
                        <div className="overflow-hidden border rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
                                            ID
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
                                            Job
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
                                            Time
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase ">
                                            Show
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase ">
                                            Edit
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase ">
                                            Delete
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {
                                        allTasksList.map((task, index) => (
                                            <tr key={index}>
                                                
                                                <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                                    {/* {task._id} */}
                                                    { index = index+1 }
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                    {task.task}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                    {task.time}
                                                </td>
                                                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                    {/* <a className="text-green-500 hover:text-green-700" href="#">
                                                        Show
                                                    </a> */}
                                                    <Link className="text-green-500 hover:text-green-700" href={`/task/show/${task._id}`} >Show</Link>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-right font-medium whitespace-nowrap">
                                                    <Link href={`/task/edit/${task._id}`}>
                                                        <FiEdit className="text-blue-500 text-center" size={20} />
                                                    </Link>
                                                </td>
                                                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                    <button className="text-red-500 hover:text-red-700" onClick={(e) => deleteTask(task._id)}>
                                                        <FiTrash2 className="text-red-500" size={20} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default TaskList
