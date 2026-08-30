import { SiteHeader, ScrollProgress } from "@/components/site-header"
import { HobbiesSection } from "@/components/hobbies-section"
import { WorkflowSection } from "@/components/workflow-section"
import { ContactSection } from "@/components/contact-section"
import { About, Gaming, Hero, Internship, Reading, Works } from "@/components/sections"

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <About />
        <Internship />
        <WorkflowSection />
        <Works />
        <Gaming />
        <HobbiesSection />
        <Reading />
        <ContactSection />
      </main>
      <footer className="mx-auto w-full max-w-[1040px] border-t border-foreground/15 px-6 py-7 text-[12px] text-muted-foreground">
        © {new Date().getFullYear()} Icy
      </footer>
    </>
  )
}
