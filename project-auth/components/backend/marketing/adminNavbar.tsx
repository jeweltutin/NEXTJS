'use client';
import { RootState } from '@/redux/store';
import { useState } from 'react';
import { CgMenu } from 'react-icons/cg';
import { logout } from '@/redux/slices/userSlice';
import { FiLogOut } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
const AdminNavbar = ({ isMenuOpen, setIsMenuOpen }: any) => {


  const dispatch = useDispatch();
  const [dashboardOpen, setDashboardOpen] = useState(false);

  const isLogged = useSelector((state: RootState) => state.userReducer.success);
  const adminInfo = useSelector((state: RootState) => state.userReducer.userInfo);

  return (
    <div className={`h-20 bg-gray-100 w-full border-b-4 border-green-900`}>
      <div className='flex justify-between space-x-2 items-center h-full w-full md:px-12 px-10'>
        {!isMenuOpen ?
          <div className='md:hidden block'>
            <CgMenu onClick={() => setIsMenuOpen(!isMenuOpen)} className='cursor-pointer text-black m-2' />
          </div> : null
        }
        {isLogged ? (

          <div className='h-full w-full space-x-2 text-black'>
            <div className="flex flex-row">
              <div className="basis-10/12">
                <h3 className='pt-6 font-semibold'>Admin / Dashboard</h3>
              </div>
              <div className='basis-2/12 items-end'>
                <div className='relative justify-center items-center pl-4 space-x-4 h-full text-black'
                  onMouseMove={() => setDashboardOpen(true)}
                  onMouseLeave={() => setDashboardOpen(false)}
                >
                  <div className='text-md cursor-pointer font-semibold h-full flex  justify-end items-end space-x-2'>
                    <p className='p-6'>{adminInfo?.name.split(' ')[0]}</p>
                  </div>
                </div>

                {dashboardOpen && isLogged && (
                  <div
                    className='absolute w-42 top-16 right-12 z-100 bg-brand_color text-black p-2  rounded-md'
                    onMouseMove={() => setDashboardOpen(true)}
                    onMouseLeave={() => setDashboardOpen(false)}
                  >
                    <ul>
                      <li>
                        <div onClick={() => dispatch(logout())} className='rounded-md py-2 z-[10000] hover:bg-yellow-600 px-4 w-full flex items-center justify-start cursor-pointer space-x-4 text-black'>
                          <FiLogOut className='text-black' />
                          <p> Logout</p>
                        </div>
                      </li>
                      <li>
                        <div className='rounded-md py-2 z-[10000] hover:bg-yellow-600 px-4 w-full flex items-center justify-start cursor-pointer space-x-4 text-black'>
                          <FiLogOut className='text-black' />
                          <p> Profile</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AdminNavbar;
