import React from 'react';
import telephone from '../../ass/icon/phone.png'
import mail from '../../ass/icon/email.png'
import info from '../../ass/icon/info.png'
const ContactInfo = () => {
    const infor = [
        {
            img:`${telephone}`,
            name: 'Call Us Now:',
            link: 'tel:0 900 123.456.22',
            address: '0 900 123.456.22'
        },
        {
            img:`${mail}`,
            name: 'Call Us Now:',
            link: 'mailto:info@sitename.com',
            address: 'info@sitename.com'
        },
        {
            img:`${info}`,
            name: 'NGO Address:',
            link: '',
            address: '487 South Park Avenue'
        }
    ]
    return (
        <div className='bg-[#f0eeec] sm:py-24 py-10'>
            <div className="container mx-auto px-5 flex flex-wrap md:gap-6 gap-12 justify-around">
                {
                    infor.map((info, i) => <div key={i} className="md:w-[30%] flex items-center gap-3">
                        <div className='w-100%'>
                            <img src={info.img} alt="" />
                        </div>
                        <div className="">
                           <p className="text-lg text-[#636886]">{info.name}</p>
                           <a href={info.link} className="text-xl text-[#363a57]">{info.address}</a>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ContactInfo;