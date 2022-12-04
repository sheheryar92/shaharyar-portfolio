import React from "react";
import { motion } from "framer-motion";

type Props = {};
// initial={{opacity: 0}}
//     animate={{
//         scale : [1,2 , 2 , 3,1 ],
//         opacity: [0.1,0.2,0.4,0.8, 0.1, 1.0],
//         borderRadius: ['20%' , '20%' , '50%' , '80%', '20%']
//     }}
//     transition={{
//         duration: 2.5
//     }}
function Circles({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "60%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div
        className="border border-[gray]  w-[200px]
h-[200px]
rounded-full
mt-52
animate-ping
absolute
"
      />
      <div
        className="border border-[#333]  w-[300px]
h-[300px]
rounded-full
mt-52

absolute
"
      /> 
       <div
        className="border border-[#333]  w-[500px]
h-[500px]
rounded-full
mt-52

absolute
"
      /> 
      <div
        className="border border-[#F7AB0A]  w-[650px]
h-[650px]
opacity-20
rounded-full
mt-52
animate-pulse
absolute
"
      /> 
      <div
        className="border border-[gray] w-[800px]
h-[800px]

rounded-full
mt-52
opacity-20
absolute
"
      /> 
    </motion.div>
  );
}

export default Circles;
