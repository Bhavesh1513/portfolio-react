import React from "react";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
       

          <ul>
            <div className="flex gap-3 py-4">
           

              <span className="w-100">
  
                <p className="text-sm md:text-md leading-tight">
                <p className="font-bold text-xl">Software Engineer | MERN Stack Developer</p>
                <div className="text-lg">
                I am a proactive software engineer with a strong foundation in full-stack development, specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js) and experience in building scalable web applications. During my internship at Airtel Digital, I contributed to live projects by improving design systems, migrating core components, and enhancing reusable libraries, significantly streamlining development processes. My technical expertise extends to React Native, Tailwind CSS, and Redux Toolkit, which I effectively utilized in various dynamic projects, including fintech applications and ed-tech platforms.
                I thrive in collaborative environments, and my skills in Git, Jira, and Bitbucket allow me to manage version control and project workflows effectively. I am always seeking new challenges to further refine my technical skills and contribute to impactful solutions.
                </div>
                </p>
              </span>
            </div>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
