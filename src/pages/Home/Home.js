import React from 'react';
import AboutUs from './AboutUs';
import Banner from './Banner';
import Causes from './Causes';
import Counters from './Counters';
import Volunteer from './Volunteer';

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutUs />
            <Causes />
            <Volunteer />
            <Counters />
        </div>
    );
};

export default Home;