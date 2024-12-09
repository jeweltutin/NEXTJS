import { Transition } from '@headlessui/react';
import { IoClose } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenSidebar } from '../redux/slices/authSlice';
import Sidebar from './Sidebar';

function MobileSidebar() {
    const { isSidebarOpen } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const closeSidebar = () => {
        dispatch(setOpenSidebar(false));
    };

    return (
        <Transition
            show={isSidebarOpen}
            as="div" // Use 'div' directly here, no need for the `ref`
            className="md:hidden w-full h-full bg-black/40 absolute top-0 left-0 z-50"
            enter="transition-opacity duration-700"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-700"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div onClick={closeSidebar} className={`w-2/4 h-full bg-white relative transition-transform duration-700 transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`} >
                <div className="w-full flex justify-end px-5 pt-5">
                    <button onClick={closeSidebar} className="flex justify-end items-end">
                        <IoClose size={25} />
                    </button>
                </div>
                <div className="">
                    <Sidebar />
                </div>
            </div>
        </Transition>
    );
}

export default MobileSidebar;
