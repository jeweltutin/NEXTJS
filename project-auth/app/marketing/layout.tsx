'use client'
import LeftSidebar from '@/components/backend/marketing/LeftSidebar';
import Toast from '@/components/backend/toast';
import AdminNavbar from '@/components/backend/marketing/adminNavbar';  // react-hydration-error
import dynamic from 'next/dynamic';
//const AdminNavbar = dynamic(() => import('@/components/backend/marketing/adminNavbar'), { ssr: false })
import { useEffect, useState } from 'react'
import Protection from './protection';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

function AdminLayout({ children }: { children: React.ReactNode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const router = useRouter();
    const role = useSelector((state: RootState) => state.userReducer.userInfo?.role);
    
    useEffect(() => {
        if (role !== 'admin') {
            router.push('/login');
        }
    }, [role, router])

    return (
        <>
           <Toast></Toast>
            {role === 'admin' ? (
            <div className='bg-white text-black relative min-h-screen w-screen'>
                <Protection>
                    <div className='flex'>
                        <div className={`left_bar text-white ${isMenuOpen ? 'w-200 block' : 'md:w-[100px] hidden md:block'}`}>
                            <LeftSidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                        </div>
                        <div className={`w-full h-full `}>
                            <AdminNavbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                            <div className='dashboard_padding'> {children} hello man !!</div>
                        </div>
                    </div>
                </Protection>
            </div> ): null }
        </>
    )
}
//export default AdminLayout

export default dynamic(() => Promise.resolve(AdminLayout), {
    ssr: false,
  })