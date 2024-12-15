import React from 'react'

function Page3() {

    const data = [
        {
            name: "HTML 5",
            img: "src/assets/html.png"
        },

        {
            name: "CSS",
            img: "src/assets/css.png"
        },

        {
            name: "Javascript",
            img: "src/assets/js.png"
        },

        {
            name: "Tailwind css",
            img: "src/assets/tailwind.png"
        },

        {
            name: "React Native",
            img: "src/assets/react.png"
        },

        {
            name: "GSAP",
            img: "src/assets/gsap.png"
        },
    ]

    return (
        <div className='min-h-[400px] flex items-center flex-col mt-11'>
            <div>
                <h1 className='text-4xl font-semibold text-center'>My Skills</h1>
                <img className='mx-auto py-4' src="src/assets/Hr line.svg" />
            </div>

            <div className='flex gap-5 mt-11 flex-wrap items-center justify-center'>
                {data.map((index, i) => (
                    <div key={i} className='box hover:bg-[#029D66] h-[150px] cursor-pointer w-[150px] bg-[#212121] rounded-lg flex items-center flex-col mb-5 justify-center'>
                        <img className='w-[100px]' src={index.img} />
                        <h2>{index.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Page3