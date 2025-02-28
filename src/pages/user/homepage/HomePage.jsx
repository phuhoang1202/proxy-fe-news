import AboutSection from '@components/users/aboutSection/AboutSection'
import BlogSection from '@components/users/blogSection/BlogSection'
import BrandsSection from '@components/users/brandsSection/BrandsSection'
import ContactSection from '@components/users/contactSection/ContactSection'
import CTASection from '@components/users/ctaSection/CTASection'
import FAQSection from '@components/users/faqSection/FAQSection'
import Features from '@components/users/features/Features'
import HeroSection from '@components/users/heroSection/HeroSection'
import NewsAndEvents from '@components/users/newsAndEvents/NewsAndEvents'
import PricingSection from '@components/users/pricingSection/PricingSection'
import TeamSection from '@components/users/teamSection/TeamSection'
import TestimonialSection from '@components/users/testimonial/TestimonialSection'
import React from 'react'

export default function HomePage() {
  return (
    <>
      {/* ====== Hero Section Start */}
      <HeroSection />
      {/* ====== Hero Section End */}
      {/* ====== Features Section Start */}
      <Features />
      {/* ====== Features Section End */}
      {/* ====== About Section Start */}
      <AboutSection />
      {/* ====== About Section End */}
      {/* ====== CTA Section Start */}
      <CTASection />
      {/* ====== CTA Section End */}
      {/* ====== Pricing Section Start */}
      <PricingSection />
      {/* ====== Pricing Section End */}
      {/* ====== Testimonial Section Start */}
      {/* <TestimonialSection /> */}
      {/* ====== Testimonial Section End */}
      {/* ====== FAQ Section Start */}
      <FAQSection />
      {/* ====== FAQ Section End */}
      {/* ====== Team Section Start */}
      {/* <TeamSection /> */}
      {/* ====== Team Section End */}
      {/* ====== Blog Section Start */}
      {/* <BlogSection /> */}
      {/* ====== Blog Section End */}
      {/* ====== Contact Start ====== */}
      <ContactSection />
      {/* ====== Contact End ====== */}
      {/* ====== New and Events start ======  */}
      <NewsAndEvents />
      {/* ====== New and Events end ======  */}
      {/* ====== Brands Section Start */}
      {/* <BrandsSection /> */}
      {/* ====== Brands Section End */}
    </>
  )
}
