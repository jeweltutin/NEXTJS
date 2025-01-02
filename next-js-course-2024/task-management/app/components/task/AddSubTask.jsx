import { useForm } from "react-hook-form";
// import ModalWrapper from "../ModalWrapper";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Textbox from "../MyTextBox";
import Button from "../Button";
import { useCreateSubTaskMutation } from "@/app/redux/slices/api/taskApiSlice";
import { toast } from "sonner";

const AddSubTask = ({ openModal, setOpenModal, id }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [addSbTask] = useCreateSubTaskMutation();

    const handleOnSubmit = async (data) => {
        try {
            const res = await addSbTask({ data, id }).unwrap();
            toast.success(res.message);
            setTimeout(() => {
                setOpenModal(false);
            }, 500);
        } catch (err) {
            console.log(err);
            toast.error(err?.data?.message || err.error);
        }
    };

    return (
        <Dialog as="div" open={openModal} onClose={() => setOpenModal(false)}>
            <form onSubmit={handleSubmit(handleOnSubmit)} className=''>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 bg-black/50">
                        <DialogPanel transition className="w-full max-w-md lg:max-w-xl rounded-xl bg-white lg:p-9 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
                            <DialogTitle as='h2' className='text-base font-bold leading-6 text-gray-900 mb-4'>
                                ADD SUB-TASK
                            </DialogTitle>

                            <div className='mt-2 flex flex-col gap-6'>
                                <Textbox
                                    placeholder='Sub-Task title'
                                    type='text'
                                    name='title'
                                    label='Title'
                                    addClasses='w-full rounded'
                                    register={register("title", {
                                        required: "Title is required!",
                                    })}
                                    error={errors.title ? errors.title.message : ""}
                                />

                                <div className="w-full flex flex-col gap-1">
                                    <label htmlFor="description" className='text-slate-800'>
                                        Description
                                    </label>
                                    <textarea placeholder='Sub-Task title' name="description"
                                        className="bg-transparent px-3 py-2.5 2xl:py-3 border border-gray-300 placeholder-gray-400 text-gray-900 outline-none text-base focus:ring-2 ring-blue-300"
                                    />
                                </div>


                                <div className='flex items-center gap-4'>
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
                                    <Textbox
                                        placeholder='Tag'
                                        type='text'
                                        name='tag'
                                        label='Tag'
                                        addClasses='w-full rounded'
                                        register={register("tag", {
                                            required: "Tag is required!",
                                        })}
                                        error={errors.tag ? errors.tag.message : ""}
                                    />
                                </div>
                            </div>
                            <div className='py-3 mt-4 flex sm:flex-row-reverse gap-4'>
                                <Button
                                    type='submit'
                                    addClasses='bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700 sm:ml-3 sm:w-auto'
                                    label='Add Sub Task'
                                />

                                <Button
                                    type='button'
                                    addClasses='bg-white border text-sm font-semibold text-gray-900 sm:w-auto'
                                    onClick={() => setOpenModal(false)}
                                    label='Cancel'
                                />
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </form>
        </Dialog >
    );
};

export default AddSubTask;