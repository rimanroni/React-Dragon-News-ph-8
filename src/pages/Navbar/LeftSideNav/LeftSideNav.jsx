import React from 'react';
import SideLink from './SideLink';
import SideNews from './SideNews';

const LeftSideNav = () => {
    return (
        <div className='py-4 overflow-scroll scrollbar-hide h-[150vh]'>
            <SideLink/>
            <SideNews/>
        </div>
    );
};

export default LeftSideNav;