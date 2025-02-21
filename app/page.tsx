import { Hero } from '@/components/layout/Hero';
import { AboutUs } from '@/components/sections/AboutUs';
import { Achievements } from '@/components/sections/Achievements';
import { Publications } from '@/components/sections/Publications';
import { Learn } from '@/components/sections/Learn';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Achievements />
      <Publications />
      <Learn />
      <Contact />
    </>
  );
}