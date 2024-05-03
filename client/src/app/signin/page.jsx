'use client'
// import {
//   AtSymbolIcon,
//   KeyIcon,
// } from '@heroicons/react/24/outline';
// import { ArrowRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link'
import { authenticate } from '../utils';
import { useState } from 'react';

 
const LoginForm = () => {
	const [error, setError] = useState("");
  	const [loginData, setLoginData] = useState({})


	const onSubmit =  (e) => {
        e.preventDefault()
        console.log(loginData)
    
		authenticate(loginData)
            .then(res => console.log(res))
            .catch(err =>   {
                console.log(err)
                setError('Wrong Credentials!')
            }) 
	};
	  

	return (
<div className="flex flex-col min-h-screen">
    <header className="bg-gray-800 text-white text-center py-4">
        <h1 className="text-2xl font-semibold">Inventory App</h1>
    </header>
    <div className='flex flex-grow items-center justify-center bg-gray-100'>
        <form onSubmit={(e) => onSubmit(e)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" style={{ maxWidth: "30rem" }}>
            <h1 className="text-2xl font-semibold mb-6">Please log in to continue.</h1>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                <input
                    value={loginData?.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                <input
                    value={loginData?.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    minLength={6}
                />
            </div>
            {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Log in</button>
            <p className="text-center mt-4">
                Don't have an account? <Link href="/signup" className="text-blue-500 underline font-bold">Sign Up</Link>
            </p>
        </form>
    </div>
    <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
        <p>Programmed by Pravallika Vadla</p>
    </footer>
</div>
	);
}

export default LoginForm