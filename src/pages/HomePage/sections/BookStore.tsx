import React from 'react';
import ProductMediaCards from '@/components/sections/product/ProductMediaCards';
import SectionErrorBoundary from '@/components/ui/SectionErrorBoundary';

export default function BookStoreSection() {
  return (
    <div data-webild-section="book-store" id="book-store">
      <SectionErrorBoundary name="book-store">
        <ProductMediaCards
        tag="Browse Books"
        title="Explore Our Collection"
        description="Hand-picked categories to help you find your next favorite read."
        products={[{"name":"The Silent Patient","price":"$14.99","imageSrc":"http://img.b2bpic.net/free-photo/close-up-woman-reading-mock-up-magazine_23-2148295563.jpg"},{"price":"$16.99","name":"Atomic Habits","imageSrc":"http://img.b2bpic.net/free-photo/stack-clean-white-papers-office-business-use_187299-48025.jpg"},{"imageSrc":"http://img.b2bpic.net/free-photo/square-book-office-mockup_23-2151731936.jpg","price":"$12.99","name":"Dune"},{"price":"$18.99","name":"Project Hail Mary","imageSrc":"http://img.b2bpic.net/free-photo/gradient-technology-background_23-2151895866.jpg"},{"imageSrc":"http://img.b2bpic.net/free-photo/physical-paper-book-background-closeup_58702-6903.jpg","price":"$9.99","name":"1984"},{"imageSrc":"http://img.b2bpic.net/free-photo/close-up-stack-books_1098-1352.jpg","name":"To Kill a Mockingbird","price":"$11.99"},{"name":"The Great Gatsby","price":"$10.99","imageSrc":"http://img.b2bpic.net/free-photo/close-up-woman-reading-mock-up-magazine_23-2148295563.jpg"},{"name":"Sapiens","price":"$19.99","imageSrc":"http://img.b2bpic.net/free-photo/stack-clean-white-papers-office-business-use_187299-48025.jpg"},{"price":"$14.99","name":"Educated","imageSrc":"http://img.b2bpic.net/free-photo/square-book-office-mockup_23-2151731936.jpg"},{"imageSrc":"http://img.b2bpic.net/free-photo/gradient-technology-background_23-2151895866.jpg","name":"Becoming","price":"$17.99"},{"imageSrc":"http://img.b2bpic.net/free-photo/physical-paper-book-background-closeup_58702-6903.jpg","name":"The Alchemist","price":"$13.99"},{"imageSrc":"http://img.b2bpic.net/free-photo/close-up-stack-books_1098-1352.jpg","name":"Thinking, Fast and Slow","price":"$21.99"},{"name":"The Power of Habit","price":"$15.99","imageSrc":"http://img.b2bpic.net/free-photo/close-up-woman-reading-mock-up-magazine_23-2148295563.jpg"},{"imageSrc":"http://img.b2bpic.net/free-photo/stack-clean-white-papers-office-business-use_187299-48025.jpg","name":"Rich Dad Poor Dad","price":"$14.99"},{"price":"$16.99","name":"The Subtle Art of Not Giving a F*ck","imageSrc":"http://img.b2bpic.net/free-photo/square-book-office-mockup_23-2151731936.jpg"},{"imageSrc":"http://img.b2bpic.net/free-photo/gradient-technology-background_23-2151895866.jpg","name":"How to Win Friends","price":"$12.99"},{"imageSrc":"http://img.b2bpic.net/free-photo/physical-paper-book-background-closeup_58702-6903.jpg","price":"$18.99","name":"Good to Great"},{"name":"The Lean Startup","price":"$17.99","imageSrc":"http://img.b2bpic.net/free-photo/close-up-stack-books_1098-1352.jpg"},{"price":"$15.99","name":"Zero to One","imageSrc":"http://img.b2bpic.net/free-photo/close-up-woman-reading-mock-up-magazine_23-2148295563.jpg"},{"price":"$16.99","name":"Deep Work","imageSrc":"http://img.b2bpic.net/free-photo/stack-clean-white-papers-office-business-use_187299-48025.jpg"}]}
        textAnimation="fade-blur"
      />
      </SectionErrorBoundary>
    </div>
  );
}