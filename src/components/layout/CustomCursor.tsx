import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"

export function CustomCursor() {
  const reduce = useReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [label, setLabel] = useState("")
  const [hover, setHover] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine) and (hover: hover)")
    const update = () => setEnabled(fine.matches && !reduce)
    update()
    fine.addEventListener("change", update)
    return () => fine.removeEventListener("change", update)
  }, [reduce])

  useEffect(() => {
    if (!enabled) {
      document.body.classList.remove("has-cursor")
      return
    }
    document.body.classList.add("has-cursor")

    const onMove = (event: MouseEvent) => {
      setPos({ x: event.clientX, y: event.clientY })
      const target = (event.target as HTMLElement | null)?.closest("[data-cursor]")
      const next = target?.getAttribute("data-cursor") ?? ""
      setLabel(next)
      setHover(Boolean(next) || Boolean((event.target as HTMLElement | null)?.closest("a,button")))
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    return () => {
      window.removeEventListener("mousemove", onMove)
      document.body.classList.remove("has-cursor")
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[80] hidden mix-blend-difference md:block"
      animate={{
        x: pos.x - (hover ? 28 : 6),
        y: pos.y - (hover ? 28 : 6),
      }}
      transition={{ type: "spring", stiffness: 280, damping: 28, mass: 0.3 }}
    >
      <div
        className={`grid place-items-center rounded-full border border-white/80 bg-white/10 text-[10px] tracking-[0.14em] text-white uppercase transition-all duration-300 ${
          hover ? "size-14" : "size-3"
        }`}
      >
        {hover ? label || "→" : null}
      </div>
    </motion.div>
  )
}
