import Navbar from './Navbar'
import { FaBrain } from 'react-icons/fa'
import { MdOutlineMobileFriendly } from 'react-icons/md'
import Footer from './Footer'
import { IoKeyOutline } from 'react-icons/io5'

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col justify-center p-12 font-serif leading-loose bg-primary-light mt-9">
                <h1 className='text-3xl text-secondary'>About Us</h1>
                <p>Your Trusted Partner for Website Design and Digital Marketing Services in India. Your dependable ally for delivering exceptional services tailored specifically for the Indian market. With a steadfast commitment to <span className='text-secondary'>excellence and a proven track record of success</span>, we stand ready to partner with you in achieving remarkable results in India.</p>
            </div>
            <div className="font-serif mb-20">
                <div className="text-center leading-10">
                    <h1 className='text-4xl font-semibold my-5'>What Make Us Different</h1>
                    <p>At WebElite, we are your one-stop destination for a wide range of digital services that empower your online presence. Whether you’re a startup looking to make a splash, an established business seeking to revamp your digital strategy, or an entrepreneur with a groundbreaking idea, our services are tailored to meet your unique needs.</p>
                    <h1 className='text-2xl mt-4'>“Discover how we can elevate your digital journey”</h1>

                </div>
                <div className="flex flex-wrap justify-evenly gap-10 mt-12">
                    <div className="lg:w-96 group shadow-2xl p-7 text-center rounded-md leading-8">
                        <div className="inline-block"><FaBrain className='text-3xl ' /></div>
                        <div className="">
                            <h1 className='text-2xl my-5 group-hover:text-secondary'>Professional Website Design</h1>
                            <p>We create stunning, dynamic and highly responsive website. Our websites definitely will enhance your brand’s value.</p>
                        </div>
                    </div>
                    <div className="lg:w-96 group shadow-2xl p-7 text-center rounded-md leading-8">
                        <div className="inline-block"><MdOutlineMobileFriendly className='text-3xl ' /></div>
                        <div className="">
                            <h1 className='text-2xl my-5 group-hover:text-secondary'>Mobile App Development</h1>
                            <p>We create feature-packed and highly functional mobile applications to meet all business and industry needs.</p>
                        </div>
                    </div>
                    <div className="lg:w-96 group shadow-2xl p-7 text-center rounded-md leading-8">
                        <div className="inline-block"><IoKeyOutline className='text-3xl ' /></div>
                        <div className="">
                            <h1 className='text-2xl my-5 group-hover:text-secondary'>Website Hosting</h1>
                            <p>We create stunning, dynamic and highly responsive website. Our websites definitely will enhance your brand’s value.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AboutUs
