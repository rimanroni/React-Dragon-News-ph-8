import React from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";
const LoginWith = () => {
    return (
        <div className=' py-4'>
            <h1 className='text-2xl font-bold px-4'>Login With</h1>
            <div className='text-center my-2   flex justify-center  ' >
                <button className='border-2 border-black text-xl px-4 py-1 rounded-md hover:border-blue-600 hover:text-blue-600 duration-150'>
                    <FaGoogle className='inline' /> Login With Google
                </button>
            </div>
            <div className='text-center   '>
                <button className='border-2 border-black text-xl px-4 py-1 rounded-md hover:border-blue-600 hover:text-blue-600 duration-150'>
                    <FaGithub className='inline' /> Login With Github
                </button>
            </div>

        </div>
    );
};

export default LoginWith;