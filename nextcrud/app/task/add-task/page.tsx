"use client"
import { addTodo } from "@/api";
import { FormEventHandler, useState } from "react";
import { useRouter } from 'next/navigation';


const addTask = () => {
    const router = useRouter();
    const [newTaskValue, setNewTaskValue] = useState<string>("");
    const [taskDescription, setTaskDescription] = useState("");
    const [time, setTime] = useState("");
    const [message, setMessage] = useState("");
    //const handleSubmitNewTodo = (e: any) => {
    const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        console.log(newTaskValue);
        const insertData = await addTodo({
            _id: "95",
            task: taskDescription,
            time: time
        });

        if (insertData !=='Failed') {
            setTaskDescription("");
            setTime("");
            setMessage("User created successfully");
        } 
        if(insertData ==='Failed'){
            setMessage('Failed to create todo')
        }


    }

    return (
        <main className="max-w-4xl mx-auto ">
            <div className="text-center my-100 flex flex-col gap-4">
                <h1 className="text-2xl font-bold mt-20">Todo List App</h1>
                <form method="dialog" onSubmit={handleSubmitNewTodo} className="modal-box m-auto">
                    <h3 className="font-bold text-lg" >Add New Todo</h3>
                    <div className="form-control w-full max-w-xs m-auto">
                        <label className="label">
                            <span className="label-text">What is the task?</span>
                        </label>
                        <input type="text" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} placeholder="Type here" className="input input-bordered w-full max-w-xs mb-4" />
                        <label className="label">
                            <span className="label-text">Time period:</span>
                        </label>
                        <input type="text" value={time} onChange={(e) => setTime(e.target.value)} placeholder="Time:" className="input input-bordered w-full max-w-xs mb-4" />
                        <button type="submit" className="btn btn-success text-white">Save</button>
                    </div>
                    <div className="message">{message ? <p>{message}</p> : null}</div>
                </form>

            </div>

        </main>

    )
}

export default addTask
