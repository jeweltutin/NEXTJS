import Button from "./Button";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";


const ViewNotification = ({ open, setOpen, el }) => {
    return (
        <Dialog open={open} className="relative z-10 w-full" as="div" onClose={() => setOpen(false)}>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 bg-black/50 sm:p-0">
                    <DialogPanel transition className="w-full max-w-md lg:max-w-xl rounded-xl bg-white lg:p-9 p-6 backdrop-blur-2xl duration-200 ease-in">
                        <div className="py-4 w-full flex flex-col gap-4 items-center justify-center">
                            <DialogTitle as="h2" className="text-base font-bold leading-6 text-gray-900 mb-4">
                                {el?.task?.title}
                            </DialogTitle>
                            <p className="text-start text-gray-500">
                                {el?.text}
                            </p>
                            <Button type="button" onClick={() => setOpen(false)} label="Ok"
                                addClasses="bg-blue-600 px-8 text-sm font-semibold text-white hover:bg-blue-700 sm:w-auto"                               
                            />
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}

export default ViewNotification;
