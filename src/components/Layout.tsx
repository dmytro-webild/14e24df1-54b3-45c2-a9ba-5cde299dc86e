import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarInline from '@/components/ui/NavbarInline';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Home",
    "href": "#"
  },
  {
    "name": "Browse",
    "href": "#products"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Contact",
    "href": "#contact"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  },
  {
    "name": "Testimonial",
    "href": "#testimonial"
  }
];

  return (
    <StyleProvider buttonVariant="bounce" siteBackground="gridLines" heroBackground="lightRaysCorner">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarInline
      logo="Ahmad Ali"
      ctaButton={{
        text: "Sign In",
        href: "#",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <div className="w-content-width mx-auto py-8 flex justify-center items-center gap-6 text-accent border-t border-border/10">
        <span className="text-sm font-medium">Secure Payments:</span>
        <div className="flex gap-4 items-center">
          <span className="font-bold">VISA</span>
          <span className="font-bold">Mastercard</span>
          <span className="font-bold">PayPal</span>
          <span className="font-bold">Apple Pay</span>
        </div>
      </div>
      <SectionErrorBoundary name="footer">
        <FooterSimple
      brand="BookVerse"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#",
            },
            {
              label: "Careers",
              href: "#",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Reading Tips",
              href: "#",
            },
            {
              label: "Blog",
              href: "#",
            },
            {
              label: "Support",
              href: "#",
            },
          ],
        },
      ]}
      copyright="© 2024 BookVerse Inc. All rights reserved."
      links={[
        {
          label: "Terms of Service",
          href: "#",
        },
        {
          label: "Sitemap",
          href: "#",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
