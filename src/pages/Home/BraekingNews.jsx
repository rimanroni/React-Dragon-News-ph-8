import React from 'react';
import Marquee from "react-fast-marquee";
const BraekingNews = () => {
    return (
        <div className='mt-4   flex py-2  items-center bg-[#F3F3F3]'>
            <button className='bg-red-600 mr-5 py-2 px-4 rounded text-white'>Latest</button>
             <Marquee  pauseOnHover={true} speed={200}>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Marquee>
        </div>
    );
};

export default BraekingNews;