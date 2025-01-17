import React from "react";

function Page4() {
  const data = [
    {
      h2: "E-mail",
      img: "/assets/email.png",
      p: "abubakarmarri007@gmail.com",
    },

    {
      h2: "Whatsapp Number",
      img: "/assets/whatsapp.png",
      p: "92+ 3312839822",
    },

    {
      h2: "Instagram",
      img: "/assets/instagram.png",
      p: "@kingsher007",
    },
  ];

  return (
    <div className="min-h-[500px] w-full mt-11">
      <div>
        <h1 className="text-4xl font-semibold text-center">Contact</h1>
        <img className="mx-auto py-4" src="/assets/Hr line.svg" />
      </div>
      <div className="flex items-center justify-center">
        <div className="w-full flex items-center justify-between px-11 mt-16 flex-col">
          {data.map((index, i) => (
            <div key={i} className="">
              <div className="flex items-center justify-center gap-1">
                <img className="md:w-[50px] w-[30px]" src={index.img} />
                <h2 className="text-lg">{index.h2}</h2>
              </div>
              <p className="text-sm text-center mt-1 tracking-[1px] mb-11">
                {index.p}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page4;
