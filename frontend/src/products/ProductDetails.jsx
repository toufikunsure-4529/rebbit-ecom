import React, { useState, useEffect, useRef } from 'react';
import { FiChevronLeft, FiChevronRight, FiShoppingCart } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/autoplay';
import { toast } from 'sonner';

const ProductDetails = () => {
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const featuredProductsSwiperRef = useRef(null);

    const products = [
        {
            id: 1,
            name: 'Premium Leather Jacket',
            price: 249.99,
            originalPrice: 299.99,
            discount: 17,
            description: 'Handcrafted from full-grain leather with luxurious soft lining.',
            brand: 'Luxury Apparel',
            material: 'Genuine Leather',
            sizes: ["S", "M", "L", "XL"],
            colors: ["Black", "Brown", "Navy"],
            images: [
                { url: "https://images.unsplash.com/photo-1551028719-00167b16eac5", altText: "Leather Jacket Front" },
                { url: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea", altText: "Leather Jacket Side" }
            ],
            rating: 4.8,
            reviews: 142,
            isBestSeller: true
        },
        {
            id: 2,
            name: 'Classic Denim Jacket',
            price: 129.99,
            originalPrice: 159.99,
            discount: 19,
            description: 'Timeless denim jacket with premium stitching and durable fabric.',
            brand: 'Denim Masters',
            material: '100% Cotton Denim',
            sizes: ["S", "M", "L", "XL"],
            colors: ["Blue", "Black", "White"],
            images: [
                { url: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea", altText: "Denim Jacket Front" },
                { url: "https://images.unsplash.com/photo-1551028719-00167b16eac5", altText: "Denim Jacket Side" }
            ],
            rating: 4.6,
            reviews: 98,
            isBestSeller: true
        },
        {
            id: 3,
            name: 'Wool Blend Coat',
            price: 199.99,
            originalPrice: 249.99,
            discount: 20,
            description: 'Warm and stylish wool blend coat for winter seasons.',
            brand: 'Winter Wear',
            material: 'Wool Blend',
            sizes: ["S", "M", "L", "XL"],
            colors: ["Gray", "Navy", "Black"],
            images: [
                { url: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea", altText: "Denim Jacket Front" },
                { url: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea", altText: "Denim Jacket Front" },
            ],
            rating: 4.7,
            reviews: 76,
            isBestSeller: false
        }
    ];

    const [selectedProduct, setSelectedProduct] = useState(products[0]);


    const handleProductSelect = (product) => {
        setSelectedProduct(product);
        setSelectedSize(null);
        setSelectedColor(null);
        setQuantity(1);
    };

    const handleAddToCart = () => {
        if (!selectedSize || !selectedColor) {
            toast.error(' Please select size and color', { duration: 1000 });
            return;
        }
        console.log(`Added to cart: ${selectedProduct.name}`, {
            size: selectedSize,
            color: selectedColor,
            quantity,
            price: selectedProduct.price
        });
        setTimeout(() => {
            toast.success('Product added to cart', { duration: 1000 });
        }, 500);
    };

    const getColorClass = (color) => {
        const colorMap = {
            'Black': 'bg-black',
            'Brown': 'bg-amber-800',
            'Navy': 'bg-blue-900',
            'Red': 'bg-red-600',
            'White': 'bg-white border',
            'Blue': 'bg-blue-500',
            'Green': 'bg-green-600',
            'Gray': 'bg-gray-500'
        };
        return colorMap[color] || 'bg-gray-200';
    };

    return (
        <div className="bg-gray-50 md:py-12 md:px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header with Navigation */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h2 className='text-3xl md:text-5xl font-semibold text-gray-900 mb-4'>
                            Best Sellers</h2>
                        <p className='text-lg font-normal text-gray-600 max-w-2xl mx-auto'>
                            Discover our latest collection of premium products
                        </p>                    </div>
                    <div className="flex space-x-2">
                        <button
                            className="best-seller-prev p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100"
                        >
                            <FiChevronLeft className="text-gray-700" />
                        </button>
                        <button
                            className="best-seller-next p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100"
                        >
                            <FiChevronRight className="text-gray-700" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Right Side - Featured Products Slider */}
                    <div className="lg:col-span-1">
                        <Swiper
                            onSwiper={(swiper) => {
                                featuredProductsSwiperRef.current = swiper;
                            }}
                            modules={[Navigation, Autoplay]}
                            spaceBetween={20}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                            navigation={{
                                nextEl: '.best-seller-next',
                                prevEl: '.best-seller-prev',
                            }}
                            className="h-full"
                        >
                            {products.map((product) => (
                                <SwiperSlide key={product.id}>
                                    <div className="bg-white p-4 rounded-lg shadow-sm h-full">
                                        <div className="relative h-64 mb-4 bg-gray-100 rounded-lg overflow-hidden">
                                            <img
                                                src={product.images[0].url}
                                                alt={product.images[0].altText}
                                                className="w-full h-full object-cover"
                                            />
                                            {product.isBestSeller && (
                                                <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                                    BEST SELLER
                                                </div>
                                            )}
                                        </div>
                                        <div className="text-center">
                                            <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                                            <div className="flex justify-center items-center mt-2 space-x-2">
                                                <span className="text-center text-sm text-gray-600">Brand: {product.brand}</span>
                                                <span className="text-center text-sm text-gray-600">Material: {product.material}</span>
                                            </div>
                                            <div className="flex justify-center items-center mt-2 space-x-2">
                                                <span className="text-lg font-bold">₹{product.price}</span>
                                                {product.originalPrice && (
                                                    <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                                                )}
                                            </div>
                                            <Link
                                                to={`/products/${product.id}`}
                                                className="block text-center mt-3 text-sm text-gray-600 hover:text-gray-900"
                                                onClick={() => handleProductSelect(product)}
                                            >
                                                View full details →
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Left Side - Product Details */}
                    <div className="lg:col-span-2">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex flex-col md:flex-row gap-6">
                                {/* Product Images */}
                                <div className="md:w-1/2">
                                    <div className="h-80 mb-4 bg-gray-100 rounded-lg overflow-hidden">
                                        <Swiper
                                            modules={[Thumbs]}
                                            thumbs={{ swiper: thumbsSwiper }}
                                            className="h-full"
                                        >
                                            {selectedProduct.images.map((image, index) => (
                                                <SwiperSlide key={index}>
                                                    <img
                                                        src={image.url}
                                                        alt={image.altText}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                    <div className="h-20">
                                        <Swiper
                                            onSwiper={setThumbsSwiper}
                                            spaceBetween={10}
                                            slidesPerView={4}
                                            watchSlidesProgress={true}
                                            modules={[Thumbs]}
                                            className="h-full"
                                        >
                                            {selectedProduct.images.map((image, index) => (
                                                <SwiperSlide key={index}>
                                                    <div className="h-full cursor-pointer border border-gray-200 rounded-md overflow-hidden">
                                                        <img
                                                            src={image.url}
                                                            alt={image.altText}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                </div>

                                {/* Product Info */}
                                <div className="md:w-1/2">
                                    <h1 className="text-2xl font-bold text-gray-900">{selectedProduct.name}</h1>
                                    <div className="flex items-center mt-2 mb-4">
                                        <div className="flex items-center text-amber-400">
                                            {[...Array(5)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className={`w-5 h-5 ${i < Math.floor(selectedProduct.rating) ? 'text-amber-400' : 'text-gray-300'}`}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <span className="text-gray-600 ml-2 text-sm">
                                            {selectedProduct.rating} ({selectedProduct.reviews} reviews)
                                        </span>
                                    </div>

                                    <div className="mb-6">
                                        <p className="text-gray-700">{selectedProduct.description}</p>
                                    </div>

                                    <div className="space-y-6">
                                        {/* Size Selection */}
                                        <div>
                                            <h3 className="text-sm font-semibold text-gray-900 mb-2">SIZE</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProduct.sizes.map((size) => (
                                                    <button
                                                        key={size}
                                                        onClick={() => setSelectedSize(size)}
                                                        className={`px-4 py-2 border rounded-md text-sm font-medium ${selectedSize === size
                                                            ? 'bg-gray-900 text-white border-gray-900'
                                                            : 'bg-white text-gray-900 border-gray-300 hover:bg-gray-50'
                                                            }`}
                                                    >
                                                        {size}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Color Selection */}
                                        <div>
                                            <h3 className="text-sm font-semibold text-gray-900 mb-2">COLOR</h3>
                                            <div className="flex gap-3">
                                                {selectedProduct.colors.map((color) => (
                                                    <button
                                                        key={color}
                                                        onClick={() => setSelectedColor(color)}
                                                        className={`w-8 h-8 rounded-full border-2 ${selectedColor === color
                                                            ? 'border-gray-900'
                                                            : 'border-gray-200 hover:border-gray-400'
                                                            } ${getColorClass(color)}`}
                                                        title={color}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Add to Cart */}
                                        <div className="pt-4">
                                            <button
                                                onClick={handleAddToCart}
                                                className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 rounded-md font-medium flex items-center justify-center gap-2"
                                            >
                                                <FiShoppingCart />
                                                Add to Cart - ${selectedProduct.price}
                                            </button>
                                            <Link
                                                to={`/products/${selectedProduct.id}`}
                                                className="block text-center mt-3 text-sm text-gray-600 hover:text-gray-900"
                                            >
                                                View full details →
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;