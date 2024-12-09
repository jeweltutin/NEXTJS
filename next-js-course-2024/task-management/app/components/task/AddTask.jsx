import React, { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Textbox from "../Textbox";
import { useForm } from "react-hook-form";
import SelectList from "../SelectList";
import { BiImages } from "react-icons/bi";
import Button from "../Button";
import UserList from "./UserList";

const LISTS = ["TODO", "IN PROGRESS", "COMPLETED"];
const PRIORIRY = ["HIGH", "MEDIUM", "NORMAL", "LOW"];

function AddTask({ open, setOpen, taskData }) {
    const task = "";
    let defaultValues = taskData ?? {};
    console.log('Modal open state:', open); // Debugging
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({defaultValues});

    const [team, setTeam] = useState(task?.team || []);
    const [stage, setStage] = useState(task?.stage?.toUpperCase() || LISTS[0]);
    const [priority, setPriority] = useState(
        task?.priority?.toUpperCase() || PRIORIRY[2]
    );
    const [assets, setAssets] = useState([]);
    const [uploading, setUploading] = useState(false);

    const submitHandler = () => { };

    const handleSelect = (e) => {
        setAssets(e.target.files);
    };

    return (
        <Dialog open={open} as="div" className="relative z-10 focus:outline-none" onClose={() => setOpen(false)}>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 bg-black/50">
                    <DialogPanel transition className="w-full max-w-md lg:max-w-xl rounded-xl bg-white lg:p-9 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
                        <DialogTitle as="h3" className="text-base font-bold leading-6 text-gray-900 mb-4">
                            {task ? "UPDATE TASK" : "ADD TASK"}
                        </DialogTitle>

                        <div className='mt-2 flex flex-col gap-6'>
                            <Textbox
                                placeholder='Task Title'
                                type='text'
                                name='title'
                                label='Task Title'
                                addClasses='w-full rounded'
                                register={register("title", { required: "Title is required" })}
                                error={errors.title ? errors.title.message : ""}
                            />

                            <UserList setTeam={setTeam} team={team} />

                            <div className='flex gap-4'>
                                <SelectList label='Task Stage' lists={LISTS} selected={stage} setSelected={setStage} />
                                <div className='w-full'>
                                    <Textbox
                                        placeholder='Date'
                                        type='date'
                                        name='date'
                                        label='Task Date'
                                        addClasses='w-full rounded'
                                        register={register("date", {
                                            required: "Date is required!",
                                        })}
                                        error={errors.date ? errors.date.message : ""}
                                    />
                                </div>
                            </div>

                            <div className='flex gap-4'>
                                <SelectList
                                    label='Priority Level'
                                    lists={PRIORIRY}
                                    selected={priority}
                                    setSelected={setPriority}
                                />

                                <div className='w-full flex items-center justify-center mt-4'>
                                    <label className='flex items-center gap-1 text-base text-ascent-2 hover:text-ascent-1 cursor-pointer my-4' htmlFor='imgUpload'>
                                        <input
                                            type='file'
                                            className='hidden'
                                            id='imgUpload'
                                            onChange={(e) => handleSelect(e)}
                                            accept='.jpg, .png, .jpeg'
                                            multiple={true}
                                        />
                                        <BiImages />
                                        <span>Add Assets</span>
                                    </label>
                                </div>
                            </div>

                            <div className='bg-gray-50 py-6 sm:flex sm:flex-row-reverse gap-4'>
                                {uploading ? (
                                    <span className='text-sm py-2 text-red-500'>
                                        Uploading assets
                                    </span>
                                ) : (
                                    <Button label='Submit' type='submit' addClasses='bg-blue-600 px-8 text-sm font-semibold text-white hover:bg-blue-700  sm:w-auto' />
                                )}

                                <Button
                                    type='button'
                                    addClasses='bg-white px-5 text-sm font-semibold text-gray-900 sm:w-auto'
                                    onClick={() => setOpen(false)}
                                    label='Cancel'
                                />
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}

export default AddTask;
