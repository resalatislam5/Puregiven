import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import banner from '../../ass/causes_details.png'
import icon from '../../ass/icon/1.png'
import ProgressBar from 'react-animated-progress-bar';
import causes_thumb_5 from '../../ass/causes/causes_thumb_5.png'
import causes_thumb_6 from '../../ass/causes/causes_thumb_6.png'
import causes_thumb_7 from '../../ass/causes/causes_thumb_7.png'
const CausesDetailsHelp = () => {
    const [money, setMoney] = useState(25);
    return (
        <div className='bg-white z-10 2xl:-mt-72 xl:-mt-48 lg:-mt-32 container mx-auto p-10 relative'>
                <div className='bg-white absolute p-7 right-0 hidden lg:flex  gap-10 -mt-24 z-20'>
                    <Link to='/' className='text-[#363a57]'>Home</Link>
                    <p>|</p>
                    <p className='text-[#e07a5e]'>OUR CAUSES</p>
                </div>
                <div>
                    <img className='w-full' src={banner} alt="" />
                    <div className='absolute xl:top-[25%] lg:top-[15%] sm:top-[5%] top-[2%] sm:left-[10%] left-[20%]'>
                        <p className='sm:text-lg inline-flex gap-4 items-center md:mb-8 mb-5 bg-white rounded-3xl pr-3'><span><img src={icon} alt="" /></span> Please Help us</p>
                        <h2 className='lg:text-6xl sm:text-3xl text-[#faf7e3]'>HELP US FOR OUR MOST <br /> HUMANIST PROJECTS</h2>
                    </div>
                </div>
                <div className='border p-10'>
                    <div className='bg-[#e9eaef] p-10'>
                        <h1 className="text-[#363a57] text-2xl">$50,000</h1>
                        <p className="text-lg text-[#7b7f85]">RAISED OF $70,000</p>
                    <ProgressBar
                        height="20px"
                        rect
                        fontColor="gray"
                        percentage="70"
                        rectPadding="1px"
                        trackPathColor="transparent"
                        bgColor="#333333"
                        trackBorderColor="grey"
                        />
                    </div>
                    <p className='font-Barlow text-[#636886] text-lg my-5'>Many donors want to dedicate a donation to a loved one, friend, or on behalf of a someone. The Tributes add-on allows you to do just that with powerful features to email one or multiple recipients eCards or print mailable cards to send to donors.</p>
                    <div className="flex flex-col gap-10">
                        <button type="submit" className='w-52 h-12 border-2 text-[#4c5a74] border-[#f0eeec]'>$ {money}</button>
                        <div className='flex gap-10 flex-wrap font-Barlow'>
                            <button type="submit" className='w-28 border-2 h-12 text-[#4c5a74] border-[#f0eeec]' onClick={() =>setMoney(25)}>$25</button>
                            <button type="submit" className='w-28 border-2 h-12 text-[#4c5a74] border-[#f0eeec]' onClick={() =>setMoney(50)}>$50</button>
                            <button type="submit" className='w-28 border-2 h-12 text-[#4c5a74] border-[#f0eeec]' onClick={() =>setMoney(100)}>$100</button>
                            <button type="submit" className='w-28 border-2 h-12 text-[#4c5a74] border-[#f0eeec]' onClick={() =>setMoney(250)}>$250</button>
                            <input type="number" placeholder='Custom' className='w-28 border-2 h-12 text-center text-[#4c5a74] border-[#f0eeec]' onChange={(e) =>setMoney(e.target.value)}/>
                        </div>
                        <a href='/' className='w-52 h-16 flex justify-center items-center bg-[#e07a5e] text-[#faf7e3]'>DONATE NOW</a>
                    </div>
                    <div className='flex flex-wrap gap-10 my-12 justify-evenly'>
                        <img src={causes_thumb_5} alt="" />
                        <img src={causes_thumb_6} alt="" />
                        <img src={causes_thumb_7} alt="" />
                    </div>
                    <div className='flex flex-col gap-10 font-Barlow font-normal text-[#636886]'>
                        <p>Many times, readers will get distracted by readable text when looking at the layout of a page. Instead of using filler text that says “Insert content here,” Lorem Ipsum uses a normal distribution of letters, making it resemble standard English. Lorem Ipsum is absolutely necessary in most design cases, too. Web design projects like landing pages, website redesigns and so on only look as intended when they're fully-fleshed out with content. Even if the design work is gorgeous, its quality won't be apparent if all of the graphic elements are collapsed onto each other because there's no content in place to fill them out.</p>
                        <p>Many times, readers will get distracted by readable text when looking at the layout of a page. Instead of using filler text that says “Insert content here,” Lorem Ipsum uses a normal distribution of letters, making it resemble standard English.</p>
                    </div>
            </div>
        </div>
    );
};

export default CausesDetailsHelp;