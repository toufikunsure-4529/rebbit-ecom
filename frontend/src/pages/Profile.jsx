import React from 'react';
import MyOrderPage from './MyOrderPage';

const Profile = () => {
    return (
        <div className='min-h-screen bg-gray-50'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>


                {/* Main Content */}
                <div className='flex flex-col lg:flex-row gap-8'>
                    {/* Left Section - Profile Card */}
                    <div className='w-full lg:w-1/3'>
                        <div className='bg-white shadow rounded-lg overflow-hidden'>
                            <div className='bg-gradient-to-r from-rebbit-red to-red-600 h-24'></div>
                            <div className='px-6 pb-6 pt-2 relative'>
                                <div className='absolute -top-12 left-6'>
                                    <div className='h-24 w-24 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center overflow-hidden'>
                                        <svg className='h-16 w-16 text-gray-400' fill='currentColor' viewBox='0 0 20 20'>
                                            <path fillRule='evenodd' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' clipRule='evenodd' />
                                        </svg>
                                    </div>
                                </div>

                                <div className='mt-16'>
                                    <h2 className='text-2xl font-bold text-gray-900'>John Doe</h2>
                                    <p className='text-gray-600 mb-4'>john@example.com</p>

                                    <div className='space-y-4 mt-6'>

                                        <button className='w-full text-red-600 hover:text-red-800 font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out'>
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Orders */}
                    <div className='w-full md:w-2/3 lg:w-3/4'>
                        <div className='bg-white shadow rounded-lg overflow-hidden'>
                            <div className='px-6 py-4 border-b border-gray-200'>
                                <h2 className='text-xl font-semibold text-gray-900'>My Orders</h2>
                                <p className='text-gray-500 text-sm mt-1'>View and manage your order history</p>
                            </div>
                            <div className='p-6'>
                                <MyOrderPage />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;