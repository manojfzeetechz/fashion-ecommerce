import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const getNavLinkClass = ({ isActive }) => 
        isActive ? 'text-purple-400' : 'text-black hover:text-gray-500';

    return (
        <nav className="bg-white  w-[100%] shadow-sm">
            <div className="hidden  md:block">
                <div className="h-16 flex items-center justify-center px-6 ">
                    <div className="  flex space-x-6 overflow-x-auto scrollbar-hide">
                        <NavLink
                            to="/"
                            className={({ isActive }) => `hover:underline transition whitespace-nowrap ${getNavLinkClass({ isActive })}`}
                        >
                            HOME
                        </NavLink>
                        <NavLink
                            to="/newin"
                            className={({ isActive }) => `hover:underline transition whitespace-nowrap ${getNavLinkClass({ isActive })}`}
                        >
                            NEW IN
                        </NavLink>
                       
                        <NavLink
                            to="/suits"
                            className={({ isActive }) => `hover:underline transition whitespace-nowrap ${getNavLinkClass({ isActive })}`}
                        >
                            SUITS
                        </NavLink>
                        <NavLink
                            to="/jumpsuits"
                            className={({ isActive }) => `hover:underline transition whitespace-nowrap ${getNavLinkClass({ isActive })}`}
                        >
                           BLAZERS
                        </NavLink>
                        <NavLink
                            to="/trousers"
                            className={({ isActive }) => `hover:underline transition whitespace-nowrap ${getNavLinkClass({ isActive })}`}
                        >
                            TROUSERS
                        </NavLink>
                        <NavLink
                            to="/pants"
                            className={({ isActive }) => `hover:underline transition whitespace-nowrap ${getNavLinkClass({ isActive })}`}
                        >
                            SHIRTS
                        </NavLink>
                        <NavLink
                            to="/skirts"
                            className={({ isActive }) => `hover:underline transition whitespace-nowrap ${getNavLinkClass({ isActive })}`}
                        >
                            SMOKING ROBE
                        </NavLink>

                         <NavLink
                            to="/shopinstagram"
                            className={({ isActive }) => `hover:underline transition whitespace-nowrap ${getNavLinkClass({ isActive })}`}
                        >
                            SHOP INSTAGRAM
                        </NavLink>
                        <NavLink
                            to="/sets"
                            className={({ isActive }) => `hover:underline transition whitespace-nowrap ${getNavLinkClass({ isActive })}`}
                        >
                            ABOUT US
                        </NavLink>
                        <NavLink
                            to="/outerwear"
                            className={({ isActive }) => `hover:underline transition whitespace-nowrap ${getNavLinkClass({ isActive })}`}
                        >
                            CONTACT US
                        </NavLink>
                        
                    </div>
                </div>
            </div>

            <div className="md:hidden">
                <div className="h-16 flex items-center justify-between px-4 bg-white">
                   

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-black focus:outline-none"
                    >
                        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                    <div className="bg-white px-4 py-2 space-y-3 text-black border-t shadow-md">
                        <NavLink
                            to="/"
                            className={({ isActive }) => `block py-2 hover:text-purple-400 transition ${isActive ? 'text-purple-400 font-medium' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            HOME
                        </NavLink>
                        <NavLink
                            to="/newin"
                            className={({ isActive }) => `block py-2 hover:text-purple-400 transition ${isActive ? 'text-purple-400 font-medium' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            NEW IN
                        </NavLink>
                        <NavLink
                            to="/dresses"
                            className={({ isActive }) => `block py-2 hover:text-purple-400 transition ${isActive ? 'text-purple-400 font-medium' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            DRESSES
                        </NavLink>
                        <NavLink
                            to="/suits"
                            className={({ isActive }) => `block py-2 hover:text-purple-400 transition ${isActive ? 'text-purple-400 font-medium' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            SUITS
                        </NavLink>
                        <NavLink
                            to="/jumpsuits"
                            className={({ isActive }) => `block py-2 hover:text-purple-400 transition ${isActive ? 'text-purple-400 font-medium' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            JUMPSUITS
                        </NavLink>
                        <NavLink
                            to="/trousers"
                            className={({ isActive }) => `block py-2 hover:text-purple-400 transition ${isActive ? 'text-purple-400 font-medium' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            TROUSERS
                        </NavLink>
                        <NavLink
                            to="/pants"
                            className={({ isActive }) => `block py-2 hover:text-purple-400 transition ${isActive ? 'text-purple-400 font-medium' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            PANTS
                        </NavLink>
                        <NavLink
                            to="/skirts"
                            className={({ isActive }) => `block py-2 hover:text-purple-400 transition ${isActive ? 'text-purple-400 font-medium' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            SKIRTS
                        </NavLink>
                        <NavLink
                            to="/sets"
                            className={({ isActive }) => `block py-2 hover:text-purple-400 transition ${isActive ? 'text-purple-400 font-medium' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            SETS
                        </NavLink>
                        <NavLink
                            to="/outerwear"
                            className={({ isActive }) => `block py-2 hover:text-purple-400 transition ${isActive ? 'text-purple-400 font-medium' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            OUTERWEAR
                        </NavLink>
                        <NavLink
                            to="/shop-instagram"
                            className={({ isActive }) => `block py-2 hover:text-purple-400 transition ${isActive ? 'text-purple-400 font-medium' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            SHOP INSTAGRAM
                        </NavLink>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;