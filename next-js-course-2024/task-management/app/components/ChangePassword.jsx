import { toast } from "sonner";
import { useChangePasswordMutation } from "../redux/slices/api/userApiSlice";
import MyTextBox from "./MyTextBox";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import Loader from "./Loader";
import { useEffect } from "react";


const ChangePassword = ({ open, setOpen }) => {
    const {
        register,
        handleSubmit,
        reset, // This is important
        formState: { errors },
    } = useForm();

    // Clear form fields whenever the modal opens
    useEffect(() => {
        if (open) {
            reset({ password: "", cpass: "" }); // Clear form
        }
    }, [open, reset]);

    const [changeUserPassword, { isLoading }] = useChangePasswordMutation();

    const handleOnSubmit = async (data) => {
        if (data.password !== data.cpass) {
            toast.warning("Password doesn't  match", {
                className: "sonner-toast-warning"
            });
            return;
        }
        try {
            const res = await changeUserPassword(data).unwrap();
            toast.success("Password Changed successfully", {
                className: "sonner-toast-success"
            });
            setTimeout(() => {
                setOpen(false);
            }, 1500)
        } catch (err) {
            console.log(err);
            toast.error(err?.data?.message || err.error);
        }
    }

    return (
        <Dialog open={open} className="relative z-10 w-full" as="div" onClose={() => setOpen(false)}>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 bg-black/50 sm:p-0">
                    <DialogPanel transition className="w-full max-w-md lg:max-w-xl rounded-xl bg-white lg:p-9 p-6 backdrop-blur-2xl duration-200 ease-in">
                        <form onSubmit={handleSubmit(handleOnSubmit)} className="">
                            <DialogTitle as="h2" className="text-base font-bold leading-6 text-gray-900 mb-4">
                                Change Password
                            </DialogTitle>
                            <hr />
                            <div className='mt-2 flex flex-col gap-6'>
                                <MyTextBox
                                    placeholder='New Password'
                                    type='password'
                                    name='password'
                                    label='New Password'
                                    addClasses='w-full rounded'
                                    register={register("password", {
                                        required: "New Password is required!",
                                    })}
                                    error={errors.password ? errors.password.message : ""}
                                />
                                <MyTextBox
                                    placeholder='Confirm New Password'
                                    type='password'
                                    name='cpass'
                                    label='Confirm New Password'
                                    addClasses='w-full rounded'
                                    register={register("cpass", {
                                        required: "Confirm New Password is required!",
                                    })}
                                    error={errors.cpass ? errors.cpass.message : ""}
                                />


                            </div>
                            {isLoading ? (
                                <div className="py-5">
                                    <Loader />
                                </div>
                            ) : (
                                <div className="py-3 mt-4 sm:flex sm:flex-row-reverse">
                                    <Button type="submit" label="Submit" addClasses="bg-blue-600 px-8 text-sm font-semibold text-white hover:bg-blue-700 sm:w-auto" />
                                    <Button type="button" onClick={() => setOpen(false)} label="Cancel" addClasses="bg-white px-5 text-sm font-semibold text-gray-900 sm:w-auto" />
                                </div>
                            )}
                        </form>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}

export default ChangePassword;
