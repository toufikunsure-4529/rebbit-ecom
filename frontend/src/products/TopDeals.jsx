import React from 'react'
import ProductGrid from './ProductGrid'
import { Link } from 'react-router-dom';

const TopDeals = () => {

    const topDealsProduct = [
        {
            _id: 1,
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
            _id: 2,
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
            _id: 3,
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
        },
        {
            _id: 4,
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
        },
        {
            _id: 5,
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
        },
        {
            _id: 6,
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
        },
        {
            _id: 7,
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
        },
        {
            _id: 8,
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
        },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="inline-block px-3 py-1 text-sm font-medium text-amber-700 bg-amber-100 rounded-full mb-4">
                        Hot Deals
                    </span>
                    <h2 className="text-3xl md:text-5xl font-semibold text-center text-gray-800 mb-5">
                        Explore Top Deals
                    </h2>
                    <p className='text-lg font-normal text-gray-600 max-w-2xl mx-auto'>
                        Discover our handpicked collection of premium products at unbeatable prices
                    </p>
                </div>

                {/* Product Grid */}
                <ProductGrid products={topDealsProduct} />

                {/* View All Button */}
                <div className="mt-2 text-end">
                    <Link
                        to="/products"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-800  transition-colors duration-200"
                    >
                        View All Products →
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default TopDeals