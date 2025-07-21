import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Sections from "../compontents/Sections";
import { KidsSuitsList, MensSuitsList, NewArrivalsList, WomensSuitsList } from "../compontents/Products";



const NewIn = () => {

    const [activeCategory, setActiveCategory] = useState('WOMAN');

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };
    return (
        <>
            <header className="bg-gray-100 py-6 md:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-2">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl  text-gray-900">New In</h1>
                    </div>
                    <nav className="flex items-center justify-center text-sm md:text-base">
                        <NavLink to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                            Home
                        </NavLink>
                        <MdKeyboardDoubleArrowRight className="mx-2 text-gray-500" />
                        <span className="text-gray-900 font-medium">New In</span>
                    </nav>
                </div>
            </header>

            <section className="py-12 md:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            New Arrivals
                        </h1>

                        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
                            <button
                                onClick={() => handleCategoryChange('WOMAN')}
                                className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 text-sm sm:text-base ${activeCategory === 'WOMAN'
                                    ? 'bg-black text-white'
                                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                                    }`}
                            >
                                WOMAN
                            </button>
                            <button
                                onClick={() => handleCategoryChange('MAN')}
                                className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 text-sm sm:text-base ${activeCategory === 'MAN'
                                    ? 'bg-black text-white'
                                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                                    }`}
                            >
                                MAN
                            </button>
                            <button
                                onClick={() => handleCategoryChange('KIDS')}
                                className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 text-sm sm:text-base ${activeCategory === 'KIDS'
                                    ? 'bg-black text-white'
                                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                                    }`}
                            >
                                KIDS
                            </button>
                        </div>

                        <div className="min-h-[300px]">
                            {activeCategory === 'WOMAN' && (
                                <div className="animate-fadeIn">
                                    <Sections data={WomensSuitsList} title="" showQuickShop={true} showAll={true} />
                                </div>
                            )}

                            {activeCategory === 'MAN' && (
                                <div className="animate-fadeIn">
                                    <Sections data={MensSuitsList} title="" showQuickShop={true} showAll={true} />
                                </div>
                            )}

                            {activeCategory === 'KIDS' && (
                                <div className="animate-fadeIn">
                                    <Sections data={KidsSuitsList} title="" showQuickShop={true} showAll={true} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default NewIn