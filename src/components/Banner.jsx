import React from 'react';
import bannerBG from '../assets/images/more/3.png'

const Banner = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${bannerBG})`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-3xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
                    <p className="mb-5">
                    Its coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
                    </p>
                    <button className="btn bg-[#E3B577]">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;