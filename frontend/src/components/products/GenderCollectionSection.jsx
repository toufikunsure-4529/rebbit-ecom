import React from 'react';
import mensCollectionImage from '../../assets/mens-collection.webp';
import womensCollectionImage from '../../assets/womens-collection.webp';
import { Link } from 'react-router-dom';

const collections = [
  {
    title: "Women's Collection",
    image: womensCollectionImage,
    alt: "Stylish Women's Clothing Collection",
    link: '/collections/all?gender=women',
  },
  {
    title: "Men's Collection",
    image: mensCollectionImage,
    alt: "Trendy Men's Clothing Collection",
    link: '/collections/all?gender=men',
  },

];

const GenderCollectionSection = () => {
  return (
    <section className="py-16 px-4 lg:px-0 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-semibold text-center text-gray-800 mb-12">
          Explore Our Collections
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collections.map((item, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow hover:shadow-xl transition-all group"
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="w-full h-64 md:h-96 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-white bg-opacity-90 px-4 py-3 rounded-md">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <Link
                  to={item.link}
                  className="text-sm text-gray-900 font-medium underline hover:text-gray-800"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GenderCollectionSection;
