import React from 'react';
import volunteerBg from '../../ass/breadcrumb_bg.png'
const Volunteer = () => {
    return (
        <div className='bg-cover bg-no-repeat py-24' style={{backgroundImage:`url(${volunteerBg})`}}>
            <div className="container flex sm:justify-around justify-center items-center xl:gap-5 gap-8 px-2 mx-auto text-[#faf7e3] flex-wrap sm:flex-nowrap">
                <div className="xl:w-5/12 lg:w-6/12 sm:w-7/12">
                    <h2 className="md:text-5xl text-2xl text-center sm:text-left">Let's make a difference in the lives of others</h2>
                </div>
                <div className="xl:w-1/5 lg:w-1/3 sm:w-2/5">
                    <button className='border-2 text-lg py-3 px-5 hover:bg-[#f0724f]'>Become a Volunteer</button>
                </div>
            </div>
        </div>
    );
};

export default Volunteer;