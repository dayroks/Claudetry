import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Menu } from "@/components/sections/Menu";
import { About } from "@/components/sections/About";
import { Location } from "@/components/sections/Location";
import { Booking } from "@/components/sections/Booking";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <About />
        <Location />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
