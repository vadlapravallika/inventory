"use client"

import {register} from "@/app/json/registerFields"
import {useState} from "react"
import Formgroup from "../components/formGroup"
import Link from "next/link"
import { useRouter } from 'next/navigation';

const SignUp = () => {
    const [formData, setFormData] = useState({})
    const router = useRouter();
    
    const handleSubmit = (event, data) => {
        event.preventDefault()
        fetch('http://localhost:5000/api/users',
            {   
                method: 'POST',
                body: JSON.stringify(formData),
                headers:{
                    'Content-Type': 'application/json',
                    }
            })
            .then(res => res.json())
            .then(res => router.push('/signin'))

    }
    return (
<div className='flex h-screen'>
    {/* Left side with image and interesting content */}
    <div className="w-1/2 bg-gray-200 flex justify-center items-center">
        <div className="text-center">
        <img src="https://www.jcount.com/wp-content/uploads/2018/08/Image_1-35.jpeg" alt="App Logo" className="w-100 h-80 rounded-full mx-auto mb-6" />
    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Welcome to our Inventory Management App!</h2>
    <p className="text-lg text-gray-700 mb-6">Track, manage, and organize your inventory effortlessly.</p>
    <p className="text-sm text-gray-600">With our user-friendly interface and powerful features, you can streamline your inventory operations and focus on growing your business.</p>
        </div>
    </div>
    {/* Right side with signup form */}
    <div className="w-1/2 bg-gray-200 flex justify-center items-center">
       <div className='px-10 flex flex-col items-center justify-center border rounded-lg shadow-md bg-F3D0D7'>
            <h1 className="text-3xl font-semibold mb-6">Please register</h1>
            <form onSubmit={(e, data) => handleSubmit(e, data)} className="w-full pb-10">
                <div className="w-full">
                    {
                        register.map((field, index) => (
                            <div key={`field-${index}`} className="mb-4">
                                <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
                                <input
                                    id={field.id}
                                    type={field.type}
                                    value={formData[field.name]}
                                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                                    className="border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
                                    placeholder={field.placeholder}
                                    required={field.required}
                                />
                            </div>
                        ))
                    }
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign Up</button>
                <p className="mt-4">Already have an account? <Link href="/signin" className="text-blue-500 font-semibold">Sign In</Link></p>
            </form>
        </div>
    </div>
</div>

    
    )
}

export default SignUp