import About from "@/components/about";
import Faqs from "@/components/faqs";
import Hero from "@/components/Hero";
import Schedule from "@/components/Schedule";
import Slider from "@/components/slider";
import Sponsors from "@/components/Sponsors";

export default function Home() {
  return (
    <div >
      <Hero/>
      <Sponsors/>
      <About/>
      <Schedule/>
 <Faqs/>

    </div>
  );
}
