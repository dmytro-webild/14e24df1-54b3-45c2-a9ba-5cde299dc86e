import React from 'react';
import ProductMediaCards from '@/components/sections/product/ProductMediaCards';
import SectionErrorBoundary from '@/components/ui/SectionErrorBoundary';

export default function BookStoreSection() {
  return (
    <div data-webild-section="book-store" id="book-store">
      <SectionErrorBoundary name="book-store">
        <ProductMediaCards
          tag="Curated Picks"
          title="Explore Our Collections"
          description="Hand-picked categories to help you find your next favorite read."
          products={[
            {
              name: "Fiction",
              price: "$14.99",
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-reading-mock-up-magazine_23-2148295563.jpg",
              onClick: () => console.log("Buy Fiction")
            },
            {
              name: "Business",
              price: "$19.99",
              imageSrc: "http://img.b2bpic.net/free-photo/stack-clean-white-papers-office-business-use_187299-48025.jpg",
              onClick: () => console.log("Buy Business")
            },
            {
              name: "Technology",
              price: "$24.99",
              imageSrc: "http://img.b2bpic.net/free-photo/square-book-office-mockup_23-2151731936.jpg",
              onClick: () => console.log("Buy Technology")
            },
            {
              name: "Education",
              price: "$12.99",
              imageSrc: "http://img.b2bpic.net/free-photo/gradient-technology-background_23-2151895866.jpg",
              onClick: () => console.log("Buy Education")
            },
            {
              name: "Self-Help",
              price: "$16.99",
              imageSrc: "http://img.b2bpic.net/free-photo/physical-paper-book-background-closeup_58702-6903.jpg",
              onClick: () => console.log("Buy Self-Help")
            },
            {
              name: "Kids Books",
              price: "$9.99",
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-stack-books_1098-1352.jpg",
              onClick: () => console.log("Buy Kids Books")
            }
          ]}
          textAnimation="fade-blur"
        />
      </SectionErrorBoundary>
    </div>
  );
}