import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { KidsSuitsList, MensSuitsList, NewArrivalsList, WomensSuitsList } from "../compontents/Products";
import Sections from "../compontents/Sections";






const videoItems = [
    {
        src: "https://cdn.pixabay.com/video/2024/02/07/199623-910995789_tiny.mp4",
        subtitle: "ELEGANT COLLECTION",
        title: "MAN'S SUITS",
        buttonText: "SHOP NOW",
    },
    {
        src: "https://media.istockphoto.com/id/1130630556/video/decide-on-your-dreams-and-pursue-them-with-determination.mp4?s=mp4-640x640-is&k=20&c=kb4-nJ7YojJ7Jp-pFNxENrqXR5XIzddC7Gk0bta_iEs=",
        subtitle: "POWER DRESSING",
        title: "WOMEN'S SUITS",
        buttonText: "EXPLORE",
    },
    {
        src: "https://media.istockphoto.com/id/1269709070/video/small-manager-with-documents.mp4?s=mp4-480x480-is&k=20&c=g0aB7wjFbwfZiCkEkpsxX6xegUCxAxS72L-wJ9eUqAw=",
        subtitle: "ELEGANT COLLECTION ",
        title: "KID'S SUITS",
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
    "https://velsoir.com/wp-content/uploads/2025/03/Your-paragraph-text-2-scaled.png",
    "https://velsoir.com/wp-content/uploads/2025/03/The-Power-of-Style-%E2%80%93-VELSOIR-1.png",
    "https://velsoir.com/wp-content/uploads/2025/03/VINTAGE-ROBES-SHOWCASE-AT-MILAN-FASHION-WEEK-BY-VELSOIR-scaled.png",
];

const HomePageMainSlider = [
    "https://velsoir.com/wp-content/uploads/2025/04/Your-paragraph-text-5-scaled.png",
    "https://velsoir.com/wp-content/uploads/2025/04/Your-paragraph-text-6-scaled.png",
    "https://velsoir.com/wp-content/uploads/2025/04/Your-paragraph-text-4-scaled.png",
];




const Home = () => {
    const [startIndex, setStartIndex] = useState(0);
    const featured = NewArrivalsList.slice(0, 3);


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
        <>

            <section className="w-full relative overflow-hidden">
                <div className="relative w-full h-[300px] sm:h-[400px] md:h-[550px] lg:h-[650px] xl:h-[700px]">
                    {HomePageMainSlider.map((img, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center ${currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
                                }`}
                        >
                            <img
                                src={img}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-contain "
                            />
                        </div>
                    ))}

                    <button
                        onClick={goToPrevious}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full z-20 transition sm:left-6 md:p-3"
                    >
                        <FaArrowLeft className="text-sm sm:text-base md:text-lg" />
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full z-20 transition sm:right-6 md:p-3"
                    >
                        <FaArrowRight className="text-sm sm:text-base md:text-lg" />
                    </button>
                </div>
            </section>

            <Sections data={NewArrivalsList} title="New Arrivals"   showAll={false} />




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

            <section className="w-full relative overflow-hidden">
                <div className="relative w-full h-[300px] sm:h-[400px] md:h-[550px] lg:h-[650px] xl:h-[700px]">
                    {imagesSlider.map((img, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center ${currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
                                }`}
                        >
                            <img
                                src={img}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-contain px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20"
                            />
                        </div>
                    ))}

                    <button
                        onClick={goToPrevious}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full z-20 transition sm:left-6 md:p-3"
                    >
                        <FaArrowLeft className="text-sm sm:text-base md:text-lg" />
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full z-20 transition sm:right-6 md:p-3"
                    >
                        <FaArrowRight className="text-sm sm:text-base md:text-lg" />
                    </button>
                </div>
            </section>

            <section className="w-full grid grid-cols-1 ">

                <div>
                    <img
                        src="https://velsoir.com/wp-content/uploads/2025/03/DISCOVER-THE-LOOKS-YOU-LOVE.png"
                        alt=""
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>
                <div>
                    <img
                        src="https://velsoir.com/wp-content/uploads/2025/04/a2-scaled.png"
                        alt=""
                        className="w-full h-auto object-fir "
                    />
                </div>
            </section>

            <Sections data={MensSuitsList} title="Mens Suits" />


            <section className="w-full grid grid-cols-1 ">
                <div>
                    <img
                        src="https://velsoir.com/wp-content/uploads/2025/03/Effortless-Elegance-%E2%80%93-Shop-the-Latest-Trends-1.png"
                        alt=""
                        className="w-full h-auto object-fill "
                    />
                </div>
                <div className="relative w-full">
                    <img
                        src="https://velsoir.com/wp-content/uploads/2025/03/SLAY-IN-STYLE.png"
                        alt=""
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>
            </section>


            {/* <section>
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

            </section> */}

            <section className="w-full grid grid-cols-1 ">
                <div>
                    <img
                        src="https://elagia.com/cdn/shop/files/Elagia_WebsiteBanner_NewContent_1.webp?v=1712727089&width=1600"
                        alt=""
                        className="w-full h-auto object-fill "
                    />
                </div>

            </section>


            <Sections data={WomensSuitsList} title="Womens Suits" />


            <section className="w-full grid grid-cols-1 ">
                <div>
                    <img
                        src="https://velsoir.com/wp-content/uploads/2025/04/a7-scaled.png"
                        alt=""
                        className="w-full h-auto object-fill "
                    />
                </div>
                <div className="relative w-full">
                    <img
                        src="https://velsoir.com/wp-content/uploads/2025/04/a2-scaled.png"
                        alt=""
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>
            </section>

            {/* images slider? */}
            {/* <section className="w-full relative overflow-hidden">
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
            </section> */}

            <Sections data={KidsSuitsList} title="Kids Suits" />

            <section className="w-full relative overflow-hidden">
                <div className="relative w-full h-[300px] sm:h-[400px] md:h-[550px] lg:h-[650px] xl:h-[700px]">
                    {imagesSlider.map((img, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center ${currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
                                }`}
                        >
                            <img
                                src={img}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-contain px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20"
                            />
                        </div>
                    ))}

                    <button
                        onClick={goToPrevious}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full z-20 transition sm:left-6 md:p-3"
                    >
                        <FaArrowLeft className="text-sm sm:text-base md:text-lg" />
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full z-20 transition sm:right-6 md:p-3"
                    >
                        <FaArrowRight className="text-sm sm:text-base md:text-lg" />
                    </button>
                </div>
            </section>





        </>
    );
};

export default Home;