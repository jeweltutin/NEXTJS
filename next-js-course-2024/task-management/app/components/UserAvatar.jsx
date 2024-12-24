"use client";
import { useDispatch, useSelector } from 'react-redux';
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { getInitials } from '../utils';
import { useState, Fragment, useEffect } from 'react';
import { FaUser, FaUserLock } from 'react-icons/fa';
import { IoLogOutOutline } from "react-icons/io5";
import { toast } from 'sonner';
import { useLoginMutation, useLogoutMutation } from '../redux/slices/api/authApiSlice';
import { useRouter } from 'next/navigation';
import { logout } from '../redux/slices/authSlice';
import AddUser from './AddUser';
import ChangePassword from './ChangePassword';
import { useGetUserDataQuery } from '../redux/slices/api/userApiSlice';

function UserAvatar() {
    const router = useRouter();
    const { user } = useSelector((state) => state.auth);
    const [mounted, setMounted] = useState(false); // Track if component is mounted on the client

    useEffect(() => {
        setMounted(true); // Set to true once component is mounted
    }, []);

    // Only render the initials if mounted on the client
    const initials = mounted && user?.data?.name ? getInitials(user?.data?.name) : "";


    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
    const [openPassword, setOpenPassword] = useState(false);

    const [logoutUser] = useLogoutMutation();

    // Fetch the user data using a query from RTK Query
    const { data: userData, isLoading, error, refetch } = useGetUserDataQuery();

    // Manually trigger refetch of user data
    const fetchUserData = async () => {
        await refetch(); // Trigger re-fetch of user data
    };


    const logoutHandler = async () => {
        try {
            await logoutUser();
            dispatch(logout());
            router.push("/log-in");

        } catch (error) {
            toast.error("Something went wrong");
        }
    };

    /*     const handleLogout = async () => {
            try {
                const response = await fetch('http://localhost:8800/api/user/logout', {
                    method: 'POST',
                    credentials: 'include', // Ensure cookies are sent
                });
    
                console.log("Response Status:", response.status);
                const result = await response.json();
                console.log("Logout Response:", result);
    
                if (response.ok) {
                    dispatch(logout());
                    router.push("/log-in");
                    toast.success("Logged out successfully!");
                } else {
                    throw new Error(result.message);
                }
            } catch (error) {
                console.log('Error in logout:', error);
                toast.error("Something went wrong");
            }
        }; */


    return (
        <>
            <div>
                <Menu as='div' className='relative inline-block text-left'>
                    <div>
                        <MenuButton className='w-10 h-10 2xl:w-12 2xl:h-12 items-center justify-center rounded-full bg-blue-600'>
                            <span className='text-white font-semibold'>
                                {/* {getInitials(user?.name || "")} */}
                                {initials}
                            </span>
                        </MenuButton >
                    </div>

                    {/*<Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                    >  */}
                    <MenuItems transition anchor="bottom end" className='absolute right-0 mt-2 w-56 origin-top-right divide-gray-100 rounded-md bg-white shadow-2xl ring-1 ring-black/5 focus:outline-none transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] data-[closed]:scale-95 data-[closed]:opacity-0'>
                        <div className='p-4'>
                            <MenuItem>
                                <button onClick={() => setOpen(true)} className='text-gray-700 group flex w-full items-center rounded-md px-2 py-2 text-base' >
                                    <FaUser className='mr-2' aria-hidden='true' />
                                    Profile
                                </button>
                            </MenuItem>

                            <MenuItem>
                                <button onClick={() => setOpenPassword(true)} className={`text -gray-700 group flex w-full items-center rounded-md px-2 py-2 text-base`} >
                                    <FaUserLock className='mr-2' aria-hidden='true' />
                                    Change Password
                                </button>
                            </MenuItem>

                            <MenuItem>
                                <button
                                    onClick={logoutHandler}
                                    className={`text-red-600 group flex w-full items-center rounded-md px-2 py-2 text-base`}
                                >
                                    <IoLogOutOutline className='mr-2' aria-hidden='true' />
                                    Logout
                                </button>
                            </MenuItem>
                        </div>
                    </MenuItems>
                    {/* </Transition> */}
                </Menu>
            </div>
            {/* <AddUser open={open} setOpen={setOpen} userData={user} /> */}
            <AddUser open={open} setOpen={setOpen} userData={user?.data} refetch={fetchUserData} />;
            <ChangePassword open={openPassword} setOpen={setOpenPassword} />
        </>
    )
}

export default UserAvatar;
