import React from "react";

type Props = {};

function Education({}: Props) {
  return (
    <div className="min-h-screen items-center flex flex-col
    justify-evenly max-w-7xl mx-auto px-5 md:px 
    ">
   
      <h1
        className="text-teal-500 tracking-[20px] 
          uppercase  font-semibold text-2xl md:text-5xl text-center animate-pulse"
      >
        education
      </h1>
   {/* content */}
   <div className="flex flex-col md:flex-row justify-evenly space-y-5 items-center text-center w-full text-gray-500    dark:text-white">
       {/* content */}
      <div >
        <h1 className=" text-teal-500 text-lg font-semibold">INTERMEDIATE</h1>
        <h1>Jinnah Govt Collage, Karachi</h1>
        <h1>Pre Engineering - 2011</h1>
      </div>
      <div>
        <h1 className=" text-teal-500 text-lg   font-semibold">B.COM</h1>
        <h1>Allama Iqbal open university</h1>
        <h1>2022 in progress</h1>
      </div>
         {/* content */}
         </div>
         {/* content */}
      <h1
        className="text-teal-500 tracking-[20px] 
          uppercase  font-semibold text-xl md:text-2xl text-center "
      >
        academic history
      </h1>


 {/* content */}
 <div className="flex flex-col md:flex-row justify-evenly space-y-5 items-center text-center w-full text-gray-500    dark:text-white">
       {/* content */}
      <div>
        
        {" "}
        <h1 className=" text-teal-500 text-lg font-semibold">
          Web Development
        </h1>
        <h1>IBA - Institute Of Business Administration Karachi.</h1>
        <h1>
          6 Months' Professional web developemnt <br /> Diploma sponsored by
          NAVTTC <span className=" text-teal-500">2021</span>{" "}
        </h1>
      </div>
      <div>
        {" "}
        <h1 className=" text-teal-500 text-lg   font-semibold">
          Graphics Designing
        </h1>
        <h1>CIRCLE TechKaro</h1>
        <h1>
          2.5 months’ professional course monitored by <br /> Engro Foundation
          and Vopak <span className=" text-teal-500">2021</span>
        </h1>
      </div>
             {/* content */}
 </div>
       {/* content */}

    </div>
  );
}

export default Education;
