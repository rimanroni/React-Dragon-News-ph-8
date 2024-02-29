import React from 'react';
import { NavLink } from 'react-router-dom';
import logoMan from '../../assets/user.png'
const Navbar = () => {
    return (
        <div className=' grid grid-cols-3 my-4'>
                
           
           <div className='col-span-2 text-center space-x-4 text-xl'>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'}>About </NavLink>
            <NavLink to={'/career'}>Career</NavLink>
           </div>
           <div className='flex justify-end space-x-4 pr-4'>
             <img src={logoMan} className='w-[40px]' alt="" />
             <button className='capitalize bg-[#403F3F]  text-white px-4 py-2 rounded'>log in </button>
           </div>
        </div>
    );
};

export default Navbar;