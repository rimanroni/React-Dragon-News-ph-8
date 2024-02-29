import moment from 'moment';
import React from 'react';
import { CiCalendar } from "react-icons/ci";
const SideNews = () => {
    return (
        <div className='space-y-3  '>
            <div className='space-y-2'>
                <img src="https://i.ibb.co/BTjdJ8V/1.png" className='mx-auto' alt="" />
               <div className='px-20 md:px-2'>
               <p className='px-4 font-semibold'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                <div className='flex justify-between px-4'>
                    <span>Sports</span>
                    <span className='flex items-center'><CiCalendar className='inline mr-2' /> {moment().format("MMM D, YY")}</span>
                </div>
               </div>
            </div>
            <div className='space-y-2'>
                <img className='mx-auto' src="https://i.ibb.co/Wc7jqxX/2.png" alt="" />
                <div className='px-20 md:px-2'>
               <p className='px-4 font-semibold'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                <div className='flex justify-between px-4'>
                    <span>Sports</span>
                    <span className='flex items-center'><CiCalendar className='inline mr-2' /> {moment().format("MMM D, YY")}</span>
                </div>
               </div>
            </div>
            <div className='space-y-2'>
                <img className='mx-auto' src="https://i.ibb.co/74cPSpP/3.png" alt="" />
                <div className='px-20 md:px-2'>
               <p className='px-4 font-semibold'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                <div className='flex justify-between px-4'>
                    <span>Sports</span>
                    <span className='flex items-center'><CiCalendar className='inline mr-2' /> {moment().format("MMM D, YY")}</span>
                </div>
               </div>
            </div>
        </div>
    );
};

export default SideNews;