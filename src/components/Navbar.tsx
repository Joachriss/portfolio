import { MdLightMode,MdDarkMode } from "react-icons/md";
import { useTheme } from "../../contexts/ThemeContext";

export const Navbar = () => {
    const { toggleTheme,theme } = useTheme();
    return (
        <div>
            <nav className="w-full bg-white dark:bg-[#202020]  shadow-md fixed top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                    <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">Joa Chriss</h1>
                    <ul className="hidden md:flex gap-6 text-gray-600 dark:text-gray-200 font-medium">
                        <li><a href="#about" className="hover:text-blue-600">About</a></li>
                        <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
                        <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
                        <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
                        <li onClick={() => toggleTheme()}><button role="button" type="button">{theme === "dark" ? <MdDarkMode size={25}/> : <MdLightMode size={25}/>}</button></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
