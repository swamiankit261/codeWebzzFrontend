import Navbar from './Navbar'
import { FaInstagram } from 'react-icons/fa'
import { CiFacebook, CiLinkedin } from 'react-icons/ci'
import Footer from './Footer'

const ContactUs = () => {
    return (
        <>
            <Navbar />
            <div className="mb-16">
                <div className="flex flex-col justify-center p-12 font-serif leading-loose bg-primary-light mt-9">
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

                <div className="font-serif text-center shadow-2xl rounded-lg rounded-tl-2xl py-4 lg:w-1/2 align-middle m-auto">
                    <div className="">
                        <legend className='text-2xl font-semibold'>Let’s Talk About Your Project</legend>
                    </div>
                    <fieldset>
                        {/* <div className=""> */}
                        <div className=" flex flex-wrap">
                            <div className=' w-full lg:w-1/2 p-4'>
                                <label className='block text-start hover:text-secondary' htmlFor="name">Name</label>
                                <input className='w-full border-2 rounded-md p-1 focus:outline-none focus:border-secondary focus:ring-1 ' pattern='.{5/10}' id='name' type="text" placeholder='Name' />

                            </div>
                            <div className='w-full lg:w-1/2 p-4'>
                                <label className='block text-start hover:text-secondary' htmlFor="email">Email</label>
                                <input className='w-full border-2 rounded-md p-1 focus:outline-none focus:border-secondary focus:ring-0' type="email" id='email' placeholder='Email' />

                            </div>
                            <div className='w-full lg:w-1/2 p-4'>
                                <label className='block text-start hover:text-secondary' htmlFor="phone">Phone Number</label>
                                <input className='w-full border-2 rounded-md p-1 font-sans focus:outline-none focus:border-secondary focus:ring-0' type="number" pattern='.{8}' id='phone' placeholder='Phone Number' />

                            </div>
                            <div className='w-full lg:w-1/2 p-4'>
                                <label className='block text-start hover:text-secondary' htmlFor="company">Company Name</label>
                                <input className='w-full border-2 rounded-md p-1 focus:outline-none focus:border-secondary focus:ring-0' type="text" id='company' placeholder='Company Name' />

                            </div>
                        </div>
                        <div className=" p-2">
                            <label className='text-secondary' htmlFor="details">Project Details</label>
                            <textarea className='w-full p-1 border focus:outline-none focus:border-secondary' name="" id="details" rows={4} placeholder='What is your project about?' />
                        </div>
                        <div className="p-2">
                            <label className='block text-start hover:text-secondary' htmlFor="budget">Any budget or timeline remarks?</label>
                            <input className='border-2 w-full p-1 focus:outline-none focus:border-secondary focus:ring-0' type="text" id='budget' placeholder='Remarks' />
                        </div>
                        {/* </div> */}
                        <button className='hover:bg-secondary z-0 relative animate-bounce hover:scale-95  rounded-tr-xl rounded-bl-xl transition-all duration-300 hover:text-primary-light border border-1 border-secondary w-32 mx-auto mt-4 p-2 text-primary-dark'>Submit</button>
                    </fieldset>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default ContactUs
