import React from "react";
import profile from "../../assets/profile.jpg";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div  className=" text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
        I’m a software developer and here is my portfolio website. Here you’ll learn about my journey as a software developer.
        </p>
        <button
  className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
  onClick={() => window.open("https://drive.google.com/file/d/1zcgPYGxZ7eB7FgHKIPlo_sVFOpsu1sG9/view", "_blank")}
>
 Download CV
</button>

      </div>
      <div className="w-[400px]">
        <img  className="w-[100%] h-[100%]" src={profile} alt="" />
      </div>
    </div>
  );
};

export default Home;
