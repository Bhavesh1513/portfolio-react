import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiAirtel } from "react-icons/si";
const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
       
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <SiAirtel color="red" size={100} />
            <span className="text-white">
              <h2 className="leading-tight font-bold text-xl">Software Engineer Intern, Airtel Digital</h2>
              <p className="text-sm leading-tight font-thin">
                Feb 2024 - Jul 2024
              </p>
              <ol type="1" className="text-sm p-2 flex flex-col gap-5">
                <li className="text-[17px]">1. Developed and implemented new components, improved existing elements, and resolved bugs in the Design System, now
                successfully live.</li>
                <li className="text-[17px]">2. Migrated React.js code for the Airtel Thanks app’s Header Navigation to React Native, reducing dependencies on
                other tech stacks.</li>
                <li className="text-[17px]">3. Enhanced widgets in the library by addressing bugs, introducing new features, and creating reusable components to
                streamline development.</li>
              </ol>
            </span>
          </div>
         
         
        </div>
      </div>
    </div>
  );
};

export default Experience;
