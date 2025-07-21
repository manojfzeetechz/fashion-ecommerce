import React, { useState } from 'react';
import { TfiPlus, TfiClose, TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";
import { FaPinterest } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

const Shopinstagram = () => {
  const imageData = [
    {
      url: "https://velsoir.com/wp-content/uploads/2025/07/velsoir-new1-49.png",
      alt: "",
      title: "Discover timeless elegance in our latest arrivals.",
      date: "1st April 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/07/velsoir-new1-45.png",
      alt: "",
      title: "Elevate your style with our new spring collection.",
      date: "2nd April 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/07/velsoir-new1-44.png",
      alt: "",
      title: "Fresh looks for every occasion.",
      date: "3rd April 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/07/velsoir-new1-42.png",
      alt: "",
      title: "Step out in confidence and comfort.",
      date: "4th April 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/v1-42.png",
      title: "Unveil your unique style.",
      date: "5th April 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/3v-4.png",
      title: "Chic designs for modern women.",
      date: "6th April 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/v2-4.png",
      title: "Make a statement with every outfit.",
      date: "7th April 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/101-64-640x640.png",
      title: "Inspired by beauty, crafted for you.",
      date: "8th April 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/3v-17.png",
      title: "Find your perfect match.",
      date: "9th April 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/1-37-640x640.png",
      title: "Dress to impress every day.",
      date: "10th April 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/v1-48.png",
      title: "Luxury meets comfort in our new line.",
      date: "11th April 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/101-64-640x640.png",
      title: "Step into the season with style.",
      date: "12th April 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/101-39-640x640.png",
      title: "Bold colors, classic silhouettes.",
      date: "13th April 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/06/velsoir-new1-22.png",
      title: "Refresh your wardrobe today.",
      date: "14th April 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/v1-6.png",
      title: "Effortless style for every moment.",
      date: "15th April 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/06/velsoir-new1-19.png",
      title: "Find beauty in simplicity.",
      date: "16th April 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/v1-42.png",
      title: "Redefine your fashion story.",
      date: "17th April 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/101-3-640x640.png",
      title: "Inspired by you, designed for you.",
      date: "18th April 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/v1-19.png",
      title: "Step into sophistication.",
      date: "19th April 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/101-42-640x640.png",
      title: "Classic pieces for modern living.",
      date: "20th April 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/101-11-640x640.png",
      title: "Your style, your rules.",
      date: "21st April 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/2-84-640x640.png",
      title: "Elegance reimagined.",
      date: "22nd April 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/v1-9.png",
      title: "Fashion for every mood.",
      date: "23rd April 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/1-21-640x640.png",
      title: "Step out in style.",
      date: "24th April 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/101-56-640x640.png",
      title: "Make every day extraordinary.",
      date: "25th April 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/101-54-640x640.png",
      title: "Inspired by the latest trends.",
      date: "26th April 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/2-86-640x640.png",
      title: "Fashion that fits your life.",
      date: "27th April 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/101-50-640x640.png",
      title: "Dress up, stand out.",
      date: "28th April 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/2-87-640x640.png",
      title: "Find your signature look.",
      date: "29th April 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/1-26-640x640.png",
      title: "Fashion for every adventure.",
      date: "30th April 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/2-48-640x640.png",
      title: "Style that speaks volumes.",
      date: "1st May 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/2-83-640x640.png",
      title: "Embrace the new season.",
      date: "2nd May 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/1-27-640x640.png",
      title: "Fashion made for you.",
      date: "3rd May 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/1-27-640x640.png",
      title: "Express yourself with style.",
      date: "4th May 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/2-83-640x640.png",
      title: "Step into the spotlight.",
      date: "5th May 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/2-83-640x640.png",
      title: "Unleash your creativity.",
      date: "6th May 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/1-27-640x640.png",
      title: "Find joy in every detail.",
      date: "7th May 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/1-27-640x640.png",
      title: "Celebrate your individuality.",
      date: "8th May 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/2-83-640x640.png",
      title: "Make memories in style.",
      date: "9th May 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/2-80-640x640.png",
      title: "Fashion for every journey.",
      date: "10th May 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/2-80-640x640.png",
      title: "Inspired by dreams.",
      date: "11th May 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/1-14-640x640.png",
      title: "Create your own story.",
      date: "12th May 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/101-67-640x640.png",
      title: "Fashion that empowers.",
      date: "13th May 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/101-10-640x640.png",
      title: "Step into a new you.",
      date: "14th May 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/2-39-1-640x640.png",
      title: "Inspired by the world around us.",
      date: "15th May 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/1-70-640x640.png",
      title: "Fashion for every chapter.",
      date: "16th May 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/2-63-640x640.png",
      title: "Make every look unforgettable.",
      date: "17th May 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/101-49-640x640.png",
      title: "Style that inspires.",
      date: "18th May 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/v1-43.png",
      title: "Fashion for every dream.",
      date: "19th May 2025",
    },
    {
      url: "https://velsoir.com/wp-content/uploads/2025/05/101-48-640x640.png",
      title: "Step into the future of fashion.",
      date: "20th May 2025",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(25);
  const [modalIndex, setModalIndex] = useState(null);

  const handleShowMore = () => setVisibleCount(imageData.length);

  const openModal = (idx) => setModalIndex(idx);
  const closeModal = () => setModalIndex(null);

  const showNext = () =>
    setModalIndex((i) => (i + 1) % imageData.length);

  const showPrev = () =>
    setModalIndex((i) => (i === 0 ? imageData.length - 1 : i - 1));

  return (
    <>
      <div className="bg-white text-black w-full">
        <h2 className="font-serif text-[30px] text-center mt-5 text-[#333]">
          Tap Photo to Shop
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 p-4 sm:p-10 lg:p-14">
          {imageData.slice(0, visibleCount).map((item, idx) => (
            <div key={idx}
              className="relative group overflow-hidden shadow-md w-full max-w-[262px] h-[262px] cursor-pointer"
              onClick={() => openModal(idx)}
            >
              <img
                src={item.url}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white"
                  viewBox="0 0 24 24" stroke="white" className="w-8 h-8">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-.75a.75.75 0 110 1.5.75.75 0 010-1.5z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < imageData.length && (
          <div
            onClick={handleShowMore}
            className="cursor-pointer flex items-center justify-center text-gray-600 text-4xl font-bold p-4 relative bottom-12"
          >
            <TfiPlus />
          </div>
        )}

      
      </div>

      {/* Modal */}
      {modalIndex !== null && (
        <div className="fixed w-full h-full inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-[rgba(116,99,99,0.65)] bg-opacity-70 z-10" onClick={closeModal}></div>

          <div className="relative w-[95%] md:w-[90%] max-w-6xl h-[90vh] bg-white p-4 sm:p-6 text-black flex flex-col md:flex-row z-50 overflow-y-auto rounded-lg">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-gray-400 text-4xl cursor-pointer"
              onClick={closeModal}
            >
              <TfiClose />
            </button>

            {/* Image Section */}
            <div className="w-full md:w-[60%] h-[50vh] md:h-full flex items-center justify-center pr-0 md:pr-4">
              <img
                src={imageData[modalIndex].url}
                alt=""
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-[40%] flex flex-col items-center md:items-start md:pl-6 mt-6 md:mt-0">
              {/* Navigation arrows */}
              <div className="flex gap-4 mb-4 md:mb-8 self-center md:self-start text-gray-400">
                <button className="cursor-pointer" onClick={showPrev}>
                  <TfiAngleLeft size={35} />
                </button>
                <button className="cursor-pointer" onClick={showNext}>
                  <TfiAngleRight size={35} />
                </button>
              </div>

              {/* Text Content */}
              <div className="w-full text-center md:text-left">
                <p className="italic font-serif text-gray-900">
                  {imageData[modalIndex].title}
                </p>
                <p className="text-sm text-gray-600 tracking-wide uppercase mt-4 md:mt-10">
                  ELAGIAWEAR // INSTAGRAM // {imageData[modalIndex].date}
                </p>

                {/* Social Icons */}
                <div className="flex gap-4 text-gray-600 justify-center md:justify-start mt-6">
                  <a href="#"><FaFacebookF size={18} /></a>
                  <a href="#"><CiMail size={20} /></a>
                  <a href="#"><RiTwitterXFill size={18} /></a>
                  <a href="#"><FaPinterest size={18} /></a>
                  <a href="#"><FaLink size={18} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Shopinstagram;