"use client"

import { FormEventHandler, useState } from "react";
import { useRouter } from 'next/navigation';
import { addMyTask } from "@/api";


const addTask = () => {
    const router = useRouter();
    //const [newTaskValue, setNewTaskValue] = useState<string>("");
    const [taskDescription, setTaskDescription] = useState("");
    const [time, setTime] = useState("");
    const [message, setMessage] = useState("");
    //const handleSubmitNewTodo = (e: any) => {
    const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        //console.log(newTaskValue);
        const insertData = await addMyTask({
            _id: "",
            task: taskDescription,
            time: time
        });


        if (insertData !== 'Failed') {
            setTaskDescription("");
            setTime("");
            setMessage("Task created successfully");
        }
        if (insertData === 'Failed') {
            setMessage('Failed to create task')
        }

        //router.push('/')
        //router.refresh();
    }

    return (
        <main className="max-w-4xl mx-auto ">
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
                        Add New Todo
                    </h1>
                    <form className="mt-6" onSubmit={handleSubmitNewTodo}>
                        <div className="mb-2">
                            <label htmlFor="task" className="block text-sm font-semibold text-gray-800" >
                                What is the task?
                            </label>
                            <input type="text" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Task explain: " />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="time" className="block text-sm font-semibold text-gray-800">
                                Time period:
                            </label>
                            <input type="text" value={time} onChange={(e) => setTime(e.target.value)} className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Time: " />
                        </div>

                        <div className="mt-6">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
                <div className="message">{message ? <p>{message}</p> : null}</div>
            </div>
        </main>
    )
}

export default addTask
