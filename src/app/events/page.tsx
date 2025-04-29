import HeroSection from "@/components/events/HeroSection";
import Highlights from "@/components/events/Highlights";
import EventsSection from "@/components/events/UpcomingEvents";
import WhyJoinUs from "@/components/events/WhyJoinUs";
import React from "react";

function Events() {
  return (
    <div>
      <HeroSection />
      <EventsSection />
      <Highlights/>
      <WhyJoinUs/>
    </div>
  );
}

export default Events;
