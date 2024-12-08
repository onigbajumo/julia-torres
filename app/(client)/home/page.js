import Hero from "@/components/hero";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const awareness = [
  {
    id: 1,
    title: "Workshops (Virtual & In-Person)",
    description:
      "Interactive workshops tailored for educators, authors, publishers, librarians, and professional organizations, focusing on impactful, inclusive education practices.",
    image: "/images/person.svg",
  },
  {
    id: 2,
    title: "Professional Development Series",
    description:
      "Multi-session programs designed to deepen knowledge and foster skills for long-term educational growth, adaptable to both online and in-person formats.",
    image: "/images/download.svg",
  },
];

const Home = () => {
  return (
    <div className="space-y-8">
      <section className="container">
        <div className="bg-secondary rounded-2xl py-6 md:py-10 px-4 md:px-14 grid md:grid-cols-7 bg-[url('/images/portrait.png')] bg-contain bg-bottom lg:bg-right bg-no-repeat md:h-[80vh]">
          <div className="md:col-span-5 flex flex-col gap-5 justify-center h-[40vh] lg:h-auto">
            <h1 className="text-white lg:text-8xl lg:!leading-[120px]">
              Empowering the Future of Education
            </h1>

            <p className="italic w-full md:w-2/3 lg:w-2/5 text-white">
              Help children celebrate differences. Put freedom into practice at
              school and beyond.
            </p>

            <div className="flex">
              <Link
                className="bg-primary rounded-full pl-4 pr-14 text-white py-2 bg-[url('/images/arrow-white.svg')] bg-contain bg-right bg-no-repeat font-[family-name:var(--font-marri-weather)]"
                href="/contact"
              >
                Explore My Resources
              </Link>
            </div>
          </div>

          <div className="h-[40vh] md:h-auto"></div>
        </div>
      </section>

      <section className="container grid md:grid-cols-2">
        <div>
          <Image
            src="/images/portrait-2.png"
            width={500}
            height={500}
            alt="portrait"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="bg-[#FDEBD3] rounded-tr-2xl rounded-br-2xl p-7 flex flex-col gap-9 justify-center">
          <h2>Shaping Young Minds Through Inclusive Education</h2>

          <p>
            Every interaction teaches us what’s valuable in the world especially
            those we have when we are young. As a librarian and veteran language
            arts teacher, I help schools and libraries meet every student’s
            educational needs. With more inclusive programming, you’ll be able
            to better support and empower young people of all ages and
            backgrounds.
          </p>

          <div className="flex">
            <Link
              href="/about"
              className="bg-secondary rounded-full pl-4 pr-14 text-white py-2 bg-[url('/images/arrow.svg')] bg-contain bg-right bg-no-repeat"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="bg-white rounded-2xl p-5">
          <h2 className="w-full md:w-2/3 lg:w-1/3">
            How do we achieve lasting awareness?
          </h2>

          <div className="flex gap-8 mt-10 md:overflow-x-scroll pb-4 flex-col md:flex-row">
            {awareness.map((item) => (
              <div
                key={item.id}
                className="bg-[#F7F7F7] rounded-2xl p-7 flex flex-col gap-5 w-full md:w-[60%] md:flex-shrink-0"
              >
                <div className="pb-4 border-b border-gray-400 flex justify-between items-center">
                  <p className="font-semibold font-[family-name:var(--font-marri-weather)]">
                    {item.title}
                  </p>
                  <div className="aspect-square bg-secondary rounded-full grid place-content-center text-white w-10">
                    <span className="text-base font-[family-name:var(--font-marri-weather)]">
                      {item.id}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-6 flex-col md:flex-row md:h-60">
                  <Image
                    src={item.image}
                    width={100}
                    height={100}
                    alt="person"
                    className="aspect-square object-contain w-32"
                  />
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <div className="flex justify-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-secondary rounded-full pl-4 pr-14 text-white py-2 bg-[url('/images/arrow.svg')] bg-contain bg-right bg-no-repeat"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div> */}
    </div>
  );
};

export default Home;
