import { Transition } from '@headlessui/react';
import { clsx } from 'clsx';
import { Fragment, useRef } from 'react';
import { IoClose } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from './Sidebar';
import { setOpenSidebar } from '../redux/slices/authSlice';

function MobileSidebar() {
  const { isSidebarOpen } = useSelector((state) => state.auth);
  const mobileMenuRef = useRef(null);
  const dispatch = useDispatch();

  const closeSidebar = () => {
    dispatch(setOpenSidebar(false));
  };

  return (
    <div>
      <Transition
        show={isSidebarOpen}
        as={Fragment}
        enter="transition-opacity duration-700"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-700"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {(ref) => (
          <div ref={(node) => (mobileMenuRef.current = node)}
            className={clsx(
              'md:hidden w-full h-full bg-black/40 transition-all duration-700 transform absolute top-0 left-0 z-50',
              isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
            )}
            onClick={() => closeSidebar()}
          >
            <div className="bg-white w-3/4 h-full relative z-50">
              <div className="w-full flex justify-end px-5 mt-5">
                <button
                  onClick={() => closeSidebar()}
                  className="flex justify-end items-end"
                >
                  <IoClose size={25} />
                </button>
              </div>

              <div className="">
                <Sidebar />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
}

export default MobileSidebar;
