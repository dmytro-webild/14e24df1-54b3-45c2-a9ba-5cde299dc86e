import React from 'react';
import FeaturesMediaCards from '@/components/sections/features/FeaturesMediaCards';
import SectionErrorBoundary from '@/components/ui/SectionErrorBoundary';

export default function CategoriesSection() {
  return (
    <div data-webild-section="categories" id="categories">
      <SectionErrorBoundary name="categories">
        <FeaturesMediaCards
        tag="Categories"
        title="Explore Categories"
        description="Find books in your favorite genres."
        items={[{"imageSrc":"http://img.b2bpic.net/free-photo/gradient-technology-background_23-2151895866.jpg","title":"Business","description":"Insights and strategies for professional growth."},{"description":"Improve yourself and your life.","title":"Self Help","imageSrc":"http://img.b2bpic.net/free-photo/stack-clean-white-papers-office-business-use_187299-48025.jpg"},{"title":"Technology","imageSrc":"http://img.b2bpic.net/free-photo/square-book-office-mockup_23-2151731936.jpg","description":"Discover the latest in science and technology."},{"title":"Education","imageSrc":"http://img.b2bpic.net/free-photo/close-up-woman-reading-mock-up-magazine_23-2148295563.jpg","description":"Learn new skills and knowledge."},{"imageSrc":"http://img.b2bpic.net/free-photo/close-up-stack-books_1098-1352.jpg","title":"Fiction","description":"Explore imaginative worlds and compelling stories."},{"title":"Health & Fitness","imageSrc":"http://img.b2bpic.net/free-photo/physical-paper-book-background-closeup_58702-6903.jpg","description":"Stay healthy and fit."}]}
        textAnimation="fade-blur"
      />
      </SectionErrorBoundary>
    </div>
  );
}