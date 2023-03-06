import React from 'react';
import footerBg from '../../ass/footer_dark_bg.png'
import darklogo from '../../ass/dark_logo_2x.png'
import { AiOutlineRight } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { FaTwitterSquare, FaFacebookSquare, FaPinterestSquare, FaInstagram} from "react-icons/fa";

const Footer = () => {
    return (
        <div div className='bg-no-repeat bg-cover text-[#87878d] font-Barlow font-normal px-5' style={{backgroundImage:`url(${footerBg})`}}>
            <div className="container mx-auto flex gap-10 flex-wrap lg:flex-nowrap justify-between py-28 border-b border-[#87878d] px-5">
                <div className="lg:w-[30%] sm:w-[45%] w-[100%] text-lg flex flex-col gap-10">
                    <img src={darklogo} alt="" className='w-80'/>
                    <p className='font-Barlow font-normal'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum delenit augue duis dolore te feugait.</p>
                    <a href="/" className="text-[#faf7e3] flex items-center gap-2 hover:text-xl">Read More <AiOutlineRight className='text-[#e4516c]'/></a>
                </div>
                <div className="lg:w-[20%] sm:w-[45%] w-[100%] text-lg flex flex-col gap-5">
                    <h3 className="text-[#faf7e3] text-3xl font-Rajdhani font-bold">Explore</h3>
                    <a href="/" className="hover:underline hover:text-xl hover:text-[#faf7e3]">Home</a>
                    <a href="/" className="hover:underline hover:text-xl hover:text-[#faf7e3]">About Us</a>
                    <a href="/" className="hover:underline hover:text-xl hover:text-[#faf7e3]">Causes</a>
                    <a href="/" className="hover:underline hover:text-xl hover:text-[#faf7e3]">News</a>
                    <a href="/" className="hover:underline hover:text-xl hover:text-[#faf7e3]">Shop</a>
                    <a href="/" className="hover:underline hover:text-xl hover:text-[#faf7e3]">Contact Us</a>
                </div>
                <div className="lg:w-[20%] sm:w-[45%] w-[100%] text-lg flex flex-col gap-5">
                    <h3 className="text-[#faf7e3] text-3xl font-Rajdhani font-bold">Links</h3>
                    <a href="/" className="hover:underline hover:text-xl hover:text-[#faf7e3]">Podcasts</a>
                    <a href="/" className="hover:underline hover:text-xl hover:text-[#faf7e3]">Privacy Policy</a>
                    <a href="/" className="hover:underline hover:text-xl hover:text-[#faf7e3]">Videos</a>
                    <a href="/" className="hover:underline hover:text-xl hover:text-[#faf7e3]">Terms Of Use</a>
                    <a href="/" className="hover:underline hover:text-xl hover:text-[#faf7e3]">Blog Posts</a>
                </div>
                <div className="lg:w-[25%] sm:w-[45%] w-[100%] text-lg flex flex-col gap-5">
                    <h3 className="text-[#faf7e3] text-3xl font-Rajdhani font-bold">Links</h3>
                    <div className='flex sm:w-full w-80'>
                        <input type="text" placeholder='Enter Your Email Address' className='px-5 py-3 w-full'/>
                        <button className='bg-[#82b29a] p-5 text-white'><CgMail /></button>
                    </div>
                    <p className='text-lg'>Get latest updates and offers.</p>
                    <hr className='bg-[#47495a]'/>
                    <div className="flex flex-wrap gap-5 justify-around text-black">
                            <div className="bg-[#faf7e3] hover:bg-[#ba664e] hover:text-white p-3">
                                <FaTwitterSquare />
                            </div>
                            <div className="bg-[#faf7e3] hover:bg-[#ba664e] hover:text-white p-3">
                                <FaFacebookSquare />
                            </div>
                            <div className="bg-[#faf7e3] hover:bg-[#ba664e] hover:text-white p-3">
                                <FaPinterestSquare />
                            </div>
                            <div className="bg-[#faf7e3] hover:bg-[#ba664e] hover:text-white p-3">
                                <FaInstagram />
                            </div>
        </div>
                </div>
            </div>
            <p className="py-7 text-center">© 2020 PureGiven - Nonprofit Charity and Fundraising PSD Template by noxitheme</p>
        </div>
    );
};

export default Footer;