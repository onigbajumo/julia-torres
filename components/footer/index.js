import Image from "next/image";
import Link from "next/link";
import React from "react";
import Form from "./form";
import { socials } from "@/libs/data";

const Footer = () => {
  return (
    <footer>
      <div id="contact">
        <Form />
      </div>

      <div className="bg-primary">
        <div className=" py-7 container flex flex-col gap-14">
          <div className="flex md:items-center gap-5 flex-col md:flex-row justify-between">
            <div className="flex-1 flex flex-col md:flex-row gap-4 md:gap-8 md:items-center">
              <Image
                src="/images/logo.png"
                width={500}
                height={500}
                alt="logo"
                className="w-16"
              />

              <p className="text-white">Empowering the Future of Education</p>
            </div>

            <div className="flex-1 flex md:justify-end">
              <div className="flex items-center  gap-4">
                {socials.map((social, index) => (
                  <Link target="blank" href={social.link} key={index}>
                    <span className="text-white text-2xl">{social.icon}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div></div>
          </div>

          <p className="text-white text-center">
            2025 Julia E. Torres All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
