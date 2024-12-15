import React, { useRef } from 'react'
import { Link } from 'react-router'

function Navigation() {

    const first = useRef(null)

    const openMenuIcon = () => {
        first.current.style.top = "0"
    }

    const closeMenuIcon = () => {
        first.current.style.top = "-500px"
    }

    return (
        <>
            <div ref={first} className='icon w-full bg-[#00925B] min-h-[280px] absolute top-[-500px] z-50'>
                <img onClick={() => closeMenuIcon()} className='w-7 py-2 absolute right-2' src="../src/closeIcon.png" />
                <ul className='flex flex-col items-center justify-end h-full text-lg mt-6'>
                    <Link className='cursor-pointer hover:bg-[#0f8a5f] py-4 w-full text-center mt-5' to={"/"}><li>Home</li></Link>
                    <Link className='cursor-pointer hover:bg-[#0f8a5f] py-4 w-full text-center mt-5' to={"about"}><li>About</li></Link>
                    <Link className='cursor-pointer hover:bg-[#0f8a5f] py-4 w-full text-center mt-5' to={"skills"}><li>Skills</li></Link>
                    <Link className='cursor-pointer hover:bg-[#0f8a5f] py-4 w-full text-center mt-5' to={"contact"}><li>Contact</li></Link>
                </ul>
            </div>
            <div className='text-white flex items-center justify-between px-7 py-2 h-[100px]'>
                <img className='md:w-[150px] w-[120px]' src="../src/logo.svg" />
                <ul className='items-center md:gap-16 gap-11 text-lg font-medium hidden md:flex'>
                    <Link to={"/"}><li className='cursor-pointer'>Home</li></Link>
                    <Link to={"about"}><li className='cursor-pointer'>About</li></Link>
                    <Link to={"skills"}><li className='cursor-pointer'>Skills</li></Link>
                    <Link to={"contact"}><li className='cursor-pointer'>Contact</li></Link>
                </ul>
                <img onClick={() => openMenuIcon()} className='md:hidden block md:w-[3rem] w-[2rem] cursor-pointer' src="../src/menuIcon.png" />
            </div>
        </>
    )
}

export default Navigation