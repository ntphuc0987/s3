import { ArrowRight } from "@/components/vector/LineDashed";
import { Rozha_One, Poppins } from "next/font/google";
import Link from "next/link";

const rozhaOne = Rozha_One({
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface iTitleComponentProps {
  title: string;
  subTitle?: string;
  href?: string;
}

const TitleComponent = ({ title, subTitle = "", href }: iTitleComponentProps) => {
  return (
    <div
      className={`${rozhaOne.className} flex justify-center items-center mt-20 mb-20 flex-col`}
    >
      <h3 className="text-[64px]">{title}</h3>
      {subTitle && (
        <h4 className="mt-5 mb-5">
          <Link
            href={href || "#"}
            className={`${poppins.className} flex flex-row justify-center items-center gap-4 text-base text-[#4D5562]`}
          >
            {subTitle} <ArrowRight />
          </Link>
        </h4>
      )}
    </div>
  );
};

export default TitleComponent;
