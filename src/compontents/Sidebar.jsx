import React, { useState } from "react";
import { FiChevronDown, FiChevronUp, FiCheck } from "react-icons/fi";

const Sidebar = () => {
  const [openSections, setOpenSections] = useState({
    shirts: true,
    suits: true,
    trousers: true
  });
  
  const [selectedFilters, setSelectedFilters] = useState({
    "all-products": true,
    "suits": true,
    "trousers": true
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleFilter = (filterId) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterId]: !prev[filterId]
    }));
  };

  const filterGroups = [
    {
      id: "all",
      title: "All Products",
      count: 215,
      items: [
        { id: "all-products", name: "All Products", count: 215 },
        { id: "home-new-arrivals", name: "Home New Arrivals", count: 8 },
        { id: "men-shirts", name: "Men shirts", count: 14 },
        { id: "new", name: "New", count: 0 }
      ]
    },
    {
      id: "shirts",
      title: "Shirts",
      count: 0,
      items: [
        { id: "all-shirts", name: "All Shirts", count: 0 },
        { id: "kids-shirts", name: "Kids Shirts", count: 0 },
        { id: "men-shirts", name: "Men Shirts", count: 0 },
        { id: "women-shirts", name: "Women Shirts", count: 0 }
      ]
    },
    {
      id: "other",
      title: "Other Categories",
      items: [
        { id: "smoking-robe", name: "Smoking Robe", count: 8 },
        { id: "suits", name: "Suits", count: 171 },
        { id: "trousers", name: "Trousers", count: 15 },
        { id: "uncategorized", name: "Uncategorized", count: 1 },
        { id: "women-shirt", name: "Women Shirt", count: 8 }
      ]
    }
  ];

  return (
    <aside className="w-full md:w-72 bg-white   shadow-sm ms-20">
      <div className="flex justify-between items-center mb-6 pb-2 ">
        <h2 className="text-xl font-semibold text-gray-900">Products Type</h2>
        <button 
          className="text-sm text-blue-600 hover:text-blue-800"
          onClick={() => setSelectedFilters({})}
        >
          Clear all
        </button>
      </div>
      
      <div className="space-y-5">
        {filterGroups.map(group => (
          <div key={group.id} className="border-b pb-4 last:border-b-0">
            {group.title === "All Products" ? (
              <div className="mb-2">
                {group.items.map(item => (
                  <div 
                    key={item.id}
                    className={`flex items-center justify-between py-2 px-3 rounded-lg cursor-pointer transition-colors ${
                      selectedFilters[item.id] 
                        ? "bg-blue-50 border border-blue-200" 
                        : "hover:bg-gray-50"
                    }`}
                    onClick={() => toggleFilter(item.id)}
                  >
                    <div className="flex items-center">
                      {selectedFilters[item.id] && (
                        <FiCheck className="text-blue-600 mr-2" />
                      )}
                      <span className={selectedFilters[item.id] ? "font-medium text-blue-700" : "text-gray-700"}>
                        {item.name}
                      </span>
                    </div>
                    <span className="text-gray-500 text-sm">{item.count}</span>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <div 
                  className="flex justify-between items-center cursor-pointer py-2"
                  onClick={() => toggleSection(group.id)}
                >
                  <h3 className="font-medium text-gray-900">
                    {group.title} {group.count !== undefined && `(${group.count})`}
                  </h3>
                  {openSections[group.id] ? (
                    <FiChevronUp className="text-gray-500" />
                  ) : (
                    <FiChevronDown className="text-gray-500" />
                  )}
                </div>
                
                {openSections[group.id] && (
                  <div className="ml-2 space-y-1 mt-2">
                    {group.items.map(item => (
                      <div 
                        key={item.id}
                        className={`flex items-center justify-between py-2 px-3 rounded-lg cursor-pointer transition-colors ${
                          selectedFilters[item.id] 
                            ? "bg-blue-50 border border-blue-200" 
                            : "hover:bg-gray-50"
                        }`}
                        onClick={() => toggleFilter(item.id)}
                      >
                        <div className="flex items-center">
                          {selectedFilters[item.id] && (
                            <FiCheck className="text-blue-600 mr-2" />
                          )}
                          <span className={selectedFilters[item.id] ? "font-medium text-blue-700" : "text-gray-700"}>
                            {item.name}
                          </span>
                        </div>
                        <span className="text-gray-500 text-sm">{item.count}</span>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <div className="flex flex-col gap-3">
          <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Apply Filters
          </button>
          <button className="w-full py-2 text-gray-700 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors">
            Reset
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;