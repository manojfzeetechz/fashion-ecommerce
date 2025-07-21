import { IoGiftOutline } from "react-icons/io5";
import { FiTruck } from "react-icons/fi";
import { TbRotate360 } from "react-icons/tb";
import { BsCheck2Circle } from "react-icons/bs";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {

    const features = [
        {
            icon: <IoGiftOutline />,
            text: (
                <>
                    Free shipping on orders over $299 <br />
                    <span className="text-sm text-gray-500">(US, CA & EU)</span>
                </>
            ),
        },
        {
            icon: <FiTruck />,
            text: "2-8 business days to deliver your order",
        },
        {
            icon: <TbRotate360 />,
            text: (
                <>
                    Hassle-free 20-day returns for <br />
                    <span className="hidden sm:inline">store credit or exchanges</span>
                    <span className="sm:hidden">exchanges</span>
                </>
            ),
        },
        {
            icon: <BsCheck2Circle />,
            text: "Guaranteed safe & secure checkout",
        },
    ];

    return (
        <>
            <div className="w-full flex flex-wrap justify-center items-start gap-x-8 gap-y-10 px-6 py-10 sm:py-14 text-center text-gray-700">
                {features.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center w-full sm:w-auto max-w-[220px]">
                        {React.cloneElement(item.icon, {
                            className: "text-2xl sm:text-3xl mb-2 text-gray-800"
                        })}
                        <p className="text-sm sm:text-base leading-relaxed">{item.text}</p>
                    </div>
                ))}
            </div>

            <footer>
                <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 md:text-2xl">
                        Subscribe to our newsletter
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Promotions, new products and sales. Directly to your inbox.
                    </p>
                    <form className="flex flex-col items-center gap-3">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full px-6 py-2 bg-black text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                        >
                            SUBSCRIBE
                        </button>
                    </form>
                </div>




                <div className="bg-white">
                    <section className="w-full px-5 py-8 sm:py-12">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
                                {/* Brand Info */}
                                <div className="p-4 rounded-lg">
                                    <img
                                        src="https://velsoir.com/wp-content/uploads/2025/04/velsoir-final-logo-1-e1744804375213-150x150.png"
                                        alt="VELSOIR Logo"
                                        className="w-24 h-24 mb-4"
                                    />
                                    <p className="text-sm text-gray-700 mb-1">Email: contact@velsoir.com</p>
                                    <p className="text-sm text-gray-700 mb-1">Phone: 9874563210</p>
                                    <p className="text-sm text-gray-700">Address: India</p>
                                </div>

                                {/* Information */}
                                <div className="p-4 rounded-lg">
                                    <h3 className="text-base font-semibold mb-4 text-gray-800">INFORMATION</h3>
                                    <ul className="space-y-2">
                                        <li><a href="/contact" className="text-sm text-gray-600 hover:text-black hover:underline transition-colors">Contact Us</a></li>
                                        <li><a href="/account" className="text-sm text-gray-600 hover:text-black hover:underline transition-colors">My account</a></li>
                                        <li><a href="/faqs" className="text-sm text-gray-600 hover:text-black hover:underline transition-colors">FAQs</a></li>
                                    </ul>
                                </div>

                                {/* Quick Shop */}
                                <div className="p-4 rounded-lg">
                                    <h3 className="text-base font-semibold mb-4 text-gray-800">QUICK SHOP</h3>
                                    <ul className="space-y-2">
                                        <li><a href="/fashion" className="text-sm text-gray-600 hover:text-black hover:underline transition-colors">Fashion</a></li>
                                        <li><a href="/uncategorized" className="text-sm text-gray-600 hover:text-black hover:underline transition-colors">Uncategorized</a></li>
                                    </ul>
                                </div>

                                {/* Customer Services */}
                                <div className="p-4 rounded-lg">
                                    <h3 className="text-base font-semibold mb-4 text-gray-800">CUSTOMER SERVICES</h3>
                                    <ul className="space-y-2">
                                        <li><a href="/cart" className="text-sm text-gray-600 hover:text-black hover:underline transition-colors">Cart</a></li>
                                        <li><a href="/shipping-policy" className="text-sm text-gray-600 hover:text-black hover:underline transition-colors">Shipping Policy</a></li>
                                        <li><a href="/privacy-policy" className="text-sm text-gray-600 hover:text-black hover:underline transition-colors">Privacy Policy</a></li>
                                        <li><a href="/order-tracking" className="text-sm text-gray-600 hover:text-black hover:underline transition-colors">Order Tracking</a></li>
                                        <li><a href="/terms" className="text-sm text-gray-600 hover:text-black hover:underline transition-colors">Terms Of Service</a></li>
                                        <li><a href="/refund-policy" className="text-sm text-gray-600 hover:text-black hover:underline transition-colors">Return and Refund Policy</a></li>
                                    </ul>
                                </div>

                                {/* Newsletter */}
                                <div className="p-4 rounded-lg">
                                    <h3 className="text-base font-semibold mb-4 text-gray-800">SIGNUP BONUS</h3>
                                    <p className="text-sm text-gray-600 mb-4">
                                        Sign up for our newsletter and get 10% off your first purchase.
                                    </p>
                                    <form className="flex flex-col gap-3">
                                        <input
                                            type="email"
                                            placeholder="Your email address"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
                                            required
                                        />
                                        <button
                                            type="submit"
                                            className="w-full px-6 py-2 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors text-sm"
                                        >
                                            SUBSCRIBE
                                        </button>
                                    </form>

                                    <div className="flex items-center gap-4 mt-6">
                                        <a href="https://youtube.com" className="text-gray-500 hover:text-black transition-colors">
                                            <IoLogoYoutube size={20} />
                                        </a>
                                        <a href="https://twitter.com" className="text-gray-500 hover:text-black transition-colors">
                                            <FaTwitter size={20} />
                                        </a>
                                        <a href="https://instagram.com" className="text-gray-500 hover:text-black transition-colors">
                                            <FaInstagram size={20} />
                                        </a>
                                        <a href="https://facebook.com" className="text-gray-500 hover:text-black transition-colors">
                                            <FaFacebook size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full h-px bg-gray-200 my-8"></div>
                        </div>
                    </section>

                    {/* Payment Methods */}
                    <div className="bg-gray-50 py-8">
                        <div className="max-w-7xl mx-auto px-5">
                            <p className="text-center text-gray-500 text-sm mb-6">We accept the following payment methods</p>
                            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                                {[
                                    "https://static.wixstatic.com/media/84770f_27001c40036842889a78a72766ad4700~mv2.png/v1/fill/w_55,h_33,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Visa.png",
                                    "https://static.wixstatic.com/media/c837a6_e8798fcfdaf144478a5c7da1ba28ff2c~mv2.png/v1/fill/w_55,h_34,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/brand-mastercard%403x.png",
                                    "https://static.wixstatic.com/media/c837a6_2bd3e20d1e214eccb5e106fc6d1f535d~mv2.png/v1/fill/w_55,h_29,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/brand-amex%403x.png",
                                    "https://static.wixstatic.com/media/c837a6_52115f99af28419d95a951f226e32e2b~mv2.png/v1/fill/w_55,h_34,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/brand-chinaunionpay%403x.png",
                                    "https://static.wixstatic.com/media/c837a6_9378fbd3ef8c470bb89aee12ecbd2209~mv2.png/v1/fill/w_55,h_34,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/brand-jcb%403x.png",
                                    "https://static.wixstatic.com/media/84770f_70555dcb450a415d80322cb8d7e82a33~mv2.png/v1/fill/w_52,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Diners.png",
                                    "https://static.wixstatic.com/media/84770f_8445424a46ca49f39359bf19d4a3e537~mv2.png/v1/fill/w_55,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PayPal.png"
                                ].map((src, index) => (
                                    <img
                                        key={index}
                                        src={src}
                                        alt="Payment method"
                                        className="h-6 md:h-8 object-contain opacity-80 hover:opacity-100 transition-opacity"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="bg-gray-100 py-4">
                        <p className="text-center text-gray-600 text-sm">
                            © {new Date().getFullYear()} VELSOIR. All rights reserved. Developed by Freetechz Pvt. Ltd.
                        </p>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
