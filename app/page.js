import Button from "@/components/Button";
import React from "react";

const page = () => {
  return (
    <div className="h-screen flex flex-col gap-8 justify-center items-center bg-[url('/images/about-bg.svg')] bg-cover bg-center bg-no-repeat">
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
