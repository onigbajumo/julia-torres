"use client";
import BlueskyEmbed from "@/components/Bluesky";
import BlueskyProfile from "@/components/BlueskyProfile";
import Button from "@/components/Button";
import Hero from "@/components/hero";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Accordion from "./accordion";

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
        <div className="bg-secondary rounded-2xl py-6 md:py-10 px-4 md:px-14 grid md:grid-cols-7 md:h-[80vh] relative md:items-center">
          <div className="md:col-span-6 flex flex-col gap-5 justify-center h-[40vh] lg:h-auto z-20">
            <h1 className="text-white lg:text-8xl lg:!leading-[120px]">
            Influencing the Future of Education
            </h1>

            <p className="italic w-full md:w-2/3 lg:w-2/5 text-white">
              Help children celebrate differences. Put freedom into practice at
              school and beyond.
            </p>

            <div className="flex">
              <Button path="/contact" text="Explore My Resources" type="primary" />
            </div>
          </div>

          <div className="md:absolute right-0 md:w-1/2 h-full z-10">
            <Image src="/images/portrait.png" width={1000} height={1000} alt="portrait" className="rounded-tl-2xl rounded-bl-2xl md:rounded-tl-none md:rounded-bl-none rounded-tr-2xl rounded-br-2xl w-full h-full object-cover" />

          </div>

        </div>
      </section>

      <section className="container grid md:grid-cols-2">
        <div>
          <Image
            src="/images/portrait-2.png"
            width={1000}
            height={1000}
            alt="portrait"
            className="object-cover w-full h-full rounded-tl-2xl md:rounded-bl-2xl rounded-tr-2xl md:rounded-tr-none"
          />
        </div>

        <div className="bg-[#FDEBD3] md:rounded-tr-2xl rounded-br-2xl md:rounded-bl-none rounded-bl-2xl p-7 flex flex-col gap-9 justify-center">
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

      <Accordion />

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
              Don&lsquo;t miss a thing! Follow me on Bluesky
            </h2>
            <p className="text-white">
              Education and librarianship news, workshop offerings, affiliate
              news and the occasional rant - I’m active on Bluesky, so come join
              me.
            </p>
          </div>

          <div className="w-full bg-white p-6 rounded-bl-2xl md:rounded-bl-2xl-none md:rounded-tr-2xl rounded-br-2xl">
            <BlueskyEmbed uri="at://did:plc:rmoo6cwg3hx7j66bqgveifmb/app.bsky.feed.post/3lb4issykwo2z" cid="bafyreidr3rqzuy52wmfkzktvkss5uvawodfx3pjsnwpggnx35un2fuiody" />
          </div>



          {/* <div className="grid md:grid-cols-3">
          <div className="rounded-tl-2xl md:rounded-bl-2xl rounded-tr-2xl md:rounded-tr-none bg-primary p-8 flex flex-col justify-center gap-5">
            <h2 className="text-white">
              Don't miss a thing! Follow me
            </h2>
            <p className="text-white">
              Education and librarianship news, workshop offerings, affiliate
              news and the occasional rant - I’m active on Bluesky, so come join
              me.
            </p>
          </div>

          <div className="w-full bg-white p-6">
            <BlueskyProfile profileUrl="https://bsky.app/profile/juliaerin80.bsky.social" />

            
          </div>

          <div className="w-full bg-white p-6 rounded-bl-2xl md:rounded-bl-2xl-none md:rounded-tr-2xl rounded-br-2xl">
            <InstagramProfile profileUrl="https://www.instagram.com/juliaerin80/" />
          </div>
        </div> */}
        </div>
      </section>
    </div>
  );
};

export default Home;
