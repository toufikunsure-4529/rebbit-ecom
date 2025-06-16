import React from 'react';
import { Link } from "react-router-dom";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';


const NewArrivals = () => {
    const newArrivals = [
        {
            _id: "1",
            name: "Stylish Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=1",
                    altText: "Stylish Jacket",
                },
            ],
        },
        {
            _id: "2",
            name: "Classic Denim Jeans",
            price: 80,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=2",
                    altText: "Classic Denim Jeans",
                },
            ],
        },
        {
            _id: "3",
            name: "Running Sneakers",
            price: 150,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=3",
                    altText: "Running Sneakers",
                },
            ],
        },
        {
            _id: "4",
            name: "Leather Handbag",
            price: 200,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=4",
                    altText: "Leather Handbag",
                },
            ],
        },
        {
            _id: "5",
            name: "Graphic T-Shirt",
            price: 35,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=5",
                    altText: "Graphic T-Shirt",
                },
            ],
        },
        {
            _id: "6",
            name: "Woolen Scarf",
            price: 45,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=6",
                    altText: "Woolen Scarf",
                },
            ],
        },
        {
            _id: "7",
            name: "Smart Watch",
            price: 250,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=7",
                    altText: "Smart Watch",
                },
            ],
        },
        {
            _id: "8",
            name: "Formal Shirt",
            price: 60,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=8",
                    altText: "Formal Shirt",
                },
            ],
        },
    ];

    return (
        <section className="py-12 ">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="md:text-center text-left mb-8 relative">
                    <h2 className='text-3xl md:text-5xl font-semibold text-gray-900 mb-4'>
                        Explore New Arrivals
                    </h2>
                    <p className='text-lg font-normal text-gray-600 max-w-2xl mx-auto'>
                        Discover our latest collection of premium products
                    </p>

                    {/* Navigation Arrows - Top right for all screens */}
                    <div className="absolute right-0 top-0 flex space-x-2">
                        <button className="new-arrivals-prev p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100">
                            <FiChevronLeft className="text-xl" />
                        </button>
                        <button className="new-arrivals-next p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100">
                            <FiChevronRight className="text-xl" />
                        </button>
                    </div>
                </div>

                {/* Swiper Carousel */}
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 4 },
                        }}
                        autoplay={{ delay: 4000 }}
                        navigation={{
                            nextEl: ".new-arrivals-next",
                            prevEl: ".new-arrivals-prev"
                        }}
                    >
                        {newArrivals.map((product) => (
                            <SwiperSlide key={product._id}>
                                <div className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <Link to={`/product/${product._id}`} className="block h-full">
                                        {/* Product Image */}
                                        <div className="aspect-square overflow-hidden">
                                            <img
                                                src={product.images[0].url}
                                                alt={product.images[0].altText || product.name}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                loading="lazy"
                                            />
                                        </div>

                                        {/* Product Info Overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 text-white p-4 rounded-b-lg backdrop-blur-sm">
                                            <h4 className="font-medium text-2xl">{product.name}</h4>
                                            <p className="mt-1 text-xl">₹{product.price}</p>
                                        </div>
                                        {/* Quick View Button (shown on hover) */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black bg-opacity-30">
                                            <button className="px-6 py-2 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors">
                                                Quick View
                                            </button>
                                        </div>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default NewArrivals;