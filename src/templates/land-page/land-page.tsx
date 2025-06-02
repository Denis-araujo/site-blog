import { CallToAction, CustomerStorySection, FeatureSection, HeroSection, SupportSection } from "./sections"

export const LandPage = () => {
  return (
    <article className="flex flex-col gap-10 md:gap-20">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustomerStorySection />
      <CallToAction />
    </article>
  )
}