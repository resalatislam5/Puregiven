import React from 'react';
import CommonBanner from '../../components/CommonBanner';
import CausesDetailsHelp from './CausesDetailsHelp';
import RelatedCauses from './RelatedCauses';
import Volunteer from '../Home/Volunteer';

const CausesDetails = () => {
    return (
        <div className='font-Rajdhani font-bold'>
            <CommonBanner text={'WELCOME TO OUR CAUSES DETAILS'} title={'CAUSES DETAILS'} />
            <CausesDetailsHelp />
            <RelatedCauses />
            <Volunteer />
        </div>
    );
};

export default CausesDetails;