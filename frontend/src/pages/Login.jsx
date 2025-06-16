import React, { useState } from 'react'
import { Link } from "react-router-dom"
import login from "../assets/login.webp"
import { toast } from 'sonner';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })

    const validateForm = () => {
        let valid = true
        const newErrors = {
            email: '',
            password: ''
        }

        // Email validation
        if (!email) {
            newErrors.email = 'Email is required'
            valid = false
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid'
            valid = false
        }

        // Password validation
        if (!password) {
            newErrors.password = 'Password is required'
            valid = false
        } else if (password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters'
            valid = false
        }

        setErrors(newErrors)
        return valid
    }

    const handleLogin = (e) => {
        e.preventDefault()

        if (validateForm()) {
            // Form is valid, proceed with login
            const formData = {
                email: email,
                password: password
            }

            // Here you would typically make an API call
            console.log('Login data:', formData)
            toast.success("Login Successful", { duration: 1000 })

            // Reset form
            setEmail('')
            setPassword('')
        } else {
            toast.error("Some fields need your attention. Please correct the highlighted errors.", { duration: 2000 })
        }
    }

    return (
        <div className=' flex bg-gray-50'>
            <div className='w-full md:w-1/2 flex flex-col justify-center items-center p-4 md:p-8 lg:p-12'>
                <form className='w-full max-w-md bg-white p-8 rounded-lg shadow-md' onSubmit={handleLogin}>
                    <div className='flex justify-center mb-6'>
                        <h2 className='text-2xl font-bold text-gray-800'>Rabbit</h2>
                    </div>

                    <h2 className='text-2xl font-bold text-center mb-6'>
                        Welcome back to <span className='text-rebbit-red'>Rabbit</span>
                    </h2>

                    <p className='text-center text-gray-600 mb-8'>Sign in to your account to continue</p>

                    <div className='mb-4'>
                        <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-2'>
                            Email
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
                            placeholder='Enter your password'
                        />
                        {errors.password && (
                            <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                        )}
                    </div>

                    <button
                        type='submit'
                        className='w-full bg-black text-white p-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black'
                    >
                        Sign In
                    </button>

                    <div className='mt-6 text-center text-sm text-gray-600'>
                        Don't have an account?{' '}
                        <Link
                            to="/register"
                            className='text-rebbit-red font-medium hover:underline'
                        >
                            Register
                        </Link>
                    </div>

                    <div className='mt-4 text-center'>
                        <Link
                            to="/forgot-password"
                            className='text-sm text-gray-600 hover:text-rebbit-red hover:underline'
                        >
                            Forgot password?
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
                    src={login}
                    alt="Login to account"
                    className='h-[750px] w-full object-cover'
                />
            </div>
        </div>
    )
}

export default Login