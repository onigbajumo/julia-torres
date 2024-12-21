import Button from "@/components/Button";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="h-screen flex flex-col gap-8 justify-center items-center bg-[url('/images/about-bg.svg')] bg-cover bg-center bg-no-repeat p-7">
      <div className="w-2/3 sm:w-1/4 flex justify-center">
        <Image src="/images/intro.gif" width={2000} height={2000} alt="logo" className="w-56" />
      </div>
      <h2 className="w-full text-center md:w-2/3 lg:w-1/3">
        Inspiring educators for a brighter tomorrow.
      </h2>

      <div>
        <Button path="/home" text="Enter Site" type="secondary" />
      </div>
    </div>
  );
};

export default page;
