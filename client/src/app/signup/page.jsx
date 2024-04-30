"use client"

import {register} from "@/app/json/registerFields"
import {useState} from "react"
import Formgroup from "../components/formGroup"
import Link from "next/link"

const SignUp = () => {
    const [formData, setFormData] = useState({})
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
            .then(res => console.log(res))

    }
    return (
        <div className='flex flex-col justify-center'> 
            <div className='px-10 flex flex-col items-center justify-center border'>
                <h1 className={`mb-3 text-2xl`}>
                    Please register.
                </h1>
                <form onSubmit={(e,data) => handleSubmit(e,data)} className="w-full pb-10">
                    <div className="flex-1 rounded-lg">
                        {
                            register.map((field, index) => {
                                return <>
                                        <div key={`field-${index}`}>
                                            <Formgroup form={field} 
                                                        handleForm={{formData, setFormData}}
                                                        // error={errors} 
                                                        // from={from} 
                                                        // control={control} 
                                                        // register={register}
                                                        />
                                        </div>
                                    </>
                            })
                        }
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign Up </button>
                    <p>already have an account? <Link className="text-blue-500" href={"/signin"}>Sign In</Link> </p>
                </form>
            </div>
        </div>
    )
}

export default SignUp