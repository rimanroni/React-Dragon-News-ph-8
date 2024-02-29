import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    
    return (
        <div className='text-center py-2'>
           <img src={logo} alt="" className='mx-auto' />
           <p className='font-[400] text-[#706F6F]'>Journalism Without Fear or Favour</p>
           
           <p>{moment().format('dddd MMMM D , YYYY  ')}</p>
            
        </div>
    );
};

export default Header;