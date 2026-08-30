import { useState } from "react"
import { processSteps } from "@/data/process"
import { Meta, Reveal } from "@/components/ui/Reveal"

export function ProcessPage() {
  const [open, setOpen] = useState<string>("01")

  return (
    <div className="px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1180px]">
        <Reveal>
          <Meta>Process / Workflow</Meta>
          <h1 className="mt-4 font-serif text-[clamp(48px,8vw,84px)] leading-[0.9] italic">
            How I operate
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] text-mute">
            四步：研究、策略、执行、优化。点击卡片展开我实际怎么做。
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {processSteps.map((step) => {
            const active = open === step.num
            return (
              <Reveal key={step.num}>
                <button
                  type="button"
                  data-cursor="OPEN"
                  onClick={() => setOpen(active ? "" : step.num)}
                  className={`w-full border border-line p-6 text-left transition-colors duration-300 ${
                    active ? "bg-accent/35" : "bg-paper-2 hover:bg-beige/60"
                  }`}
                >
                  <p className="font-serif text-sm text-mute">{step.num}</p>
                  <p className="mt-2 text-[11px] tracking-[0.18em] uppercase text-mute">{step.kicker}</p>
                  <h2 className="mt-2 font-serif text-3xl italic">{step.title}</h2>
                  <p className="mt-3 text-[15px]">{step.summary}</p>
                  {active ? <p className="mt-4 text-[14px] text-mute">{step.detail}</p> : null}
                </button>
              </Reveal>
            )
          })}
        </div>
      </div>
    </div>
  )
}
