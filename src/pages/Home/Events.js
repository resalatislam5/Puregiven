import React from 'react';
import eventImg1 from '../../ass/event/event_thumb_01.png'
import eventImg2 from '../../ass/event/event_thumb_02.png'
import eventImg3 from '../../ass/event/event_thumb_03.png'
import evenBg from '../../ass/gray_map_bg.png'
import { BsShare } from 'react-icons/bs';
import { IoMdClock } from 'react-icons/io';
import profileImg1 from '../../ass/client/client_01.png'
import profileImg2 from '../../ass/client/02.png'
import profileImg3 from '../../ass/client/03.png'
const Events = () => {
    const events = [
        {
            image: `${eventImg1}`,
            time: '29 May,  11.00 am',
            title: 'Innovative Fundraising For A worldwide Cause',
            profileImg: `${profileImg1}`,
            name: 'Melisa Rock',
        },
        {
            image: `${eventImg2}`,
            time: '29 May,  11.00 am',
            title: 'Innovative Fundraising For A worldwide Cause',
            profileImg: `${profileImg2}`,
            name: 'Melisa Rock',
        },
        {
            image: `${eventImg3}`,
            time: '29 May,  11.00 am',
            title: 'Innovative Fundraising For A worldwide Cause',
            profileImg: `${profileImg3}`,
            name: 'Melisa Rock',
        }
]
    return (
        <div className='bg-cover bg-no-repeat bg-[#f0eeec] sm:py-28 py-10 ' style={{backgroundImage:`url(${evenBg})`}}>
            <div className='text-center'>
                <p className='text-[#e07a5e] text-lg'>our events</p>
                <h2 className="text-[#363a57] text-6xl">Next Events</h2>
            </div>
            <div className="container flex flex-wrap justify-center  gap-8 mx-auto mt-20">
                {
                events.map((eve) => <div  className="sm:w-96 w-80 -mt-[2px] bg-white relative">
                <img className='w-full' src={eve.image} alt="" />
                <div className="my-8 px-8 flex flex-col gap-5 ">
                    <p className="font-Barlow font-semibold bg-[#f0eeec] flex items-center gap-2 p-2 w-fit"><IoMdClock className='text-[#e07a5e]' /> {eve.time}</p>
                    <h3 className="text-3xl text-[#363a57]">{eve.title}</h3>
                    <div className='flex items-center gap-2'>
                        <img src={eve.profileImg} className='rounded-full' alt="" />
                        <div>
                            <p className='text-[#7c7a71] text-sm'>hosted by</p>
                            <p className='text-[#272e3b] text-lg'>{eve.name}</p>
                        </div>
                    </div>
                <div className='flex gap-5'>
                    <button className='border-2 text-[#7b7f85] text-lg py-3 px-5 hover:bg-[#e07a5e] hover:text-white hover:border-[#e07a5e] uppercase'>request for join</button>
                    <button className='border-2 text-[#7b7f85] text-lg py-3 px-5 hover:bg-[#e07a5e] hover:text-white hover:border-[#e07a5e]'><BsShare /></button>
                </div>
                </div>
            </div>)}
            </div>
        </div>

    );
};

export default Events;