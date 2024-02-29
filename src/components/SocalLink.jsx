import React from 'react';
import { FaFacebook , FaTwitter,FaInstagram } from "react-icons/fa";
const SocalLink = () => {
    return (
        <div className='my-2'>
            <h1 className='text-2xl mb-2 font-bold  px-4'>Find Us On</h1>
            <div className='mx-4 text-xl '>
                <div className='border rounded-t-lg px-2 py-1'><FaFacebook className='inline mr-2' /> Facebook</div>
                <div className='border-x px-2 py-1'><FaTwitter className='inline mr-2'/> Twitter</div>
                <div className='border rounded-b-lg px-2 py-1'><FaInstagram className='inline mr-2'/> Instagram </div>
            </div>
        </div>
    );
};

export default SocalLink;