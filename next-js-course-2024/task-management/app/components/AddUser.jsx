import { Dialog, DialogPanel, DialogTitle, Select } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Textbox from "./MyTextBox";
import Loading from "./Loader";
import Button from "./Button";
import { useRegisterMutation } from "../redux/slices/api/authApiSlice";
import { toast } from "sonner";
import { useUpdateUserMutation } from "../redux/slices/api/userApiSlice";
import { setCredentials } from "../redux/slices/authSlice";
import { useEffect } from "react";

const AddUser = ({ open, setOpen, userData, refetch }) => {
  const { user } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    reset, // This is important
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const [addNewUser, { isLoading }] = useRegisterMutation();
  const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();

/*   useEffect(() => {
    if (userData) {
      reset(userData); // Pre-fill form for editing
    } else {
      reset({ name: "", email: "", title: "", role: "" }); // Clear form for new user creation
    }
  }, [userData, reset]); */

  useEffect(() => {
    const defaultUserData = { name: "", email: "", title: "", role: "" };
    reset(userData || defaultUserData);
  }, [userData, reset]);
  

  const handleOnSubmit = async (formData) => {
    try {
      if (userData) {
        // Update existing user
        const result = await updateUser(formData).unwrap();
        refetch();

        /* // Check if the updated user is the logged-in user
        const loggedInUser = JSON.parse(localStorage.getItem("session"));
        if (loggedInUser?.id === result.user?.id) {
          // Update session credentials if the logged-in user is being updated
          dispatch(setCredentials(result.user));
        } */

        toast.success(result?.message || "Profile updated successfully", {
          className: "sonner-toast-success"
        });
      } else {
        // Add new user
        const result = await addNewUser({ ...formData, password: formData.email });
        refetch();

        toast.success("User added successfully", {
          className: "sonner-toast-success"
        });
      }

      // Close the dialog after a delay
      setTimeout(() => setOpen(false), 1500);
    } catch (error) {
      console.error("Error updating user:", error); // Log the error
      toast.error("Something went wrong", {
        className: "sonner-toast-error"
      });
    }
  };


  return (
    <Dialog open={open} className="relative z-10 w-full" as="div" onClose={() => setOpen(false)}>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 bg-black/50 sm:p-0">
          <DialogPanel transition className="w-full max-w-md lg:max-w-xl rounded-xl bg-white lg:p-9 p-6 backdrop-blur-2xl duration-200 ease-in">
            <form onSubmit={handleSubmit(handleOnSubmit)} className="">
              <DialogTitle as="h2" className="text-base font-bold leading-6 text-gray-900 mb-4">
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

                {/* <Textbox
                  placeholder='Role'
                  type='text'
                  name='role'
                  label='Role'
                  addClasses='w-full rounded'
                  register={register("role", {
                    required: "User role is required!",
                  })}
                  error={errors.role ? errors.role.message : ""}
                /> */}

                <div className="space-y-2">
                  <label htmlFor="role" className="text-sm font-semibold">Role</label>
                  <Select
                    name="role"
                    label="Role"
                    className="w-full p-4 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    {...register("role", {
                      required: "User role is required!",
                    })}
                  >
                    <option value="">Select a role</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                    <option value="moderator">Moderator</option>
                  </Select>

                  {/* Display error message */}
                  {errors.role && (
                    <span className="text-xs text-[#f64949fe] mt-0.5">{errors.role.message}</span>
                  )}
                </div>
              </div>
              {isLoading || isUpdating ? (
                <div className="py-5">
                  <Loading />
                </div>
              ) : (
                <div className="py-3 mt-4 sm:flex sm:flex-row-reverse">
                  <Button
                    type="submit"
                    addClasses="bg-blue-600 px-8 text-sm font-semibold text-white hover:bg-blue-700 sm:w-auto"
                    label="Submit"
                  />
                  <Button
                    type="button"
                    addClasses="bg-white px-5 text-sm font-semibold text-gray-900 sm:w-auto"
                    onClick={() => setOpen(false)}
                    label="Cancel"
                  />
                </div>
              )}
            </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default AddUser;
