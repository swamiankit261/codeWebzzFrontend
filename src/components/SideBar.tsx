import React from 'react'
import { GiSplitCross } from "react-icons/gi";
// import { Link } from 'react-router';


interface myProps {
    toggleCollapsed: () => void;
    collapsed: boolean;
}

const SideBar: React.FC<myProps> = ({ toggleCollapsed, collapsed }) => {
    return (
        <>
            <div className={`fixed right-0 top-0 bg-primary-light pt-5 w-56 h-screen transition-transform duration-500 ease-in-out ${collapsed ? "translate-x-full" : "translate-x-0"}`} >
                <div className=" w-full bg-white text-end"><GiSplitCross className='text-2xl cursor-pointer absolute top-2 left-44 text-secondary' onClick={toggleCollapsed} /></div>
                <div className=" p-4 pt-6">
                    <div className="hover:text-secondary cursor-pointer rounded-sm">Home</div>
                    <div className="hover:text-secondary cursor-pointer my-2">About</div>
                    <div className="hover:text-secondary cursor-pointer mb-2">Services</div>
                    <div className="hover:text-secondary cursor-pointer">Contact us</div>
                </div>
            </div >

        </>
    )
};

export default SideBar
