import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoBag } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { TbBrandPicsart } from "react-icons/tb";
import { FaAngleUp } from "react-icons/fa";


const Header = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [showCountries, setShowCountries] = useState(false);

    return (

        <>
            <div className="bg-[#faf2e6] py-3  ">
                <div className=" px-10 flex items-center justify-between">

                    <div className="flex items-center space-x-4">
                        <FaFacebook size={15} className="text-black" />
                        <FaInstagram size={15} className="text-black" />
                        <TbBrandPicsart size={15} className="text-black" />
                        <FaTiktok size={15} className="text-black" />
                    </div>

                    <div className="flex-1 text-center">
                        <p className="text-black text-sm">
                            © US & CA: Enjoy Free Shipping - On Orders Over 299$
                        </p>
                    </div>

                    <div className="relative">
                        <button
                            onClick={() => setShowCountries(!showCountries)}
                            className=" flex  hover:bg-gray-100 "> India (INR ₹) <FaAngleUp />
                        </button>

                        {showCountries && (
                            <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-300 rounded shadow-lg text-sm z-10">
                                <ul className="p-2">
                                    <li className="py-1 px-2 hover:text-blue-600 cursor-pointer">USA</li>
                                    <li className="py-1 px-2 hover:text-blue-600 cursor-pointer">Canada</li>
                                    <li className="py-1 px-2 hover:text-blue-600 cursor-pointer">UK</li>
                                    <li className="py-1 px-2 hover:text-blue-600 cursor-pointer">India</li>
                                </ul>
                            </div>
                        )}
                    </div>

                </div>
            </div>
            <header className="bg-white shadow w-[100%] ">
                <div className=" mx-auto px-10">
                    <div className="h-16 flex items-center justify-between w-full">

                        <div className="flex items-center">
                            <button
                                onClick={() => setShowSearch(!showSearch)}
                                className="text-black hover:text-blue-600 focus:outline-none"
                            >
                                <FaSearch size={20} />
                            </button>
                            {showSearch && (
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="ml-2 px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            )}
                        </div>

                        <div className="absolute left-1/2 transform -translate-x-1/2">
                            <h1 className="text-xl font-semibold text-gray-700">ELÁGIA</h1>
                        </div>

                        <div className="flex items-center space-x-4">
                            <button className="text-black hover:text-blue-600 focus:outline-none">
                                <CgProfile size={26} />
                            </button>
                            <button className="text-black hover:text-blue-600 focus:outline-none">
                                <IoBag size={26} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <hr className="border-t border-gray-300" />
        </>
    );
};

export default Header;
