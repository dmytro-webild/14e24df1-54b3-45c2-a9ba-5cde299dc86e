// AUTO-GENERATED shell by per-section-migrate.
// Section bodies live in the sibling sections/ folder (one file per section).
// Edit those section files directly. Non-block content (wrappers,
// non-inlinable sections) is preserved inline; extracted section blocks
// become component refs.

import React from 'react';
import HeroSection from './HomePage/sections/Hero';
import AboutSection from './HomePage/sections/About';
import MetricsSection from './HomePage/sections/Metrics';
import TestimonialSection from './HomePage/sections/Testimonial';
import FaqSection from './HomePage/sections/Faq';
import ContactSection from './HomePage/sections/Contact';


import BookStoreSection from './HomePage/sections/BookStore';export default function HomePage(): React.JSX.Element {
  return (
<>
  <HeroSection />

  <AboutSection />
      <BookStoreSection />


  <MetricsSection />

  <TestimonialSection />

  <FaqSection />

  <ContactSection />
    </>
  );
}
