import React from 'react';
import feature from '../../ass/feature/feature_01.png'
import feature2 from '../../ass/feature/feature_02.png'
import feature3 from '../../ass/feature/feature_03.png'
import background from '../../ass/about_bg.png'
import about1 from '../../ass/about/about_img_1.png'
import about2 from '../../ass/about/about_img_2.png'
import about3 from '../../ass/about/about_img_3.png'
import founderImg from '../../ass/founder_img.png'
import aboutSap from '../../ass/about/about_img_shape.png'
import { FaAngleRight } from "react-icons/fa";
import './Home.css'
import { Parallax } from 'react-scroll-parallax';

const AboutUs = () => {
    return (
        <div className='bg-cover bg-no-repeat sm:pb-48 pb-32' style={{backgroundImage:`url(${background})`}}>
            <div className='container flex flex-col items-center mx-auto'>
                <div className='sm:-mt-28 -mt-10 absolute flex lg:gap-20 sm:gap-10 gap-2 text-[#faf7e3] sm:px-5 px-2'>
                    <div className="z-50 about_hover">
                        <img className='border-8 border-white'  src={feature} alt="" />
                        <div className="-mt-[50%] text-center">
                            <h2 className='lg:text-4xl md:text-2xl sm:text-lg text-sm font-bold sm:pb-7 pb-1'>More Charity <br className='hidden lg:flex' />
                                Better Lives</h2>
                                <div className="hidden about_hover_text">
                                <button className="bg-[#faf7e3] text-black font-semibold sm:py-3 py-1 text-sm sm:px-6"><span className='flex items-center gap-3'>Learn More <FaAngleRight className='text-[#e7a38a]' /></span></button>
                                </div>
                        </div>
                    </div>
                    <div className="z-50 about_hover">
                        <img className='border-8 border-white' src={feature2} alt="" />
                        <div className="-mt-[50%] text-center">
                            <h2 className='lg:text-4xl md:text-2xl sm:text-lg text-sm font-bold sm:pb-7 pb-1'>More Charity <br className='hidden lg:flex' />
                                Better Lives</h2>
                                <div className="hidden about_hover_text">
                                <button className="bg-[#faf7e3] text-black font-semibold sm:py-3 py-1 text-sm sm:px-6"><span className='flex items-center gap-3'>Learn More <FaAngleRight className='text-[#e7a38a]' /></span></button>
                                </div>
                        </div>
                    </div>
                    <div className="z-50 about_hover">
                        <img className='border-8 border-white' src={feature3} alt="" />
                        <div className="-mt-[50%] text-center ">
                            <h2 className='lg:text-4xl md:text-2xl sm:text-lg text-sm font-bold sm:pb-7 pb-1'>More Charity <br className='hidden lg:flex' />
                                Better Lives</h2>
                                <div className="hidden about_hover_text">
                                <button className="bg-[#faf7e3] text-black font-semibold sm:py-3 py-1 text-sm sm:px-6"><span className='flex items-center gap-3'>Learn More <FaAngleRight className='text-[#e7a38a]' /></span></button>
                                </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-20 lg:mt-[25%] sm:mt-[30%] mt-[40%] sm:px-5 px-1">
                        <div  className="mx-auto">
                                <img src={about1} alt="" />
                                <img className='absolute 2xl:-mt-[10%] -mt-[7%] 2xl:ml-[9%] sm:ml-[10%] ml-[20%] border-8 border-white w-52 sm:w-fit' src={about2} alt="" />
                                <Parallax 
                                speed={10}
                                translateY={['-20px', '100px']}
                                >
                                    <img className='mt-[5%] ml-[2%] hidden sm:flex ' src={about3} alt="" />
                                </Parallax>
                                <Parallax
                                className='absolute hidden sm:flex 2xl:-mt-[20%] -mt-[28%] 2xl:ml-[22%] ml-[30%]'
                                translateY={['-100px', '-20px']}
                                >
                                    <img  src={aboutSap} alt="" />
                                </Parallax>
                        </div>
                        <div className="text-[#636886] flex flex-col gap-7 mt-[40%] md:mt-[20%] lg:mt-0 px-5">
                            <span className="text-lg text-[#e07a5e]">Help People Now</span>
                            <h1 className="md:text-6xl text-3xl ">We’re worldwide ogranization.</h1>
                            <p className="md:text-2xl text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                            <p className="text-lg font-Barlow font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm od tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                            <div className="flex gap-5">
                                <img src={founderImg} alt="" />
                                <div>
                                    <p className='text-3xl'>Rosalina D. william</p>
                                    <span className="text-lg text-[#e07a5e]">FOUNDER</span>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
