"use client";

import TitleComponent from "@/components/Title/TitleComponent";
import { WireLess } from "@/components/vector/LineDashed";
import { MoveRight } from "lucide-react";
import Image from "next/image";

import React, { useState } from "react";

const dataLeft = [
  {
    icon: <WireLess />,
    title: "Wire & Wireless",
    content: [
      {
        img: "/datasecurity.jpg",
        text: [
          { subIcon: <MoveRight />, text: "Business challenges" },
          { subIcon: <MoveRight />, text: "Types of data security" },
          {
            subIcon: <MoveRight />,
            text: "Data security capabilities and tools",
          },
          { subIcon: <MoveRight />, text: "Data security strategies" },
          { subIcon: <MoveRight />, text: "Data security trends" },
          { subIcon: <MoveRight />, text: "Related solutions" },
        ],
      },
    ],
  },
  {
    icon: <WireLess />,
    title: "Data Security",
    content: [
      {
        img: "/datasecurity.jpg",
        text: [
          {
            subIcon: <MoveRight />,
            text: "IT assets security and management,",
          },
          { subIcon: <MoveRight />, text: "Full disk encryption," },
          { subIcon: <MoveRight />, text: "Removable Media encryption," },
          { subIcon: <MoveRight />, text: "Mobile encryption," },
          { subIcon: <MoveRight />, text: "Data backup," },
          { subIcon: <MoveRight />, text: "Access Control," },
        ],
      },
    ],
  },
  {
    icon: <WireLess />,
    title: "Advertise & Entertainment",
    content: [
      {
        img: "/datasecurity.jpg",
        text: [
          { subIcon: <MoveRight />, text: "Business challenges" },
          { subIcon: <MoveRight />, text: "Types of data security" },
          {
            subIcon: <MoveRight />,
            text: "Data security capabilities and tools",
          },
          { subIcon: <MoveRight />, text: "Data security strategies" },
          { subIcon: <MoveRight />, text: "Data security trends" },
          { subIcon: <MoveRight />, text: "Related solutions" },
        ],
      },
    ],
  },
  {
    icon: <WireLess />,
    title: "Healthcare",
    content: [
      {
        img: "/datasecurity.jpg",
        text: [
          {
            subIcon: <MoveRight />,
            text: "IT assets security and management,",
          },
          { subIcon: <MoveRight />, text: "Full disk encryption," },
          { subIcon: <MoveRight />, text: "Removable Media encryption," },
          { subIcon: <MoveRight />, text: "Mobile encryption," },
          { subIcon: <MoveRight />, text: "Data backup," },
          { subIcon: <MoveRight />, text: "Access Control," },
        ],
      },
    ],
  },
];

const dataRight = [
  {
    icon: <WireLess />,
    title: "BlockChain",
    content: [
      {
        img: "/datasecurity.jpg",
        text: [
          {
            subIcon: <MoveRight />,
            text: "IT assets security and management,",
          },
          { subIcon: <MoveRight />, text: "Full disk encryption," },
          { subIcon: <MoveRight />, text: "Removable Media encryption," },
          { subIcon: <MoveRight />, text: "Mobile encryption," },
          { subIcon: <MoveRight />, text: "Data backup," },
          { subIcon: <MoveRight />, text: "Access Control," },
        ],
      },
    ],
  },
  {
    icon: <WireLess />,
    title: "Fintech",
    content: [
      {
        img: "/datasecurity.jpg",
        text: [
          { subIcon: <MoveRight />, text: "Business challenges" },
          { subIcon: <MoveRight />, text: "Types of data security" },
          {
            subIcon: <MoveRight />,
            text: "Data security capabilities and tools",
          },
          { subIcon: <MoveRight />, text: "Data security strategies" },
          { subIcon: <MoveRight />, text: "Data security trends" },
          { subIcon: <MoveRight />, text: "Related solutions" },
        ],
      },
    ],
  },
  {
    icon: <WireLess />,
    title: "E-Commerce and Retail",
    content: [
      {
        img: "/datasecurity.jpg",
        text: [
          {
            subIcon: <MoveRight />,
            text: "IT assets security and management,",
          },
          { subIcon: <MoveRight />, text: "Full disk encryption," },
          { subIcon: <MoveRight />, text: "Removable Media encryption," },
          { subIcon: <MoveRight />, text: "Mobile encryption," },
          { subIcon: <MoveRight />, text: "Data backup," },
          { subIcon: <MoveRight />, text: "Access Control," },
        ],
      },
    ],
  },
  {
    icon: <WireLess />,
    title: "Education",
    content: [
      {
        img: "/datasecurity.jpg",
        text: [
          { subIcon: <MoveRight />, text: "Business challenges" },
          { subIcon: <MoveRight />, text: "Types of data security" },
          {
            subIcon: <MoveRight />,
            text: "Data security capabilities and tools",
          },
          { subIcon: <MoveRight />, text: "Data security strategies" },
          { subIcon: <MoveRight />, text: "Data security trends" },
          { subIcon: <MoveRight />, text: "Related solutions" },
        ],
      },
    ],
  },
];

const DomainKnowledges = () => {
  const [selectedText, setSelectedText] = useState("");
  const [selectedImg, setSelectedImg] = useState("");

  const handleClick = (text: string, img: string) => {
    setSelectedText(text);
    setSelectedImg(img);
  };

  return (
    <div className="relative w-[100%] m-auto">
      <TitleComponent
        title="Domain Knowledges"
        subTitle="Explore More"
        href="/domain-knowledges"
      />
      <div>
        <div className="flex flex-row justify-between gap-4">
          <div className="w-[30%]">
            <div className="flex flex-col items-center gap-20">
              {dataLeft.map((item, index) => (
                <div
                  key={index}
                  className="vectorHover flex flex-col justify-center items-center gap-5 cursor-pointer text-[#2B2E31] hover:text-[#CE2D34]"
                  onClick={() =>
                    handleClick(item.content[0].text, item.content[0].img)
                  }
                >
                  {item.icon}
                  <h3 className="w-fit font-bold text-lg">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="w-[40%]">
            <React.Fragment>
              <div>
                <img src={selectedImg} alt="Selected" />
                <div dangerouslySetInnerHTML={{ __html: selectedText }} />
              </div>
            </React.Fragment>
          </div>

          <div className="w-[30%]">
            <div className="flex flex-col items-center gap-20">
              {dataRight.map((item, index) => (
                <div
                  key={index}
                  className="vectorHover flex flex-col justify-center items-center gap-5 cursor-pointer text-[#2B2E31] hover:text-[#CE2D34]"
                  onClick={() =>
                    handleClick(item.content[0].text, item.content[0].img)
                  }
                >
                  {item.icon}
                  <h3 className="w-fit  font-bold text-lg">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainKnowledges;
