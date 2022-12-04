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
      className="h-screen relative mx-auto flex flex-col justify-evenly
    items-center text-center md:text-left md:flex-row max-w-7xl p-10"
    >
      <h3 className="uppercase text-gray-500 tracking-[20px] text-2xl absolute top-24">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        {/* div */}
        <h4 className="font-semibold text-4xl text-center">
          I have got just what you need.{" "}
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
            {...register("name", { required: true, maxLength: 20 })}
            className="content_input" type="text" />
            <input {...register("email")} className="content_input" type="email" />
          </div>
          <input {...register("subject")} type="text" className="content_input" />
          <textarea {...register("message")} className="content_input" />
          <button
            type="submit"
            className="bg-[#F7AB04] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
