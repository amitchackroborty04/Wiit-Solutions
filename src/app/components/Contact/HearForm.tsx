"use client";

import type React from "react";
import Image from "next/image";
import { ContactSection } from "@/types/home";
import ContactForm from "../contact-form/contactForm";

export default function HearForm({ contactData }: { contactData: ContactSection }) {

  return (
    <section className="text-white bg-black !pt-[120px]">
      {/* Mobile Image - Responsive */}
      <div
        className="relative mb-16 md:mb-20 "
      >
        <div className="relative w-full h-[300px] md:h-[480px] lg:h-[500px] ">
          <Image
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/Contacts/${contactData?.breadcrumb}`}
            alt="Contact page banner"
            fill
            className=" object-cover w-full h-full"
            quality={99}
            priority
            placeholder="blur"
            blurDataURL="/path/to/low-res-placeholder.jpg"
          />
        <div className="absolute bottom-0 md:bottom-0 left-[10%]  ">
          <h1 className="text-base sm:text-3xl md:text-4xl font-bold text-white">
            {contactData?.main_title}
          </h1>
          <div className="w-[180px] h-[1.5px] bg-yellow-400 mt-2"></div>
        </div>
      </div>
        </div>
        {/* Bottom-left heading */}




      <div className="container">
        <div className="flex flex-col lg:flex-row lg:gap-12 xl:gap-36">
          {/* Left Column - Form */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <p className="text-sm md:text-base mb-8">
              {contactData?.sub_title}
            </p>

            <ContactForm />
          </div>

          {/* Right Column - Contact Info */}
          <div className="w-full lg:w-1/2">
            <div className="mb-12">
              <div className="relative">
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  {contactData?.title_our_address_section}
                </h3>
                <div className="w-[180px] h-[1.5px] bg-yellow-400"></div>
              </div>
              <div className="flex items-center mt-8">
                <div className="mr-3 mt-1 flex-shrink-0">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/Contacts/${contactData?.
                      icon_our_address_section}`}
                    alt="image"
                    width={40}
                    height={40}
                    className="md:w-full md:h-full object-cover"
                  />
                </div>
                <div>
                  {contactData?.address_our_address_section}
                </div>
              </div>
            </div>

            <div>
              <div className="relative">
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  {contactData?.title_our_contact_section}
                </h3>
                <div className="w-[180px] h-[1.5px] bg-yellow-400"></div>
              </div>
              <div className="flex items-center mt-8">
                <div className="mr-3 flex-shrink-0">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/Contacts/${contactData?.
                      mail_icon_our_contact_section}`}
                    alt="image"
                    width={40}
                    height={40}
                    className="md:w-full md:h-full object-cover"
                  />
                </div>
                <a
                  href="mailto:CONTACT@WIITSOLUTIONS.COM"
                  className="hover:text-blue-300 transition-colors duration-200 text-sm sm:text-base break-all"
                >
                  {contactData?.mail_address_our_contact_section}
                </a>
              </div>
              <div className="flex items-center mt-5">
                <div className="mr-3 flex-shrink-0">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/Contacts/${contactData?.
                      icon_our_contact_section}`}
                    alt="image"
                    width={40}
                    height={40}
                    className="md:w-full md:h-full object-cover"
                  />
                </div>
                <a
                  href="tel:469-642-3303"
                  className="hover:text-blue-300 transition-colors duration-200 text-sm sm:text-base"
                >
                  {contactData?.phone_number_our_contact_section}
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex items-center justify-end py-4">
          <p>{contactData?.copyright}</p>
        </div>
      </div>
    </section>
  );
}