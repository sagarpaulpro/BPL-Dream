import React from 'react';
import '../../App.css'
import bannerImage from '../../assets/images/banner-main.png'
const Banner = () => {
    return (
        <div className="hero-content text-neutral-content  bgIamge min-h-screen max-w-[1200px] mx-auto text-center content-center">
            <div className="max-w-md flex flex-col justify-center items-center gap-5">
                <img src={bannerImage} />
                <h1 className='text-xl'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className="mb-5">
                    Beyond Boundaries Beyond Limits
                </p>
                <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
    );
};

export default Banner;