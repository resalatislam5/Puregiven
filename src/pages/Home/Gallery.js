import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Navigation } from "swiper";
// import './Gallery.module.css'
import gallerImg1 from '../../ass/gallery/gallery_img_1.png'
import gallerImg2 from '../../ass/gallery/gallery_img_2.png'
import gallerImg3 from '../../ass/gallery/gallery_img_3.png'
import { AiOutlineArrowRight } from "react-icons/ai";
const Gallery = () => {
  const gallery = [
    {
      img:`${gallerImg1}`,
      name:'portfolio',
      title:'Little Help'
    },
    {
      img:`${gallerImg2}`,
      name:'Education',
      title:'Children in Africa'
    },
    {
      img:`${gallerImg3}`,
      name:'Education',
      title:'Gift an Education'
    },
    {
      img:`${gallerImg1}`,
      name:'portfolio',
      title:'Little Help'
    },
    {
      img:`${gallerImg2}`,
      name:'Education',
      title:'Children in Africa'
    },
    {
      img:`${gallerImg3}`,
      name:'Education',
      title:'Gift an Education'
    },
    {
      img:`${gallerImg1}`,
      name:'portfolio',
      title:'Little Help'
    },
    {
      img:`${gallerImg2}`,
      name:'Education',
      title:'Children in Africa'
    },
    {
      img:`${gallerImg3}`,
      name:'Education',
      title:'Gift an Education'
    },
    
  ]
    return (
        <div className='py-28'>
            <div className='container mx-auto xl:px-5 px-2 uppercase'>
                <p className="text-lg text-[#e07a5e]">portfolio</p>
                <h2 className="text-6xl text-[#363a57]">our gallery</h2>
            </div>
            <div>
            <Swiper
        slidesPerView={3}
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
          }}
      >
        {
            gallery.map((gal, i) => <SwiperSlide key={i} className='mt-20 gallery_hover'>
                <a href='/' className='relative'>
                    <img src={gal.img} alt="" />
                    <div className='uppercase bg-white shadow-2xl  absolute -bottom-5 left-[3%] px-5 py-3 w-[90%] gallery_hover_text'>
                        <p className="text-lg text-[#e07a5e]">{gal.name}</p>
                        <h2 className="lg:text-3xl text-xl text-[#363a57]">{gal.title}</h2>
                        <button className='absolute -top-4 left-[90%] p-4 bg-[#e07a5e] text-white'><AiOutlineArrowRight /></button>
                    </div>
                </a>
            </SwiperSlide>)
        }
      </Swiper>
            </div>
        </div>
    );
};

export default Gallery;