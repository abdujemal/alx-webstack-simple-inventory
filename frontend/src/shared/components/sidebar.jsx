import { Link, Outlet, useLocation } from 'react-router-dom';
import { LuHome } from "react-icons/lu";
import { AiOutlineProduct } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { BsPersonGear } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import Logo from './logo';
import { useAuth } from '../../features/auth/controllers/AuthProvider';
import { useState } from 'react';

const SideBarLayout = () => {
    const { pathname } = useLocation();
    const { logout } = useAuth();
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

    const menus = [
        { path: '/', name: "Dashboard", icon: <LuHome size={'1.3em'} /> },
        { path: '/products', name: "Products", icon: <AiOutlineProduct size={'1.3em'} /> },
        { path: '/customers', name: "Customers", icon: <BsPersonGear size={'1.3em'} /> },
        { path: '/logout', name: "Log Out", icon: <FiLogOut size={'1.3em'} /> },
    ];

    return (
        <div className='flex h-screen overflow-hidden'>
            <aside className={`w-[250px] bg-primary overflow-y-hidden transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed top-0 bottom-0 left-0 md:relative md:translate-x-0`}>
                <div className="pt-10 pr-8 mx-auto w-full text-lg text-white pb-[636px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                    <Logo />
                    <menu className='mt-20'>
                        {
                            menus.map((e) =>
                                e.path !== '/logout' ?
                                    <Link to={e.path} key={e.name}>
                                        <div className={`cursor-pointer hover:underline flex gap-2 ${pathname === e.path ? "py-3.5" : ""} pr-4 pl-3 mt-7 w-full whitespace-nowrap items-center ${pathname === e.path ? "bg-white" : ""} rounded-e-full ${pathname === e.path ? "text-zinc-800" : "text-white"} max-md:mt-10`}>
                                            {e.icon}
                                            <div>{e.name}</div>
                                            <div className='flex-1' />
                                            <div className={`${pathname === e.path ? "flex" : "hidden"} shrink-0 my-auto rounded-full bg-slate-600 h-[15px] w-[15px]`} />
                                        </div>
                                    </Link>
                                    :
                                    <div key={e.name} onClick={() => { logout() }} className={`cursor-pointer hover:underline ml-1 flex gap-2 ${pathname === e.path ? "py-3.5" : ""} pr-4 pl-3 mt-7 w-full whitespace-nowrap items-center ${pathname === e.path ? "bg-white" : ""} rounded-e-full ${pathname === e.path ? "text-zinc-800" : "text-white"} max-md:mt-10`}>
                                        {e.icon}
                                        <div>{e.name}</div>
                                        <div className='flex-1' />
                                        <div className={`${pathname === e.path ? "flex" : "hidden"} shrink-0 my-auto rounded-full bg-slate-600 h-[15px] w-[15px]`} />
                                    </div>
                            )
                        }
                    </menu>
                </div>
            </aside>
            <main className={`flex-1 overflow-y-auto ${isSidebarOpen ? 'ml-[250px] md:ml-0' : 'ml-0'} transition-all`}>
                <button style={{ zIndex: 1000 }} className={`md:hidden absolute top-2 ${isSidebarOpen ? ' left-52' : 'left-4'} text-black`} onClick={toggleSidebar}>
                    {isSidebarOpen ? <IoArrowBackCircleOutline className='text-white size-8 ' /> : <GiHamburgerMenu className='size-6' />}
                </button>
                <Outlet />
            </main>
        </div>
    );
};

export default SideBarLayout;
