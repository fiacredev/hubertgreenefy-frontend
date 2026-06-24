"use client";
import localFont from 'next/font/local';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const myFont = localFont({
    src: '../../../public/Jennifer Lynne Bold.ttf',
});

const Header: React.FC = () => {

  
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  

const menuItems = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT Us", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "FQAs", href: "#fqas" },
  { label: "CONTACT", href: "#contact" },
];

useEffect(() => {
  const handleScroll = () => {
    const scrollPos = window.scrollY + window.innerHeight / 2;

    menuItems.forEach((item, index) => {
      const el = document.querySelector(item.href);
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const bottom = top + rect.height;

      if (scrollPos >= top && scrollPos <= bottom) {
        setActiveIndex(index);
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, [menuItems]);

  return (
    <header className="w-full px-4 sm:px-6 lg:px-8 py-2 sticky top-0 z-[70]">
      <div className="flex justify-between items-center bg-white/70 backdrop-blur-md border border-green-100 rounded-md px-3 py-3 sm:px-4 sm:py-3 md:px-6 md:py-4 relative">
        
        {/* Logo */}
        <div className="flex items-center gap-2">

        <div className="flex items-center gap-2 ml-15">
          <div className="w-10 h-10 flex items-center justify-center overflow-visible">
            <Image
              src="/transparent.png"
              alt="Professional Cleaning & Snow Services | HubertGreenefy"
              width={100}
              height={100}
              className="w-10 h-10 object-contain scale-400 transform"
            />
          </div>
        </div>
          {/* <h1 className={`text-blue-600 ${myFont.className} text-lg sm:text-xl md:text-2xl`}>
            Pure Air Nettoyage
          </h1> */}
        </div>

        {/* Hamburger */}
        <button
          className="block lg:hidden p-2 text-blue-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                menuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Nav */}
        <nav
            className={`
              ${menuOpen ? "block" : "hidden"}
              lg:block
              absolute lg:relative
              top-full lg:top-auto
              right-2 lg:right-auto
              w-fit max-w-[80%] lg:w-auto
              bg-blue-900 lg:bg-transparent
              backdrop-blur-md
              text-red font-semibold
              mt-2 lg:mt-0
              rounded-sm
              p-4 lg:p-1
              z-50
        `}
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setActiveIndex(index)}
                  className={`transition-all duration-200 ${
                    activeIndex === index
                      ? "text-2xl font-semibold inline-block bg-gradient-to-r from-blue-500 via-green-500 to-green-600 bg-clip-text text-transparent"
                      : "text-sm sm:text-base text-gray-500 hover:text-green-600"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;