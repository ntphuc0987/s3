"use client";

import { Button1 } from "@/components/Buttons/Button1";
import TitleComponent from "@/components/Title/TitleComponent";
import { ArrowRight, ChevronDown, ChevronRight } from "lucide-react";
import React, { useState } from "react";

const services = [
  {
    head: "Application Development",
    sub: [
      "Web Application",
      "Desktop Application",
      "Full Stack Development",
      "Driver / Low Level Development",
    ],
  },
  {
    head: "Quality Assurance",
    sub: [
      "Web Application",
      "Desktop Application",
      "Full Stack Development",
      "Driver / Low Level Development",
    ],
  },
  {
    head: "DevOps",
    sub: [
      "Web Application",
      "Desktop Application",
      "Full Stack Development",
      "Driver / Low Level Development",
    ],
  },
];

const OurServices = () => {
  const [isOpen, setIsOpen] = useState<number | null>(0);

  return (
    <div className="relative w-[100%] m-auto">
      <TitleComponent
        title="Our Services"
        subTitle="Explore More"
        href="/our-services"
      />

      <div>
        <div className="grid grid-cols-2 place-content-center bg-[url('/ourservices.jpg')] bg-no-repeat bg-auto">
          <div className=""></div>
          <div className="bg-white rounded-lg mt-20 mb-20 p-10">
            {services.map((service, index) => (
              <div className="mb-4" key={index}>
                <h3
                  className="flex items-center flex-row font-bold text-[#2B2E31] uppercase text-[32px] gap-5 cursor-pointer hover:text-[#CE2D34]"
                  onClick={() => setIsOpen(isOpen === index ? null : index)}
                >
                  <ChevronRight width={32} height={32} />
                  {service.head}
                </h3>
                {isOpen === index && (
                  <div className="py-7 px-12">
                    <ul className="text-[#2B2E31] text-base font-semibold flex flex-col gap-5">
                      {service.sub.map((sub, index) => (
                        <li className="flex items-center gap-3" key={index}>
                          <ArrowRight width={14} height={14} color="#2B2E31" />
                          {sub}
                        </li>
                      ))}
                    </ul>

                    <Button1 className="px-10 mt-10">Learn More</Button1>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
