import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Navigation } from "swiper";
// import './Gallery.module.css'
import './Gallery.module.css'
import gallerImg1 from '../../ass/gallery/gallery_img_1.png'

const Gallery = () => {
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
        className="mySwiper"
      >
        {
            [...Array(10)].map((gal, i) => <SwiperSlide key={i} className='mt-20 gallery_hover'>
                <div className='relative'>
                    <img src={gallerImg1} alt="" />
                    <div className='uppercase bg-white shadow-2xl  absolute -bottom-5 border-4 left-[3%] px-5 py-3 w-[90%] styles.gallery_hover_text '>
                        <p className="text-lg text-[#e07a5e]">portfolio</p>
                        <h2 className="text-6xl text-[#363a57]">our gallery</h2>
                    </div>
                </div>
            </SwiperSlide>)
        }
      </Swiper>
            </div>
        </div>
    );
};

export default Gallery;