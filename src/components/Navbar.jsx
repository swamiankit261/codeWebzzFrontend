import { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import SideBar from './SideBar';
import { NavLink } from 'react-router';

const Navbar = () => {

    const [collapsed, setCollapsed] = useState(true);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    }

    return (
        <>
            <div className='px-6 align-middle py-3 shadow-sm fixed top-0 z-10 w-[95%] bg-primary-light bg-opacity-60'>
                <div className="flex justify-between align-middle">
                    <NavLink to="/">
                        <div className='text-2xl font-semibold cursor-pointer'>CodeWebzz <span className='text-3xl text-secondary'>.</span></div>
                    </NavLink>

                    <div><RxHamburgerMenu className='text-3xl cursor-pointer hover:text-secondary' onClick={toggleCollapsed} /></div>
                </div>
                <SideBar toggleCollapsed={toggleCollapsed} collapsed={collapsed} />
            </div>
        </>
    )
}

export default Navbar
