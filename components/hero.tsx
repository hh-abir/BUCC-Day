"use client"

import { useEffect, useState } from "react"
import { Calendar, MapPin, Clock } from "lucide-react"

export function Hero() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const eventDate = new Date("2025-12-15").getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = eventDate - now

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Event Banner */}
        <div className="mb-8 inline-block">
          <div className="glass rounded-2xl px-6 py-3 mb-6">
            <span className="text-blue-600 text-sm font-semibold">✨ Experience the Aurora Adventure ✨</span>
          </div>
        </div>

        {/* Event Name - Gradient Text */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">BUCC Day Trip</span>
        </h1>

        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
          Join us for an unforgettable journey through the northern lights. Experience nature's most magical display
          with friends and fellow adventurers.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <div className="glass-dark rounded-2xl p-6">
            <div className="flex items-center justify-center mb-3">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-slate-600 text-sm mb-1">Date</p>
            <p className="text-slate-900 text-lg font-semibold">December 15, 2025</p>
          </div>

          <div className="glass-dark rounded-2xl p-6">
            <div className="flex items-center justify-center mb-3">
              <Clock className="w-6 h-6 text-cyan-600" />
            </div>
            <p className="text-slate-600 text-sm mb-1">Time</p>
            <p className="text-slate-900 text-lg font-semibold">6:00 PM - 6:00 AM</p>
          </div>

          <div className="glass-dark rounded-2xl p-6">
            <div className="flex items-center justify-center mb-3">
              <MapPin className="w-6 h-6 text-indigo-600" />
            </div>
            <p className="text-slate-600 text-sm mb-1">Location</p>
            <p className="text-slate-900 text-lg font-semibold">Northern Skies</p>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="mb-12">
          <p className="text-slate-600 text-sm mb-6 font-semibold">COUNTDOWN TO ADVENTURE</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Days", value: countdown.days },
              { label: "Hours", value: countdown.hours },
              { label: "Minutes", value: countdown.minutes },
              { label: "Seconds", value: countdown.seconds },
            ].map((item) => (
              <div key={item.label} className="glass-dark rounded-2xl p-6">
                <p className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {String(item.value).padStart(2, "0")}
                </p>
                <p className="text-slate-600 text-xs uppercase tracking-wider">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 hover:from-blue-600 hover:via-indigo-600 hover:to-cyan-600 text-white font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30 animate-float">
          Register Now
        </button>
      </div>
    </section>
  )
}
