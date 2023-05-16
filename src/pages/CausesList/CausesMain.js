import React from 'react';
import OurCauses from './OurCauses';
import Volunteer from '../Home/Volunteer';
import CommonBanner from '../../components/CommonBanner';

const CausesMain = () => {
    return (
        <div className='font-Rajdhani font-bold'>
            <CommonBanner text={'WELCOME TO OUR CAUSES'} title={'CAUSES LIST'} />
            <OurCauses />
            <Volunteer />
        </div>
    );
};

export default CausesMain;