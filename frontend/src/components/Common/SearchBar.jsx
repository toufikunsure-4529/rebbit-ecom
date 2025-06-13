import React, { useState } from 'react';
import { HiMagnifyingGlass, HiMiniXMark } from 'react-icons/hi2';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const handleSearchToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Search Term", searchTerm)
        setIsOpen(false)
    }

    return (
        <div
            className={`transition-all duration-300 ease-in-out ${isOpen
                    ? "fixed inset-0 bg-white z-50 flex items-start justify-center pt-6 px-4"
                    : "w-auto"
                }`}
        >
            {isOpen ? (
                <form
                    onSubmit={handleSearch}
                    className="relative w-full max-w-xl flex items-center"
                >
                    {/* Search Input */}
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-gray-100 px-4 py-3 pr-12 rounded-md text-sm sm:text-base placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <button
                            type="submit"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900"
                            aria-label="Search"
                        >
                            <HiMagnifyingGlass className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Close Button */}
                    <button
                        type="button"
                        onClick={handleSearchToggle}
                        className="ml-4 text-gray-600 hover:text-red-500 transition"
                        aria-label="Close Search"
                    >
                        <HiMiniXMark className="w-8 h-8" />
                    </button>
                </form>
            ) : (
                <button
                    onClick={handleSearchToggle}
                    className="text-gray-600 hover:text-gray-900 transition"
                    aria-label="Open Search"
                >
                    <HiMagnifyingGlass className="h-6 w-6" />
                </button>
            )}
        </div>

    );
};

export default SearchBar;
