import React from 'react'
import Navbar from './Navbar'

const AboutUs: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col justify-center p-12 font-serif leading-loose text-primary-light bg-primary-light bg-no-repeat bg-cover bg-[url(https://i.pinimg.com/736x/52/70/16/527016e4e3dfdd806da99161e91f1d50.jpg)]">
                <h1 className='text-3xl '>About Us</h1>
                <p>Your Trusted Partner for Website Design and Digital Marketing Services in India. Your dependable ally for delivering exceptional services tailored specifically for the Indian market. With a steadfast commitment to excellence and a proven track record of success, we stand ready to partner with you in achieving remarkable results in India.</p>
            </div>
        </>
    )
}

export default AboutUs
