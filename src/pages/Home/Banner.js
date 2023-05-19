import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import banner from '../../ass/banner/banner_img_1.png'
import banner2 from '../../ass/banner/banner_img_2.png'
import Zoom from 'react-reveal/Zoom';

const Banner = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <section className='-z-20 overflow-hidden'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
          <div style={{backgroundImage: `url(${banner})`}} className='h-[93vh] bg-cover bg-no-repeat'>
            <Zoom>
            <div className="absolute xl:mt-[15%] lg:mt-[22%] sm:mt-[40%] mt-[60%] ml-[10%]">
                <div className="flex justify-center h-full items-center flex-col">
                    <div className="border-l-8 border-amber-200">
                    <div className="ml-9 animate-pulse">
                        <span className="bg-amber-300 sm:text-4xl  text-2xl p-3 px-5 font-bold text-gray-700">Now need help you</span>
                    <h1 className="lg:text-8xl sm:text-7xl text-4xl mt-2 sm:mt-0 text-yellow-50">puregiven is helps <br className='hidden sm:flex'/>
                        and donate for <br className='hidden sm:flex'/>
                        children education.
                        </h1>
                    </div>
                    </div>
                    <div className="mt-7 w-full">
                        <button className="bg-[#82b29a] border-2 border-[#82b29a] hover:border-2  hover:bg-inherit px-7 py-4 text-white">Donate us now</button>
                    </div>
                </div>
            </div>
        </Zoom>
          </div>
            </SwiperSlide>
          <SwiperSlide>
          <div style={{backgroundImage: `url(${banner2})`}} className='h-[93vh] bg-cover bg-no-repeat'>
            <div className="absolute xl:mt-[15%] lg:mt-[22%] sm:mt-[40%] mt-[60%] ml-[10%]">
                <div className="flex justify-center h-full items-center flex-col">
                    <div className="border-l-8 border-amber-200">
                    <div className="ml-9 animate-pulse">
                        <span className="bg-amber-300 sm:text-4xl  text-2xl p-3 px-5 font-bold text-gray-700">Now need help you</span>
                    <h1 className="lg:text-8xl sm:text-7xl text-4xl mt-2 sm:mt-0 text-yellow-50">puregiven is helps <br className='hidden sm:flex'/>
                        and donate for <br className='hidden sm:flex'/>
                        children education.
                        </h1>
                    </div>
                    </div>
                    <div className="mt-7 w-full">
                        <button className="bg-[#82b29a] border-2 border-[#82b29a] hover:border-2  hover:bg-inherit px-7 py-4 text-white">Donate us now</button>
                    </div>
                </div>
            </div>
          </div>
            </SwiperSlide>
          <div className="autoplay-progress absolute" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
            </svg>
            <span ref={progressContent}></span>
          </div>
          {/* <div>
              
          </div> */}
        </Swiper>
      </section>
    );
};

export default Banner;