import { IoGiftOutline } from "react-icons/io5";
import { FiTruck } from "react-icons/fi";
import { TbRotate360 } from "react-icons/tb";
import { BsCheck2Circle } from "react-icons/bs";
import React from "react";



const Features = () => {
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
  );
};

export default Features;

