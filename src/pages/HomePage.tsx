import AboutText from '@/components/sections/about/AboutText';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTabbedAccordion from '@/components/sections/faq/FaqTabbedAccordion';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import HeroSplitMediaGrid from '@/components/sections/hero/HeroSplitMediaGrid';
import MetricsFeatureCards from '@/components/sections/metrics/MetricsFeatureCards';
import TestimonialTrustCard from '@/components/sections/testimonial/TestimonialTrustCard';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroSplitMediaGrid
      tag="Your Digital Library"
      title="Unlock Infinite Stories with BookVerse"
      description="Discover thousands of eBooks across all genres. Read anytime, anywhere with our instant download platform."
      primaryButton={{
        text: "Browse Books",        href: "#products"}}
      secondaryButton={{
        text: "Explore Categories",        href: "#"}}
      items={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/professional-young-woman-holding-mobile-phone_23-2148452658.jpg"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-landscape-from-magazine-coming-life_23-2151158560.jpg"},
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutText
      title="Welcome to BookVerse"
      primaryButton={{
        text: "Get Started",        href: "#"}}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="products" data-section="products">
    <SectionErrorBoundary name="products">
          <FeaturesImageBento
      tag="Curated Picks"
      title="Explore Our Collections"
      description="Hand-picked categories to help you find your next favorite read."
      items={[
        {
          title: "Fiction",          description: "Engaging stories and epic novels.",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-reading-mock-up-magazine_23-2148295563.jpg"},
        {
          title: "Business",          description: "Master your professional journey.",          imageSrc: "http://img.b2bpic.net/free-photo/stack-clean-white-papers-office-business-use_187299-48025.jpg"},
        {
          title: "Technology",          description: "Stay ahead of the curve.",          imageSrc: "http://img.b2bpic.net/free-photo/square-book-office-mockup_23-2151731936.jpg"},
        {
          title: "Education",          description: "Empower your mind today.",          imageSrc: "http://img.b2bpic.net/free-photo/gradient-technology-background_23-2151895866.jpg"},
        {
          title: "Self-Help",          description: "Improve your daily lifestyle.",          imageSrc: "http://img.b2bpic.net/free-photo/physical-paper-book-background-closeup_58702-6903.jpg"},
        {
          title: "Kids Books",          description: "Fun adventures for everyone.",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-stack-books_1098-1352.jpg"},
        {
          title: "Best Sellers",          description: "What everyone is reading.",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-pastor-praying-with-bible_23-2149300856.jpg"},
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsFeatureCards
      tag="Our Growth"
      title="BookVerse by the Numbers"
      description="Connecting millions of readers with the authors they love."
      metrics={[
        {
          value: "1.2M+",          title: "Books Available",          features: [
            "Instant Download",            "ePub/PDF Support"],
        },
        {
          value: "500K+",          title: "Active Readers",          features: [
            "Community Reviews",            "Personalized Recs"],
        },
        {
          value: "10K+",          title: "Authors Trusted",          features: [
            "Easy Publishing",            "Global Reach"],
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonial" data-section="testimonial">
    <SectionErrorBoundary name="testimonial">
          <TestimonialTrustCard
      quote="BookVerse has completely changed the way I buy my books. The instant access and clean interface are unparalleled in the market today."
      rating={5}
      author="Sarah Johnson, Passionate Reader"
      avatars={[
        {
          name: "Alice Smith",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-notepad-with-list-text-milk_23-2148123811.jpg"},
        {
          name: "Bob Jones",          imageSrc: "http://img.b2bpic.net/free-vector/geometric-gradient-shapes-covers-dark-background_23-2148446045.jpg"},
        {
          name: "Carol White",          imageSrc: "http://img.b2bpic.net/free-photo/digital-art-style-illustration-mental-health-day-awareness_23-2151813240.jpg"},
        {
          name: "David Brown",          imageSrc: "http://img.b2bpic.net/free-photo/3d-character-emerging-from-smartphone_23-2151336532.jpg"},
        {
          name: "Eva Green",          imageSrc: "http://img.b2bpic.net/free-photo/african-american-man-elegant-suit-holds-black-hat-isolated-dark-background_613910-6600.jpg"},
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTabbedAccordion
      tag="Help Center"
      title="Frequently Asked Questions"
      description="Find answers to common questions about our platform and services."
      categories={[
        {
          name: "Purchases",          items: [
            {
              question: "Can I return a book?",              answer: "All digital purchases are final."},
            {
              question: "What formats are supported?",              answer: "We support ePub and PDF formats."},
          ],
        },
        {
          name: "Account",          items: [
            {
              question: "How to delete my account?",              answer: "Contact support via our contact page."},
            {
              question: "Is my payment data secure?",              answer: "Yes, we use industry-standard encryption."},
          ],
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Contact Us"
      text="Need help or have questions? Our support team is ready to assist you at any time."
      primaryButton={{
        text: "Contact Support",        href: "#"}}
      secondaryButton={{
        text: "FAQs",        href: "#faq"}}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
