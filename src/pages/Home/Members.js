import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import volunteer1 from '../../ass/volantier/volunteer_1.png'
import volunteer2 from '../../ass/volantier/volunteer_2.png'
import volunteer3 from '../../ass/volantier/volunteer_3.png'
import volunteer4 from '../../ass/volantier/volunteer_4.png'
import volunteer5 from '../../ass/volantier/volunteer_5.png'
import volunteer6 from '../../ass/volantier/volunteer_6.png'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import './Home.css'
import { FaFacebook, FaTwitterSquare, FaGooglePlus, FaLinkedin } from "react-icons/fa";

const Members = () => {
    const volunteers = [
        {
            img: `${volunteer1}`,
            title: 'Daniel Castro',
            text: 'CEO & Lead Blockchain',
            facebook: '',
            twitter: '',
            googleplus: '',
            linkedin: '',
        },
        {
            img: `${volunteer2}`,
            title: 'Alvaro Deniss',
            text: 'Blochain App Developer',
            facebook: '',
            twitter: '',
            googleplus: '',
            linkedin: '',
        },
        {
            img: `${volunteer3}`,
            title: 'Carlos Ronaldo',
            text: 'Community Management',
            facebook: '',
            twitter: '',
            googleplus: '',
            linkedin: '',
        },
        {
            img: `${volunteer4}`,
            title: 'Henry Viera',
            text: 'CTO & Senior Developer',
            facebook: '',
            twitter: '',
            googleplus: '',
            linkedin: '',
        },
        {
            img: `${volunteer5}`,
            title: 'Daniel Castro',
            text: 'CEO & Lead Blockchain',
            facebook: '',
            twitter: '',
            googleplus: '',
            linkedin: '',
        },
        {
            img: `${volunteer6}`,
            title: 'Henry Viera',
            text: 'CTO & Senior Developer',
            facebook: '',
            twitter: '',
            googleplus: '',
            linkedin: '',
        },
    ]
    return (
        <div className='flex py-28 items-center'>
            <div className="w-[50%] relative -z-10 flex flex-col justify-center items-center">
                <div className='w-1/3 '>
                    <span className="text-lg text-[#e07a5e] ">Our Members</span>
                    <h1 className="md:text-6xl text-3xl py-3">volunteer</h1>
                    <p className="text-lg">Search through thousands of royalty free images on Pexels. You can use all images for free, even for commercial use. All images are completely royalty </p>
                </div>
            </div>
            <div className="w-[50%]">
            <>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
            volunteers.map((member,i) =><SwiperSlide id={i}>
                    <div className='relative icon_top'>
                        <img src={member.img} className='w-full' alt="" />
                        <div className="p-5 border">
                            <h3 className="text-lg text-[#363a57]">Daniel Castro</h3>
                            <p className="text-sm text-[#636886]">CEO & Lead Blockchain</p>
                        </div>
                        <div className='absolute bottom-20 hidden icon flex-col gap-5 bg-white p-5 text-2xl'>
                            <a href="/" className='text-[#4e69a2]'><FaFacebook /></a>
                            <a href="/" className='text-[#26a6d1]'><FaTwitterSquare /></a>
                            <a href="/" className='text-[#dd4b39]'><FaGooglePlus /></a>
                            <a href="/" className='text-[#0e76a8]'><FaLinkedin /></a>
                        </div>
                    </div>
                </SwiperSlide>
            )
        }
      </Swiper>

    </>
            </div>
        </div>
    );
};

export default Members;