"use client";
import Image from "next/image";
import React, { useState } from "react";

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

const Accordion = () => {
  const [openItem, setOpenItem] = useState(awareness[0].id);

  const toggleAccordion = (id) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  return (
    <section className="container">
      <div className="bg-white rounded-2xl p-5">
        <h2>
          How do we achieve lasting awareness?
        </h2>

        <div className="lg:h-[400px] overflow-hidden flex">
          <div className="flex flex-col lg:flex-row gap-4">
            {awareness.map((item) => {
              const isOpen = openItem === item.id;
              return (
                <div
                  key={item.id}
                  className={`
                  bg-[#F7F7F7] rounded-2xl p-4 transition-transform duration-300 transform origin-center overflow-hidden
                  w-full 
                  ${
                    isOpen
                      ? "lg:w-1/2 flex-grow"
                      : "lg:w-[300px] lg:-rotate-90 lg:max-h-[300px]"
                  }
                `}
                >
                  {/* Accordion Toggle */}
                  <div
                    onClick={() => toggleAccordion(item.id)}
                    className="pb-4 flex justify-between items-center cursor-pointer"
                    role="button"
                    aria-expanded={isOpen}
                    aria-controls={`accordion-content-${item.id}`}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        toggleAccordion(item.id);
                      }
                    }}
                  >
                    <p className="font-semibold">{item.title}</p>
                    <div
                      className={`
                      aspect-square rounded-full grid place-content-center text-white w-10 transition-colors duration-300 flex items-center justify-center 
                      ${isOpen ? "bg-secondary" : "bg-green-600"}
                    `}
                    >
                      <span className="text-base">{item.id}</span>
                    </div>
                  </div>

                  {/* Accordion Content */}
                  {isOpen && (
                    <div
                      id={`accordion-content-${item.id}`}
                      className="flex flex-col gap-4 md:flex-row md:items-center py-20 border-t border-gray-400 mt-4"
                    >
                      <Image
                        src={item.image}
                        width={100}
                        height={100}
                        alt={item.title}
                        className="w-32 h-32 object-contain"
                      />
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accordion;
