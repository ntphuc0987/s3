import DomainKnowledges from "@/components/Home/DomainKnowledges";
import OurServices from "@/components/Home/OurServices";
import WhyS3corpComponent from "@/components/Home/WhyS3corpComponent";
import ClientWorldMap from "@/components/ClientWorldMap";
import type { Metadata, ResolvingMetadata } from "next";

export default function Home() {
  return (
    <div>
      <ClientWorldMap />
    </div>
  );
}
