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
		<div className='flex h-[100vh]'>
			<form onSubmit={(e) => onSubmit(e)} className="flex items-center px-10">
				<div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
					<h1 className={`mb-3 text-2xl`}>
						Please log in to continue.
					</h1>
					    <div className="w-full">
                            <div>
                                <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="email"> Email	</label>
                                <div className="relative">
                                    <input
                                        value={loginData?.email}
                                        onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email address"
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="password" >Password</label>
                                <div className="relative">
                                    <input
                                        value={loginData?.password}
                                        onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                        id="password"
                                        type="password"
                                        name="password"
                                        placeholder="Enter password"
                                        minLength={6}
                                    />
                                </div>
                            </div>
						
					    </div>
                        { error && <p>{error}</p>}
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Log in</button>
                        <p className='mt-1 text-sm'>Doesn't have an account?
                            <Link href='/signup' className='text-blue-500 underline font-bold'> Sign Up</Link> 
                        </p>
				</div>
			</form>
		</div>
	);
}

export default LoginForm