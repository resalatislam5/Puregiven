import React from 'react';
import AboutUs from './AboutUs';
import Banner from './Banner';
import Causes from './Causes';
import Volunteer from './Volunteer';

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutUs />
            <Causes />
            <Volunteer />
        </div>
    );
};

export default Home;