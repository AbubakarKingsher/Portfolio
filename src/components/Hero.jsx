import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

function Hero() {

    useGSAP(() => {
        gsap.from(".first-heading", {
            duration: 1,
            y: "120px",
        })

        gsap.to(".heading-greenLine", {
            delay: 1,
            width: "45px",
            duration: 0.7
        })

        gsap.from(".heading-third", {
            duration: 1.5,
            y: "120px",
            delay: 1
        })
    })

    return (
        <div className='min-h-[20vh] w-full flex md:items-center justify-between overflow-hidden flex-col md:flex-row'>
            <div className='pl-[10vw] pt-[10vw] md:pt-[0]'>
                <div className='overflow-hidden mb-2'>
                    <h1 className='first-heading  md:text-[7vw] md:leading-[6vw] mb-0 text-[12vw] font-bold'>Hello<span className='text-[#029D66]'>.</span></h1>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='heading-greenLine h-[3px] w-0 bg-[#029D66] md:mt-3 mt-0'></div>
                    <div className='overflow-hidden'>
                        <h2 className='md:text-[5vw] text-[7vw] md:leading-[4vw] mb-1 font-medium sm:mt-3 mt-1 whitespace-nowrap'>I'm Abubakar</h2>
                    </div>
                </div>
                <div className='overflow-hidden sm:mt-3 mt-1'>
                    <p className='heading-third md:text-[3vw] text-[5vw] font-light whitespace-nowrap'>Front-End Website Developer</p>
                </div>
                <a href="https://wa.me/923312839822?text=" target="_parent">
                    <button className='py-3 px-7 outline-none mt-7 bg-[#029D66] flex items-center gap-3 rounded-sm text-base font-medium'>Contact me <img className='w-6' src="public/contactIcon.png" /></button>
                </a>
            </div>
            <img className='md:w-[25vw] w-[50vw] mx-auto md:mx-0 pt-10 md:pt-0' src="public/heroSecPic.webp" />
        </div>
    )
}

export default Hero