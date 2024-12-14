"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks, socials } from "@/libs/data";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  if ((pathname === "/") || pathname.startsWith("/admin")) {
    return null;
  }

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="container py-4 lg:py-10">
      <div className="flex justify-between items-center border-white border-2 rounded-full px-3 md:px-7 py-2 bg-[#E3E3E3]">
        <div>
          <Link href="/home">
            <Image
              src="/images/logo.png"
              width={1000}
              height={1000}
              alt="logo"
              className="w-14"
            />
          </Link>
        </div>

        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((nav, index) => (
            <Link
              key={index}
              href={nav.link}
              className={`font-semibold font-[var(--font-marri-weather)] ${
                pathname === nav.link
                  ? "text-secondary"
                  : "text-black hover:text-secondary"
              }`}
            >
              {nav.name}
            </Link>
          ))}
          <div className="flex items-center space-x-4">
            {socials.map((social, index) => (
              <Link
                key={index}
                href={social.link}
                target="_blank"
                className="text-xl hover:text-secondary"
              >
                {social.icon}
              </Link>
            ))}
          </div>
          <Link
            href="#contact"
            className="text-secondary hover:bg-secondary hover:text-white px-4 py-2 rounded-full bg-[#FEFEFE] font-semibold font-[var(--font-marri-weather)]"
          >
            Contact Me
          </Link>
        </div>

        <button
          className="lg:hidden text-2xl text-gray-700"
          onClick={toggleDrawer}
          aria-label="Toggle navigation menu"
        >
          <AiOutlineMenu />
        </button>
      </div>

      {/* Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex">
          <div className="w-3/4 max-w-xs bg-white h-full p-5">
            <button
              onClick={toggleDrawer}
              className="text-2xl text-gray-700 hover:text-gray-900 mb-5"
              aria-label="Close navigation menu"
            >
              <AiOutlineClose />
            </button>
            <div className="mt-10 space-y-6">
              {navLinks.map((nav, index) => (
                <Link
                  key={index}
                  href={nav.link}
                  className={`block font-semibold font-[var(--font-marri-weather)] ${
                    pathname === nav.link ? "text-secondary" : "text-black"
                  }`}
                  onClick={toggleDrawer}
                >
                  {nav.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4">
                {socials.map((social, index) => (
                  <Link
                    key={index}
                    href={social.link}
                    target="_blank"
                    className="text-gray-700 text-xl hover:text-gray-900"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
              <div className="flex">
                <Link
                  href="#contact"
                  className="w-full text-center text-white px-4 py-2 rounded-full bg-secondary font-semibold font-[var(--font-marri-weather)]"
                  onClick={toggleDrawer}
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
          {/* Clicking outside the drawer closes it */}
          <div
            className="flex-1"
            onClick={toggleDrawer}
            aria-hidden="true"
          ></div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
