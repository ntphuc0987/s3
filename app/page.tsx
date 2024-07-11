import DomainKnowledges from "@/components/Home/DomainKnowledges";
import OurServices from "@/components/Home/OurServices";
import WhyS3corpComponent from "@/components/Home/WhyS3corpComponent";
import type { Metadata, ResolvingMetadata } from "next";


export default function Home() {
  return (
    <div>
      <WhyS3corpComponent />
      <OurServices />
      <DomainKnowledges />
    </div>
  );
}
