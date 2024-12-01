import React from 'react';
import cupIcon from '../assets/images/icons/1.png'
import qualityIcon from '../assets/images/icons/2.png'
import pureIcon from '../assets/images/icons/3.png'
import roastIcon from '../assets/images/icons/4.png'

const CoffeeSection = () => {
    return (
        <div className='flex justify-between items-center py-8'>
            <div>
                <img src={cupIcon} alt="" />
                <h3 className='text-2xl my-4'>Awesome Aroma</h3>
                <p>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div>
                <img src={qualityIcon} alt="" />
                <h3 className='text-2xl my-4'>High Quality</h3>
                <p>We served the coffee to you maintaining the best quality</p>
            </div>
            <div>
                <img src={pureIcon} alt="" />
                <h3 className='text-2xl my-4'>Pure Grades</h3>
                <p>The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div>
                <img src={roastIcon} alt="" />
                <h3 className='text-2xl my-4'>Proper Roasting</h3>
                <p>Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
        </div>
    );
};

export default CoffeeSection;