import Button from "@/components/Button";
import Hero from "@/components/hero";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Get Invloved",
};

const organizations = [
  {
    name: "LA Times Book Prize",
    image: "/images/bookprices.png",
    year: "2022 - Present",
  },
  {
    name: "REFORMA",
    image: "/images/reforma.png",
    year: "2024",
  },
  {
    name: "BCALA",
    image: "/images/caucus.png",
    year: "2024",
  },
  {
    name: "JCLC",
    image: "/images/jclc.png",
    year: "2024",
  },
  {
    name: "Actionable Innovations Global",
    image: "/images/aig.png",
    year: "2024",
  },
  {
    name: "Book Love Foundation",
    image: "/images/blf.png",
    year: "2022 - 2024",
  },
  {
    name: "YALSA",
    image: "/images/yalsa.png",
    year: "2022",
  },
];

const Page = () => {
  return (
    <div className="space-y-10 mb-10">
      <Hero
        heading="Get Involved"
        subheading="Your support helps make this work possible"
        bg="/images/get-involved.png"
      />

      <section className="container">
        <div className="bg-white rounded-2xl px-5 md:px-10 py-10 md:py-20 grid md:grid-cols-2 gap-7">
          <div className="space-y-5">
            <h2 className="lg:!leading-[50px] font-semibold">
              Like what I do? <br /> Support organizational transformation.
            </h2>

            <p>
              True transformation begins when we empower individuals to
              challenge systems, embrace knowledge, and work together for
              meaningful change.
            </p>

            <div className="flex">
              <Button
                target="blank"
                path="https://www.paypal.com/donate?hosted_button_id=BWVVQSA2MTWYA&source=qr"
                text="Contribute"
                type="secondary"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <div className="shadow-xl rounded-xl p-3 w-3/4 lg:w-3/5 xl:w-2/5 space-y-3 border ">
              <Image
                src="/images/qr.svg"
                width={1000}
                height={1000}
                alt="donate"
                className="aspect-square"
              />

              <p className="text-base">
                Have you attended one of my free webinars or workshops? Show
                your support here.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-2xl px-6 flex justify-center items-center flex-col gap-16 bg-[url('/images/change.png')] bg-center bg-cover h-[50vh]">
          {/* <h3 className="text-center font-bold text-white">
            True transformation begins when we empower individuals to challenge
            systems, embrace knowledge, and work together for meaningful change
          </h3> */}

          <div className="w-full md:w-3/5 inline-flex">
            <Image
              src="/images/quote-down.png"
              width={1000}
              height={1000}
              alt="mandela"
              className="w-7 md:w-16 object-contain"
            />
            <div className="">
              <h2 className="text-white text-center italic">
                Education is the most powerful weapon which you can use to
                change the world.
              </h2>
              <p className="mt-5 text-white text-center">- Nelson Mandela</p>
            </div>
            <Image
              src="/images/quote-down.png"
              width={1000}
              height={1000}
              alt="mandela"
              className="w-7 md:w-16 object-contain transform rotate-180"
            />
          </div>
        </div>
      </section>

      <section className="container">
        <div className="bg-white rounded-2xl p-5">
          <h2>Organizations I support</h2>

          <div className="mt-7 flex flex-wrap gap-0 justify-center">
            {organizations.map((org, index) => (
              <div
                key={index}
                className="p-2 md:p-10 flex flex-col gap-5 w-1/2 md:w-1/3 lg:w-1/4"
              >
                <div>
                  <Image
                    src={org.image}
                    width={1000}
                    height={1000}
                    alt="organization"
                    className="aspect-[3/2] object-contain w-full"
                  />
                </div>

                <div className="space-y-2 flex flex-col items-center">
                  <p className="text-center font-semibold font-[family-name:var(--font-marri-weather)]">
                    {org.name}
                  </p>
                  <p className="text-[#81818F] text-center font-[family-name:var(--font-marri-weather)]">
                    {org.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
