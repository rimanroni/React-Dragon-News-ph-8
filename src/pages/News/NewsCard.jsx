import React, { useState } from 'react';
import { CiBookmark } from "react-icons/ci";
import { IoMdShare } from "react-icons/io";
const NewsCard = ({news}) => {
     const {details,image_url,thumbnail_url,img,published_date,name,author,title, total_view,rating} = news;
     const [read, setRead] = useState(false)
     const handleRead = ()=>{
        setRead(!read)
     }
    return (
        <div>
            {/* author info saved and share  */}
            <div className='flex justify-between mb-2 bg-slate-200 rounded px-6 py-2'>
                <div className='flex  items-center space-x-3'>
                    <img src={author.img} className='w-[40px] rounded-full' alt="" />
                    <div className='space-y-1'>
                    <p className='font-bold'>{author.name}</p>
                    <p>{author.published_date}</p>
                    </div>
                </div>
                <div className='flex items-center text-2xl  space-x-4 font-bold'>
                <CiBookmark />
                <IoMdShare />
                </div>
            </div>
            {/* author info saved and share  */}
            <div className='px-4 my-4'>
               <h1 className='text-xl'> {title}</h1>
               <img src={image_url} alt="" />
               <p>{read?details: details.slice(0,250)+'....'}</p>
               <button onClick={handleRead} className='text-orange-400'> {read?'Hide All' : 'Reade More'} </button>
            </div>
        </div>
    );
};

export default NewsCard;