import Clients from "@/components/Clients";
import Counter from "@/components/Counter";
import FAQ from "@/components/FAQ";
import PaymentHero from "@/components/heros/PaymentHero";
import HomeBlog from "@/components/HomeBlog";
import HomeCta from "@/components/HomeCTA";
import Integration from "@/components/Integration";
import PropertiesSlide from "@/components/PropertiesSlide";
import Services from "@/components/Services";
import Solution from "@/components/Solution";
import Testimonial from "@/components/Testimonial";
import Vision from "@/components/Vision";
import NewSection from "@/components/NewSection";
import Dream from "@/components/Dream";
import HowItWorksStep from "@/components/HowItWorks";
import Earning from "@/components/Earning";
import Partners from "@/components/Partners";

export const metadata = {
  title: "Homevest",
  description: "Generated by StaticMania",
};

export default function Home() {
  return (
    <>
      <PaymentHero />
      <PropertiesSlide />
      <Clients />
      <Vision />
      <NewSection />
      <HowItWorksStep />
      <Services />
      <Dream />
      <Earning />
      <Partners />
      {/* <Counter /> */}

      {/* <Solution /> */}
      {/* <Integration /> */}
      <FAQ />
      {/* <Testimonial /> */}
      <HomeBlog />
      <HomeCta />
    </>
  );
}
