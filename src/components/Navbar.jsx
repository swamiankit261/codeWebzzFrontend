import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import SideBar from "./SideBar";
import { NavLink } from "react-router-dom";

// "pastel","monochrome","sakura","retro","ice","nature","sandstorm",

const themes = ["primary", "dark", "ocean", "sunset", "candy", "forest", "lava",  "aurora"];

const Navbar = () => {
    const [collapsed, setCollapsed] = useState(true);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "primary");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    // Switch between different themes
    const switchTheme = () => {
        const currentIndex = themes.indexOf(theme);
        const nextIndex = (currentIndex + 1) % themes.length; // Cycle through themes
        setTheme(themes[nextIndex]);
    };

    return (
        <div className="px-6 align-middle py-3 text-theme shadow-xl rounded-md fixed top-0 z-20 w-[95%] bg-primary-light bg-opacity-60">
            <div className="flex justify-between align-middle">
                <NavLink to="/" className="z-10">
                    <div className="text-2xl font-semibold cursor-pointer">
                        CodeWebzz <span className="text-3xl text-secondary-dark">.</span>
                    </div>
                </NavLink>

                <div className="bg-secondary-light p-1 animate-spin-slow absolute top-5 left-5 z-0 rounded">
                    <div className="bg-primary-light w-5 h-5"></div>
                </div>

                {/* <button
                    onClick={switchTheme}
                    className="px-4 py-2 rounded-lg bg-primary-default text-white shadow-lg"
                >
                    Change Theme: {theme}
                </button> */}

                <div>
                    <RxHamburgerMenu
                        className="text-3xl cursor-pointer hover:text-secondary-dark"
                        onClick={toggleCollapsed}
                    />
                </div>
            </div>

            <SideBar toggleCollapsed={toggleCollapsed} collapsed={collapsed} />
        </div> 
    );
};

export default Navbar;
