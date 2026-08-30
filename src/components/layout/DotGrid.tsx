import { motion, useReducedMotion } from "framer-motion"

export function DotGrid() {
  const reduce = useReducedMotion()

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 dot-grid"
      animate={reduce ? undefined : { backgroundPosition: ["0px 0px", "8px 6px", "0px 0px"] }}
      transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
    />
  )
}
