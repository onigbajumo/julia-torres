"use client";
import BlueskyEmbed from "@/components/Bluesky";
import BlueskyProfile from "@/components/BlueskyProfile";
import Button from "@/components/Button";
import Hero from "@/components/hero";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

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
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="space-y-12 mb-12">
      <section className="container">
        <div className="bg-secondary rounded-2xl py-6 md:py-10 px-4 md:px-14 grid md:grid-cols-7 bg-[url('/images/portrait.png')] bg-contain bg-bottom lg:bg-right bg-no-repeat md:h-[80vh]">
          <div className="md:col-span-6 flex flex-col gap-5 justify-center h-[40vh] lg:h-auto">
            <h1 className="text-white lg:text-8xl lg:!leading-[120px]">
              Empowering the Future of Education
            </h1>

            <p className="italic w-full md:w-2/3 lg:w-2/5 text-white">
              Help children celebrate differences. Put freedom into practice at
              school and beyond.
            </p>

            <div className="flex">
              <Button path="/contact" text="Explore My Resources" type="primary" />
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
            <Button path="/about" text="About Me" type="secondary" />
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

      <section className="container space-y-8">
        <div>
          <h2 className="w-full md:w-2/3 lg:w-1/3">
            Let’s talk teaching & librarianship.
          </h2>

          <p className="mt-3 w-full md:w-2/3">
            What are you looking for? Whether it’s a webinar, workshop or
            professional development sessions, I’ll customize content to
            rejuvenate and inspire your team.
          </p>
        </div>

        <div className="grid md:grid-cols-2">
          <div className="rounded-tl-2xl md:rounded-bl-2xl rounded-tr-2xl md:rounded-tr-none bg-primary p-8 flex flex-col justify-center gap-5">
            <h2 className="text-white">
              Don't miss a thing! Follow me on Bluesky
            </h2>
            <p className="text-white">
              Education and librarianship news, workshop offerings, affiliate
              news and the occasional rant - I’m active on Bluesky, so come join
              me.
            </p>
          </div>

          <div className="w-full bg-white p-6 rounded-bl-2xl md:rounded-bl-2xl-none md:rounded-tr-2xl rounded-br-2xl">
            {/* <a
              className="twitter-timeline"
              href={`https://twitter.com/juliaerin80`}
              data-height="600"
            >
              Tweets by juliaerin80
            </a> */}

            <BlueskyEmbed uri="at://did:plc:rmoo6cwg3hx7j66bqgveifmb/app.bsky.feed.post/3lcqpqaorrk23" cid="bafyreib75m6uwd4hlawem45ow5a7tc62l25hogxcxa2q6547palkfbrjam" />
            <BlueskyEmbed uri="at://did:plc:rmoo6cwg3hx7j66bqgveifmb/app.bsky.feed.post/3lb4issykwo2z" cid="bafyreidr3rqzuy52wmfkzktvkss5uvawodfx3pjsnwpggnx35un2fuiody" />

            {/* <div className="iframely-embed"><div class="iframely-responsive" style="padding-bottom: 33.3333%; padding-top: 120px;"><a href="https://bsky.app/profile/juliaerin80.bsky.social" data-iframely-url="//iframely.net/tyHOK4O"></a></div></div><script async src="//iframely.net/embed.js"></script> */}

            {/* <BlueskyProfile profileUrl="https://bsky.app/profile/juliaerin80.bsky.social" /> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
