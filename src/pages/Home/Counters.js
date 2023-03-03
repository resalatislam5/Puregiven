import React from 'react';
import { IoCallSharp } from 'react-icons/io5';
import impactBg from '../../ass/impact_bd.png'
import hand from '../../ass/icon/heart.png'
import hand1 from '../../ass/icon/heart_1.png'
import profile from '../../ass/icon/profile.png'
import dolarBag from '../../ass/icon/dolar_bag.png'
import CountUp from 'react-countup';

const Counters = () => {
    const counters = [
        {
            img:`${hand}`,
            count: '3630',
            title: 'New Causes'
        },
        {
            img:`${dolarBag}`,
            count: '2789',
            title: 'Dollar Raised'
        },
        {
            img:`${profile}`,
            count: '1426',
            title: 'Volunteers'
        },
        {
            img:`${hand1}`,
            count: '2478',
            title: 'Donors'
        }
    ]
    return (
        <div className='xl:bg-[#f0eeec] bg-no-repeat bg-cover xl:bg-contain bg-right' style={{backgroundImage:`url(${impactBg})`}}>
            <div className="container mx-auto xl:flex justify-between  sm:px-5 px-2 py-28">
                <div className="flex justify-center  xl:w-[45%]">
                    <div className="xl:text-[#636886] text-white flex flex-col gap-7 mt-[40%] md:mt-[20%] lg:mt-0">
                        <span className="text-2xl text-[#e07a5e]">IMPACT</span>
                        <h1 className="md:text-6xl text-3xl">EXPLORE PureGiven WORK AND IMPACT IN 2019</h1>
                        <p className="text-lg font-Barlow font-normal">We invest the money we raise into organizations with years of experience to build sustainable, community-owned water projects around the world. </p>
                        <p className="text-lg font-Barlow font-normal">We invest the money we raise into organizations with years of experience to build sustainable, community-owned water projects around the world. </p>
                    <div className='flex flex-col sm:flex-row items-center gap-5'>
                        <button className='border-2 text-[#e07a5e] text-lg py-3 px-5 hover:bg-[#e07a5e] hover:text-white hover:border-[#e07a5e]'>Donate now</button>
                        <button className='border-2 text-[#e07a5e] text-lg py-4 px-5 hover:bg-[#e07a5e] hover:text-white hover:border-[#e07a5e]'><IoCallSharp /></button>
                        <a href="tel:+1 (212) 977-8888" className='text-xl xl:text-[#363a57] text-white'>+1 (212) 977-8888</a>
                    </div>
                    </div>
                </div>
                <div className="xl:w-[45%] bg-white text-[#363a57] mt-10 xl:mt-0">
                        <div className="flex flex-wrap sm:p-5 justify-center">
                            {
                                counters.map((counter, i) => <div id={i} className="sm:w-[45%] w-full border-2 hover:border-[#e07a5e] flex justify-center items-center flex-col p-20 hover:bg-[#e07a5e] hover:text-white">
                                <img src={counter.img} className="bg-white rounded-lg" alt="" />
                                <h5 className="text-4xl mt-4">
                                <CountUp
                                enableScrollSpy={true}
                                 end={counter.count}
                                  />
                                </h5>
                                <p className="text-sm">{counter.title}</p>
                            </div>
                            )}
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Counters;