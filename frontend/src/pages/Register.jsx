import React, { useState } from 'react'
import { Link } from "react-router-dom"
import register from "../assets/register.webp"
import { toast } from 'sonner';

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [password, setPassword] = useState('')
    const [gender, setGender] = useState('')
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phoneNo: '',
        password: '',
        gender: ''
    })

    const validateForm = () => {
        let valid = true
        const newErrors = {
            name: '',
            email: '',
            phoneNo: '',
            password: '',
            gender: ''
        }

        // Name Validation
        if (!name.trim()) {
            newErrors.name = 'Name is required'
            valid = false
        }

        // Email validation
        if (!email.trim()) {
            newErrors.email = 'Email is required'
            valid = false
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid'
            valid = false
        }

        // Phone number validation
        if (!phoneNo.trim()) {
            newErrors.phoneNo = 'Mobile number is required'
            valid = false
        } else if (!/^\d{10}$/.test(phoneNo)) {
            newErrors.phoneNo = 'Mobile number must be 10 digits'
            valid = false
        }

        // Password validation
        if (!password.trim()) {
            newErrors.password = 'Password is required'
            valid = false
        } else if (password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters'
            valid = false
        }

        // Gender validation
        if (!gender) {
            newErrors.gender = 'Gender is required'
            valid = false
        }

        setErrors(newErrors)
        return valid
    }

    const handlePhoneChange = (e) => {
        const value = e.target.value.replace(/\D/g, '');
        setPhoneNo(value);
    };

    const handleRegister = (e) => {
        e.preventDefault()

        if (validateForm()) {
            // Form is valid, proceed with registration
            const formData = {
                name,
                email,
                phoneNo,
                password,
                gender
            }

            // Here you would typically make an API call
            console.log('Registration data:', formData)
            toast.success("Registration Successful", { duration: 1000 })

            // Reset form
            setName('')
            setEmail('')
            setPhoneNo('')
            setPassword('')
            setGender('')
        } else {
            toast.error("Some fields need your attention. Please correct the highlighted errors.", { duration: 2000 })
        }
    }

    return (
        <div className='flex bg-gray-50 min-h-screen'>
            <div className='w-full md:w-1/2 flex flex-col justify-center items-center p-4 md:p-8 lg:p-12'>
                <form className='w-full max-w-md bg-white p-8 rounded-lg shadow-md' onSubmit={handleRegister}>
                    <div className='flex justify-center mb-6'>
                        <h2 className='text-2xl font-bold text-gray-800'>Rabbit</h2>
                    </div>

                    <h2 className='text-2xl font-bold text-center mb-6'>
                        Create your <span className='text-rebbit-red'>Rabbit</span> account
                    </h2>

                    <p className='text-center text-gray-600 mb-8'>Join us to start your shopping journey</p>

                    <div className='mb-4'>
                        <label htmlFor="name" className='block text-sm font-medium text-gray-700 mb-2'>
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                                }`}
                            placeholder='Enter your full name'
                        />
                        {errors.name && (
                            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                        )}
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-2'>
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                                }`}
                            placeholder='your@email.com'
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                        )}
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="phone" className='block text-sm font-medium text-gray-700 mb-2'>
                            Mobile Number
                        </label>
                        <input
                            type="text"
                            id="phone"
                            value={phoneNo}
                            onChange={handlePhoneChange}
                            maxLength="10"
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.phoneNo ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                                }`}
                            placeholder='+91 9876543210'
                        />
                        {errors.phoneNo && (
                            <p className="mt-1 text-sm text-red-600">{errors.phoneNo}</p>
                        )}
                    </div>

                    <div className='mb-4'>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>
                            Gender
                        </label>
                        <div className="flex space-x-4">
                            {['Male', 'Female', 'Other'].map((option) => (
                                <label key={option} className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value={option}
                                        checked={gender === option}
                                        onChange={() => setGender(option)}
                                        className="h-4 w-4 text-rebbit-red focus:ring-rebbit-red border-gray-300"
                                    />
                                    <span className="ml-2 text-gray-700">{option}</span>
                                </label>
                            ))}
                        </div>
                        {errors.gender && (
                            <p className="mt-1 text-sm text-red-600">{errors.gender}</p>
                        )}
                    </div>

                    <div className='mb-6'>
                        <label htmlFor="password" className='block text-sm font-medium text-gray-700 mb-2'>
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.password ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                                }`}
                            placeholder='At least 8 characters'
                        />
                        {errors.password && (
                            <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                        )}
                    </div>

                    <button
                        type='submit'
                        className='w-full bg-black text-white p-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black'
                    >
                        Create Account
                    </button>

                    <div className='mt-6 text-center text-sm text-gray-600'>
                        Already have an account?{' '}
                        <Link
                            to="/login"
                            className='text-rebbit-red font-medium hover:underline'
                        >
                            Sign in
                        </Link>
                    </div>
                </form>
            </div>

            <div className='hidden md:block w-1/2 bg-gray-800 relative'>
                <div className='absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center'>
                    <h2 className='text-4xl font-bold text-white mb-4'>Rabbit E-Commerce</h2>
                    <p className='text-xl text-gray-200 text-center max-w-md'>
                        Discover the best products with Rabbit's seamless shopping experience
                    </p>
                </div>
                <img
                    src={register}
                    alt="Register for account"
                    className='h-full w-full object-cover'
                />
            </div>
        </div>
    )
}

export default Register