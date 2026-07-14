import React from 'react';
import FeaturesMediaCards from '@/components/sections/features/FeaturesMediaCards';
import SectionErrorBoundary from '@/components/ui/SectionErrorBoundary';

export default function CategoriesSection() {
  return (
    <div data-webild-section="categories" id="categories">
      <SectionErrorBoundary name="categories">
        <FeaturesMediaCards
          tag="Categories"
          title="Browse by Category"
          description="Find books in your favorite genres."
          items={[
            { title: "Fiction", description: "Explore imaginative worlds and compelling stories.", imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-reading-mock-up-magazine_23-2148295563.jpg" },
            { title: "Non-Fiction", description: "Learn about real-world topics and historical events.", imageSrc: "http://img.b2bpic.net/free-photo/stack-clean-white-papers-office-business-use_187299-48025.jpg" },
            { title: "Science & Tech", description: "Discover the latest in science and technology.", imageSrc: "http://img.b2bpic.net/free-photo/square-book-office-mockup_23-2151731936.jpg" },
            { title: "Business", description: "Insights and strategies for professional growth.", imageSrc: "http://img.b2bpic.net/free-photo/gradient-technology-background_23-2151895866.jpg" }
          ]}
          textAnimation="fade-blur"
        />
      </SectionErrorBoundary>
    </div>
  );
}