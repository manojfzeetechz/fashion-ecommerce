import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProductCard from "./ProductCard";

const Sections = ({ data }) => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 4, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + 4 < data.length ? prev + 1 : prev
    );
  };

  return (
    <section className="py-10 px-4 md:px-10">
      <div className="flex items-center justify-center space-x-6 mb-6">
        <button
          type="button"
          className={`p-2 rounded-full ${
            startIndex === 0
              ? "text-gray-300 cursor-not-allowed"
              : "text-gray-500 hover:text-black hover:bg-gray-100"
          }`}
          onClick={handlePrev}
          disabled={startIndex === 0}
        >
          <FaArrowLeft />
        </button>

        <h2 className="text-2xl font-semibold text-center">New Arrivals</h2>

        <button
          type="button"
          className={`p-2 rounded-full ${
            startIndex + 4 >= data.length
              ? "text-gray-300 cursor-not-allowed"
              : "text-gray-500 hover:text-black hover:bg-gray-100"
          }`}
          onClick={handleNext}
          disabled={startIndex + 4 >= data.length}
        >
          <FaArrowRight />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.slice(startIndex, startIndex + 4).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Sections;
