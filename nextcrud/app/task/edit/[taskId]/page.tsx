"use client"
import { addTodo, editTodo, getAllTodos } from "@/api";
import { FormEventHandler, useState } from "react";
import { useRouter } from 'next/navigation';
import { useSearchParams } from "next/navigation";
import { useEffect } from 'react'

const handleSubmitEditTodo = ({ params }: any) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [message, setMessage] = useState("");
    const [data, setData] = useState<any>([])
    const [mytask, setMytask] = useState<any>({})
    const id = params.taskId;

    useEffect(() => {
        const getData = async () => {
            const data = await getAllTodos()
            setData(data);
            //console.log(data);
        }
        getData()
    }, [])

    useEffect(() => {
        if (data.length) {
            const mytask = data?.find((t: any) => t._id === id)
            setMytask(mytask);
            //console.log("The Task:" + mytask);

            //Works good
            /* const userData = [
                { id: 1, username: "jane", password: "1234" },
                { id: 2, username: "jack", password: "1234" },
                { id: 3, username: "john", password: "1234" },
                { id: 4, username: "elizabeth", password: "1234" },
            ];
            console.log(userData);
            const getUserById = (id: any) => data.find((user: any) => user.id === id);
            const userId = 10;
            const user = getUserById(userId);
            if (user !== undefined) {
                console.log(`User with id ${userId} found.`)
                console.log(user);
                console.log(user.username);
            } else console.log(`No user with id ${userId} found.`) */

        }
    }, [data])


    //const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    const handleSubmitEditTodo = async (e: any) => {
        e.preventDefault();

        // await editTodo({
        //     id: task.id,
        //     text: task.text,
        //     time: task.time
        // });

        await editTodo({
            _id: id,
            task: e.target.task.value,
            time: e.target.time.value,
        });
        setMessage("Successfully Updated!");
        router.push('/')
        //router.refresh();
    }
    //console.log(mytask)
    //console.log({ ...mytask })

    return (
        <main className="max-w-4xl mx-auto ">
            <div className="text-center my-100 flex flex-col gap-4">
                <h1 className="text-2xl font-bold mt-20">Todo List App</h1>
                <form method="dialog" onSubmit={handleSubmitEditTodo} className="modal-box m-auto">
                    <h3 className="font-bold text-lg" >Edit Todo</h3>
                    <div className="form-control w-full max-w-xs m-auto">
                        <label className="label">
                            <span className="label-text">What is the task?</span>
                        </label>
                        <input type="text" name="task" value={mytask.task} onChange={(e) => setMytask({ ...mytask, task: e.target.value })} placeholder="Type here" className="input input-bordered w-full max-w-xs mb-4" />
                        <label className="label">
                            <span className="label-text">Time period:</span>
                        </label>
                        <input type="text" name="time" value={mytask.time} onChange={(e) => setMytask({ ...mytask, time: e.target.value })} placeholder="Time:" className="input input-bordered w-full max-w-xs mb-4" />
                        <button type="submit" className="btn btn-success text-white">Save</button>
                    </div>
                    <div className="message">{message ? <p>{message}</p> : null}</div>
                </form>
            </div>

        </main>

    )
}

export default handleSubmitEditTodo
