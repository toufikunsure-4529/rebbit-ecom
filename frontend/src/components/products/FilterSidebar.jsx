import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  //x.com?a=1&b=2

  const [filter, setFilter] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });

  const [priceRange, setPriceRange] = useState([0, 100]);
  const categories = ["Top Wear", "Bottom Wear"];
  const colors = ["Red", "Blue", "Green", "Yellow", "Black", "White"];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const materials = ["Cotton", "Polyester", "Rayon", "Linen"];
  const brands = ["Nike", "Adidas", "Puma", "Reebok", "Under Armour"];
  const genders = ["Male", "Female", "Unisex"];

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]); // convert searchParams to object
    setFilter({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [] || "",
      material: params.material ? params.material.split(",") : [] || "",
      brand: params.brand ? params.brand.split(",") : [] || "",
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 100,
    });
    setPriceRange([0, params.maxPrice || 100]);
  }, [searchParams]);

  return (
    <div className=" p-4">
      <h3 className=" text-xl font-medium text-gray-800 mb-4">Filter </h3>

      {/* Category Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Category</label>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-1">
            <input
              type="radio"
              name="category"
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 "
            />
            <span className="text-gray-700">{category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;
