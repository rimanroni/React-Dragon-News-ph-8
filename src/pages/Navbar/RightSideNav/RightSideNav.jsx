import React from 'react';
import LoginWith from '../../../components/LoginWith';
import SocalLink from '../../../components/SocalLink';
import Qzone from '../../../components/Qzone';
import AddsForSite from '../../../components/AddsForSite';

const RightSideNav = () => {
    return (
        <div className='overflow-scroll py-4    scrollbar-hide'>
            <LoginWith/>
            <SocalLink/>
            <Qzone/>
            <AddsForSite/>
        </div>
    );
};

export default RightSideNav;