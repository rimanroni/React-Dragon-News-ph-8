import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import LeftSideNav from '../Navbar/LeftSideNav/LeftSideNav';
import RightSideNav from '../Navbar/RightSideNav/RightSideNav';
import BraekingNews from './BraekingNews';
import News from '../News/News';

const Home = () => {
    return (
        <div>
           <Header/>
           <BraekingNews/>
           <Navbar/>
             <div className='grid px-3 grid-cols-1 md:grid-cols-4 gap-4'>
            <div className='border-2' ><LeftSideNav/></div>
            <div className='md:col-span-2 border-2 h-[240vh] overflow-scroll scrollbar-hide  ' > 
             <News></News>
            </div>
            <div className='border-2'><RightSideNav/></div>
           </div>
        </div>
    );
};

export default Home;