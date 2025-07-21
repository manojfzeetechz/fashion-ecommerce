import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { TrousersList } from '../compontents/Products';
import Sections from '../compontents/Sections';
import Sidebar from '../compontents/Sidebar';

const Trousers = () => {
    return (
        <>

            <header className="bg-gray-100 py-6 md:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-2">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl  text-gray-900">Trousers</h1>
                    </div>
                    <nav className="flex items-center justify-center text-sm md:text-base">
                        <NavLink to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                           Home
                        </NavLink >
                        <MdKeyboardDoubleArrowRight className="mx-2 text-gray-500" />
                        <span className="text-gray-900 font-medium">New In</span>
                    </nav>
                </div>
            </header>

            <div className="flex min-h-screen px-4 py-8 gap-6">


                <Sidebar />

                <main className="w-full md:w-3/4">
                    <Sections
                        data={TrousersList}
                        title=""
                        showAll={true}
                        showButton={false}
                        showQuickShop={true}
                    />
                </main>
            </div>
        </>
    );
}

export default Trousers;
