import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto h-[200vh] py-4'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;