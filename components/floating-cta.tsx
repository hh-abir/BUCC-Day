"use client"

import { useState } from "react"
import { ChevronUp } from "lucide-react"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(true)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4 items-end">
      {isVisible && (
        <button className="glass-dark px-6 py-3 rounded-full text-slate-900 font-bold text-lg bg-white/70 hover:bg-white/80 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20 flex items-center gap-2 animate-float">
          <span>Register Now</span>
          <span className="text-xl">🎯</span>
        </button>
      )}

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="glass-dark p-3 rounded-full text-slate-700 hover:bg-blue-100 transition-all transform hover:scale-110 shadow-lg"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </div>
  )
}
