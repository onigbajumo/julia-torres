import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import Hero from "@/components/hero";
import Link from "next/link";
import EmailMe from "@/components/cta-section";

export const metadata = {
  title: "Meadia",
};

const mediaData = [
  {
    id: 1,
    image: "https://placehold.co/600.png",
    title:
      "ISTELive 21: Working Toward Digital Equity and Social-Emotional Learning in K–12",
    tag: "Webinar",
    desc: "ISTELive 21: Working Toward Digital Equity and Social-Emotional Learning in K–12",
    path: "/path",
    date: "2021-05-20",
    isFeatured: true,
  },

  {
    id: 2,
    image: "https://placehold.co/600.png",
    title: "Keynote Speech on Digital Transformation",
    tag: "Keynote",
    desc: "An insightful keynote on the future of digital transformation in education.",
    path: "/keynote-digital-transformation",
    date: "2022-03-15",
    isFeatured: false,
  },
  {
    id: 3,
    image: "https://placehold.co/600.png",
    title: "Keynote: Bridging the Gap in Education Technology",
    tag: "Keynote",
    desc: "Discussing strategies to bridge the technology gap in modern classrooms.",
    path: "/keynote-bridging-gap",
    date: "2023-07-10",
    isFeatured: false,
  },

  {
    id: 4,
    image: "https://placehold.co/600.png",
    title: "Advanced Workshop on Interactive Learning",
    tag: "Workshop",
    desc: "A workshop focused on implementing interactive learning techniques.",
    path: "/workshop-interactive-learning",
    date: "2023-09-05",
    isFeatured: false,
  },
  {
    id: 5,
    image: "https://placehold.co/600.png",
    title: "Webinar: Integrating AI in Education",
    tag: "Webinar",
    desc: "Exploring the role of artificial intelligence in enhancing educational outcomes.",
    path: "/webinar-ai-education",
    date: "2024-01-22",
    isFeatured: false,
  },
  {
    id: 8,
    image: "https://placehold.co/600.png",
    title: "Webinar: Enhancing Student Engagement",
    tag: "Webinar",
    desc: "Techniques and tools to boost student engagement in virtual classrooms.",
    path: "/webinar-student-engagement",
    date: "2024-06-30",
    isFeatured: false,
  },
  {
    id: 9,
    image: "https://placehold.co/600.png",
    title: "Workshop: Creative Teaching Methods",
    tag: "Workshop",
    desc: "Innovative teaching methods to inspire creativity among students.",
    path: "/workshop-creative-teaching",
    date: "2024-08-12",
    isFeatured: false,
  },

  {
    id: 6,
    image: "https://placehold.co/600.png",
    title: "Podcast: Future of E-Learning",
    tag: "Podcast",
    desc: "A discussion on the future trends in e-learning and digital education.",
    path: "/podcast-future-elearning",
    date: "2024-02-18",
    isFeatured: false,
  },
  {
    id: 7,
    image: "https://placehold.co/600.png",
    title: "Podcast: Educators on the Frontline",
    tag: "Podcast",
    desc: "Interviews with educators navigating the challenges of modern teaching.",
    path: "/podcast-educators-frontline",
    date: "2024-04-10",
    isFeatured: false,
  },
];

