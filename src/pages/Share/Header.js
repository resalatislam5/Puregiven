import React from 'react';
import { IoCallSharp } from 'react-icons/io5';
import { FaUserAlt, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';
import { CgMail, CgLogIn } from 'react-icons/cg';
import logo from '../../ass/light_logo.png'
import './Header.css'

const Header = () => {
    return (
        <header>
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
             {/* Righr-navber-end  */}
        </div>
      </nav>
     {/* top-navber-end  */}
      {/* main-navber     */}
    <nav class="main-navber border-gray-200 sm:px-4  rounded dark:bg-gray-900 absolute w-full text-White">
        <div class="grid grid-cols-12 items-centermx-auto">
        <a href="£" class="flex items-center border-2 border-gray-400 p-8 col-span-2">
            {/* <img src="img/light_logo.png " class="mr-3 h-6 sm:h-9" alt="Puregiven"> */}
        </a>
        <div class="flex md:order-2 border-2 border-gray-400 p-8 col-span-2 items-center justify-center text-xl font-medium">
            <a href="/">DONATE NOW</a>
            <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        </div>
        <div class="dropdown hidden justify-end items-center w-full md:flex md:w-auto md:order-1 border-y-2 border-gray-400  w-100 col-span-8 " id="navbar-cta">
        <ul class="flex flex-col  mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 text-White">
            <li>
                <a href="/" class="block  pr-4 pl-3 text-White text-lg rounded hover:text-amber-400 py-10  md:border-0   md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
                <ul class="text-lg ">
                    <li>
                        <a href="/" class="block py-2 pr-4 pl-3 text-gray-700  hover:text-amber-400  md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home 1</a>
                      </li>
                    <li>
                        <a href="/" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100  md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home 2</a>
                      </li>
                    <li>
                        <a href="/" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100  md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home 3</a>
                      </li>
                </ul>
              </li>      
            <li >
                <a href="/" class="block pr-4 pl-3 text-White text-lg rounded hover:text-amber-400 py-10  md:border-0   md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Causes</a>
                <ul class="text-lg">
                    <li>
                        <a href="/" class="block py-2 pr-4 pl-3 text-gray-700  hover:text-amber-400  md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home 1</a>
                      </li>
                    <li>
                        <a href="/" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100  md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home 2</a>
                      </li>
                    <li>
                        <a href="/" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100  md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home 3</a>
                      </li>
                </ul>
              </li>      
            <li >
                <a href="/" class="block pr-4 pl-3 text-White text-lg rounded hover:text-amber-400 py-10  md:border-0   md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Events</a>
                <ul class="text-lg">
                    <li>
                        <a href="/" class="block py-2 pr-4 pl-3 text-gray-700  hover:text-amber-400  md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home 1</a>
                      </li>
                    <li>
                        <a href="/" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100  md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home 2</a>
                      </li>
                    <li>
                        <a href="/" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100  md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home 3</a>
                      </li>
                </ul>
              </li>      
            <li >
                <a href="/" class="block pr-4 pl-3 text-White text-lg rounded hover:text-amber-400 py-10  md:border-0   md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pagas</a>
                <ul class="text-lg">
                    <li>
                        <a href="/" class="block py-2 pr-4 pl-3 text-gray-700  hover:text-amber-400  md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home 1</a>
                      </li>
                    <li>
                        <a href="/" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100  md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home 2</a>
                      </li>
                    <li>
                        <a href="/" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100  md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home 3</a>
                      </li>
                </ul>
              </li>      
            <li >
                <a href="/" class="block pr-4 pl-3 text-White text-lg rounded hover:text-amber-400 py-10  md:border-0   md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Blog</a>
                <ul class="text-lg">
                    <li>
                        <a href="/" class="block py-2 pr-4 pl-3 text-gray-700  hover:text-amber-400  md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home 1</a>
                      </li>
                    <li>
                        <a href="/" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100  md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home 2</a>
                      </li>
                    <li>
                        <a href="/" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100  md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home 3</a>
                      </li>
                </ul>
              </li>      
            <li >
                <a href="/" class="block pr-4 pl-3 text-White text-lg rounded hover:text-amber-400 py-10  md:border-0   md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Shop          </a>
                <ul class="text-lg">
                    <li>
                        <a href="/" class="block py-2 pr-4 pl-3 text-gray-700  hover:text-amber-400  md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home 1</a>
                      </li>
                    <li>
                        <a href="/" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100  md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home 2</a>
                      </li>
                    <li>
                        <a href="/" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100  md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home 3</a>
                      </li>
                </ul>
              </li>      
            <li >
                <a href="/" class="block pr-4 pl-3 text-White text-lg rounded hover:text-amber-400 py-10  md:border-0   md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                <ul class="text-lg">
                    <li>
                        <a href="/" class="block py-2 pr-4 pl-3 text-gray-700  hover:text-amber-400  md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home 1</a>
                      </li>
                    <li>
                        <a href="/" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100  md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home 2</a>
                      </li>
                    <li>
                        <a href="/" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100  md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home 3</a>
                      </li>
                </ul>
              </li>      
        </ul>
        <div class="ml-16">
            <a href="/"><i class="fa-solid fa-bag-shopping text-lg"></i></a>
            <button type="submit" class="p-2.5 ml-2 text-lg font-medium text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span class="sr-only">Search</span>
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