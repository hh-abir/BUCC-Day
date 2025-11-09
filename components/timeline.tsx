import { Sun, Cloud, Moon } from "lucide-react"

export function Timeline() {
  const timelineEvents = [
    {
      period: "Morning",
      icon: Sun,
      time: "6:00 AM - 10:00 AM",
      events: [
        "Sunrise breakfast with panoramic views",
        "Photography session review & tips",
        "Group photos and memory collection",
      ],
    },
    {
      period: "Afternoon",
      icon: Cloud,
      time: "10:00 AM - 4:00 PM",
      events: [
        "Rest and relaxation at base camp",
        "Local culture and history exploration",
        "Traditional lunch experience",
      ],
    },
    {
      period: "Evening",
      icon: Moon,
      time: "4:00 PM - 6:00 AM",
      events: [
        "Dinner preparation and gathering",
        "Aurora hunting expedition begins",
        "Night photography and viewing party",
      ],
    },
  ]

  return (
    <section id="timeline" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Day Timeline</span>
          </h2>
          <p className="text-slate-600 text-lg">From sunrise to the magical aurora display</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {timelineEvents.map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="relative">
                {/* Timeline connector */}
                {i < timelineEvents.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-8 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 -ml-4"></div>
                )}

                <div className="glass-dark rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="timeline-dot"></div>
                    <h3 className="text-2xl font-bold text-slate-900">{item.period}</h3>
                  </div>

                  <div className="flex items-center gap-2 mb-6">
                    <Icon className="w-5 h-5 text-blue-600" />
                    <p className="text-sm text-slate-600">{item.time}</p>
                  </div>

                  <ul className="space-y-3">
                    {item.events.map((event, j) => (
                      <li key={j} className="flex gap-3 items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 flex-shrink-0"></div>
                        <span className="text-slate-700 text-sm leading-relaxed">{event}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
