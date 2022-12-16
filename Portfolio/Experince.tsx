import React from "react";
import ExperinceCard from "./ExperinceCard";

type Props = {};

function Experince({}: Props) {
  return (
    <div className="min-h-screen items-center flex flex-col
    justify-evenly max-w-7xl mx-auto px-5 md:px-0
    space-y-10
    ">
      {/* content */}

      <h1
        className="text-teal-500 tracking-[20px] 
  
        text-2xl md:text-5xl
          uppercase  font-semibold  animate-pulse"
      >
        EXPERIENCE
      </h1>
      {/* card */}
      <div className="flex flex-col space-y-5  
      md:mt-0 md:space-y-0
      md:flex-row w-full justify-evenly   ">
        <ExperinceCard />
        <ExperinceCard />
        <ExperinceCard />
      </div>

      {/* card */}

      {/* content */}
    </div>
  );
}

export default Experince;
