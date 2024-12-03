import React from 'react'
import Navbar from './Navbar'
import { FaInstagram } from 'react-icons/fa'
import { CiFacebook, CiLinkedin } from 'react-icons/ci'
import Footer from './Footer'

const ContactUs: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col justify-center p-12 font-serif leading-loose bg-primary-light ">
                <h1 className='text-3xl text-secondary'>Contact Us</h1>
                <p>With a steadfast commitment to <span className='text-secondary'>excellence and a proven track record of success</span>, we are dedicated to providing exceptional service and support to our clients across India.</p>
            </div>
            <div className="font-serif flex flex-wrap mb-16 lg:gap-0 gap-10">
                <div className="lg:w-1/2 p-10 leading-8">
                    <div className="text-4xl my-16  text-center">
                        <h1>Our Contact Details</h1>

                    </div>
                    <div className="font-sans">
                        <p><span className='text-xl'>Address :</span> <span>6/431, Gaj Path, Hans Vihar, RIICO Industrial Area, Mansarovar, Jaipur, Rajasthan 302020</span></p>
                        <p><span className='text-lg'>Email : </span><a href='mailto:codewebzzinfo@gmail.com' className='text-secondary'>codewebzzinfo@gmail.com</a></p>
                        <p><span className='text-lg'>Phone : </span><a href='tel:8824451107' className='text-secondary text-center'>8824451107</a></p>

                    </div>
                    <div className="flex gap-4 mt-3 text-xl text-primary-light">
                        <span className='bg-secondary p-1 cursor-pointer rounded-full'>
                            <FaInstagram />
                        </span>
                        <span className='bg-secondary p-1 cursor-pointer rounded-full'>
                            <CiFacebook />
                        </span>
                        <span className='bg-secondary p-1 cursor-pointer rounded-full'>
                            <CiLinkedin />
                        </span>

                    </div>
                </div>

                <div className='lg:w-1/2 w-full'>
                    <iframe className='w-full h-screen' scrolling={"no"} src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=6/431,%20Gaj%20Path,%20Hans%20Vihar,%20RIICO%20Industrial%20Area,%20Mansarovar,%20Jaipur,%20Rajasthan%20302020+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                        <a href="https://www.gps.ie/">gps tracker sport</a>
                    </iframe>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default ContactUs
