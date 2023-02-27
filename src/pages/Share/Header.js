import React from 'react';
import { IoCallSharp } from 'react-icons/io5';
import { FaUserAlt, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';
import { CgMail, CgLogIn } from 'react-icons/cg';

const Header = () => {
    return (
        <header>
            <nav>
             {/* top-navber  */}
    <nav className="navbar py-4 bg-[#82b29a] text-white">
        <div className="xl:grid xl:grid-cols-2 grid-cols-1 gap-4 xl:justify-between justify-center w-full text-sm">
             {/* left-navber  */}
            <div className='sm:flex justify-center xl:justify-start items-center gap-6 pl-6 text-sm hidden'>
                <a href="tel:000 8888 999" className="flex items-center gap-2"><IoCallSharp /> Call us 000 8888 999</a>
                <a href="mailto:contact@sitename.com" className="flex items-center gap-2">< CgMail /> contact@sitename.com</a>
                <a href="/" className="flex items-center gap-2"><FaUserAlt /> Become A Volunteer</a>
            </div>
             {/* Righr-navber */}
            <div className="flex justify-center pt-5 xl:pt-0 xl:justify-end items-center flex-wrap text-sm">
                <div className="flex gap-6">
                    <a className="flex items-center gap-2" href="/"><CgLogIn /> Login</a>
                    <a href="/" className="border-2 border-gray-300  px-5 py-2 rounded-sm flex items-center gap-2"><FaUserAlt /> Sign Up</a>
                </div>
                <div className="mx-5 flex items-center gap-6">
                    <a href="/" className="flex items-center gap-2"><FaTwitter /> Twitter</a>
                    <a href="/" className="flex items-center gap-2"><FaFacebook /> Facebook</a>
                    <a href="/" className="flex items-center gap-2"><FaYoutube /> Youtube</a>
                </div>
            </div>
             {/* Righr-navber-end            */}
        </div>
      </nav>
     {/* top-navber-end  */}
            </nav>
        </header>
    );
};

export default Header;