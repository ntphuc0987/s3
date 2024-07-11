import React from "react";
import TitleComponent from "@/components/Title/TitleComponent";
import {
  Circle1,
  Circle2,
  Circle3,
  Circle4,
  Circle5,
  Circle6,
  Circle7,
  Line233,
  Line234,
} from "@/components/vector/LineDashed";

const WhyS3corpComponent = () => {
  return (
    <div className=" relative w-[100%] m-auto">
      <div>
        <TitleComponent title="Why S3Corp?" />
      </div>
      <div className="flex justify-center gap-5 ">
        <div className="w-[504px] frame1 animate-frame opacity-0">
          <div className="flex gap-3 items-center">
            <div>
              <Circle1 />
            </div>
            <div>
              <p className="font-semibold text-lg">
                Highest quality, on-time and within budget delivery
              </p>
            </div>
          </div>
        </div>

        <div className="flex mt-4 w-[304px] ">
          <div className="frame2 animate-frame opacity-0">
            <Line233 />
          </div>
          <div className="frame3 animate-frame opacity-0">
            <Line234 />
          </div>
          <div className="flex items-center frame4 animate-frame opacity-0">
            <Line233 />
          </div>
        </div>

        <div className="flex mt-4 w-[504px] frame5 animate-frame opacity-0">
          <div className="flex gap-3 items-center">
            <div>
              <Circle2 />
            </div>
            <div>
              <p className="font-semibold text-lg">
                Co-creative and Innovative Solutions
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-5 ">
        <div className="-mt-4 w-[504px] frame7 animate-frame opacity-0">
          <div className="flex gap-3 items-center">
            <div>
              <Circle3 />
            </div>
            <div>
              <p className="font-semibold text-lg">
                High responsiveness and skillful personnel with international
                experience
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-[304px] ">
          <div className="frame6 animate-frame opacity-0">
            <Line233 />
          </div>
          <div className="frame8 animate-frame opacity-0">
            <Line234 />
          </div>
          <div className="flex items-center frame9 animate-frame opacity-0">
            <Line233 />
          </div>
        </div>

        <div className="flex w-[504px] frame10 animate-frame opacity-0">
          <div className="flex gap-3 items-center">
            <div>
              <Circle4 />
            </div>
            <div>
              <p className="font-semibold text-lg">
                Well-established strategy to keep knowledge retention
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-5 ">
        <div className="-mt-4 w-[504px] frame12 animate-frame opacity-0">
          <div className="flex gap-3 items-center">
            <div>
              <Circle5 />
            </div>
            <div>
              <p className="font-semibold text-lg">
                Good security policies and training strategies for IP Protection
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-[304px] ">
          <div className="frame11 animate-frame opacity-0">
            <Line233 />
          </div>
          <div className="frame13 animate-frame opacity-0">
            <Line234 />
          </div>
          <div className="flex items-center frame14 animate-frame opacity-0">
            <Line233 />
          </div>
        </div>

        <div className="flex w-[504px] frame15 animate-frame opacity-0">
          <div className="flex gap-3 items-center">
            <div>
              <Circle6 />
            </div>
            <div>
              <p className="font-semibold text-lg w-fit">
                Flexible working models and partnering strategies for long-term
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-5 ">
        <div className="-mt-4 w-[504px] frame17 animate-frame opacity-0">
          <div className="flex gap-3 items-center">
            <div>
              <Circle7 />
            </div>
            <div>
              <p className="font-semibold text-lg w-fit">
                Modern IT infrastructure and foundation for scalability projects
                and stable growth
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-[304px] frame11 animate-frame opacity-0">
          <div className="frame16 animate-frame opacity-0">
            <Line233 />
          </div>
        </div>

        <div className="flex w-[504px]"></div>
      </div>
    </div>
  );
};

export default WhyS3corpComponent;
