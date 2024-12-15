import React from 'react'

function Page4() {

    const data = [
        {
            h2: "E-mail",
            img: "../src/email.png",
            p: "abubakarmarri007@gmail.com"
        },

        {
            h2: "Whatsapp Number",
            img: "../src/whatsapp.png",
            p: "92+ 3312839822"
        },

        {
            h2: "Instagram",
            img: "../src/instagram.png",
            p: "@kingsher007"
        },
    ]

    return (
        <div className='min-h-[300px] w-full mt-11'>
            <div>
                <h1 className='text-4xl font-semibold text-center'>Contact</h1>
                <img className='mx-auto py-4' src="../src/Hr line.svg" />
            </div>
            <div className='h-full flex items-center justify-center'>
                <div className='w-full flex items-center justify-between px-11 mt-16 my-auto md:flex-row flex-col'>
                    {data.map((index, i) => (
                        <div key={i} className=''>
                            <div className='flex items-center md:justify-start justify-center gap-1'>
                                <img className='md:w-[50px] w-[30px]' src={index.img} />
                                <h2 className='text-lg'>{index.h2}</h2>
                            </div>
                            <p className='text-sm text-center mt-1 tracking-[1px] md:mb-0 mb-11'>{index.p}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Page4