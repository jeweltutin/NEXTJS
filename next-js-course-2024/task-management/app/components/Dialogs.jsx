import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import clsx from "clsx";
import { FaAccusoft, FaQuestion } from "react-icons/fa";
import Button from "./Button";
import { Fa42Group } from "react-icons/fa6";

function ConfirmationDialog({ type, msg, open, setOpen, onClick = () => { } }) {
    //console.log(open);
    return (
        <Dialog open={open} className='relative z-10 w-full' as="div" onClose={() => setOpen(false)}>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 bg-black/50 text-center sm:p-0">
                    <DialogPanel transition className="w-full max-w-md lg:max-w-xl rounded-xl bg-white lg:p-9 p-6 backdrop-blur-2xl duration-200 ease-in data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
                        <div className='py-4 w-full flex flex-col gap-4 items-center justify-center'>
                            <DialogTitle as='h3' className=''>
                                <p
                                    className={clsx(
                                        "p-3 rounded-full ",
                                        type === "restore" || type === "restoreAll"
                                            ? "text-yellow-600 bg-yellow-100"
                                            : "text-red-600 bg-red-200"
                                    )}
                                >
                                    <FaQuestion size={60} />
                                </p>
                            </DialogTitle>

                            <p className='text-center text-gray-500'>
                                {msg ?? "Are you sure you want to delete the selected record?"}
                            </p>

                            <div className='bg-gray-50 py-3 sm:flex sm:flex-row-reverse gap-4'>
                                <Button
                                    type='button'
                                    addClasses={clsx(
                                        " px-8 text-sm font-semibold text-white sm:w-auto",
                                        type === "restore" || type === "restoreAll"
                                            ? "bg-yellow-600"
                                            : "bg-red-600 hover:bg-red-500"
                                    )}
                                    onClick={onClick}
                                    label={type === "restore" ? "Restore" : type === "delete" ? "Delete" : "Ok"}
                                />

                                <Button
                                    type='button'
                                    addClasses='bg-white px-8 text-sm font-semibold text-gray-900 sm:w-auto border'
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

export default ConfirmationDialog;

export function UserAction({ openAction, setOpenAction, onClick = () => { } }) {
    const closeDialog = () => {
        setOpenAction(false);
    };

    return (
        <>
            <Dialog open={openAction} onClose={closeDialog}>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 bg-black/50 text-center sm:p-0">
                        <DialogPanel transition className="w-full max-w-md lg:max-w-xl rounded-xl bg-white lg:p-9 p-6 backdrop-blur-2xl duration-200 ease-in data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
                            <div className='py-4 w-full flex flex-col gap-4 items-center justify-center'>
                                <DialogTitle as='h3' className=''>
                                    <p className={clsx("p-7 rounded-full ", "text-green-600 bg-green-200")}>
                                        <FaQuestion size={60} />
                                    </p>
                                </DialogTitle>

                                <p className='text-center text-gray-500'>
                                    {"Are you sure you want to activate or deactive this account?"}
                                </p>

                                <div className='bg-gray-50 py-3 sm:flex sm:flex-row-reverse gap-4'>
                                    <Button type='button' onClick={onClick} label={"Yes"}
                                        addClasses={clsx(
                                            " px-8 text-sm font-semibold text-white sm:w-auto",
                                            "bg-red-600 hover:bg-red-500"
                                        )} 
                                    />

                                    <Button type='button' onClick={() => closeDialog()} label='No'
                                        addClasses='bg-white px-8 text-sm font-semibold text-gray-900 sm:w-auto border'                                      
                                    />
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    );
}
