import React from 'react';
import AboutUs from './AboutUs';
import Banner from './Banner';
import Causes from './Causes';
import Counters from './Counters';
import Members from './Members';
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
        </div>
    );
};

export default Home;