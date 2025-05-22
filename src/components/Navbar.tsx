import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "../../contexts/ThemeContext";
import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";

export const Navbar = () => {
    const { toggleTheme, theme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    
    // const onScrolling = () => {
    //     const navbar = document.querySelector("nav");
    //     if (window.scrollY > 0) {
    //         navbar?.classList.add("shadow-md", "dark:bg-[#202020]", "bg-white");
    //     } else if (window.scrollY === 0) {
    //         navbar?.classList.remove("shadow-md", "bg-transparent");
    //     }
    // };

    // window.addEventListener("scroll", onScrolling);
    // if (window.scrollY === 0) {
    //     const navbar = document.querySelector("nav");
    //     navbar?.classList.add("bg-transparent");
    // }


    return (
        <nav className="fixed bg-white dark:bg-[#202020] top-0 z-50 mx-auto px-4 w-full sm:px-6 lg:px-8 flex justify-between items-center h-16">
            <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">Joa Chriss</h1>
            <div className="md:hidden flex items-center flex-row gap-4">
                <button onClick={() => toggleTheme()} type="button" className="text-gray-600 dark:text-gray-200">
                    {theme !== "dark" ? <MdDarkMode size={25} /> : <MdLightMode size={25} />}
                </button>
                <button onClick={handleToggle}  className="text-gray-600 dark:text-gray-200">
                    <HiMenuAlt3 size={25} />
                </button>
            </div>
            <ul className="hidden md:flex gap-6 text-gray-600 dark:text-gray-200 font-medium">
                <li><a href="#about" className="hover:text-blue-600">About</a></li>
                <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
                <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
                <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
                <li onClick={() => toggleTheme()}><button role="button" type="button">{theme !== "dark" ? <MdDarkMode size={25} /> : <MdLightMode size={25} />}</button></li>
            </ul>
            <div onClick={handleToggle} className={`${isOpen ? "" : "hidden"} md:hidden absolute h-screen w-full top-0 left-0 z-10 bg-black/50`}></div>
            <div className={`h-screen z-20 md:hidden fixed top-0 w-[70%] right-0 bg-[#191919] transform ${isOpen ? "-transition-transform" : "translate-x-full"} duration-300 ease-in-out`}>
                {/* <div className="w-64 bg-white dark:bg-[#202020] shadow-lg transform -translate-x-full transition-transform duration-300 ease-in-out"> */}
                    <div className="flex items-center justify-between p-4">
                        <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">Joa Chriss</h1>
                        <button onClick={handleToggle} className="text-gray-600 dark:text-gray-200">
                            <HiMenuAlt3 size={25} />
                        </button>
                    </div>
                    <ul className="flex flex-col gap-6 text-gray-600 dark:text-gray-200 font-medium p-4">
                        <li><a href="#about" className="hover:text-blue-600">About</a></li>
                        <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
                        <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
                        <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
                    </ul>
                {/* </div> */}
            </div>
        </nav>
    )
}
