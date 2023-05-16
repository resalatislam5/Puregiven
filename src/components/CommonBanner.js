import React from 'react';
import banner from '../ass/breadcrumb_img.jpg';

const CommonBanner = ({text, title}) => {
    return (
        <div className='relative -z-10 '>
            <img className='sm:h-full h-[50vh] w-full' src={banner} alt="" />
            <div className='absolute lg:top-1/3 top-2/4 left-1/4'>
                <p className='text-lg text-[#f2cc8e]'>{text}</p>
                <h2 className='lg:text-9xl text-6xl text-[#faf7e3]'>{title}</h2>
            </div>
        </div>
    );
};

export default CommonBanner;