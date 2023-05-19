import React, { useState } from 'react';
import { IoCallSharp } from 'react-icons/io5';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { FaUserAlt, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';
import { CgMail, CgLogIn } from 'react-icons/cg';
import logo from '../../ass/light_logo.png'
import './Header.css'
import { Link } from 'react-router-dom';
import { IoMdArrowDropdown } from "react-icons/io";
const Header = () => {
  const [home, setHome] = useState(false);
  const [causes, setCauses] = useState(false);
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
    return (
        <header className='relative'>
    <nav className="py-4 bg-[#82b29a] text-white font-Barlow font-normal">
        <div className="xl:grid xl:grid-cols-2 grid-cols-1 gap-4 xl:justify-between justify-center w-full text-sm">
            <div className='sm:flex justify-center xl:justify-start items-center gap-6 pl-6 text-sm hidden'>
                <a href="tel:000 8888 999" className="flex items-center gap-2 hover:text-[#f2cc8e]"><IoCallSharp /> Call us 000 8888 999</a>
                <a href="mailto:contact@sitename.com" className="flex items-center gap-2 hover:text-[#f2cc8e]">< CgMail /> contact@sitename.com</a>
                <a href="/" className="flex items-center gap-2 hover:text-[#f2cc8e]"><FaUserAlt /> Become A Volunteer</a>
            </div>
            <div className="flex justify-center sm:pt-5 xl:pt-0 xl:justify-end items-center flex-wrap text-sm">
                <div className="flex gap-6">
                    <a className=" hover:text-[#f2cc8e] flex items-center gap-2 font-bold" href="/"><CgLogIn /> Login</a>
                    <a href="/" className=" hover:text-[#f2cc8e] border-2 border-gray-300 px-5 py-2 rounded-sm flex items-center gap-2 font-bold"><FaUserAlt /> Sign Up</a>
                </div>
                <div className="mx-5 flex items-center gap-6">
                    <a href="/" className="flex items-center gap-2 hover:text-[#f2cc8e]"><FaTwitter /> Twitter</a>
                    <a href="/" className="flex items-center gap-2 hover:text-[#f2cc8e]"><FaFacebook /> Facebook</a>
                    <a href="/" className="flex items-center gap-2 hover:text-[#f2cc8e]"><FaYoutube /> Youtube</a>
                </div>
            </div>
        </div>
      </nav>
      {/* main     */}
      {/* responsive start  */}
      <div id="mySidenav" className="sidenav">
          <button className="closebtn" onClick={() => closeNav()}>&times;</button>
              <button onClick={() =>setHome(!home)} className="w-full flex items-center gap-2">Home <span><IoMdArrowDropdown /></span></button>
              { home &&
                <div class="dropdown-container">
                  <a href="/">Home 1</a>
                  <a href="/">Home 2</a>
                  <a href="/">Home 3</a>
                </div>
              }
              <button onClick={() => setCauses(!causes)} className="w-full flex items-center gap-2">Causes Details <span><IoMdArrowDropdown /></span></button>
              { causes &&
                <div class="dropdown-container">
                  <Link to="/causes-list">Causes List</Link>
                  <Link to="/causes-details">Causes Details</Link>
                </div>
              }
        </div>
      {/* responsive end  */}
    <nav className="main-navber  border-b-2 xl:border-0 border-gray-200 sm:px-4  rounded bg-transparent absolute  w-full text-white z-10 font-semibold">
        <div className="grid grid-cols-12">
        <a href="/" className="flex items-center xl:border-2 xl:border-l-0 border-gray-400 p-8 xl:col-span-2 col-span-5">
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="Puregiven" /> 
        </a>
        <div className="flex order-2 xl:border-2 xl:border-r-0 border-gray-400 p-8 col-span-2 items-center xl:justify-center justify-start text-xl font-medium mr-2">
            <a href="/" className='hidden xl:flex font-bold'>DONATE NOW</a>
            <button onClick={() => openNav()} type="button" className="inline-flex  items-center p-2 text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
            <svg className="w-6 h-6 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        </div>
        <div className="dropdown  justify-end items-center w-full flex md:w-auto order-1 xl:border-y-2 border-gray-400  w-100 xl:col-span-8 col-span-4" id="navbar-cta">
        <ul className="hidden xl:flex flex-col  mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 text-White">
            <li>
                <a href="/" className="block  pr-4 pl-3 text-White text-lg rounded hover:text-amber-400 py-10  md:border-0   md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
                <ul className="text-lg ">
                    <li>
                        <a href="/" className="block py-2 pr-4 pl-3 text-gray-400  hover:text-amber-400  md:border-0  md:p-0  md:dark:hover:bg-transparent">Home 1</a>
                      </li>
                    <li>
                        <a href="/" className="block py-2 pr-4 pl-3 text-gray-400  hover:text-amber-400 md:dark:hover:bg-transparent">Home 2</a>
                      </li>
                    <li>
                        <a href="/" className="block py-2 pr-4 pl-3 text-gray-400  hover:text-amber-400 md:dark:hover:bg-transparent">Home 3</a>
                      </li>
                </ul>
              </li>      
            <li >
                <a href="/" className="block pr-4 pl-3 text-White text-lg rounded hover:text-amber-400 py-10  md:border-0   md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Causes</a>
                <ul className="text-lg">
                    <li>
                        <Link to="/causes-list" className="block py-2 pr-4 pl-3 text-gray-400  hover:text-amber-400  md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Causes List</Link>
                      </li>
                    <li>
                        <a href="/causes-details" className="block py-2 pr-4 pl-3 text-gray-400  hover:text-amber-400 md:dark:hover:bg-transparent">Causes Details</a>
                      </li>
                </ul>
              </li>      
            <li >
                <a href="/" className="block pr-4 pl-3 text-White text-lg rounded hover:text-amber-400 py-10  md:border-0   md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Events</a>
                <ul className="text-lg">
                    <li>
                        <a href="/" className="block py-2 pr-4 pl-3 text-gray-400  hover:text-amber-400  md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Events Details</a>
                      </li>
                </ul>
              </li>      
            <li >
                <a href="/" className="block pr-4 pl-3 text-White text-lg rounded hover:text-amber-400 py-10  md:border-0   md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pagas</a>
                <ul className="text-lg">
                    <li>
                        <a href="/" className="block py-2 pr-4 pl-3 text-gray-400  hover:text-amber-400  md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Donate</a>
                      </li>
                    <li>
                        <a href="/" className="block py-2 pr-4 pl-3 text-gray-400  hover:text-amber-400 md:dark:hover:bg-transparent">Gallery</a>
                      </li>
                    <li>
                        <a href="/" className="block py-2 pr-4 pl-3 text-gray-400  hover:text-amber-400 md:dark:hover:bg-transparent">Sermons Details</a>
                      </li>
                    <li>
                        <a href="/" className="block py-2 pr-4 pl-3 text-gray-400  hover:text-amber-400 md:dark:hover:bg-transparent">Team Details</a>
                      </li>
                    <li>
                        <a href="/" className="block py-2 pr-4 pl-3 text-gray-400  hover:text-amber-400 md:dark:hover:bg-transparent">Become volunteer</a>
                      </li>
                </ul>
              </li>      
            <li >
                <a href="/" className="block pr-4 pl-3 text-White text-lg rounded hover:text-amber-400 py-10  md:border-0   md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Blog</a>
                <ul className="text-lg">
                    <li>
                        <a href="/" className="block py-2 pr-4 pl-3 text-gray-400  hover:text-amber-400  md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Blog</a>
                      </li>
                    <li>
                        <a href="/" className="block py-2 pr-4 pl-3 text-gray-400  hover:text-amber-400 md:dark:hover:bg-transparent">Blog Details</a>
                      </li>
                </ul>
              </li>      
            <li >
                <a href="/" className="block pr-4 pl-3 text-White text-lg rounded hover:text-amber-400 py-10  md:border-0   md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Shop          </a>
                <ul className="text-lg">
                    <li>
                        <a href="/" className="block py-2 pr-4 pl-3 text-gray-400  hover:text-amber-400  md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Shop</a>
                      </li>
                    <li>
                        <a href="/" className="block py-2 pr-4 pl-3 text-gray-400  hover:text-amber-400 md:dark:hover:bg-transparent">Cart</a>
                      </li>
                    <li>
                        <a href="/" className="block py-2 pr-4 pl-3 text-gray-400  hover:text-amber-400 md:dark:hover:bg-transparent">Checkout</a>
                      </li>
                    <li>
                        <a href="/" className="block py-2 pr-4 pl-3 text-gray-400  hover:text-amber-400 md:dark:hover:bg-transparent">Products Details</a>
                      </li>
                </ul>
              </li>      
            <li >
                <a href="/" className="block pr-4 pl-3 text-White text-lg rounded hover:text-amber-400 py-10  md:border-0   md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
              </li>      
        </ul>
        <div className="xl:ml-16 flex items-center gap-5 xl:gap-3">
            <a href="/"><BsFillCartCheckFill/></a>
            <button type="submit" className="p-2.5 ml-2 text-lg font-medium text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span className="sr-only">Search</span>
            </button>
        </div>
        </div>
        </div>
    </nav>
     {/* main-navber-end  */}
        </header>
    );
};

export default Header;