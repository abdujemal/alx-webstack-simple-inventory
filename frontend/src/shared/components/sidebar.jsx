import { Link, useLocation } from 'react-router-dom';
import { LuHome } from "react-icons/lu";
import { AiOutlineProduct } from "react-icons/ai";
import { BsPersonGear } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";

const SideBar = () => {
    const { pathname } = useLocation();   
    
    // const iconsStyle = "h-10";    

    const menus = [
        {
            path: '/',
            name: "Dashboard",
            icon: <LuHome size={'1.3em'} />
        },
        {
            path: '/products',
            name: "Products",
            icon: <AiOutlineProduct size={'1.3em'} />
        },       
        {
            path: '/customers',
            name: "Customers",
            icon: <BsPersonGear size={'1.3em'} />
        },
        {
            path: '/logout',
            name: "Log",
            icon: <FiLogOut size={'1.3em'} />
        },
    ];

    return (
        <aside className="flex flex-col w-[250px] max-md:ml-0 max-md:w-full bg-primary">
            <div className="flex flex-col pt-10 pr-8 mx-auto w-full text-lg text-white pb-[636px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:pb-24 max-md:mt-2.5">
                <div className="self-center text-3xl text-center">
                    Inventory
                </div>
                <menu className='mt-20'>
                    {menus.map((e) => (
                        <Link
                            key={e.path}
                            to={e.path}
                            className={`cursor-pointer hover:underline flex gap-1 ${pathname === e.path ? "py-3.5" : ""} pr-4 pl-3 mt-7 w-full whitespace-nowrap ${pathname === e.path ? "bg-white" : ""} rounded-e-full ${pathname === e.path ? "text-zinc-800" : "text-white"} max-md:mt-10`}
                        >
                            {e.icon}
                            <div>{e.name}</div>
                            <div className='flex-1'/>
                            <div className={`${pathname === e.path ? "flex" : "hidden"} shrink-0 my-auto rounded-full bg-slate-600 h-[15px] w-[15px]`} />
                        </Link>
                    ))}
                </menu>
            </div>
        </aside>
    );
};

export default SideBar;
