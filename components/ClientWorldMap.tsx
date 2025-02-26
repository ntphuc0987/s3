"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

const ClientWorldMap = () => {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  const handleImageClick = () => {
    setIsPopoverVisible(!isPopoverVisible);
  };

  return (
    <div className="w-4/5 m-auto">
      <div className="flex justify-center flex-col items-center mb-[84px]">
        <p className="text-[#4D5562]">
          We work with many clients all over the world
        </p>
        <h2 className="font-bold text-[32px] text-[#2B2E31] mt-4">
          Our Clients
        </h2>
      </div>
      <div className="relative">
        <img src="/map.svg" alt="map" className="object-cover w-full h-auto" />

        {/*marker */}
        <div className="z-10 absolute left-[20%] top-[50%]">
          <Popover>
            <PopoverTrigger data-state={"open"} aria-expanded={"true"}>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            </PopoverTrigger>

            <PopoverContent
              side={"top"}
              sideOffset={20}
              className="popover-content w-40 grid grid-cols-2 grid-rows-2 justify-items-center align-items-center"
            >
              <Image
                src="/clients/singtel.jpg"
                alt="luxhub"
                width={34}
                height={23}
                className="object-none col-span-2"
              />
              <Image
                src="/clients/hd.jpg"
                alt="luxhub"
                width={59}
                height={43}
                className="object-none "
              />
              <Image
                src="/clients/razer.jpg"
                alt="luxhub"
                width={94}
                height={44}
                className="object-none "
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="z-10 absolute left-[15%] top-[40%]">
          <Popover>
            <PopoverTrigger>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            </PopoverTrigger>
            <PopoverContent
              side={"top"}
              sideOffset={20}
              className="popover-content  w-40 grid grid-cols-2 grid-rows-2 justify-items-center align-items-center"
            >
              <Image
                src="/clients/singtel.jpg"
                alt="luxhub"
                width={34}
                height={23}
                className="object-none col-span-2"
              />
              <Image
                src="/clients/hd.jpg"
                alt="luxhub"
                width={59}
                height={43}
                className="object-none"
              />
              <Image
                src="/clients/razer.jpg"
                alt="luxhub"
                width={94}
                height={44}
                className="object-none"
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="z-10 absolute left-[50%] top-[40%]">
          <Popover>
            <PopoverTrigger>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            </PopoverTrigger>
            <PopoverContent
              side={"top"}
              sideOffset={20}
              className="popover-content w-40 grid grid-cols-2 grid-rows-2 justify-items-center align-items-center"
            >
              <Image
                src="/clients/singtel.jpg"
                alt="luxhub"
                width={34}
                height={23}
                className="object-none col-span-2"
              />
              <Image
                src="/clients/hd.jpg"
                alt="luxhub"
                width={59}
                height={43}
                className="object-none"
              />
              <Image
                src="/clients/razer.jpg"
                alt="luxhub"
                width={94}
                height={44}
                className="object-none"
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="z-10 absolute left-[51%] top-[25%]">
          <Popover>
            <PopoverTrigger>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            </PopoverTrigger>
            <PopoverContent
              side={"top"}
              sideOffset={20}
              className="popover-content  w-40 grid grid-cols-2 grid-rows-2 justify-items-center align-items-center"
            >
              <Image
                src="/clients/singtel.jpg"
                alt="luxhub"
                width={34}
                height={23}
                className="object-none col-span-2"
              />
              <Image
                src="/clients/hd.jpg"
                alt="luxhub"
                width={59}
                height={43}
                className="object-none"
              />
              <Image
                src="/clients/razer.jpg"
                alt="luxhub"
                width={94}
                height={44}
                className="object-none"
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="z-10 absolute left-[56%] top-[20%]">
          <Popover>
            <PopoverTrigger>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            </PopoverTrigger>
            <PopoverContent
              side={"top"}
              sideOffset={20}
              className="popover-content  w-40 grid grid-cols-2 grid-rows-2 justify-items-center align-items-center"
            >
              <Image
                src="/clients/singtel.jpg"
                alt="luxhub"
                width={34}
                height={23}
                className="object-none col-span-2"
              />
              <Image
                src="/clients/hd.jpg"
                alt="luxhub"
                width={59}
                height={43}
                className="object-none"
              />
              <Image
                src="/clients/razer.jpg"
                alt="luxhub"
                width={94}
                height={44}
                className="object-none"
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="z-10 absolute left-[68%] top-[50%]">
          <Popover>
            <PopoverTrigger>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            </PopoverTrigger>
            <PopoverContent
              side={"top"}
              sideOffset={20}
              className="popover-content  w-40 grid grid-cols-2 grid-rows-2 justify-items-center align-items-center"
            >
              <Image
                src="/clients/singtel.jpg"
                alt="luxhub"
                width={34}
                height={23}
                className="object-none col-span-2"
              />
              <Image
                src="/clients/hd.jpg"
                alt="luxhub"
                width={59}
                height={43}
                className="object-none"
              />
              <Image
                src="/clients/razer.jpg"
                alt="luxhub"
                width={94}
                height={44}
                className="object-none"
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="z-10 absolute left-[83%] top-[43%]">
          <Popover>
            <PopoverTrigger>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            </PopoverTrigger>
            <PopoverContent
              side={"top"}
              sideOffset={20}
              className="popover-content  w-40 grid grid-cols-2 grid-rows-2 justify-items-center align-items-center"
            >
              <Image
                src="/clients/singtel.jpg"
                alt="luxhub"
                width={34}
                height={23}
                className="object-none col-span-2"
              />
              <Image
                src="/clients/hd.jpg"
                alt="luxhub"
                width={59}
                height={43}
                className="object-none"
              />
              <Image
                src="/clients/razer.jpg"
                alt="luxhub"
                width={94}
                height={44}
                className="object-none"
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="z-10 absolute left-[88%] top-[85%]">
          <Popover>
            <PopoverTrigger>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            </PopoverTrigger>
            <PopoverContent
              side={"top"}
              sideOffset={20}
              className="popover-content  w-40 grid grid-cols-2 grid-rows-2 justify-items-center align-items-center"
            >
              <Image
                src="/clients/singtel.jpg"
                alt="luxhub"
                width={34}
                height={23}
                className="object-none col-span-2"
              />
              <Image
                src="/clients/hd.jpg"
                alt="luxhub"
                width={59}
                height={43}
                className="object-none"
              />
              <Image
                src="/clients/razer.jpg"
                alt="luxhub"
                width={94}
                height={44}
                className="object-none"
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="z-10 absolute left-[95%] top-[85%]">
          <Popover>
            <PopoverTrigger>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            </PopoverTrigger>
            <PopoverContent
              side={"top"}
              sideOffset={20}
              className="popover-content w-40 grid grid-cols-2 grid-rows-2 justify-items-center align-items-center "
            >
              <Image
                src="/clients/singtel.jpg"
                alt="luxhub"
                width={34}
                height={23}
                className="object-none col-span-2"
              />
              <Image
                src="/clients/hd.jpg"
                alt="luxhub"
                width={59}
                height={43}
                className="object-none"
              />
              <Image
                src="/clients/razer.jpg"
                alt="luxhub"
                width={94}
                height={44}
                className="object-none"
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="z-10 absolute left-[78%] top-[50%]">
          <Popover>
            <PopoverTrigger>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            </PopoverTrigger>
            <PopoverContent
              side={"top"}
              sideOffset={20}
              className="popover-content w-40 grid grid-cols-2 grid-rows-2 justify-items-center align-items-center "
            >
              <Image
                src="/clients/singtel.jpg"
                alt="luxhub"
                width={34}
                height={23}
                className="object-none col-span-2"
              />
              <Image
                src="/clients/hd.jpg"
                alt="luxhub"
                width={59}
                height={43}
                className="object-none"
              />
              <Image
                src="/clients/razer.jpg"
                alt="luxhub"
                width={94}
                height={44}
                className="object-none"
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* line */}
        <div className="absolute right-[22%] top-[51.3%] max-sm:top-[55%] w-[57%] line overflow-hidden">
          <span className="block w-[55rem] max-sm:w-[10rem] h-[1px] bg-red-600 relative left-[100%]  animate-[runline_2s_ease-in-out_infinite] shadow-2xl"></span>
        </div>

        <div className="absolute right-[20%] top-[39.2%] max-sm:top-[42%] w-[30%] line overflow-hidden rotate-[24deg]">
          <span className="block w-[20rem] max-sm:w-[5rem] h-[1px] bg-red-600 relative left-[100%]  animate-[runline_2s_ease-in-out_infinite] shadow-2xl"></span>
        </div>

        <div className="absolute right-[20%] top-[36%] max-sm:top-[39%] w-[26%] line overflow-hidden rotate-[33deg]">
          <span className="block w-[20rem] max-sm:w-[5rem] h-[1px] bg-red-600 relative left-[100%] animate-[runline_2s_ease-in-out_infinite] shadow-2xl"></span>
        </div>

        <div className="absolute right-[21%] top-[46.5%] max-sm:top-[50%] w-[29%] line overflow-hidden rotate-[9.5deg]">
          <span className="block w-[20rem] max-sm:w-[5rem] h-[1px] bg-red-600 relative left-[100%] animate-[runline_2s_ease-in-out_infinite] shadow-2xl"></span>
        </div>

        <div className="absolute right-[22%] top-[51.5%] max-sm:top-[56%] w-[10%] line overflow-hidden">
          <span className="block w-[5rem] max-sm:w-[1rem] h-[1px] bg-red-600 relative left-[10%]  animate-[runline_2s_ease-in-out_infinite] shadow-2xl"></span>
        </div>
        <div className="absolute left-[78%] top-[48%] max-sm:top-[54%] w-[6%] line overflow-hidden rotate-[144deg]">
          <span className="block w-[5rem] max-sm:w-[1rem] h-[1px] bg-red-600 relative left-[100%]  animate-[runline_2s_ease-in-out_infinite] shadow-2xl"></span>
        </div>
        <div className="absolute left-[74.2%] top-[70%] w-[19%] line overflow-hidden rotate-[239deg]">
          <span className="block w-[20rem] max-sm:w-[2rem] h-[1px] bg-red-600 relative left-[100%]  animate-[runline_2s_ease-in-out_infinite] shadow-2xl"></span>
        </div>
        <div className="absolute left-[75%] top-[69.4%] w-[24%] line overflow-hidden rotate-[224deg]">
          <span className="block w-[30rem] max-sm:w-[2rem] h-[1px] bg-red-600 relative left-[100%]  animate-[runline_2s_ease-in-out_infinite] shadow-2xl"></span>
        </div>
        <div className="absolute right-[calc(22%)] top-[47%] max-sm:top-[50%] w-[62%] line overflow-hidden rotate-[4deg]">
          <span className="block w-[55rem] max-sm:w-[10rem] h-[1px] bg-red-600 relative left-[100%]  animate-[runline_2s_ease-in-out_infinite] shadow-2xl"></span>
        </div>
      </div>

      {/* Client lists */}
      <div >
        <Carousel
          // plugins={[
          //   Autoplay({
          //     delay: 2000,
          //   }),
          // ]}
        >
          <CarouselContent className="flex justify-between">
            <CarouselItem className="lg:basis-1/5 md:basis-1/3 basis-1/2  relative w-[272px] h-[101px] text">
              <Image
                src="/clients/adclipse.jpg"
                alt="luxhub"
                width={272}
                height={101}
              />
            </CarouselItem>
            <CarouselItem className="lg:basis-1/5 md:basis-1/3 basis-1/2 relative w-[272px] h-[101px]">
              <Image
                src="/clients/dalkia.jpg"
                alt="luxhub"
                width={272}
                height={101}
              />
            </CarouselItem>
            <CarouselItem className="lg:basis-1/5 md:basis-1/3 basis-1/2 relative w-[272px] h-[101px]">
              <Image
                src="/clients/luxhub.jpg"
                alt="luxhub"
                width={272}
                height={101}
              />
            </CarouselItem>
            <CarouselItem className="lg:basis-1/5 md:basis-1/3 basis-1/2 relative w-[272px] h-[101px]">
              <Image
                src="/clients/oracle.jpg"
                alt="luxhub"
                width={272}
                height={101}
              />
            </CarouselItem>
            <CarouselItem className="lg:basis-1/5 md:basis-1/3 basis-1/2 relative w-[272px] h-[101px]">
              <Image
                src="/clients/pjc.jpg"
                alt="luxhub"
                width={272}
                height={101}
              />
            </CarouselItem>
            <CarouselItem className="lg:basis-1/5 md:basis-1/3  basis-1/2 relative w-[272px] h-[101px]">
              <Image
                src="/clients/adclipse.jpg"
                alt="luxhub"
                width={272}
                height={101}
              />
            </CarouselItem>
            <CarouselItem className="lg:basis-1/5 md:basis-1/3 basis-1/2 relative w-[272px] h-[101px]">
              <Image
                src="/clients/dalkia.jpg"
                alt="luxhub"
                width={272}
                height={101}
              />
            </CarouselItem>
            <CarouselItem className="lg:basis-1/5 md:basis-1/3 basis-1/2 relative w-[272px] h-[101px]">
              <Image
                src="/clients/oracle.jpg"
                alt="luxhub"
                width={272}
                height={101}
              />
            </CarouselItem>
            <CarouselItem className="lg:basis-1/5 md:basis-1/3 basis-1/2 relative w-[272px] h-[101px]">
              <Image
                src="/clients/pjc.jpg"
                alt="luxhub"
                width={272}
                height={101}
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

    </div>
  );
};

export default ClientWorldMap;
