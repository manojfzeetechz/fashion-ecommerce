import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ProductCard = ({ product, showQuickShop }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
    setHasInteracted(true);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
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

        <div className="absolute inset-0 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <button
            className="p-2 bg-white bg-opacity-70 rounded-full ml-2 hover:bg-opacity-100 transition-all pointer-events-auto"
            onClick={handlePrevImage}
          >
            <FaArrowLeft />
          </button>
          <button
            className="p-2 bg-white bg-opacity-70 rounded-full mr-2 hover:bg-opacity-100 transition-all pointer-events-auto"
            onClick={handleNextImage}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      <h3 className="mt-3 text-sm font-medium text-gray-800">{product.title}</h3>
      <div className="text-sm text-gray-600 mt-1">
        <span>{product.price}</span>
        <span className="line-through text-gray-400 ml-2">
          {product.oldPrice}
        </span>
      </div>

      {product.showQuickShop && (
        <button
          className="mt-3 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
          onClick={() => alert(`Quick shop for: ${product.title}`)}
        >
          Quick Shop
        </button>
      )}


      {showQuickShop && (
        <button
          className="mt-3 px-4 py-2 border-2 border-black text-black hover:bg-black rounded-full w-full hover:text-white transition duration-500"
          onClick={() => alert(`Quick shop for: ${product.title}`)}
        >
          Quick Shop
        </button>
      )}
    </div>
  );
};

export default ProductCard;
