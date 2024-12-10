import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Textbox from "./MyTextBox";
import Loading from "./Loader";
import Button from "./Button";
import { useRegisterMutation } from "../redux/slices/api/authApiSlice";
import { toast } from "sonner";

const AddUser = ({ open, setOpen, userData }) => {
  let defaultValues = userData ?? {};
  const { user } = useSelector((state) => state.auth);

  const isLoading = false, isUpdating = false;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const [addNewUser] = useRegisterMutation();
  const handleOnSubmit = async (formData) => {
    try {
      if (userData) {
        console.log(userData);
      }else{
        console.log("UserData: ", userData);
        const result = await addNewUser({ ...formData, password: formData.email }).unwrap();
        toast.success("New user added successfully");
      }

      setTimeout(() => {
        setOpen(false)
      }, 1500);

    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <Dialog open={open} className='relative z-10 w-full' as="div" onClose={() => setOpen(false)}>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 bg-black/50 sm:p-0">
          <DialogPanel transition className="w-full max-w-md lg:max-w-xl rounded-xl bg-white lg:p-9 p-6 backdrop-blur-2xl duration-200 ease-in data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
            <form onSubmit={handleSubmit(handleOnSubmit)} className=''>
              <DialogTitle as='h2' className='text-base font-bold leading-6 text-gray-900 mb-4'>
                {userData ? "UPDATE PROFILE" : "ADD NEW USER"}
              </DialogTitle>
              <div className='mt-2 flex flex-col gap-6'>
                <Textbox
                  placeholder='Full name'
                  type='text'
                  name='name'
                  label='Full Name'
                  addClasses='w-full rounded'
                  register={register("name", {
                    required: "Full name is required!",
                  })}
                  error={errors.name ? errors.name.message : ""}
                />
                <Textbox
                  placeholder='Title'
                  type='text'
                  name='title'
                  label='Title'
                  addClasses='w-full rounded'
                  register={register("title", {
                    required: "Title is required!",
                  })}
                  error={errors.title ? errors.title.message : ""}
                />
                <Textbox
                  placeholder='Email Address'
                  type='email'
                  name='email'
                  label='Email Address'
                  addClasses='w-full rounded'
                  register={register("email", {
                    required: "Email Address is required!",
                  })}
                  error={errors.email ? errors.email.message : ""}
                />

                <Textbox
                  placeholder='Role'
                  type='text'
                  name='role'
                  label='Role'
                  addClasses='w-full rounded'
                  register={register("role", {
                    required: "User role is required!",
                  })}
                  error={errors.role ? errors.role.message : ""}
                />
              </div>

              {isLoading || isUpdating ? (
                <div className='py-5'>
                  <Loading />
                </div>
              ) : (
                <div className='py-3 mt-4 sm:flex sm:flex-row-reverse'>
                  <Button
                    type='submit'
                    addClasses='bg-blue-600 px-8 text-sm font-semibold text-white hover:bg-blue-700  sm:w-auto'
                    label='Submit'
                  />

                  <Button
                    type='button'
                    addClasses='bg-white px-5 text-sm font-semibold text-gray-900 sm:w-auto'
                    onClick={() => setOpen(false)}
                    label='Cancel'
                  />
                </div>
              )}
            </form>
          </DialogPanel>
        </div>
      </div >
    </Dialog >
  );
};

export default AddUser;