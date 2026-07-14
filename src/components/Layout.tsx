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
    "href": "#hero"
  },
  {
    "name": "Books",
    "href": "#book-store"
  },
  {
    "name": "Categories",
    "href": "#categories"
  },
  {
    "name": "About Us",
    "href": "#about"
  },
  {
    "name": "Contact Us",
    "href": "#contact"
  }
];

  return (
    <StyleProvider buttonVariant="bounce" siteBackground="gridLines" heroBackground="lightRaysCorner">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarInline
      logo="eBook Bazaar"
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
      brand="eBook Bazaar"
      columns={[
        {
          title: "Links",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms & Conditions",
              href: "#",
            },
          ],
        }
      ]}
      copyright="© eBook Bazaar"
      links={[]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
