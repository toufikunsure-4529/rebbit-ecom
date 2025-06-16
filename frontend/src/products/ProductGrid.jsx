import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const hasDiscount = product.originalPrice && product.originalPrice > product.price;

    return (
        <Link
            to={`/product/${product._id}`}
            className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden block"
        >
            {/* Product Image */}
            <div className="aspect-square w-full overflow-hidden rounded-t-xl bg-gray-100">
                <img
                    src={product.images[0].url}
                    alt={product.images[0].altText || product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col space-y-2">
                {hasDiscount && (
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                )}
            </div>

            {/* Product Details */}
            <div className="p-4">
                {/* Brand */}
                {product.brand && (
                    <p className="text-xs font-medium text-gray-500 mb-1">{product.brand}</p>
                )}

                {/* Name */}
                <h3 className="md:text-lg text-md font-semibold text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center md:mb-3 mb-0">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-amber-400' : 'text-gray-300'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">
                        ({product.reviews})
                    </span>
                </div>

                {/* Price */}
                <div className="flex items-center md:mt-4">
                    <span className="text-lg font-bold text-gray-900">
                        ₹{product.price.toLocaleString()}
                    </span>
                    {hasDiscount && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                            ₹{product.originalPrice.toLocaleString()}
                        </span>
                    )}
                </div>

                {/* Colors */}
                {product.colors && product.colors.length > 0 && (
                    <div className="mt-3 hidden md:flex items-center">
                        <span className="text-xs text-gray-500 mr-2">Colors:</span>
                        <div className="flex space-x-1">
                            {product.colors.slice(0, 3).map((color, i) => (
                                <span
                                    key={i}
                                    className="w-4 h-4 rounded-full border border-gray-200"
                                    style={{ backgroundColor: color.toLowerCase() }}
                                    title={color}
                                />
                            ))}
                            {product.colors.length > 3 && (
                                <span className="text-xs text-gray-500">+{product.colors.length - 3}</span>
                            )}
                        </div>
                    </div>
                )}

                {/* View Details Button */}
                <div
                    className="mt-4 inline-block w-full text-center px-2 py-2 bg-gray-100 text-gray-800 font-medium rounded-lg group-hover:bg-gray-200 transition-colors duration-200"
                >
                    View full details →
                </div>
            </div>
        </Link>
    );
};

const ProductGrid = ({ products }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6 gap-2">
            {products.map((product) => (
                <ProductCard key={product._id} product={product} />
            ))}
        </div>
    );
};

export default ProductGrid;