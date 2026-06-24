import React from "react";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { CalendarDays, Clock, CircleHelp, MessageCircleQuestion, BadgeHelp } from "lucide-react";

function Hero() {
  return (
    <AnimatedSection>
      <section className="bg-white py-10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div>
              <p className="text-green-600 font-semibold uppercase tracking-wide">
                HubertGreenefy Inc.
              </p>

              <h1 className="text-5xl font-bold text-gray-900 leading-tight mt-3">
                Cleaning & Snow Services
                <br />
                Done Right
              </h1>

              <p className="mt-6 text-lg text-gray-600">
                Professional cleaning and snow removal solutions for homes,
                businesses, and properties. Count on our experienced team for
                reliable service, eco-friendly practices, and results you can
                trust year-round.
              </p>

              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="text-green-500">✓</span>
                  Professional & dependable service
                </li>

                <li className="flex items-center gap-3 text-gray-700">
                  <span className="text-green-500">✓</span>
                  Eco-friendly products & sustainable practices
                </li>

                <li className="flex items-center gap-3 text-gray-700">
                  <span className="text-green-500">✓</span>
                  Residential & commercial solutions
                </li>

                <li className="flex items-center gap-3 text-gray-700">
                  <span className="text-green-500">✓</span>
                  Seasonal snow removal and property maintenance
                </li>
              </ul>

              <div className="mt-10 flex gap-5 items-center">
                <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-medium transition">
                  <BadgeHelp className="inline-block w-5 h-5 mr-2" />
                  <a href="#fqas">
                  FQAs
                  </a>
                </button>

                <a
                  href="#contact"
                  className="text-green-600 font-medium hover:text-green-700"
                >
                  Get a Free Quotee
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div>
              <Image
                src="/hero.png"
                width={550}
                height={450}
                alt="HubertGreenefy cleaning and snow removal services"
                className="w-full max-w-[550px] h-auto object-contain"
              />
            </div>

          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

export default Hero;