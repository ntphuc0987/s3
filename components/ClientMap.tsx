"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface Pointer {
  x: number;
  y: number;
  leftPercentage: number;
  topPercentage: number;
}

const locations = [
  { lat: 34.052235, lon: -118.243683 },
  { lat: -37.867579, lon: 145.048621 },
  { lat: 1.3521, lon: 103.8198 },
  { lat: 35.652832, lon: 139.839478 },
  { lat: 25.396, lon: 68.3578 },
  { lat: 55.6761, lon: 12.5683 },
  { lat: 37.9838, lon: 23.7275 },
  { lat: 25.8256, lon: -111.8867 },
];

const ClientMap = () => {
  const pointersContainerRef = useRef<HTMLDivElement>(null);
  const mapImageRef = useRef<HTMLDivElement>(null);
  const [pointers, setPointers] = useState<Pointer[]>([]);

  useEffect(() => {
    if (!mapImageRef.current || !pointersContainerRef.current) {
      console.error("Map image or pointers container not found!");
      return;
    }

    const mapWidth = mapImageRef.current.clientWidth;
    const mapHeight = mapImageRef.current.clientHeight;

    locations.forEach(({ lat, lon }) => {
      const { x, y } = latLonToOffsets(lat, lon, mapWidth, mapHeight);
      renderPointer(x, y);
    });
  }, []);

  function latLonToOffsets(
    latitude: number,
    longitude: number,
    mapWidth: number,
    mapHeight: number
  ) {
    const radius = mapWidth / (2 * Math.PI);
    const FE = 180;

    const lonRad = degreesToRadians(longitude + FE);
    const x = lonRad * radius;

    const latRad = degreesToRadians(latitude);
    const verticalOffsetFromEquator =
      radius * Math.log(Math.tan(Math.PI / 4 + latRad / 2));
    const y = mapHeight / 2 - verticalOffsetFromEquator;

    return { x, y };
  }

  function degreesToRadians(degrees: number) {
    return (degrees * Math.PI) / 180;
  }

  function renderPointer(x: number, y: number) {
    if (pointersContainerRef.current) {
      const containerWidth = pointersContainerRef.current.offsetWidth;
      const containerHeight = pointersContainerRef.current.offsetHeight;
      const leftPercentage = (x / containerWidth) * 100 - 3;
      const topPercentage = (y / containerHeight) * 100 + 11;

      /*setPointers((prevPointers) => [
        ...prevPointers,
        { x, y, leftPercentage, topPercentage },
      ]);*/

      setPointers((prevPointers) => {
        const pointerExists = prevPointers.some(
          (pointer) => pointer.x === x && pointer.y === y
        );
        if (!pointerExists) {
          return [...prevPointers, { x, y, leftPercentage, topPercentage }];
        }

        return prevPointers;
      });
    }
  }

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

      {/* Map */}
      <div className="w-full flex justify-center items-center">
        <div
          id="pointers-container"
          ref={pointersContainerRef}
          className="relative map"
        >
          {/* Map Image */}
          <div ref={mapImageRef}>
            <Image
              src="/clients/map.png"
              alt="map"
              width={1025}
              height={488}
              className="mapImage"
            />
          </div>

          {/* Pointers */}
          {pointers.map((pointer, index) => (
            <span
              key={index}
              className="pointer absolute"
              style={{
                left: `${pointer.leftPercentage}%`,
                top: `${pointer.topPercentage}%`,
              }}
            >
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
            </span>
          ))}
        </div>
      </div>

      {/* Client lists */}
      <div className="my-[32px]">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            <CarouselItem className="lg:basis-1/5 md:basis-1/3 basis-1/2  relative w-[321px] h-[171px] text">
              <Image
                src="/clients/adclipse.jpg"
                alt="luxhub"
                width={321}
                height={171}
              />
            </CarouselItem>
            <CarouselItem className="lg:basis-1/5 md:basis-1/3 basis-1/2 relative w-[321px] h-[171px]">
              <Image
                src="/clients/dalkia.jpg"
                alt="luxhub"
                width={321}
                height={171}
              />
            </CarouselItem>
            <CarouselItem className="lg:basis-1/5 md:basis-1/3 basis-1/2 relative w-[321px] h-[171px]">
              <Image
                src="/clients/luxhub.jpg"
                alt="luxhub"
                width={321}
                height={171}
              />
            </CarouselItem>
            <CarouselItem className="lg:basis-1/5 md:basis-1/3 basis-1/2 relative w-[321px] h-[171px]">
              <Image
                src="/clients/oracle.jpg"
                alt="luxhub"
                width={321}
                height={171}
              />
            </CarouselItem>
            <CarouselItem className="lg:basis-1/5 md:basis-1/3 basis-1/2 relative w-[321px] h-[171px]">
              <Image
                src="/clients/pjc.jpg"
                alt="luxhub"
                width={321}
                height={171}
              />
            </CarouselItem>
            <CarouselItem className="lg:basis-1/5 md:basis-1/3  basis-1/2 relative w-[321px] h-[171px]">
              <Image
                src="/clients/adclipse.jpg"
                alt="luxhub"
                width={321}
                height={171}
              />
            </CarouselItem>
            <CarouselItem className="lg:basis-1/5 md:basis-1/3 basis-1/2 relative w-[321px] h-[171px]">
              <Image
                src="/clients/dalkia.jpg"
                alt="luxhub"
                width={321}
                height={171}
              />
            </CarouselItem>
            <CarouselItem className="lg:basis-1/5 md:basis-1/3 basis-1/2 relative w-[321px] h-[171px]">
              <Image
                src="/clients/oracle.jpg"
                alt="luxhub"
                width={321}
                height={171}
              />
            </CarouselItem>
            <CarouselItem className="lg:basis-1/5 md:basis-1/3 basis-1/2 relative w-[321px] h-[171px]">
              <Image
                src="/clients/pjc.jpg"
                alt="luxhub"
                width={321}
                height={171}
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default ClientMap;
