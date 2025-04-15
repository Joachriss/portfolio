
export const Navbar = () => {
    return (
        <div>
            <nav className="w-full bg-white shadow-md fixed top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                    <h1 className="text-xl font-bold text-gray-800">Johannes</h1>
                    <ul className="hidden md:flex gap-6 text-gray-600 font-medium">
                        <li><a href="#about" className="hover:text-blue-600">About</a></li>
                        <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
                        <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
                        <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
