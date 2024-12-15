import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import React from 'react'

function Page2() {

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.to(".line", {
            duration: 1.5,
            width: "100px",
            scrollTrigger: {
                trigger: 'body',
                start: '50%'
            }
        })

    })

    return (
        <div className='min-h-[20vh] w-full mt-11 flex flex-col items-center'>

            <div>
                <h1 className='text-4xl font-semibold text-center'>Who I Am?</h1>
                <img className='mx-auto py-4' src="public/Hr line.svg" />
            </div>

            <div className='flex mt-11 items-center md:flex-row flex-col'>
                <img className='w-[300px] md:mb-0 mb-5' src="public/page2Pic.webp" />
                <div className=' pl-5'>
                    <div className=''>
                        <h3 className='text-[#029D66] font-medium text-xl'>About me</h3>
                        <div className='line h-[2px] w-0 bg-[#029D66]'></div>
                    </div>
                    <h2 className='font-semibold text-3xl mt-2'>Abubakar's Details</h2>
                    <p className='font-normal md:text-xl text-lg my-3 text-[#6C717B] md:w-[450px] w-[300px] '>
                        My name is Muhammad Abubakar. I am a MERN Stack Web Developer with a strong focus on frontend development. My skills include HTML, CSS, and JavaScript, along with experience in frameworks like React</p>
                </div>
            </div>
        </div>
    )
}

export default Page2