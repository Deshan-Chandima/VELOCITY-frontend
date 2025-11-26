import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { cn } from '../../lib/utils';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Inventory', href: '/inventory' },
        { name: 'Configurator', href: '/configurator' },
        { name: 'About', href: '/about' },
    ];

    return (
        <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-black/50 backdrop-blur-md">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-bold whitespace-nowrap text-white tracking-tighter">
                        VELOCITY <span className="text-primary">MOTORS</span>
                    </span>
                </a>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
                <div className={cn("w-full md:block md:w-auto", isOpen ? "block" : "hidden")} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-white/10 rounded-lg bg-black/80 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="block py-2 px-3 text-gray-300 rounded hover:bg-white/10 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 transition-colors duration-300"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
