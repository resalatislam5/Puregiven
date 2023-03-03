import React from 'react';
import causeBg from '../../ass/causes_list_bg.png'
import cause1 from '../../ass/causes/causes_thumb_1.png'
import cause2 from '../../ass/causes/causes_thumb_2.png'
import cause3 from '../../ass/causes/causes_thumb_3.png'
import progressBar from '../../ass/progress_bar_bg.png'
import ProgressBar from 'react-animated-progress-bar';
import { BsShare, BsFillCameraFill, BsYoutube } from 'react-icons/bs';

const Causes = () => {
    const causes = [
        {
            image: `${cause1}`,
            topButon: 'EDUCATION',
            title: 'New School Teachers',
            name: 'Lorem Ipsum. Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor nisi elit',
            price: '$50,000',
            raised : 'Raised of $70,000'
        },
        {
            image: `${cause2}`,
            topButon: 'WATER',
            title: 'The Sheohar 2 Project',
            name: 'Lorem Ipsum. Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor nisi elit',
            price: '$50,000',
            raised : 'Raised of $70,000'
        },
        {
            image: `${cause3}`,
            topButon: 'FOOD',
            title: 'Moving Toward A Better',
            name: 'Lorem Ipsum. Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor nisi elit',
            price: '$50,000',
            raised : 'Raised of $70,000'
        }
]
    return (
        <div className='bg-repeat-x bg-[#f0eeec] sm:py-28 py-10 ' style={{backgroundImage:`url(${causeBg})`}}>
            <div className='text-center'>
                <p className='text-[#e07a5e] text-lg'>Popular Causes</p>
                <h2 className="text-[#faf7e3] text-6xl">Donate to charity causes <br className='' /> around the world.</h2>
            </div>
            <div className="container flex flex-wrap justify-center  gap-8 mx-auto mt-20">
                {
                causes.map((cau) => <div  className="sm:w-96 w-80 -mt-[2px] bg-white relative">
                <img className='w-full' src={cau.image} alt="" />
                <div className="absolute top-3 w-full flex justify-between px-5">
                        <button className='border-2 text-white text-lg py-1 px-5'>{cau.topButon}</button>
                        <div className="text-white flex items-center gap-2 text-xl">
                            <p className='bg-black opacity-80 py-2 px-4 flex items-center gap-2'><BsFillCameraFill /> <span>6</span></p>
                            <p className='bg-black opacity-80 py-2 px-4 flex items-center gap-2'><BsYoutube /> <span>3</span></p>
                        </div>
                </div>
                <div className="my-8 px-8 flex flex-col gap-5 ">
                    <h3 className="text-3xl text-[#363a57]">{cau.title}</h3>
                    <p className="">{cau.name}</p>
                    <div className=''>
                    <ProgressBar
                    backgroundImage={progressBar}
                    width="300px"
                    height="15px"
                    rect
                    fontColor="gray"
                    percentage="70"
                    rectPadding="1px"
                    trackPathColor="transparent"
                    bgColor="#333333"
                    trackBorderColor="grey"
                    />
                        <p className='text-[#272e3b] text-lg'>{cau.price}</p>
                        <p className='text-[#272e3b] text-lg'>{cau.raised}</p>
                    </div>
                <div className='flex gap-5'>
                    <button className='border-2 text-[#7b7f85] text-lg py-3 px-5 hover:bg-[#e07a5e] hover:text-white hover:border-[#e07a5e]'>Donate now</button>
                    <button className='border-2 text-[#7b7f85] text-lg py-3 px-5 hover:bg-[#e07a5e] hover:text-white hover:border-[#e07a5e]'><BsShare /></button>
                </div>
                </div>
            </div>)}
            </div>
            <a href='/' className="text-center text-lg text-[#d14f42] pt-10 block underline">So Much More</a>
        </div>
    );
};

export default Causes;