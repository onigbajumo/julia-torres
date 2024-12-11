import Hero from "@/components/hero";
import React from "react";
import Image from "next/image";
import { HiCalendar } from "react-icons/hi2";
import { IoMdTime } from "react-icons/io";
import { GrLocation } from "react-icons/gr";
import Link from "next/link";
import { BiDownload } from "react-icons/bi";

const organizations = [
  {
    name: "ALSC",
    image: "/images/alsc.png",
    year: "2024",
  },
  {
    name: "American Libraries Magazine",
    image: "/images/alm.png",
    year: "2021",
  },
  {
    name: "Educolor",
    image: "/images/edu.png",
    year: "2017 - Present",
  },
  {
    name: "Edutopia",
    image: "/images/edutopia.png",
    year: "2020 - Present",
  },
  {
    name: "Follett",
    image: "/images/follett.png",
    year: "2020",
  },
  {
    name: "Highlights Foundation",
    image: "/images/hf.png",
    year: "2022",
  },
  {
    name: "IB",
    image: "/images/ib.png",
    year: "2024",
  },
  {
    name: "Youth Celebrate Diversity",
    image: "/images/ycd.png",
    year: "2020",
  },
  {
    name: "ILA",
    image: "/images/ila.png",
    year: "2022",
  },
  {
    name: "PBS Learning Media",
    image: "/images/pbs.png",
    year: "2021",
  },
  {
    name: "Peguin Classroom",
    image: "/images/psl.png",
    year: "2020 - Present",
  },
  {
    name: "School Library Journal",
    image: "/images/sjl.png",
    year: "2020 - Present",
  },
  {
    name: "The Educator Collaborative",
    image: "/images/tec.png",
    year: "2020 - 2023",
  },
  {
    name: "The Author's Village",
    image: "/images/tav.png",
    year: "2021",
  },
  {
    name: "Global Literature in Libraries",
    image: "/images/gll.png",
    year: "2023",
  },
];

const events = [
  {
    title: "University of South Florida: Anchin Center Online Workshop",
    image: "/images/torres.png",
    date: "Februray 12, 2023",
    description:
      "Led an engaging online session focused on equipping educators with tools to design curriculums that prioritize diversity, equity, and inclusion. The workshop included interactive activities, real-world case studies, and Q&A with attendees",
    location: "Online via Zoom",
    view: "#",
    download: "#",
    time: "10:00 AM - 12:00 PM",
  },
  {
    title: "University of South Florida: Anchin Center Online Workshop",
    image: "/images/torres.png",
    date: "Februray 12, 2023",
    description:
      "Led an engaging online session focused on equipping educators with tools to design curriculums that prioritize diversity, equity, and inclusion. The workshop included interactive activities, real-world case studies, and Q&A with attendees",
    location: "Online via Zoom",
    view: "#",
    download: "#",
    time: "10:00 AM - 12:00 PM",
  },
];

const images = ["/images/torres.png", "/images/portrait-2.png", "/images/portrait.png", "/images/torres.png", "/images/torres.png", "/images/torres.png", "/images/torres.png", "/images/torres.png", "/images/torres.png", "/images/torres.png", "/images/torres.png", ]

const Page = () => {
  return (
    <div className="mb-10 space-y-10">
      <Hero
        heading="Affiliates"
        subheading="Organizations and communities I’ve partnered with to make an impact"
        bg="/images/affiliate.png"
      />

      <section className="container">
        <div className="bg-white rounded-2xl p-5">
          <h2>Affiliated Organizations</h2>

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

      <section className="container">
        <h2>Highlights from Past Events</h2>

        <div className="mt-5 space-y-5">
          {events.map((item, index) => (
            <div key={index} className="p-4 bg-white rounded-2xl">
              <div className="bg-[#F7F7F7] p-2 rounded-xl grid md:grid-cols-3 gap-3">
                <div className="md:col-span-1 rounded bg-white p-1">
                  <Image
                    src={item.image}
                    width={1000}
                    height={1000}
                    alt="organization"
                    className="lg:aspect-square object-cover w-full h-full rounded"
                  />
                </div>

                <div className="md:col-span-2 flex flex-col gap-8">
                  <div className="space-y-5">
                    <h3 className="font-bold">{item.title}</h3>

                    <p className="text-[#81818F]">{item.description}</p>

                    <p className="flex items-center gap-2 text-[#81818F] font-semibold">
                      <HiCalendar className="text-secondary text-2xl" />{" "}
                      {item.date}
                    </p>

                    <p className="flex items-center gap-2 text-[#81818F] font-semibold">
                      <IoMdTime className="text-secondary text-2xl" />{" "}
                      {item.time}
                    </p>

                    <p className="flex items-center gap-2 text-[#81818F] font-semibold">
                      <GrLocation className="text-secondary text-2xl" />{" "}
                      {item.location}
                    </p>
                  </div>

                  <div className="flex gap-5 md:items-center flex-col md:flex-row">
                    <Link
                      href={item.view}
                      className="text-secondary border rounded-full border-secondary px-6 py-3 text-center hover:bg-secondary hover:text-white"
                    >
                      View Recording
                    </Link>
                    <Link
                      href={item.download}
                      className="hover:text-secondary text-center flex items-center gap-2 text-[#58585A]"
                    >
                      Download Materials <BiDownload className="text-2xl" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>



    </div>
  );
};

export default Page;
