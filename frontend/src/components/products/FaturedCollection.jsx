import { Link } from "react-router-dom"
import { FaCheck, FaClock, FaShieldAlt } from "react-icons/fa"
import fetaured from "../../assets/featured.webp"

const FeaturedCollection = () => {
    return (
        <section className="py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col-reverse lg:flex-row items-center bg-white rounded-3xl  overflow-hidden hover:shadow-3xl transition-shadow duration-500">
                    {/* Left content */}
                    <div className="lg:w-1/2 p-6 lg:p-8 xl:p-10 text-center lg:text-left">
                        <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700 mb-3">
                            Premium Collection
                        </div>
                        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Comfort and Style</h2>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            Apparel made of the
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600">
                                finest materials
                            </span>
                        </h1>
                        <p className="text-base text-gray-600 mb-6 leading-relaxed max-w-lg">
                            Discover our premium collection crafted with meticulous attention to detail. Each piece combines luxury
                            materials with contemporary design to create timeless apparel that elevates your everyday style.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                            <Link
                                to="/collection/all"
                                className="group bg-black text-white px-6 py-3 rounded-xl text-base font-semibold hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Shop Now
                                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </Link>
                            <Link
                                to="/about"
                                className="px-6 py-3 rounded-xl text-base font-semibold text-gray-700 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
                            >
                                Learn More
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="flex justify-center lg:justify-start gap-6 mt-8 pt-6 border-t border-gray-100">
                            <div className="text-center lg:text-left">
                                <div className="text-xl font-bold text-gray-900">10K+</div>
                                <div className="text-xs text-gray-500">Happy Customers</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-xl font-bold text-gray-900">500+</div>
                                <div className="text-xs text-gray-500">Premium Items</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-xl font-bold text-gray-900">4.9★</div>
                                <div className="text-xs text-gray-500">Rating</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Image */}
                    <div className="lg:w-1/2 relative group md:mr-10 ">
                        <img
                            src={fetaured || "/placeholder.svg"}
                            alt="Featured collection showcasing premium apparel"
                            className="w-full h-full lg:h-80 object-cover group-hover:scale-105 transition-transform duration-700 rounded-lg"
                        />

                        {/* Floating elements */}
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-gray-800 shadow-lg">
                            New Arrival
                        </div>
                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg">
                            <div className="text-xs text-gray-600">Starting from</div>
                            <div className="text-lg font-bold text-gray-900">$99</div>
                        </div>
                    </div>
                </div>

     
            </div>
        </section>
    )
}

export default FeaturedCollection
