import React from 'react'
import { CiFacebook, CiLinkedin } from 'react-icons/ci'
import { FaInstagram } from 'react-icons/fa'

const Footer: React.FC = () => {
    return (
        <>
            <div className="flex flex-wrap gap-8 md:gap-0 place-content-evenly">
                <div className="border-primary-dark border- w-48 ps-4 leading-8 py-4">
                    <p className='text-2xl'>Home</p>
                    <ul className='text-primary-dark'>
                        <li>First link</li>
                        <li>First link</li>
                        <li>First link</li>
                        <li>First link</li>
                        <li>First link</li>

                    </ul>
                </div>
                <div className="border-primary-dark w-48 ps-4 leading-8 py-4">
                    <p className='text-2xl'>Projects</p>
                    <ul className='text-primary-dark'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>React</li>
                        <li>Php</li>
                        <li>Wordpress</li>
                    </ul>
                </div>
                <div className="border-primary-dark w-48 ps-4 leading-8 py-4">
                    <p className='text-2xl'>Services</p>
                    <ul className='text-primary-dark'>
                        <li>First link</li>
                        <li>First link</li>
                        <li>First link</li>
                        <li>First link</li>
                        <li>First link</li>

                    </ul>
                </div>
                <div className="border-primary-dark w-48 ps-4 leading-8 py-4">
                    <p className='text-2xl'>Contact</p>
                    <ul className='text-primary-dark'>
                        <li>First link</li>
                        <li>First link</li>
                        <li>First link</li>
                        <li>First link</li>
                        <li>First link</li>
                    </ul>
                    <div className="my-6">
                        <p className='text-2xl'>Contact</p>
                        <p className='flex gap-4 mt-3 text-xl text-primary-light'>
                            <span className='bg-secondary p-1 cursor-pointer rounded-full'>
                                <FaInstagram />
                            </span>
                            <span className='bg-secondary p-1 cursor-pointer rounded-full'>
                                <CiFacebook />
                            </span>
                            <span className='bg-secondary p-1 cursor-pointer rounded-full'>
                                <CiLinkedin />
                            </span>

                        </p>
                    </div>
                </div>
            </div>
            <p className='text-center my-3 text-primary-dark'>Copyright  All Rights lsdhfkshgorgyoerugl weoiuow owero eo bhaskar. — Designed By Codeweb</p>
        </>
    )
}

export default Footer
