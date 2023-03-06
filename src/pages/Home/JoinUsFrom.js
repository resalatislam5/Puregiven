import React from 'react';
import { AiOutlineRight } from "react-icons/ai";

const JoinUsFrom = () => {
    return (
        <div className='bg-[#ba664e] sm:py-24 py-10 px-5'>
            <div className="container mx-auto flex flex-wrap sm:gap-20 gap-10 justify-between">
                <div className="text-[#faf7e3] lg:w-[40%]">
                    <h1 className="text-4xl">Become an Volunteer</h1>
                    <p className="text-lg font-Barlow font-normal ">Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima modo typii nunc.</p>
                </div>
                <form className='flex gap-5 lg:w-[50%] w-full flex-wrap sm:flex-nowrap'>
                    <div className="font-normal flex flex-col gap-5 sm:w-[50%] w-full">
                        <input type="text" placeholder='Your Name' className='w-full p-3'/>
                        <input type="text" placeholder='Your Name' className='w-full p-3'/>
                    </div>
                    <div className="font-normal flex flex-col gap-5 sm:w-[45%] w-full">
                        <input type="text" placeholder='Your Name' className='w-full p-3'/>
                        <div className='w-full p-3  bg-[#82b29a] text-white flex items  gap-2 uppercase justify-center items-center text-lg'>
                         <input type="button" value="join us now"/>
                         <AiOutlineRight />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JoinUsFrom;