import React from "react";
import ProjectCard from "./ProjectCard";
import crop from "../../assets/crop_logo.jpg";
import crypto from "../../assets/crypto.png";
import webbuzz from "../../assets/webbuzz_logo.png";
import poke from "../../assets/pokedex_logo.png";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Webbuzz"
          main="WebBuzz is a dynamic web application that reflects the spirit of the sport of cricket. It features interactive elements such as a multi-stage form, an IPL-exclusive page displaying team achievements, and a champions section showcasing international cricket winners. The application delivers a smooth and engaging user experience with running infinity loop text and cards animation."
          image={webbuzz}
          liveLink="https://webbuzz.vercel.app/"
          githubLink="https://github.com/Bhavesh1513/Webbuzz.git"
        />
        <ProjectCard
          title="Binance Cryptocurrency"
          main="This is a React application that displays live cryptocurrency candlestick charts using data from the Binance API. The application features real-time updates through WebSockets and allows users to select different cryptocurrencies and time intervals for the candlestick chart display."
          image={crypto}
          liveLink="https://fintarget-binance-cryptocurrency.vercel.app/"
          githubLink="https://github.com/Bhavesh1513/Fintarget-Binance-Cryptocurrency.git"
        />
        <ProjectCard
          title="Pokedox"
          main="The React Pokedex App is a web application that allows users to explore and search for Pokemon information. It leverages React for building the user interface, Redux for state management, and Tailwind CSS for styling. The app makes asynchronous requests to the PokeAPI to fetch and display Pokemon data."
          image={poke}
          liveLink="https://elegant-biscochitos-483834.netlify.app/"
          githubLink="https://github.com/Bhavesh1513/pokemon.git"
        />
        <ProjectCard
          title="The Crop Recommendation System."
           main="TThe Crop Recommendation System is a machine learning-based application that provides recommendations for suitable crops based on various environmental and soil conditions. It aims to assist farmers and agricultural professionals in making informed decisions about crop selection, optimizing yields, and maximizing profitability."
           image={crop}
          liveLink="https://github.com/Bhavesh1513/Crop-Recommendation.git"
          githubLink="https://github.com/Bhavesh1513/Crop-Recommendation.git"
        />
      </div>
    </div>
  );
};

export default Projects;
