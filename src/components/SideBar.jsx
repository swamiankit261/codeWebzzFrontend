import { GiSplitCross } from "react-icons/gi";
import { NavLink } from 'react-router';
// import { Link } from 'react-router';

const SideBar = ({ toggleCollapsed, collapsed }) => {
    return (
        <>
            <div className={`fixed right-0 top-0 z-10 bg-primary-light pt-5 w-56 h-screen transition-transform duration-500 ease-in-out ${collapsed ? "translate-x-full" : "translate-x-0"}`} >
                <div className=" w-full text-end mt-5"><GiSplitCross className='text-2xl cursor-pointer absolute top-8 right-12 text-secondary' onClick={toggleCollapsed} /></div>
                <div className=" p-4 pt-10">
                    <NavLink to="/" >
                        <div className="hover:text-secondary cursor-pointer rounded-sm">Home</div>
                    </NavLink>
                    <NavLink to="/aboutUs"><div className="hover:text-secondary cursor-pointer my-2">About Us</div></NavLink>
                    <div className="hover:text-secondary cursor-pointer mb-2">Services</div>
                    <NavLink to="/contact">
                        <div className="hover:text-secondary cursor-pointer">Contact us</div>
                    </NavLink>
                </div>
            </div >

        </>
    )
};

export default SideBar
