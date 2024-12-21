import React from "react";
import Image from "next/image";
import Link from "next/link";

const EmailMe = ({ image }) => {
  return (
    <section className="container space-y-10 py-10">
      <div className="py-20 px-7 md:py-5 md:px-5 rounded-xl bg-[#9F1F22] grid md:grid-cols-4 gap-5 md:items-center bg-[url('/images/email-bg.png')] bg-cover bg-center bg-no-repeat">
        <div className="md:col-span-3 flex flex-col gap-5 items-center">
          <h2 className="text-white text-center">Let’s Collaborate!</h2>

          <p className="text-white mt-3 text-center w-full lg:w-3/4">
            Would you be interested in interviewing or having a conversation
            with Julia? Please send your request and relevant details
          </p>

          <div className="flex">
            <Link
              href="#contact"
              className="bg-secondary hover:bg-white hover:text-primary rounded-full pl-4 pr-14 text-white py-2 bg-[url('/images/arrow-white.png')] bg-contain bg-right bg-no-repeat"
            >
              Email Me
            </Link>
          </div>
        </div>

        <div className="md:col-span-1 mt-10 md:mt-0 flex justify-center">
          <div className="w-2/3 md:w-full border-2 border-white rounded-full aspect-square p-1">
            <div className="border-2 border-secondary rounded-full aspect-square">
              <Image
                src={image}
                alt="portrait"
                width={1000}
                height={1000}
                className="aspect-square object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailMe;
