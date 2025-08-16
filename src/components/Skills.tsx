
function Skills() {

  const images = ["html.svg", "css.svg", "react.svg", "js.svg", "redux.svg", "tailwind.svg"];

  return (
    <div className='w-full md:px-10 px-5'>
      <h1
        style={{ fontFamily: "Saira, sans-serif" }}
        className='md:text-[8vw] mt-5 text-[15vw] leading-fit font-medium ml-auto w-fit'>SKILLS</h1>
      <div className="md:pl-2 pl-1 flex items-start gap-5 mt-10 flex-wrap ml-auto w-fit">
        <span className="inline-block h-[2px] sm:w-10 w-7 mt-2 bg-black"></span>
        <h2 className="font-medium md:text-base text-sm">
          <span className="text-[#AC0E0F]">My Toolbox</span> Technologies<br />
          I Work With
        </h2>
      </div>

      <div className="flex items-center justify-center md:my-30 my-20 gap-5 flex-wrap">
        {images.map((item) => {
          return <div key={item} className="bg-black rounded-sm h-20 w-20 flex items-center justify-center hover:scale-110 transition-transform duration-300">
            <img
              className="w-12 object-contain"
              src={item}
              alt={item.replace(".svg", "")}
            />
          </div>
        })}
      </div>

      <p className='md:text-base text-xs tracking-wider md:leading-6 leading-5'>I'm always exploring new technologies to improve my workflow and deliver even better <br /> digital experiences.</p>
      <h1
        style={{ fontFamily: "Saira, sans-serif" }}
        className="stroke-text text-transparent font-bold mt-5 stroke-black opacity-40 text-[22vw] leading-fit md:text-[10vw]"
      >
        03
      </h1>
    </div>
  )
}

export default Skills