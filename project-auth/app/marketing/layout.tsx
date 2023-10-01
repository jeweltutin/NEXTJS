'use client'
import LeftSidebar from '@/components/backend/marketing/LeftSidebar';
//import AdminNavbar from '@/components/backend/marketing/adminNavbar';  // react-hydration-error
import dynamic from 'next/dynamic';
const AdminNavbar = dynamic(() => import('@/components/backend/marketing/adminNavbar'), { ssr: false })
import { useState } from 'react'

function AdminLayout({ children }: { children: React.ReactNode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    return (
        <div>
            <div className='bg-white text-black relative min-h-screen w-screen'>
                <div className='flex'>
                <div className={ `left_bar text-white ${ isMenuOpen ? 'w-200 block' : 'md:w-[100px] hidden md:block'}` }>
                        <LeftSidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                    </div>
                    <div className={`w-full h-full `}>
                        <AdminNavbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                        <div className='dashboard_padding'> {children} hello man !!</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AdminLayout