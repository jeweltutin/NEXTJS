import Navbar from '@/app/components/Navbar';
import Sidebar from '@/app/components/Sidebar';

function Dashboard() {
    /*     const totals = summary.tasks;
        const stats = [
            {
                _id: "1",
                label: "TOTAL TASK",
                total: summary?.totalTasks || 0,
                icon: <FaNewspaper />,
                bg: "bg-[#1d4ed8]",
            },
            {
                _id: "2",
                label: "COMPLTED TASK",
                total: totals["completed"] || 0,
                icon: <MdAdminPanelSettings />,
                bg: "bg-[#0f766e]",
            },
            {
                _id: "3",
                label: "TASK IN PROGRESS ",
                total: totals["in progress"] || 0,
                icon: <LuClipboardEdit />,
                bg: "bg-[#f59e0b]",
            },
            {
                _id: "4",
                label: "TODOS",
                total: totals["todo"],
                icon: <FaArrowsToDot />,
                bg: "bg-[#be185d]" || 0,
            },
        ]; */


    return (
        <main className='w-full min-h-screen bg-[#f3f4f6] '>
            <div className='w-full h-screen flex flex-col md:flex-row'>
                <div className='w-1/5 h-screen bg-white sticky top-0 hidden md:block'>
                    <Sidebar />
                </div>

                {/* <MobileSidebar /> */}

                <div className='flex-1 overflow-y-auto'>
                    <Navbar />

                    <div className='p-4 2xl:px-10'>
                        {/* <Outlet /> */}
                    </div>
                    Dashboard
                </div>
            </div>
        </main>
    )
}

export default Dashboard
