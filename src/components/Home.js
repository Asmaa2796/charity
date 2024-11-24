import { useRef } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Contacts from "./Contacts";
import ScrollTop from "./ScrollTop";
import Statistics from "./Statistics";
import UpcomingEvents from "./UpcomingEvents";

const Home = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const statisticsRef = useRef(null);
  const servicesRef = useRef(null);
  const upcomingEventsRef = useRef(null);
  const contactsRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar 
        scrollToSection={scrollToSection} 
        refs={{ heroRef, aboutRef, servicesRef, contactsRef ,upcomingEventsRef}} 
      />
      <div ref={heroRef}><Hero /></div>
      <div ref={servicesRef}><Services /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={statisticsRef}><Statistics /></div>
      <div ref={upcomingEventsRef}><UpcomingEvents /></div>
      <div ref={contactsRef}><Contacts /></div>
      <ScrollTop />
    </>
  );
};

export default Home;
