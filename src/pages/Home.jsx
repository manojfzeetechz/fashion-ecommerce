import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { productList } from "../compontents/Products";
import Sections from "../compontents/Sections";






const videoItems = [
    {
        src: "https://elagia.com/cdn/shop/videos/c/vp/ade8a3bad5494123af483ffca1bf630e/ade8a3bad5494123af483ffca1bf630e.HD-1080p-7.2Mbps-49799775.mp4?v=0",
        subtitle: "ELEGANT COLLECTION",
        title: "DRESSES",
        buttonText: "SHOP NOW",
    },
    {
        src: "https://elagia.com/cdn/shop/videos/c/vp/e10c3cc72bb3455ea548ba52077c2474/e10c3cc72bb3455ea548ba52077c2474.HD-1080p-7.2Mbps.mp4?v=0",
        subtitle: "MAKE A STATEMENT",
        title: "JUMPSUITS",
        buttonText: "EXPLORE",
    },
    {
        src: "https://elagia.com/cdn/shop/videos/c/vp/ad59237fabb04a5fbb273d286d88e5e7/ad59237fabb04a5fbb273d286d88e5e7.HD-1080p-7.2Mbps.mp4?v=0",
        subtitle: "POWER DRESSING",
        title: "SUITS",
        buttonText: "DISCOVER",
    },
];


export const ProductCard = ({ product }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    const handlePrevImage = () => {
        setCurrentImageIndex(prev =>
            prev === 0 ? product.images.length - 1 : prev - 1
        );
        setHasInteracted(true);
    };

    const handleNextImage = () => {
        setCurrentImageIndex(prev =>
            prev === product.images.length - 1 ? 0 : prev + 1
        );
        setHasInteracted(true);
    };

    const displayImage =
        isHovered && !hasInteracted && product.images.length > 1
            ? product.images[1]
            : product.images[currentImageIndex];

    return (
        <div className="text-center relative group">
            <div
                className="overflow-hidden shadow-md relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => {
                    setIsHovered(false);
                    setHasInteracted(false);
                }}
            >
                <img
                    src={displayImage}
                    alt={product.title}
                    className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                        className="p-2 bg-white bg-opacity-70 rounded-full ml-2 hover:bg-opacity-100 transition-all"
                        onClick={handlePrevImage}
                    >
                        <FaArrowLeft />
                    </button>
                    <button
                        className="p-2 bg-white bg-opacity-70 rounded-full mr-2 hover:bg-opacity-100 transition-all"
                        onClick={handleNextImage}
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </div>
            <h3 className="mt-3 text-sm font-medium text-gray-800">{product.title}</h3>
            <div className="text-sm text-gray-600 mt-1">
                <span>{product.price}</span>{" "}
                <span className="line-through text-gray-400 ml-2">{product.oldPrice}</span>
            </div>
        </div>
    );
};

const imagesSlider = [
    "https://elagia.com/cdn/shop/files/Elagia_Desktop_Banner_28_Nov_Crop_Jacket_Suit.webp?v=1712727784&width=1600",
    "https://elagia.com/cdn/shop/files/Elagia_WebBanner_HomeSections_PantsSuits_4.webp?v=1712727879&width=1600",
    "https://elagia.com/cdn/shop/files/Elagia_WebBanner_NewSuits_1_1.webp?v=1712727971&width=1600",
];

const imagesSlider2 = [
    "https://elagia.com/cdn/shop/files/Elagia_WebBanner_SetsCollection_2_1.webp?v=1712728646&width=1600",
    "https://elagia.com/cdn/shop/files/Elagia_WebBanner_HomeSections_PantsSuits_4.webp?v=1712727879&width=1600",
    "https://elagia.com/cdn/shop/files/Elagia_BannerWeb_Sets_4_1.webp?v=1712728693&width=1600",
];




