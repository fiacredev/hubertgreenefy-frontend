"use client";

import React from "react";
import localFont from "next/font/local";
import { LogIn } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-green-50 border-t border-green-100 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* LEFT */}
        <p className="text-sm text-gray-700 text-center sm:text-left leading-relaxed">
          © 2026{" "}
          <span className="text-green-600 font-semibold">
            Hubert Greenefy Inc.
          </span>{" "}
          All rights reserved. <br className="sm:hidden" />
          <span className="text-gray-500">
            Breathe easy, we’ll take care of the rest.
          </span>
        </p>

        {/* RIGHT CTA */}
        <a
          href="/admin"
          className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white text-sm font-medium shadow-sm hover:bg-green-700 transition"
        >
          <LogIn className="w-4 h-4 group-hover:translate-x-0.5 transition" />
          <span>DASHBOARD</span>
        </a>
      </div>

      {/* bottom line */}
      <div className="mt-8 text-center text-xs text-gray-400">
        Built with care for professional cleaning services
      </div>
    </footer>
  );
}