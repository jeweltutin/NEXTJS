import React, { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Textbox from "../MyTextBox";
import { useForm } from "react-hook-form";
import SelectList from "../SelectList";
import { BiImages } from "react-icons/bi";
import Button from "../Button";
import UserList from "./UserList";

import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { fireBaseApp } from "../../utils/firebase";
import { useCreateTaskMutation, useUpdateTaskMutation } from "@/app/redux/slices/api/taskApiSlice";
import { toast } from "sonner";
import { dateFormatter } from "@/app/utils";

const LISTS = ["TODO", "IN PROGRESS", "COMPLETED"];
const PRIORITIES = ["HIGH", "MEDIUM", "NORMAL", "LOW"];

function AddTask({ open, setOpen, task }) {
    //console.log("Task Data: ",task);
    //const defaultValues = taskData || {};
    const defaultValues = {
        title: task?.title || "",
        date: dateFormatter(task?.date || new Date()),
        team: [],
        stage: "",
        priority: "",
        assets: []
    }
    //console.log("defaultValues:", defaultValues);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ defaultValues });

    const [team, setTeam] = useState(defaultValues.team || []);
    const [stage, setStage] = useState(defaultValues.stage || LISTS[0]);
    const [priority, setPriority] = useState(defaultValues.priority || PRIORITIES[2]);
    const [assets, setAssets] = useState([]);
    const [uploading, setUploading] = useState(false);

    const [createTask] = useCreateTaskMutation();
    const [updateTask] = useUpdateTaskMutation();

    const handleFileSelect = (e) => {
        setAssets([...e.target.files]);
    };

    const uploadFiles = async (files) => {
        const storage = getStorage(fireBaseApp);
        const urls = await Promise.all(
            Array.from(files).map((file) =>
                new Promise((resolve, reject) => {
                    const storageRef = ref(storage, `tasks/${Date.now()}_${file.name}`);
                    const uploadTask = uploadBytesResumable(storageRef, file);
                    uploadTask.on(
                        "state_changed",
                        () => setUploading(true),
                        (error) => reject(error),
                        async () => {
                            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                            resolve(downloadURL);
                        }
                    );
                })
            )
        );
        setUploading(false);
        return urls;
    };

    const onSubmit = async (data) => {
        try {
            setUploading(true);
            const uploadedURLs = await uploadFiles(assets);
            const payload = {
                ...data,
                assets: uploadedURLs,
                team,
                stage,
                priority,
            };

            if (task?._id) {
                await updateTask({ ...payload, _id: task._id }).unwrap();
                toast.success("Task Updated Successfully",{
                    className: "sonner-toast-success"
                });
            } else {
                const res = await createTask(payload).unwrap();
                toast.success(res.message, {
                    className: "sonner-toast-success"
                });
            }

            /* const res = task?._id
                ? await updateTask({ ...payload, _id: task._id }).unwrap()
                : await createTask(payload).unwrap();

            toast.success(res.message); */
            setOpen(false);
        } catch (error) {
            toast.error("Error submitting task", {
                className: "sonner-toast-error"
            });
            console.log(error);
        } finally {
            setUploading(false);
        }
    };

    return (
        <Dialog open={open} as="div" className="relative z-10" onClose={() => setOpen(false)}>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 bg-black/50">
                    <DialogPanel className="w-full max-w-md lg:max-w-xl rounded-xl bg-white p-6 lg:p-9">
                        <DialogTitle className="text-base font-bold text-gray-900 mb-4">
                            {task ? "UPDATE TASK" : "ADD TASK"}
                        </DialogTitle>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                            <Textbox
                                placeholder="Task Title"
                                type="text"
                                name="title"
                                label="Task Title"
                                addClasses='w-full rounded'
                                register={register("title", { required: "Title is required" })}
                                error={errors.title?.message}
                            />
                            <UserList setTeam={setTeam} team={team} />
                            <div className="flex gap-4">
                                <SelectList label="Task Stage" lists={LISTS} selected={stage} setSelected={setStage} />
                                <div className="w-full">
                                    <Textbox
                                        placeholder="Date"
                                        type="date"
                                        name="date"
                                        label="Task Date"
                                        addClasses='w-full rounded'
                                        register={register("date", { required: "Date is required" })}
                                        error={errors.date?.message}
                                    />
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <SelectList label="Priority" lists={PRIORITIES} selected={priority} setSelected={setPriority} />
                                <div className='w-full flex items-center justify-center mt-4'>
                                    <label className="flex items-center gap-1 text-base text-ascent-2 hover:text-ascent-1 cursor-pointer my-4">
                                        <BiImages />
                                        <span>Add Assets</span>
                                        <input type="file" className="hidden" onChange={handleFileSelect} multiple accept="image/*" />
                                    </label>
                                </div>
                            </div>



                            <div className='bg-gray-50 py-6 sm:flex sm:flex-row-reverse gap-4'>
                                {uploading ? (
                                    <span className='text-sm py-2 text-red-500'> Uploading assets</span>
                                ) : (
                                    <Button label='Submit' type='submit' addClasses='bg-blue-600 px-8 text-sm font-semibold text-white hover:bg-blue-700 sm:w-auto' />
                                )}
                                <Button type='button' onClick={() => setOpen(false)} label='Cancel' addClasses='bg-white px-5 text-sm font-semibold text-gray-900 sm:w-auto' />
                            </div>


                        </form>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
}

export default AddTask;