const Home = () => {
    const [startIndex, setStartIndex] = useState(0);
    const featured = productList.slice(0, 3);


    const handlePrevproductList = () => {
        setStartIndex(prev => Math.max(prev - 1, 0));
    };

    const handleNextproductList = () => {
        setStartIndex(prev =>
            prev + 4 < productList.length ? prev + 1 : prev
        );
    };

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesSlider.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? imagesSlider.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % imagesSlider.length
        );
    };

    return (
        <div>
            <section className="relative w-full h-[80vh] flex items-center justify-center">
                <img
                    src="https://elagia.com/cdn/shop/files/head_banner_3.jpg?v=1686737655&width=1600"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <div className="relative z-10 text-center text-white px-4">
                    <p className="text-lg mb-2">UP TO 70% OFF</p>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">UNIQUE AS YOU ARE</h1>
                    <button className="mt-10 px-6 py-2 bg-white text-black hover:bg-black text-base rounded hover:text-white transition">
                        Shop Now
                    </button>
                </div>
            </section>
            <Sections data={productList.slice(0, 4)} />



            <section className="w-full flex justify-center items-center  bg-white">
                <div className="w-full bg-white py-12">
                    <div className="text-center mb-10 px-4">
                        <h1 className="text-3xl ">Modern Statement</h1>
                        <p className="text-gray-600 mt-8  text-base size[81]">
                            Timeless and wearable earrings with a modern twist that add a touch of <br /> style to any outfit.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 px-4 justify-center items-center">
                        {videoItems.map((item, index) => (
                            <div key={index} className="relative w-full md:w-1/3 h-[600px] overflow-hidden">
                                <video
                                    src={item.src}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover"
                                />

                                <div className="absolute bottom-6 left-6 text-white z-10">
                                    <p className="text-sm tracking-widest font-light">{item.subtitle}</p>
                                    <h2 className="text-2xl font-semibold mt-1">{item.title}</h2>
                                    <button className="mt-2 text-xs font-semibold underline hover:text-gray-300">
                                        {item.buttonText}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="w-full grid grid-cols-1 ">
                <div>
                    <img
                        src="https://elagia.com/cdn/shop/files/Elagia_Desktop_Banner_28_Nov_One_Shoulder_Dress.jpg?v=1701694963&width=1600"
                        alt=""
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>
                <div>
                    <img
                        src="https://elagia.com/cdn/shop/files/ShopPay_VIossi_10.webp?v=1712663690&width=1600"
                        alt=""
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>
                <div>
                    <img
                        src="https://elagia.com/cdn/shop/files/Elagia_WebBanner_NewSets_2.webp?v=1712725332&width=1600"
                        alt=""
                        className="w-full h-auto object-fir "
                    />
                </div>
            </section>

            <Sections data={productList.slice(0, 4)} />

            <section className="w-full grid grid-cols-1 ">
                <div>
                    <img
                        src="https://elagia.com/cdn/shop/files/Elagia_Desktop_Banner_28_Nov_Jumpsuit_b_1.webp?v=1712725967&width=1600"
                        alt=""
                        className="w-full h-auto object-fill "
                    />
                </div>
                <div className="relative w-full">
                    <img
                        src="https://elagia.com/cdn/shop/files/Elagia_WebBanner_AppScreen_3.webp?v=1712726481&width=1600"
                        alt=""
                        className="w-full h-auto object-cover rounded-lg"
                    />

                    <div className="absolute bottom-6 ms-20 mb-10 flex space-x-5">
                        <button className="px-6 py-2  bg-gray-200 text-black hover:bg-black text-base rounded hover:text-white transition">
                            IOS
                        </button>
                        <button className="px-6 py-2 bg-gray-200 text-black hover:bg-black text-base rounded hover:text-white transition">
                            ANDROID
                        </button>
                    </div>
                </div>
            </section>
            <section className="w-full grid grid-cols-1 ">
                <div>
                    <img
                        src="https://elagia.com/cdn/shop/files/Elagia_Desktop_Banner_28_Nov_Jumpsuit_b_1.webp?v=1712725967&width=1600"
                        alt=""
                        className="w-full h-auto object-fill "
                    />
                </div>
                <div className="relative w-full">
                    <img
                        src="https://elagia.com/cdn/shop/files/Elagia_WebBanner_AppScreen_3.webp?v=1712726481&width=1600"
                        alt=""
                        className="w-full h-auto object-cover rounded-lg"
                    />

                    <div className="absolute bottom-6 ms-20 mb-10 flex space-x-5">
                        <button className="px-6 py-2  bg-gray-200 text-black hover:bg-black text-base rounded hover:text-white transition">
                            IOS
                        </button>
                        <button className="px-6 py-2 bg-gray-200 text-black hover:bg-black text-base rounded hover:text-white transition">
                            ANDROID
                        </button>
                    </div>
                </div>
            </section>

            <section>
                <div className="flex flex-col md:flex-row gap-8 px-4 justify-center items-center">
                    <iframe
                        width="100%"
                        height="500"
                        src="https://www.youtube.com/embed/xeXV1KoX034?autoplay=1&mute=1&loop=1&playlist=xeXV1KoX034"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        className="rounded-lg"
                    ></iframe>
                </div>

            </section>

            <section className="w-full grid grid-cols-1 ">
                <div>
                    <img
                        src="https://elagia.com/cdn/shop/files/Elagia_WebsiteBanner_NewContent_1.webp?v=1712727089&width=1600"
                        alt=""
                        className="w-full h-auto object-fill "
                    />
                </div>

            </section>


            <Sections data={productList.slice(0, 4)} /> 


            <section className="w-full relative overflow-hidden">
                <div className="relative w-full h-[400px] md:h-[550px] lg:h-[650px]">
                    {imagesSlider.map((img, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ${currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
                                }`}
                        >
                            <img
                                src={img}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}

                    <button
                        onClick={goToPrevious}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full z-20 transition"
                    >
                        <FaArrowLeft />
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full z-20 transition"
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </section>

            <Sections data={productList.slice(0, 4)} />

            <section className="w-full grid grid-cols-1 ">
                <div>
                    <img
                        src="https://elagia.com/cdn/shop/files/Elagia_Desktop_Banner_28_Nov_Strappy_Cut_Out_Dress.webp?v=1712728198&width=1600"
                        alt=""
                        className="w-full h-auto object-fill "
                    />
                </div>

            </section>

            <Sections data={productList.slice(0, 4)} />

            <section className="w-full grid grid-cols-1 ">
                <div>
                    <img
                        src="https://elagia.com/cdn/shop/files/BANNER_WEB_1_SEP_1.webp?v=1712728372&width=1600"
                        alt=""
                        className="w-full h-auto object-fill "
                    />
                </div>

            </section>

            <Sections data={productList.slice(0, 4)} />

            <section className="w-full grid grid-cols-1 ">
                <div>
                    <img
                        src="https://elagia.com/cdn/shop/files/Elagia_WebBanner_WrapDress_3.webp?v=1712728483&width=1600"
                        alt=""
                        className="w-full h-auto object-fill "
                    />
                </div>

            </section>

            <Sections data={productList.slice(0, 4)} />

            <section className="w-full grid grid-cols-1 ">
                <div>
                    <img
                        src="https://elagia.com/cdn/shop/files/Elagia_WebBanner_WrapDress_3.webp?v=1712728483&width=1600"
                        alt=""
                        className="w-full h-auto object-fill "
                    />
                </div>

            </section>

            <Sections data={productList.slice(0, 4)} />

            <section className="w-full relative overflow-hidden">
                <div className="relative w-full h-[400px] md:h-[550px] lg:h-[650px]">
                    {imagesSlider2.map((img, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ${currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
                                }`}
                        >
                            <img
                                src={img}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}

                    <button
                        onClick={goToPrevious}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full z-20 transition"
                    >
                        <FaArrowLeft />
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full z-20 transition"
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </section>

            <Sections data={productList.slice(0, 4)} />

            <section className="w-full grid grid-cols-1 ">
                <div>
                    <img
                        src="https://elagia.com/cdn/shop/files/Elagia_WebBanner_Tops_1.webp?v=1712728865&width=1600"
                        alt=""
                        className="w-full h-auto object-fill "
                    />
                </div>

            </section>

        </div>
    );
};

export default Home;