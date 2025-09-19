"use client";

import { ArrowUpRight } from "lucide-react";

export const ContactSection = () => {
  return (
    <div id="contact" className="py-8 md:py-12 relative z-50">
      <div className="container mx-auto px-4 relative z-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md text-white py-6 px-8 rounded-3xl text-center md:text-left border border-white/10">
            <div
              className="absolute inset-0 opacity-10 -z-10 pointer-events-none rounded-3xl"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
              <div className="flex-1">
                <h2 className="font-serif text-xl md:text-2xl text-white">
                  Let&apos;s create something amazing together
                </h2>
                <p className="text-sm mt-2 text-gray-300">
                  I&apos;m always open to discussing product design work or
                  partnerships. Let&apos;s create something amazing together.
                </p>
                <p className="text-sm mt-1 text-gray-300">
                  I&apos;d like to connect with you.
                </p>
              </div>
              <div className="relative z-50">
                  <a
                  href="mailto:abhishek23main@gmail.com?subject=Contact%20Request&body=Hello%2C%20I%20would%20like%20to%20connect%20with%20you."
                  role="button"
                  className="relative z-50 text-white bg-white/10 hover:bg-white/20 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-white/20 hover:border-white/30 transition-all duration-300"
                  >
                  <span className="font-semibold">Contact Me</span>
                  <ArrowUpRight className="size-4" />
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
