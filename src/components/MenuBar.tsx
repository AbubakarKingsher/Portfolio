import FlipLink from "./ui/text-effect-flipper";

function MenuBar() {
  const data = [
    {
      title: "HOME",
      link: "home",
      num: "01",
    },

    {
      title: "ABOUT",
      link: "about",
      num: "02",
    },

    {
      title: "SKILLS",
      link: "skills",
      num: "03",
    },

    {
      title: "PR✳JECTS",
      link: "projects",
      num: "04",
    },
  ];

  return (
    <div className="md:h-screen h-[90vh] w-full bg-[#f1f0ee] md:px-10 px-5">
      <div className="relative h-[90px] flex items-center w-full justify-between gap-5 md:mb-15 mb-7">
        <img className="w-20" src="logo.svg" alt="Site Logo" />
        <button
          style={{ fontFamily: "Saira, sans-serif" }}
          className="cursor-pointer text-sm"
        >
          CLOSE
        </button>
      </div>
      <div className="w-full flex justify-between md:flex-row flex-col">
        <div className="md:text-[2vw] text-[5vw] md:pt-10 py-12 pl-10 w-full md:w-[30%] text-[#AC0E0F] font-medium">
          MENU
        </div>
        <div
          style={{ fontFamily: "Saira, sans-serif" }}
          className="md:mt-0 my-10 font-semibold"
        >
          {data.map((item, idx) => {
            return (
              <div
                key={idx}
                className="h-fit group md:w-[55vw] border-black/40 border-b-2 w-full flex items-start md:gap-10 gap-5"
              >
                <span className="md:text-xs cursor-pointer text-[.7rem] mt-4">{item.num}</span>
                <FlipLink href={item.link}>{item.title}</FlipLink>
                <img className="md:w-9 w-6  ml-auto mt-4 transition-transform duration-300 group-hover:rotate-45" src="top-right-arrow.svg" alt="arrow-icon" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
