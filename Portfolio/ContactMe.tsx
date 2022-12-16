import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => {
    window.location.href = `mailto:sheheryar.qazi92@gmail.com?subject=${data.subject} & body=Hi my name is ${data.name}.  message=${data.message} (${data.email})` 
  }

  return (
    <div
      className="min-h-screen max-w-7xl mx-auto  items-center  space-y-1   px-2  p-2 text-center
      flex  
         justify-evenly 
      flex-col"
    >
      <h3 className="text-teal-500 tracking-[20px] 
          uppercase  font-semibold text-2xl md:text-5xl animate-pulse">
        Contact
      </h3>

      <div className="flex flex-col space-y-2 text-gray-500 dark:text-white">
        {/* div */}
        <h4 className="font-semibold text-2xl text-center ">
          I have got just what you need.
          <span className="underline decoration-[#F7AB0A]/50">Lets Talk</span>
        </h4>

        <div className="flex items-center space-x-5 justify-center">
          <PhoneIcon className="h-7 w-7 text-[#F7AB0A] animate-bounce" />
          <p className="text-2xl">+92 317 2271834</p>
        </div>
        <div className="flex items-center space-x-5 justify-center">
          <MapPinIcon className="h-7 w-7 text-[#F7AB0A] animate-pulse" />
          <p className="text-2xl">Karachi</p>
        </div>
        <div className="flex items-center space-x-5 justify-center cursor-pointer">
          <EnvelopeIcon className="h-7 w-7 text-[#F7AB0A] animate-pulse " />
          <p className="text-2xl ">sheheryar.qazi92@gmail.com</p>
        </div>
        {/* div */}

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-fit space-y-2 mx-auto">
          <div className="space-x-2 flex">
            <input 
            placeholder="Name"
            {...register("name", { required: true, maxLength: 20 })}
            className="content_input" type="text" />
            <input    placeholder="Number" {...register("email")} className="content_input" type="email" />
          </div>
          <input placeholder="Email" {...register("subject")} type="text" className="content_input" />
          <textarea placeholder="Message" {...register("message")} className="content_input" />
          <button
            type="submit"
            className="bg-[#F7AB04] py-5 px-10 rounded-md text-gray-500 dark:text-white font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
