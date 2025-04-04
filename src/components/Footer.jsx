import { BsTwitterX } from 'react-icons/bs'
import { CiFacebook, CiLinkedin } from 'react-icons/ci'
import { FaInstagram, FaMapMarkerAlt } from 'react-icons/fa'
import { FaPhoneFlip } from 'react-icons/fa6'
import { MdOutlineMailOutline } from 'react-icons/md'
import { NavLink } from 'react-router'
import logo from "../../public/codewebzzlogo.jpeg";

const Footer = () => {
    return (
        <>
            <div className="flex flex-col   gap-5">
                <div className="flex flex-wrap gap-8 md:gap-0 place-content-evenly text-center lg:text-start font-semibold">
                    <div className=" w-48 lg:w-1/3 leading-8 py-4 flex flex-col justify-between">
                        <p className='text-xl text-center font-semibold'>
                            <img className='h-12 mb-5  mx-auto md:-ml-3 ' src={logo} alt="" />
                            {/* CodeWebzz<span className='font-bold text-secondary'>.</span>com */}
                        </p>
                        <p className='flex group'>
                            <span><FaMapMarkerAlt className='text-lg mt-1 text-secondary-dark animate-bounce group-hover:animate-none' /></span><a href="https://www.google.com/maps?q=6/431,+Gaj+Path,+Hans+Vihar,+RIICO+Industrial+Area,+Mansarovar,+Jaipur,+Rajasthan+302020" target="_blank">
                                6/431, Gaj Path, Hans Vihar, RIICO Industrial Area, Mansarovar, Jaipur, Rajasthan 302020
                            </a>

                        </p>
                        <p className='group flex gap-5'>
                            <span><FaPhoneFlip className='rotate-90 text-secondary-dark transition-all duration-500 ease-in-out group-hover:rotate-180 mt-2 ' /></span><a href="tel:8824451107">8824451107</a>

                        </p>
                        <p className='flex gap-1 group'>
                            <span><MdOutlineMailOutline className='text-xl text-secondary-dark mt-2 animate-pulse group-hover:animate-none' /></span><a href="mailto:codewebzzinfo@gmail.com">codewebzzinfo@gmail.com</a>

                        </p>
                    </div>
                    <div className="border-primary-dark border- w-48 lg:w-auto py-4 flex flex-col justify-between">
                        <p className='text-2xl'>Useful Links</p>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/aboutUs">About Us</NavLink>
                        <NavLink to="/contact">Contact Us</NavLink>
                        <NavLink to="/portfolio">Our portfolio</NavLink>
                        <p>Our clients</p>
                    </div>
                    <div className="border-primary-dark w-48 ps-4 lg:w-auto leading-8 py-4">
                        <p className='text-2xl'>Projects</p>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>React</p>
                        <p>Php</p>
                        <p>Wordpress</p>
                    </div>
                    <div className="border-primary-dark w-48 ps-4 lg:w-auto leading-8 py-4">
                        <p className='text-2xl'>Services</p>
                        <p>Corporate Website</p>
                        <p>Ecommerce Website</p>
                        <p>Landing Page Designing</p>
                        <p>Responsive Web Designing</p>
                        <p>Custom Website Designing</p>

                    </div>
                    <div className="border-primary-dark w-48 ps-4 lg:w-auto leading-8 py-4">
                    </div>
                </div>
                <div className="flex flex-wrap gap-6 pl-12">
                    <p className='text-2xl mt-1 text-nowrap'>Contact :-</p>
                    <p className='flex flex-wrap gap-4 mt-2 text-xl text-primary-light'>
                        <a href='https://www.instagram.com/codewebzz/' target='_blank' className='bg-secondary-dark p-1 cursor-pointer rounded-full'>
                            <FaInstagram />
                        </a>
                        <a href='' className='bg-secondary-dark p-1 cursor-pointer rounded-full'>
                            <CiFacebook className='' />
                        </a>
                        <span className='bg-secondary-dark p-1 cursor-pointer rounded-full'>
                            <CiLinkedin />
                        </span>
                        <span className='bg-secondary-dark p-1 cursor-pointer rounded-full'>
                            <BsTwitterX />
                        </span>
                    </p>
                </div>
                <p className='text-center my-3   text-primary-dark'>Copyright  All Rights Are Reserved. — Designed By <a className='hover:text-secondary-dark' href="#">Codewebzz</a></p>
            </div>
        </>
    )
}

export default Footer
