import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProps {
  setRatio?: (value: number) => void;
}

export default function Hero() {
  return (
    <div className="flex justify-center items-center px-16 py-16 bg-white max-md:px-5">
      <div className="mt-36 max-w-full w-[1226px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-black max-md:mt-10 max-md:max-w-full">
              <div className="text-7xl font-light capitalize leading-[54.76px] max-md:max-w-full max-md:text-4xl">
                Collections
              </div>
              <div className="mt-16 text-3xl capitalize leading-[55px] max-md:mt-10 max-md:max-w-full">
                you can explore the latest collections of beauty products and
                accessories
                <br />
                from various brands here.
              </div>
              <div className="flex gap-2 justify-between self-start px-7 py-5 mt-20 text-white bg-gray-800 max-md:px-5 max-md:mt-10">
                <div className="my-auto text-2xl font-black text-center"></div>
                <div className="text-3xl capitalize">shop now</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0a76711ffc49912bec7bb3ea2cd89f63c49fe0730ccd369bb3aa0dfdac13b5b8?placeholderIfAbsent=true"
              className="grow w-full aspect-[0.79] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
