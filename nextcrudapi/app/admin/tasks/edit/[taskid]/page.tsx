'use client'
import { editTodo, getTask } from "@/api";
import { useRouter } from "next/navigation";
import { FormEventHandler, useEffect, useState } from "react";

const EditTask = ({ params }: any) => {
    const router = useRouter();
    const tid = params.taskid;
    //console.log(tid);
    const [selectedTask, setSelectedTask] = useState<any>({});

    const updateTheTask = async (e: any) => {
    //const updateTheTask: FormEventHandler<HTMLFormElement> = async (e) => {
        //alert("Submitted");
        e.preventDefault();
        //console.log(e.target.aboutTask.value)
        await editTodo({
            _id: tid,
            task: e.target.aboutTask.value,
            time: e.target.time.value,
        });
        router.push('/admin/tasks')
        router.refresh();
    }

    useEffect(() => {
        const getData = async () => {
            const theTaskFromApi = await getTask(tid);
            setSelectedTask(theTaskFromApi);
        }
        getData();
    },[])

    return (
        <main className="max-w-4xl mx-auto ">
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
                        Edit Todo
                    </h1>
                    <form onSubmit={updateTheTask} className="mt-6" >
                        <div className="mb-2">
                            <label htmlFor="task" className="block text-sm font-semibold text-gray-800" >
                                What is the task?
                            </label>
                            <input type="text" name="aboutTask" defaultValue={selectedTask.task} className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Task explain: " />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="time" className="block text-sm font-semibold text-gray-800">
                                Time period:
                            </label>
                            <input type="text" name="time" defaultValue={selectedTask.time} className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Time: " />
                        </div>

                        <div className="mt-6">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default EditTask
