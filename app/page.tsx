import { Hero } from '@/components/layout/Hero';
import { WhyChoose } from '@/components/layout/WhyChoose';
import { VideoSection } from '@/components/layout/VideoSection';
import { AboutUs } from '@/components/sections/AboutUs';
import { Features } from '@/components/layout/Features';
import { Achievements } from '@/components/sections/Achievements';
import { Publications } from '@/components/sections/Publications';
import { Learn } from '@/components/sections/Learn';
import { Team } from '@/components/sections/Team';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';


export default function Home() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <VideoSection />
      <AboutUs />
      <Features />
      <Achievements />
      <Publications />
      <Learn />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}