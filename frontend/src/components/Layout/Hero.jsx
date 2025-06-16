import React from 'react';
import heroVideo from '../../assets/hero-bg-video.mp4';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section
            className="relative w-full h-[300px] md:h-[600px] lg:h-[650px] overflow-hidden"
            aria-label="Vacation Sale Hero Section"
        >
            <video
                className="absolute w-full h-full object-cover"
                src={heroVideo}
                autoPlay
                loop
                muted
                playsInline
                title="Vacation Fashion Background Video"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" /> */}

            {/* Gradient overlay for better readability */}
            <div className="absolute inset-0 bg-black bg-opacity-15 to-transparent z-10" />

            {/* Text content */}
            <div className="relative z-20 flex items-center justify-center h-full text-center px-4">
                <div className="max-w-2xl text-white">
                    <h1 className="text-3xl md:text-6xl font-extrabold uppercase tracking-tight leading-tight mb-4">
                        Vacation Ready
                    </h1>
                    <p className="text-base md:text-xl font-light mb-6">
                        Explore our vacation-ready outfits with fast worldwide shipping.
                    </p>
                    <Link
                        to="#"
                        className="inline-block bg-white text-gray-900 px-6 py-2 rounded-sm text-lg font-semibold shadow hover:bg-gray-100 transition"
                        aria-label="Shop Vacation Ready Outfits"
                    >
                        Shop Now
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
