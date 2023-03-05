import React from 'react';
import testBg from '../../ass/dark_map_bg.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination } from "swiper";
import clintImg1 from '../../ass/client_1.png'

const Testimonials = () => {
    return (
        <div className='bg-cover bg-no-repeat bg-[#f0eeec] sm:py-28 py-10 ' style={{backgroundImage:`url(${testBg})`}}>
            <div className='text-center uppercase'>
                <p className='text-[#e07a5e] text-lg'>Testimonials</p>
                <h2 className="text-[#faf7e3] text-6xl">Our Customers Say</h2>
            </div>
            <div>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
            {
                [...Array(3)].map((test, i) =><SwiperSlide key={i}>
                    <div className='md:w-[700px] sm:w-[600px] w-[300px] mx-auto my-10'>
                        <img src={clintImg1} className='mx-auto sm:-mb-[7%] -mb-[15%]' alt="" />
                        <div className='text-[#636886] text-center test_shadow px-5 py-14'>
                            <h3 className="text-2xl font-normal">Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum nunc putamus parum.</h3>
                            <p className="text-lg text-[#e07a5e] mt-5">David Miller</p>
                            <p className="text-lg font-normal">Marketing Envato Pty Ltd.</p>
                        </div>
                    </div>
                </SwiperSlide>)
            }
      </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;