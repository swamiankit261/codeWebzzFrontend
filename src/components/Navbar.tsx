import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import SideBar from './SideBar';
import { NavLink } from 'react-router';

const Navbar: React.FC = () => {

    const [collapsed, setCollapsed] = useState<boolean>(true);

    const toggleCollapsed = (): void => {
        setCollapsed(!collapsed);
    }

    return (
        <>
            <div className='px-6 align-middle py-3 shadow'>
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
