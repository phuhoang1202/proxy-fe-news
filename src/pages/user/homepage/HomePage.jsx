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
import SectionWrapper from '@components/users/sectionWrapper/SectionWrapper'
import TeamSection from '@components/users/teamSection/TeamSection'
import TestimonialSection from '@components/users/testimonial/TestimonialSection'
import React, { useEffect, useRef, useState } from 'react'

export default function HomePage() {
  const [showAbout, setShowAbout] = useState(false)
  const aboutRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowAbout(true)
          observer.disconnect() // Ngừng theo dõi sau khi hiển thị
        }
      },
      { threshold: 0.2 }, // 20% component xuất hiện sẽ trigger
    )

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => observer.disconnect()
  }, [])
  return (
    <>
      {/* ====== Hero Section Start */}
      <SectionWrapper>
        <HeroSection />
      </SectionWrapper>

      {/* ====== Hero Section End */}
      {/* ====== Features Section Start */}
      <SectionWrapper>
        <Features />
      </SectionWrapper>
      {/* ====== Features Section End */}
      {/* ====== About Section Start */}
      <div ref={aboutRef}>
        {showAbout && (
          <SectionWrapper>
            <AboutSection />
          </SectionWrapper>
        )}
      </div>
      {/* ====== About Section End */}
      {/* ====== CTA Section Start */}
      <SectionWrapper>
        <CTASection />
      </SectionWrapper>
      {/* ====== CTA Section End */}
      {/* ====== Pricing Section Start */}
      <SectionWrapper>
        <PricingSection />
      </SectionWrapper>
      {/* ====== Pricing Section End */}
      {/* ====== Testimonial Section Start */}
      {/* <TestimonialSection /> */}
      {/* ====== Testimonial Section End */}
      {/* ====== FAQ Section Start */}
      <SectionWrapper>
        <FAQSection />
      </SectionWrapper>
      {/* ====== FAQ Section End */}
      {/* ====== Team Section Start */}
      {/* <TeamSection /> */}
      {/* ====== Team Section End */}
      {/* ====== Blog Section Start */}
      {/* <BlogSection /> */}
      {/* ====== Blog Section End */}
      {/* ====== Contact Start ====== */}
      {/* <ContactSection /> */}
      {/* ====== Contact End ====== */}
      {/* ====== New and Events start ======  */}
      <SectionWrapper>
        <NewsAndEvents />
      </SectionWrapper>
      {/* ====== New and Events end ======  */}
      {/* ====== Brands Section Start */}
      {/* <BrandsSection /> */}
      {/* ====== Brands Section End */}
    </>
  )
}
