"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const data = [
  {
    year: 2024,
    text: "Entering a Premier Master of Library and Information Science Evaluation",
  },
  { year: 2023, text: "Notable achievement or text for the year 2023." },
  { year: 2022, text: "Key milestone or description for 2022." },
  { year: 2021, text: "Some highlight or description for 2021." },
  { year: 2020, text: "Starting the journey with a notable event." },
  { year: 2019, text: "A significant event or milestone in 2019." },
  { year: 2018, text: "A key event or description for 2018." },
  { year: 2017, text: "A memorable event or milestone in 2017." },
];

export default function Experience() {
  const yearSectionsRef = useRef([]);
  const mainElRef = useRef(null);

  useEffect(() => {
    const sections = yearSectionsRef.current.filter(Boolean);
    const mainEl = mainElRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentYear = entry.target.getAttribute("data-year");
            setActiveYear(currentYear);
          }
        });
      },
      {
        threshold: 0.4,
        root: mainEl,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const setActiveYear = (year) => {
    yearSectionsRef.current.forEach((section) => {
      if (section)
        section.classList.remove("border-l-2", "border-orange-500", "pl-4");
    });

    const activeSection = document.querySelector(`#year-${year}`);
    if (activeSection) {
      activeSection.classList.add("border-l-2", "border-orange-500", "pl-4");
    }

    document
      .querySelectorAll(".arc-year")
      .forEach((el) => el.classList.remove("text-orange-500", "font-bold"));
    const activeArcItem = document.querySelector(
      `.arc-year[data-year="${year}"]`
    );
    if (activeArcItem) {
      activeArcItem.classList.add("text-orange-500", "font-bold");
    }
  };

  const radius = 150;
  const centerX = 150;
  const centerY = 150;
  const angleStep = data.length > 1 ? 180 / (data.length - 1) : 0;

  return (
    <>
      <div className="grid-cols-1 md:grid-cols-3 gap-5 bg-white rounded-2xl py-20 px-5 hidden md:grid">
        <aside className="col-span-1 sticky top-20 flex items-center justify-center">
          <div className="relative w-80 h-80 rounded-full">
            {/* Center image */}
            <Image
              width={1000}
              height={1000}
              src="/images/torres.png"
              alt="Inside Circle"
              className="absolute w-40 h-40 object-cover rounded border border-gray-300 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />

            {/* Years along the arc */}
            {data.map((item, i) => {
              const angle = 90 + i * angleStep;
              const rad = (angle * Math.PI) / 180;
              const x = centerX + Math.cos(rad) * radius;
              const y = centerY + Math.sin(rad) * radius;

              const style = {
                position: "absolute",
                left: `${x}px`,
                top: `${y}px`,
                // Rotate the text tangent to the arc:
                transform: `translate(-50%, -50%) rotate(${angle - 180}deg)`,
                transformOrigin: "center center",
                cursor: "pointer",
              };

              return (
                <div
                  key={item.year}
                  className="arc-year text-2xl transition-colors duration-300"
                  data-year={item.year}
                  style={style}
                  onClick={() => {
                    const targetSection = document.querySelector(
                      `#year-${item.year}`
                    );
                    if (targetSection) {
                      targetSection.scrollIntoView({ behavior: "smooth" });
                      // Immediately highlight the clicked year
                      setActiveYear(item.year);
                    }
                  }}
                  tabIndex="0" // Make focusable for accessibility
                  onKeyPress={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      const targetSection = document.querySelector(
                        `#year-${item.year}`
                      );
                      if (targetSection) {
                        targetSection.scrollIntoView({ behavior: "smooth" });
                        setActiveYear(item.year);
                      }
                    }
                  }}
                  aria-label={`Go to ${item.year}`}
                >
                  {item.year}
                </div>
              );
            })}
          </div>
        </aside>

        {/* Right side: Year texts */}
        <main
          ref={mainElRef}
          className="col-span-2 overflow-y-auto snap-y snap-mandatory h-[70vh] relative"
        >
          {data.map((item, idx) => (
            <section
              key={item.year}
              id={`year-${item.year}`}
              data-year={item.year}
              ref={(el) => (yearSectionsRef.current[idx] = el)}
              className="p-8 border-b border-gray-300 snap-start transition-colors duration-300"
            >
              <h2 className="text-2xl font-semibold mb-4">{item.year}</h2>
              <p className="text-lg">{item.text}</p>
            </section>
          ))}
        </main>
      </div>

      {/* Mobile view */}
      <div className="md:hidden">
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="grid grid-cols-4 gap-4 items-center">
              <div className="bg-secondary rounded-md pl-1 col-span-3">
                <div className=" bg-[#FDEBD3] rounded-md p-3">
                  <h3 className="font-semibold mb-2">{item.year}</h3>
                  <p className="text-sm">{item.text}</p>
                </div>
              </div>

              <div className="col-span-1 flex justify-center items-center">
                <h2 className="text-secondary">{item.year}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
