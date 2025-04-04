import { GiSplitCross } from "react-icons/gi";
import { NavLink, useLocation } from 'react-router';
import { Combobox } from "./Combobox";
// import { Link } from 'react-router';

const SideBar = (props) => {

    const { toggleCollapsed, collapsed } = props || {};

    const loaction = useLocation();

    return (
        <>
            <div className={`fixed shadow-md right-0 top-0 z-20 bg-primary-light pt-5 w-56 h-screen transition-transform duration-500 ease-in-out ${collapsed ? "translate-x-full" : "translate-x-0"}`} >
                <div className="cursor-pointer w-fit z-20 absolute top-5 right-14 text-secondary-dark" onClick={toggleCollapsed}><GiSplitCross className='text-2xl cursor-pointer' /></div>
                <div className="p-4 pt-10 flex flex-col items-start gap-2">
                    <NavLink to="/" className={`${loaction.pathname === "/" && "text-secondary-dark"}`}>
                        <div className="hover:text-secondary-dark cursor-pointer rounded-sm">Home</div>
                    </NavLink>
                    <NavLink to="/aboutUs" className={`${loaction.pathname === "/aboutUs" && "text-secondary-dark"}`}><div className="hover:text-secondary-dark cursor-pointer my-2">About Us</div></NavLink>
                    <div className="hover:text-secondary-dark cursor-pointer mb-2">Services</div>
                    <NavLink to="/portfolio" className={`${loaction.pathname === "/portfolio" && "text-secondary-dark"}`}>
                        <div className="hover:text-secondary-dark cursor-pointer">Our portfolio</div>
                    </NavLink>
                    {/* <NavLink to="/clients">
                        <div className="hover:text-secondary-dark cursor-pointer">Our clients</div>
                        </NavLink> */}
                    <NavLink to="/contact" className={`${loaction.pathname === "/contact" && "text-secondary-dark"}`}>
                        <div className="hover:text-secondary-dark cursor-pointer">Contact us</div>
                    </NavLink>
                </div>
                <div className="absolute bottom-2 right-10 w-fit">
                    <Combobox toggleCollapsed={toggleCollapsed} />
                </div>
            </div >
            <div className={`fixed z-10 right-0 top-0 w-full h-screen transition-transform duration-500 ease-in-out ${collapsed ? "translate-x-full" : "translate-x-0"}`} onMouseOver={toggleCollapsed}></div>
        </>
    )
};

export default SideBar
