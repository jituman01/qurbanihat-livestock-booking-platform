import Banner from "@/components/Banner";
import QurbaniTipsSection from "@/components/QurbaniTipsSection";
import FeaturedAnimals from "@/components/FeaturedAnimals";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>

      <FeaturedAnimals></FeaturedAnimals>

      <QurbaniTipsSection></QurbaniTipsSection>
    </div>
  
  );
}
