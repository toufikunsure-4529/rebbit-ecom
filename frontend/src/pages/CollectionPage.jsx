import React, { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/products/FilterSidebar";
import SortOptions from "../components/products/SortOptions";
import ProductGrid from "../components/products/ProductGrid";

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (e) => {
    //close side if click outside
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    // clean event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const fetchProducts = [
        {
          _id: 1,
          name: "Premium Leather Jacket",
          price: 249.99,
          originalPrice: 299.99,
          discount: 17,
          description:
            "Handcrafted from full-grain leather with luxurious soft lining.",
          brand: "Luxury Apparel",
          material: "Genuine Leather",
          sizes: ["S", "M", "L", "XL"],
          colors: ["Black", "Brown", "Navy"],
          images: [
            {
              url: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
              altText: "Leather Jacket Front",
            },
            {
              url: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
              altText: "Leather Jacket Side",
            },
          ],
          rating: 4.8,
          reviews: 142,
          isBestSeller: true,
        },
        {
          _id: 2,
          name: "Classic Denim Jacket",
          price: 129.99,
          originalPrice: 159.99,
          discount: 19,
          description:
            "Timeless denim jacket with premium stitching and durable fabric.",
          brand: "Denim Masters",
          material: "100% Cotton Denim",
          sizes: ["S", "M", "L", "XL"],
          colors: ["Blue", "Black", "White"],
          images: [
            {
              url: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
              altText: "Denim Jacket Front",
            },
            {
              url: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
              altText: "Denim Jacket Side",
            },
          ],
          rating: 4.6,
          reviews: 98,
          isBestSeller: true,
        },
        {
          _id: 3,
          name: "Wool Blend Coat",
          price: 199.99,
          originalPrice: 249.99,
          discount: 20,
          description: "Warm and stylish wool blend coat for winter seasons.",
          brand: "Winter Wear",
          material: "Wool Blend",
          sizes: ["S", "M", "L", "XL"],
          colors: ["Gray", "Navy", "Black"],
          images: [
            {
              url: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
              altText: "Denim Jacket Front",
            },
            {
              url: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
              altText: "Denim Jacket Front",
            },
          ],
          rating: 4.7,
          reviews: 76,
          isBestSeller: false,
        },
        {
          _id: 4,
          name: "Wool Blend Coat",
          price: 199.99,
          originalPrice: 249.99,
          discount: 20,
          description: "Warm and stylish wool blend coat for winter seasons.",
          brand: "Winter Wear",
          material: "Wool Blend",
          sizes: ["S", "M", "L", "XL"],
          colors: ["Gray", "Navy", "Black"],
          images: [
            {
              url: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
              altText: "Denim Jacket Front",
            },
            {
              url: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
              altText: "Denim Jacket Front",
            },
          ],
          rating: 4.7,
          reviews: 76,
          isBestSeller: false,
        },
        {
          _id: 5,
          name: "Wool Blend Coat",
          price: 199.99,
          originalPrice: 249.99,
          discount: 20,
          description: "Warm and stylish wool blend coat for winter seasons.",
          brand: "Winter Wear",
          material: "Wool Blend",
          sizes: ["S", "M", "L", "XL"],
          colors: ["Gray", "Navy", "Black"],
          images: [
            {
              url: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
              altText: "Denim Jacket Front",
            },
            {
              url: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
              altText: "Denim Jacket Front",
            },
          ],
          rating: 4.7,
          reviews: 76,
          isBestSeller: false,
        },
        {
          _id: 6,
          name: "Wool Blend Coat",
          price: 199.99,
          originalPrice: 249.99,
          discount: 20,
          description: "Warm and stylish wool blend coat for winter seasons.",
          brand: "Winter Wear",
          material: "Wool Blend",
          sizes: ["S", "M", "L", "XL"],
          colors: ["Gray", "Navy", "Black"],
          images: [
            {
              url: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
              altText: "Denim Jacket Front",
            },
            {
              url: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
              altText: "Denim Jacket Front",
            },
          ],
          rating: 4.7,
          reviews: 76,
          isBestSeller: false,
        },
        {
          _id: 7,
          name: "Wool Blend Coat",
          price: 199.99,
          originalPrice: 249.99,
          discount: 20,
          description: "Warm and stylish wool blend coat for winter seasons.",
          brand: "Winter Wear",
          material: "Wool Blend",
          sizes: ["S", "M", "L", "XL"],
          colors: ["Gray", "Navy", "Black"],
          images: [
            {
              url: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
              altText: "Denim Jacket Front",
            },
            {
              url: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
              altText: "Denim Jacket Front",
            },
          ],
          rating: 4.7,
          reviews: 76,
          isBestSeller: false,
        },
        {
          _id: 8,
          name: "Wool Blend Coat",
          price: 199.99,
          originalPrice: 249.99,
          discount: 20,
          description: "Warm and stylish wool blend coat for winter seasons.",
          brand: "Winter Wear",
          material: "Wool Blend",
          sizes: ["S", "M", "L", "XL"],
          colors: ["Gray", "Navy", "Black"],
          images: [
            {
              url: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
              altText: "Denim Jacket Front",
            },
            {
              url: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
              altText: "Denim Jacket Front",
            },
          ],
          rating: 4.7,
          reviews: 76,
          isBestSeller: false,
        },
      ];
      setProducts(fetchProducts);
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile Filter Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden border p-2 flex justify-center items-center"
      >
        <FaFilter className="mr-2" />
      </button>

      {/* Filter Sidebar */}
      <div
        ref={sidebarRef}
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 z-50 left-0 w-80 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}
      >
        <FilterSidebar />
      </div>

      <div className="flex-grow p-4">
        <h2 className="text-2xl uppercase mb-4"> All Collection</h2>
        {/* sort options*/}
        <SortOptions />

        {/* Product Grid */}
        {isLoading ? (
          <div className="text-center py-10">Loading products...</div>
        ) : (
          <div className="max-w-full">
            <ProductGrid products={products} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CollectionPage;
