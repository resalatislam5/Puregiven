import React from 'react';
import AboutUs from './AboutUs';
import Banner from './Banner';
import Causes from './Causes';
import Counters from './Counters';
import Events from './Events';
import Gallery from './Gallery';
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
        </div>
    );
};

export default Home;