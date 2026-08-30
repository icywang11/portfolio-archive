import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { SiteFooter, SiteHeader } from "@/components/layout/SiteHeader"
import { CustomCursor } from "@/components/layout/CustomCursor"
import { DotGrid } from "@/components/layout/DotGrid"
import { HomePage } from "@/pages/HomePage"
import { AboutPage } from "@/pages/AboutPage"
import { WorksPage } from "@/pages/WorksPage"
import { ProjectPage } from "@/pages/ProjectPage"
import { ProcessPage } from "@/pages/ProcessPage"
import { ContactPage } from "@/pages/ContactPage"
import { PlayPage } from "@/pages/PlayPage"
import { InternshipPage } from "@/pages/InternshipPage"

export default function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const reduce = useReducedMotion()

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const redirect = params.get("redirect")
    if (!redirect) return
    const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "")
    let path = redirect
    if (base && path.startsWith(base)) {
      path = path.slice(base.length) || "/"
    }
    if (!path.startsWith("/")) path = `/${path}`
    navigate(path, { replace: true })
  }, [location.search, navigate])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="relative min-h-svh">
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-paper focus:px-3 focus:py-2">
        Skip to content
      </a>
      <DotGrid />
      <CustomCursor />
      <SiteHeader />
      <main id="content">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: 6 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/works" element={<WorksPage />} />
              <Route path="/works/:slug" element={<ProjectPage />} />
              <Route path="/play" element={<PlayPage />} />
              <Route path="/internship" element={<InternshipPage />} />
              <Route path="/process" element={<ProcessPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <SiteFooter />
    </div>
  )
}
