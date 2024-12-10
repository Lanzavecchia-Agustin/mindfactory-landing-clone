import { HeroSection } from '@/components/hero-section'
import { TransformationSection } from '@/components/transformation-section'
import { SolutionsSection } from '@/components/solutions-section'
import { TechnologiesSection } from '@/components/technologies-section'
import { ExperienceSection } from '@/components/experience-section'
import { ProjectsSection } from '@/components/projects-section'
import { Header } from '@/components/header'
import { SuccessSection } from '@/components/success-section'
import { ContactSection } from '@/components/contact-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-background">
      <Header />
      <main className="relative">
        <HeroSection />
        <TransformationSection />
        <SolutionsSection id='#solutions' />
        <TechnologiesSection  />
        <ExperienceSection  id='#experience' />
        <ProjectsSection  />
        <SuccessSection  />
        <ContactSection  />
      </main>
      <Footer />
    </div>
  )
}

