import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProductCard from "./ProductCard";

const Sections = ({ data, title, showAll = false, showButton = false, showQuickShop = false }) => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 4, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + 4 < data.length ? prev + 1 : prev
    );
  };



  // ✅ Decide what products to show
  const productsToDisplay = showAll ? data : data.slice(startIndex, startIndex + 4);

  return (
    <section className="py-10 px-4 md:px-10">
      {/* Title + Navigation Arrows */}
      <div className="flex items-center justify-center space-x-6 mb-6">
        {!showAll && (
          <button
            type="button"
            className={`p-2 rounded-full ${startIndex === 0
              ? "text-gray-300 cursor-not-allowed"
              : "text-gray-500 hover:text-black hover:bg-gray-100"
              }`}
            onClick={handlePrev}
            disabled={startIndex === 0}
          >
            <FaArrowLeft />
          </button>
        )}

        <h2 className="text-2xl font-semibold text-center">{title}</h2>

        {!showAll && (
          <button
            type="button"
            className={`p-2 rounded-full ${startIndex + 4 >= data.length
              ? "text-gray-300 cursor-not-allowed"
              : "text-gray-500 hover:text-black hover:bg-gray-100"
              }`}
            onClick={handleNext}
            disabled={startIndex + 4 >= data.length}
          >
            <FaArrowRight />
          </button>
        )}
      </div>

      {/* ✅ Single Grid: showQuickShop passed here */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsToDisplay.map((product, index) => (
          <ProductCard key={index} product={product} showQuickShop={showQuickShop} />
        ))}
      </div>

      {/* Optional View All Button */}
      {showButton && (
        <div className="flex justify-center mt-6">
          <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800">
            View All
          </button>
        </div>
      )}

      {productsToDisplay.length === 0 ? (
        <div className="text-center text-gray-500 border px-6 py-4 bg-gray-50 mt-4">
          No products were found matching your selection.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productsToDisplay.map((product, index) => (
            <ProductCard key={index} product={product} showQuickShop={showQuickShop} />
          ))}
        </div>
      )}

    </section>
  );
};

export default Sections;
