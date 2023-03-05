import React from 'react';
import blog1 from '../../ass/blog/blog_img_04.png'
import blog2 from '../../ass/blog/blog_img_05.png'
import blog3 from '../../ass/blog/blog_img_06.png'
import logo1 from '../../ass/client_logo/logo_1.png'
import logo2 from '../../ass/client_logo/logo_2.png'
import logo3 from '../../ass/client_logo/logo_3.png'
import logo4 from '../../ass/client_logo/logo_4.png'

const Blog = () => {
    const causes = [
        {
            image: `${blog1}`,
            topButon: 'WATER',
            title: 'Celebrates Menstrual Hygiene Day with new project',
            date: '29 May 2020',
        },
        {
            image: `${blog2}`,
            topButon: 'EDUCATION',
            title: 'Celebrates Menstrual Hygiene Day with new project',
            date: '29 May 2020',
        },
        {
            image: `${blog3}`,
            topButon: 'FOOD',
            title: 'Celebrates Menstrual Hygiene Day with new project',
            date: '29 May 2020',
        }
]
    return (
        <div className='sm:py-28 py-10 Blog_bg'>
        <div className='text-center uppercase'>
            <p className='text-[#e07a5e] text-lg'>Our Blog</p>
            <h2 className="text-[#363a57] text-6xl">News and Articles</h2>
        </div>
        <div className="container flex flex-wrap justify-center  gap-8 mx-auto pt-16">
            {
            causes.map((cau) => <div  className="sm:w-96 w-80 xl:-mt-[25px] bg-white relative">
            <img className='w-full' src={cau.image} alt="" />
            <div className="absolute top-3 w-full flex justify-between px-5">
                    <button className='border-2 text-white hover:bg-[#e07a5e]  hover:border-[#e07a5e] text-lg py-1 px-5'>{cau.topButon}</button>
            </div>
            <div className="my-8 px-8 flex flex-col gap-5 text-center">
                <h3 className="text-2xl text-[#363a57]">{cau.title}</h3>
                <p className="text-[#e07a5e] text-lg">{cau.date}</p>
            </div>
        </div>)}
        </div>
        <div className="container mx-auto mt-28">
        <div className="flex flex-wrap gap-20 justify-around">
            <div className="bg-white py-10 px-20">
                <img src={logo1} alt="" />
            </div>
            <div className="bg-white py-10 px-20">
                <img src={logo2} alt="" />
            </div>
            <div className="bg-white py-10 px-20">
                <img src={logo3} alt="" />
            </div>
            <div className="bg-white py-10 px-20">
                <img src={logo4} alt="" />
            </div>
        </div>
        </div>
    </div>
    );
};

export default Blog;