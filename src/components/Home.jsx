import Navbar from './Navbar';
import { CgWebsite } from "react-icons/cg";
import { GrAnchor } from "react-icons/gr";
import { IoKeyOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { TbChartInfographic } from "react-icons/tb";
import { FaPhoneVolume, FaRegHandshake, FaSearchengin } from "react-icons/fa";
import man_up from "../assets/man_up.jpg";
import webDav from "../assets/dev.png";
import taili from "../assets/vrd-creative.webp";
import daile from "../assets/vrd-help-desk.webp"
import Footer from './Footer';
import { FaPhoneFlip } from 'react-icons/fa6';
import { NavLink } from 'react-router';

const Home = () => {
    return (
        <>
            <Navbar />

            <div className={`flex relative md:h-[35rem] py-5 md:py-2 shadow-sm mt-5`}>
                <div className="absolute animate-spin hidden lg:block top-20 left-28">
                    <div className="animate-pulse relative">
                        <div className=" w-10 border-2 border-primary-dark rounded rotate-45"></div>
                        <div className=" w-10 border-2 border-primary-dark rounded -rotate-45"></div>
                    </div>

                </div>
                <div className="text-center w-full flex flex-col justify-center rounded-r-lg ">
                    <p className="text-3xl"> <span className='text-secondary'>Website</span></p>
                    <p className="text-3xl">Design <span className='text-secondary'>&</span> Development</p>
                    <p className='text-wrap text-center my-2 text-lg'>At CodeWebzz, we are dedicated to delivering top-notch digital solutions that meet your unique business needs.</p>
                    <div className='bg-orange-400 p-1 w-52 rounded-lg mx-auto mt-3'></div>
                    <NavLink to='/contact' className='hover:bg-secondary z-0 relative animate-bounce hover:scale-95  rounded-tr-xl rounded-bl-xl transition-all duration-300 hover:text-primary-light border border-1 border-secondary w-32 mx-auto mt-4 p-2 text-primary-dark'>
                        Contact Us
                    </NavLink>

                </div>
                <div className="absolute animate-spin hidden lg:block bottom-28 right-28">
                    <div className="animate-pulse relative">
                        <div className=" w-10 border-2 border-primary-dark rounded rotate-45"></div>
                        <div className=" w-10 border-2 border-primary-dark rounded -rotate-45"></div>
                    </div>

                </div>
                {/* <div className="bg-gray-400 text-center w-1/2 rounded-l-lg">
                    <img className='h-screen w-full rounded-l-lg' src={man_up} alt="" />
                </div> */}

            </div>

            <div className="flex flex-wrap font-serif ">
                <div className="lg:w-1/2 mx-auto px-10">
                    <img className='' src={webDav} alt="" />
                </div>
                <div className="lg:w-1/2 place-content-center place-items-center leading-loose pr-5">
                    <p className='text-2xl mb-4'>Design <span className='text-secondary'>&</span> Development</p>
                    <p className="lg:text-start text-center">codewebzz is leading website designing and <span className='text-secondary'>development</span> comapny in Jaipur. We develop different type of dynamic websites like – Matrimonial, Classified, E-Commerce and many more web applications. We are well growth <span className='text-secondary'>web design</span> company in Jaipur and India with new technologies. We make a friendly relationship with our clients and always ready to help them and make out them from their problems.</p>
                </div>
            </div>

            <div className=" font-serif pt-20">
                <div className="text-center flex flex-col justify-between h-20">
                    <p className="text-secondary font-mono">We Offer Services That Work</p>
                    <h1 className="text-3xl font-medium font-serif">Perfect solutions for you</h1>
                    <p className="bg-accent p-0.5 w-28 rounded-lg mx-auto"></p>
                </div>
                <div className="flex flex-wrap font-serif">
                    <div className="flex flex-col gap-16 lg:w-1/3">
                        <div className=" group flex place-items-center gap-5 p-2 md:text-left mt-10 lg:mt-1">
                            <div className="border-2 w-fit p-8 rounded-full text-2xl transition-colors duration-300 ease-in-out group-hover:text-secondary group-hover:border-secondary">
                                <span><CgWebsite className='group-hover:animate-bounce' /></span>
                            </div>
                            <div className="text">
                                <p className="text-2xl font-medium text-secondary">
                                    Website Designing</p>
                                <p className="">We design static website in Just Rs.3000/- (5 page website) with free domain and hosting.</p>
                            </div>

                        </div>
                        <div className=" group flex place-items-center gap-5 p-2 md:text-left">
                            <div className="border-2 w-fit p-8 rounded-full text-2xl transition-colors duration-300 ease-in-out group-hover:text-secondary group-hover:border-secondary">
                                <span><GrAnchor className='group-hover:animate-bounce' /></span>
                            </div>
                            <div className="text">
                                <p className="text-2xl font-medium text-secondary">
                                    Website Development</p>
                                <p className="">We develop different type of dynamic websites like – Matrimonial, Classified and many applications.</p>
                            </div>

                        </div>
                        <div className=" group flex place-items-center gap-5 p-2 md:text-left">
                            <div className="border-2 w-fit p-8 rounded-full text-2xl transition-colors duration-300 ease-in-out group-hover:text-secondary group-hover:border-secondary">
                                <span><IoKeyOutline className='group-hover:animate-bounce' /></span>
                            </div>
                            <div className="text">
                                <p className="text-2xl font-medium text-secondary">
                                    Website Hosting</p>
                                <p className="">We provide all type hosting like – WordPress, Shared, VPS, Linex and Windows hosting with all functionality.</p>
                            </div>

                        </div>

                    </div>
                    <div className="w-full lg:w-1/3 lg:p-4 px-24 py-2 flex justify-center items-center">
                        <img className='w-1/2' src={man_up} alt="" />

                    </div>
                    <div className="flex flex-col gap-16 lg:w-1/3">
                        <div className=" group flex place-items-center gap-5  p-2 md:text-left">
                            <div className="border-2 w-fit p-8 rounded-full text-2xl transition-colors duration-300 ease-in-out group-hover:text-secondary group-hover:border-secondary">
                                <span><IoCartOutline className='group-hover:animate-bounce' /></span>
                            </div>
                            <div className="text">
                                <p className="text-2xl font-medium text-secondary">
                                    E-Commerce Development</p>
                                <p className="">We have qualified E-commerce designers who have a lot experience in E-Commerce field.</p>
                            </div>

                        </div>
                        <div className=" group flex place-items-center gap-5  p-2 md:text-left">
                            <div className="border-2 w-fit p-8 rounded-full text-2xl transition-colors duration-300 ease-in-out group-hover:text-secondary group-hover:border-secondary">
                                <span><TbChartInfographic className='group-hover:animate-bounce' /></span>
                            </div>
                            <div className="text">
                                <p className="text-2xl font-medium text-secondary">
                                    Graphics Designing</p>
                                <p className="">We provide full graphic designing services with responsive layout.</p>
                            </div>

                        </div>
                        <div className=" group flex place-items-center gap-5  p-2 md:text-left">
                            <div className="border-2 w-fit p-8 rounded-full text-2xl transition-colors duration-300 ease-in-out group-hover:text-secondary group-hover:border-secondary">
                                <span><FaSearchengin className='group-hover:animate-bounce' /></span>
                            </div>
                            <div className="text">
                                <p className="text-2xl font-medium text-secondary">
                                    Search Engine Optimization</p>
                                <p className="">Maximize your presence on search engine results pages on a local scale (very important).</p>
                            </div>

                        </div>

                    </div>
                </div>

            </div>

            <div className="my-20">
                <p className='place-content-center place-self-center my-4 text-3xl font-serif'>Our view</p>
                <div className="flex flex-wrap content-center justify-evenly gap-10 lg:gap-0">
                    <div className="w-80 cursor-pointer border-2 overflow-hidden">
                        <img className='w-full transition-transform duration-700 h-full hover:scale-110' src="https://i.pinimg.com/736x/0c/75/61/0c7561c9fd7b284f8a1e6294077bf0a0.jpg" alt="" />

                    </div>
                    <div className="w-80 cursor-pointer border-2 overflow-hidden">
                        <img className='w-full transition-transform duration-700 h-full hover:scale-110' src="https://i.pinimg.com/736x/d6/64/2a/d6642a9fe6cca36b0f65c6240852ad51.jpg" alt="" />

                    </div>
                    <div className="w-80 cursor-pointer border-2 overflow-hidden">
                        <img className='w-full transition-transform duration-700 h-full hover:scale-110' src="https://i.pinimg.com/736x/73/26/e0/7326e0d56596a2ded8de8397b27e8742.jpg" alt="" />
                    </div>

                </div>
                {/* <div className="text-center">
                    <button className='hover:bg-secondary hover:scale-95  rounded-tr-xl rounded-bl-xl transition-all duration-300 hover:text-primary-light border border-1 border-secondary w-32 mt-5 p-2 text-primary-dark'>More about my</button>

                </div> */}
            </div>

            <div className="py-10">
                <div className="bg-secondary p-1 w-1/2 mx-auto rounded-t-xl "></div>
                <div className="text-center mt-7 flex flex-col justify-between h-20">
                    <p className='text-secondary font-mono'>Working Process</p>
                    <h1 className='text-3xl font-medium font-serif'>HOW WE DO IT</h1>
                    <p className='bg-accent p-0.5 w-24 rounded-lg mx-auto'></p>

                </div>
                <div className="flex flex-wrap justify-evenly gap-5 lg:gap-0 relative lg:mt-5">
                    <div className=" group flex flex-col place-items-center gap-5  p-2 lg:w-1/4">
                        <div className="border-2 w-fit p-8 rounded-full text-2xl transition-colors duration-300 ease-in-out group-hover:bg-secondary group-hover:text-primary-light group-hover:border-secondary">
                            <span><FaRegHandshake /></span>
                        </div>
                        <div className="text-center ">
                            <p className="text-2xl font-medium text-secondary group-hover:text-accent">
                                DISCOVERY & PLANNING</p>
                            <p className="">First we make different and unique planning for every website to make a unique identity on the internet and which is suitable for your business.</p>
                        </div>

                    </div>
                    {/* <div className="hidden lg:block border border-secondary border-dotted w-[16.2vw] absolute top-14 z-10 h-0"></div> */}

                    <div className=" group flex flex-col place-items-center gap-5  p-2 lg:w-1/4">
                        <div className="border-2 w-fit p-8 rounded-full text-2xl transition-colors duration-300 ease-in-out group-hover:bg-secondary group-hover:text-primary-light group-hover:border-secondary">
                            <span><CgWebsite /></span>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-medium text-secondary">
                                QUALITY DESIGN</p>
                            <p className="">There are millions of websites on the internet, but we always select a unique, attractive and quality design for your business.</p>
                        </div>

                    </div>
                    {/* <div className="hidden lg:block border border-secondary border-dotted w-[16.5vw] absolute top-14 left-[16%] z-10 h-0"></div> */}
                    <div className=" group flex flex-col place-items-center gap-5  p-2 lg:w-1/4">
                        <div className="border-2 w-fit p-8 rounded-full text-2xl transition-colors duration-300 ease-in-out group-hover:bg-secondary group-hover:text-primary-light group-hover:border-secondary">
                            <span><GrAnchor /></span>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-medium text-secondary">
                                DEVELOPMENT</p>
                            <p className="">We develop a website on secure MVC/CMS technologies like – PHP, react, javascrypt, WordPress etc.</p>
                        </div>

                    </div>
                    {/* <div className="hidden lg:block border border-secondary border-dotted w-[16.4vw] absolute top-14 right-[16.2%] z-10 h-0"></div> */}
                    <div className=" group flex flex-col place-items-center gap-5  p-2 lg:w-1/4">
                        <div className="border-2 w-fit p-8 rounded-full text-2xl transition-colors duration-300 ease-in-out group-hover:bg-secondary group-hover:text-primary-light group-hover:border-secondary">
                            <span><TbChartInfographic /></span>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-medium text-secondary">
                                TESTING & LAUNCH</p>
                            <p className="">Before launching the website we test all validations, fonts, Spellings and Site Speed. And also minify the files for improving speed.</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="py-20 flex flex-wrap justify-evenly gap-10 lg:gap-0">
                <div className="group shadow-lg font-serif rounded-xl w-96 flex flex-col justify-center gap-4 p-8">
                    <p className='text-2xl'><FaPhoneFlip className='rotate-90 transition-all duration-500 ease-in-out group-hover:rotate-180' /></p>
                    <h1 className="text-secondary text-xl">FREE CONSULTATION
                        <span className='bg-secondary animate-bounce ml-5 mr-3 p-1 rounded-full inline-flex'></span>
                        <span className='bg-accent p-1 animate-bounce rounded-full inline-flex'></span>
                    </h1>
                    <p className="text-2xl text-primary-dark">Schedule A Free
                        Consultation With Our
                        Specialist</p>
                    <div className="text-center">
                        <button className=' hover:bg-secondary hover:scale-95  rounded-tr-xl rounded-bl-xl transition-all duration-300 hover:text-primary-light border border-1 border-secondary w-32 mt-5 p-2 text-primary-dark'>Schedule Now</button>
                    </div>

                </div>
                <div className="group shadow-lg font-serif rounded-xl w-96 flex flex-col justify-center gap-4 p-8">
                    <p className='text-2xl'><img src={taili} className='transition-all duration-500 ease-in-out group-hover:rotate-45' /></p>
                    <h1 className="text-secondary text-xl">REQUEST
                        <span className='bg-secondary animate-bounce ml-5 mr-3 p-1 rounded-full inline-flex'></span>
                        <span className='bg-accent p-1 animate-bounce rounded-full inline-flex'></span>
                    </h1>
                    <p className="text-2xl text-primary-dark">Begin Your Adventure
                        With Experienced
                        Professionals</p>
                    <div className="text-center">
                        <button className='hover:bg-secondary hover:scale-95  rounded-tr-xl rounded-bl-xl transition-all duration-300 hover:text-primary-light border border-1 border-secondary w-32 mt-5 p-2 text-primary-dark'>Send Request</button>
                    </div>

                </div>
                <div className="group shadow-lg font-serif rounded-xl w-96 flex flex-col justify-center gap-4 p-8">
                    <p className='text-2xl'><img src={daile} className='transition-all duration-500 ease-in-out group-hover:scale-110' /></p>
                    <h1 className="text-secondary text-xl">HELP DESK
                        <span className='bg-secondary animate-bounce ml-5 mr-3 p-1 rounded-full inline-flex'></span>
                        <span className='bg-accent p-1 animate-bounce rounded-full inline-flex'></span>
                    </h1>
                    <p className="text-2xl text-primary-dark">Do You Have Questions Or
                        Want More Information?
                        Call Now</p>
                    <a href='tel:8824451107' className=" text-center font-sans flex justify-center gap-2">
                        <span className='bg-secondary inline-block cursor-pointer rounded-full'>
                            <FaPhoneVolume className='m-1 mx-1.5 text-primary-light text-lg -rotate-12' />
                        </span>
                        <span className='text-xl'>+918824451107</span>
                        {/* <button className=' hover:bg-secondary hover:scale-95  rounded-tr-xl rounded-bl-xl transition-all duration-300 hover:text-primary-light border border-1 border-secondary w-32 mt-5 p-2 text-primary-dark'>Schedule Now</button> */}
                    </a>

                </div>

            </div>
            <Footer />
        </>
    )
}

export default Home
