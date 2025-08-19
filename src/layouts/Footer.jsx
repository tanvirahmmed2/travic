import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Footer = () => {
    return (
        <section className='w-full px-2 '>
            <footer className='w-full h-auto bg-gray-200 p-4 rounded-lg flex flex-col items-center justify-center gap-4'>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <p>বারিধারা জোন, ঢাকা ১২১২</p>
                    <div className='flex flex-row items-center justify-center gap-4'>
                        <p> +৮৮০১৯১৮১৬১৭১৬</p>
                        <p> +৮৮০১৯১৮১৫১৪১৩</p>

                    </div>
                    <p className='flex flex-row items-center gap-2 justify-center'><CiMail/> info@dailynews.com </p>
                </div>

                <div>
                    <h1 className='text-2xl font-bold'>Daily News</h1>
                    <p>All right are reserved</p>
                </div>
                <div className='w-auto flex flex-row items-center justify-center gap-4'>
                    <p className='bg-white border-2 p-2 border-black/30 cursor-pointer hover:scale-105 transition duration-300'><FaFacebook /></p>
                    <p className='bg-white border-2 p-2 border-black/30 cursor-pointer hover:scale-105 transition duration-300'><FaTwitter /></p>
                    <p className='bg-white border-2 p-2 border-black/30 cursor-pointer hover:scale-105 transition duration-300'><FaInstagram /></p>
                    <p className='bg-white border-2 p-2 border-black/30 cursor-pointer hover:scale-105 transition duration-300'><FaYoutube /></p>
                    <p className='bg-white border-2 p-2 border-black/30 cursor-pointer hover:scale-105 transition duration-300'><FaLinkedin /></p>
                </div>

            </footer>
        </section>
    )
}

export default Footer
