import React from 'react'
import { FaCheck, FaClock, FaShieldAlt } from "react-icons/fa"

const FeatureSection = () => {
    return (
        <div className="pb-12 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Feature highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                    <div className="text-center p-4 bg-white rounded-2xl  hover:shadow-xl transition-shadow duration-300">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <FaCheck className="w-4 h-4 text-gray-600" />
                        </div>
                        <h3 className="text-base font-semibold text-gray-900 mb-2">Premium Quality</h3>
                        <p className="text-sm text-gray-600">Crafted from the finest materials with attention to every detail</p>
                    </div>

                    <div className="text-center p-4 bg-white rounded-2xl  hover:shadow-xl transition-shadow duration-300">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <FaClock className="w-4 h-4 text-gray-600" />
                        </div>
                        <h3 className="text-base font-semibold text-gray-900 mb-2">Fast Delivery</h3>
                        <p className="text-sm text-gray-600">Free shipping on orders over $100 with express delivery options</p>
                    </div>

                    <div className="text-center p-4 bg-white rounded-2xl  hover:shadow-xl transition-shadow duration-300">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <FaShieldAlt className="w-4 h-4 text-gray-600" />
                        </div>
                        <h3 className="text-base font-semibold text-gray-900 mb-2">Satisfaction Guarantee</h3>
                        <p className="text-sm text-gray-600">30-day return policy with full refund if you're not satisfied</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureSection