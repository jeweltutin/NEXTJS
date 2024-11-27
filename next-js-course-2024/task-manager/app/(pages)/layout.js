"use client";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import MobileSidebar from "../components/MobileSidebar";

export default function MyLayout({ children }) {
  return (
    <>
      <Provider store={store}>
        <main className='w-full min-h-screen bg-[#f3f4f6] '>
          <div className='w-full h-screen flex flex-col md:flex-row'>
            <div className='w-[200px] lg:w-1/6 h-screen bg-white sticky top-0 hidden md:block'>
              <Sidebar />
            </div>

            <MobileSidebar />

            <div className='flex-1 flex flex-col overflow-y-auto'>
              <Navbar />

              <div className='p-4 2xl:px-10'>
                {/* <Outlet /> */}
              </div>
              <div className="p-4 2xl:px-10 flex-1">
                {/* Content goes here */}
                {children}
              </div>
            </div>
          </div>
        </main>

      </Provider>
    </>

  );
}