const Page = () => {
  const featuredMedia = mediaData.find((item) => item.isFeatured);

  const categorizedMedia = mediaData.filter((item) => !item.isFeatured);

  const keynotes = categorizedMedia.filter(
    (item) => item.tag.toLowerCase() === "keynote"
  );
  const webinarsWorkshops = categorizedMedia.filter((item) =>
    ["webinar", "workshop"].includes(item.tag.toLowerCase())
  );
  const podcasts = categorizedMedia.filter(
    (item) => item.tag.toLowerCase() === "podcast"
  );

  return (
    <div className="mb-10 space-y-10">
      <Hero
        heading="Media"
        subheading="Conversations & Features"
        bg="/images/hero-bg-1.png"
      />

      {featuredMedia && (
        <section className="container flex justify-center py-10">
          <div className="w-full md:w-3/4">
            <h2 className="font-bold mb-6">Featured Media</h2>

            <div className="mt-10">
              <div className="grid md:grid-cols-5 gap-5 md:items-center">
                <div className="md:col-span-3">
                  <Image
                    src={featuredMedia.image}
                    alt={featuredMedia.title}
                    width={1000}
                    height={1000}
                    className="w-full aspect-video object-cover rounded-xl"
                  />
                </div>

                <div className="md:col-span-2 space-y-5">
                  <div className="space-y-2">
                    <p className="text-base text-secondary py-1 px-3 rounded-full bg-[#FBF0E1] w-fit">
                      {featuredMedia.tag}
                    </p>
                    <h3 className="text-xl font-semibold">
                      {featuredMedia.title}
                    </h3>
                    <p className="text-[#81818F] text-base">
                      {featuredMedia.desc}
                    </p>
                  </div>

                  <div className="flex">
                    <Button
                      path={featuredMedia.path}
                      text="Listen Now"
                      type="secondary"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="container space-y-10">
        {keynotes.length > 0 && (
          <div>
            <h2>Keynotes</h2>

            <div className="mt-5 space-y-10">
              {keynotes.map((item) => (
                <div key={item.id} className="rounded-2xl bg-white p-4">
                  <div className="grid md:grid-cols-5 gap-5 md:items-center">
                    <div className="md:col-span-2">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={1000}
                        height={1000}
                        className="w-full aspect-video object-cover rounded-xl"
                      />
                    </div>

                    <div className="md:col-span-3 space-y-5">
                      <div className="space-y-2">
                        <p className="text-base text-[#00850B] py-1 px-3 rounded-full bg-[#EDFFEF] w-fit">
                          {item.tag}
                        </p>
                        <p className="text-[#81818F] text-sm">
                          Date: {new Date(item.date).toLocaleDateString()}
                        </p>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-[#81818F] text-base">{item.desc}</p>
                      </div>

                      <div className="flex">
                        <Link
                          href={item.path}
                          className="w-fit px-5 py-2 rounded-full border border-secondary text-secondary hover:bg-secondary hover:text-white"
                        >
                          Watch
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {webinarsWorkshops.length > 0 && (
          <div>
            <h2>Webinars & Workshops</h2>

            <div className="mt-5 space-y-10">
              {webinarsWorkshops.map((item) => (
                <div key={item.id} className="rounded-2xl bg-white p-4">
                  <div className="grid md:grid-cols-5 gap-5 md:items-center">
                    <div className="md:col-span-2">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={1000}
                        height={1000}
                        className="w-full aspect-video object-cover rounded-xl"
                      />
                    </div>

                    <div className="md:col-span-3 space-y-5">
                      <div className="space-y-2">
                        <p
                          className={`text-base py-1 px-3 rounded-full w-fit ${
                            item.tag.toLowerCase() === "webinar"
                              ? "text-secondary bg-[#FBF0E1]"
                              : "text-[#00850B] bg-[#EDFFEF]"
                          }`}
                        >
                          {item.tag}
                        </p>
                        <p className="text-[#81818F] text-sm">
                          Date: {new Date(item.date).toLocaleDateString()}
                        </p>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-[#81818F] text-base">{item.desc}</p>
                      </div>

                      <div className="flex">
                        <Link
                          href={item.path}
                          className="w-fit px-5 py-2 rounded-full border border-secondary text-secondary hover:bg-secondary hover:text-white"
                        >
                          Watch
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {podcasts.length > 0 && (
          <div>
            <h2>Podcasts</h2>

            <div className="mt-5 space-y-10">
              {podcasts.map((item) => (
                <div key={item.id} className="rounded-2xl bg-white p-4">
                  <div className="grid md:grid-cols-5 gap-5 md:items-center">
                    <div className="md:col-span-2">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={1000}
                        height={1000}
                        className="w-full aspect-video object-cover rounded-xl"
                      />
                    </div>

                    <div className="md:col-span-3 space-y-5">
                      <div className="space-y-2">
                        <p className="text-base text-purple-600 py-1 px-3 rounded-full bg-purple-100 w-fit">
                          {item.tag}
                        </p>
                        <p className="text-[#81818F] text-sm">
                          Date: {new Date(item.date).toLocaleDateString()}
                        </p>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-[#81818F] text-base">{item.desc}</p>
                      </div>

                      <div className="flex">
                        <Link
                          href={item.path}
                          className="w-fit px-5 py-2 rounded-full border border-secondary text-secondary hover:bg-secondary hover:text-white"
                        >
                          Watch
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <EmailMe image="/images/email-1.png" />
    </div>
  );
};

export default Page;
