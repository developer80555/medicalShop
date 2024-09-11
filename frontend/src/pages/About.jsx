import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          About <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-12 my-10">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
            non modi magnam placeat dolorem possimus doloremque quo aspernatur,
            quidem esse?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            molestias et officiis aut omnis cum ad veniam, reiciendis nostrum
            quae distinctio, corrupti tempora eum aliquam. Beatae, nesciunt.
            Incidunt, delectus perspiciatis!
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, sed
            nulla. Fuga ducimus eos sit?
          </p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSR US</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 scroll-m-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
            reprehenderit cupiditate impedit?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 scroll-m-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
            reprehenderit impedit?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 scroll-m-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalization</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
            cupiditate impedit?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
