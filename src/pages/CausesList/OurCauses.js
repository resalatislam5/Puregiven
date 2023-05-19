import React from 'react';
import cause1 from '../../ass/causes/causes_thumb_1.png'
import cause2 from '../../ass/causes/causes_thumb_2.png'
import cause3 from '../../ass/causes/causes_thumb_3.png'
import ProgressBar from 'react-animated-progress-bar';
import { BsShare, BsFillCameraFill, BsYoutube } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const OurCauses = () => {
    const causes = [
        {
            image: `${cause1}`,
            topButon: 'EDUCATION',
            title: 'New School Teachers',
            name: 'Lorem Ipsum. Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor nisi elit',
            price: '$50,000',
            raised : 'Raised of $70,000',
            percentage:'90'
        },
        {
            image: `${cause2}`,
            topButon: 'WATER',
            title: 'The Sheohar 2 Project',
            name: 'Lorem Ipsum. Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor nisi elit',
            price: '$50,000',
            raised : 'Raised of $70,000',
            percentage:'80'
        },
        {
            image: `${cause3}`,
            topButon: 'FOOD',
            title: 'Moving Toward A Better',
            name: 'Lorem Ipsum. Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor nisi elit',
            price: '$50,000',
            raised : 'Raised of $70,000',
            percentage:'70'
        },
        {
            image: `${cause3}`,
            topButon: 'FOOD',
            title: 'Moving Toward A Better',
            name: 'Lorem Ipsum. Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor nisi elit',
            price: '$50,000',
            raised : 'Raised of $70,000',
            percentage:'50'
        },
        {
            image: `${cause3}`,
            topButon: 'FOOD',
            title: 'Moving Toward A Better',
            name: 'Lorem Ipsum. Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor nisi elit',
            price: '$50,000',
            raised : 'Raised of $70,000',
            percentage:'60'
        },
        {
            image: `${cause3}`,
            topButon: 'FOOD',
            title: 'Moving Toward A Better',
            name: 'Lorem Ipsum. Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor nisi elit',
            price: '$50,000',
            raised : 'Raised of $70,000',
            percentage:'70'
        }
]
    return (
        <div className='bg-white z-10 2xl:-mt-72 xl:-mt-48 lg:-mt-32 container mx-auto p-10 relative'>
            <div className='bg-white absolute p-7 right-0 hidden lg:flex  gap-10 -mt-24 z-20'>
                <Link to='/' className='text-[#363a57]'>Home</Link>
                <p>|</p>
                <p className='text-[#e07a5e]'>OUR CAUSES</p>
            </div>
            <div className="container flex flex-wrap justify-center  gap-8 mx-auto lg:mt-20">
                {
                causes.map((cau) => <div  className="sm:w-96 w-80 -mt-[2px] bg-white relative">
                <img className='w-full' src={cau.image} alt="" />
                <div className="absolute top-3 w-full flex justify-between px-5">
                        <button className='border-2 text-white hover:bg-[#e07a5e]  hover:border-[#e07a5e] text-lg py-1 px-5'>{cau.topButon}</button>
                        <div className="text-white flex items-center gap-2 text-xl">
                            <p className='bg-black opacity-80 py-2 px-4 flex items-center gap-2'><BsFillCameraFill /> <span>6</span></p>
                            <p className='bg-black opacity-80 py-2 px-4 flex items-center gap-2'><BsYoutube /> <span>3</span></p>
                        </div>
                </div>
                <div className="my-8 px-8 flex flex-col gap-5 shadow-md p-4">
                    <h3 className="text-3xl text-[#363a57]">{cau.title}</h3>
                    <p className="font-Barlow font-normal">{cau.name}</p>
                    <div className=''>
                    <ProgressBar
                    width="300px"
                    height="20px"
                    rect
                    fontColor="gray"
                    percentage={cau.percentage}
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
        </div>
    );
};

export default OurCauses;