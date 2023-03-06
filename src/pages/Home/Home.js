import React from 'react';
import AboutUs from './AboutUs';
import Banner from './Banner';
import Blog from './Blog';
import Causes from './Causes';
import ContactInfo from './ContactInfo';
import Counters from './Counters';
import Events from './Events';
import Gallery from './Gallery';
import JoinUsFrom from './JoinUsFrom';
import Members from './Members';
import Testimonials from './Testimonials';
import Volunteer from './Volunteer';

const Home = () => {
    return (
        <div className='font-Rajdhani font-bold'>
            <Banner />
            <AboutUs />
            <Causes />
            <Volunteer />
            <Counters />
            <Members />
            <Events />
            <Gallery />
            <Testimonials />
            <Blog />
            <JoinUsFrom />
            <ContactInfo />
        </div>
    );
};

export default Home;