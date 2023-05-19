import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Navigation } from "swiper";

import causes_thumb_8 from '../../ass/causes/causes_thumb_8.png'
import causes_thumb_9 from '../../ass/causes/causes_thumb_9.png'
import causes_thumb_10 from '../../ass/causes/causes_thumb_10.png'
import causes_thumb_11 from '../../ass/causes/causes_thumb_11.png'
import icon from '../../ass/icon/1.png'
import { CiLocationOn } from "react-icons/ci";
const RelatedCauses = () => {

    const OurEvent =[
        {
            img:`${causes_thumb_8}`,
            Desh: 'in Nepal',
            title: 'We are Saving Mothers and Childrens'
        },
        {
            img:`${causes_thumb_9}`,
            Desh: 'in India',
            title: 'We are providing clean water now'
        },
        {
            img:`${causes_thumb_10}`,
            Desh: 'in Australia',
            title: 'Lets join the polio free world here'
        },
        {
            img:`${causes_thumb_11}`,
            Desh: 'in Bangladesh',
            title: 'Stay together to help women'
        },
        {
            img:`${causes_thumb_8}`,
            Desh: 'in Nepal',
            title: 'We are Saving Mothers and Childrens'
        },
        {
            img:`${causes_thumb_9}`,
            Desh: 'in India',
            title: 'We are providing clean water now'
        },
        {
            img:`${causes_thumb_10}`,
            Desh: 'in Australia',
            title: 'Lets join the polio free world here'
        },
        {
            img:`${causes_thumb_11}`,
            Desh: 'in Bangladesh',
            title: 'Stay together to help women'
        }
    ]
    return (
        <div className='bg-[#f0eeec]'>
            <div className='container mx-auto py-28'>
                <div className='flex items-center gap-5 xl:px-5 px-2 uppercase'>
                    <div>
                        <img src={icon} alt="" />
                    </div>
                    <div>
                        <p className="text-lg text-[#e07a5e]">What we do</p>
                        <h2 className="text-4xl text-[#363a57]">Related Causes</h2>
                    </div>
                </div>
                <div>
                <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper OurEvents"
            breakpoints={{
                350: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
        >
            {
                OurEvent.map((our, i) => <SwiperSlide key={i} className='mt-20 gallery_hover'>
                    <div className='relative flex justify-around'>
                        <img  src={our.img} alt="" />
                        <div className='absolute bottom-5 w-72 p-10 text-[#faf7e3] font-semibold'>
                            <p className='flex items-center gap-3'><CiLocationOn /><span>{our.Desh}</span></p>
                            <h4 className="text-xl my-3">{our.title}</h4>
                            <a href='/' className='border-2 text-[#faf7e3] hover:bg-[#e07a5e]  hover:border-[#e07a5e] text-lg py-2 px-5'>Donate now</a>
                        </div>
                    </div>
                </SwiperSlide>)
            }
        </Swiper>
                </div>
            </div>
        </div>
    );
};

export default RelatedCauses;