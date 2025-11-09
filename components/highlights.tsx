import { Star, Users, Compass, Zap } from "lucide-react"

export function Highlights() {
  const highlights = [
    {
      icon: Star,
      title: "Aurora Display",
      description:
        "Witness the magnificent northern lights in all their glory with expert guidance and photography tips.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with like-minded adventurers and create lifelong memories with BUCC members.",
    },
    {
      icon: Compass,
      title: "Guided Experience",
      description:
        "Expert local guides will lead you to the best viewing spots with fascinating insights about the aurora.",
    },
    {
      icon: Zap,
      title: "All-Inclusive",
      description:
        "Everything you need included - transportation, meals, and cozy accommodations for the perfect night.",
    },
  ]

  return (
    <section id="highlights" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Event Highlights</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Experience unforgettable moments crafted for your adventure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, i) => {
            const Icon = highlight.icon
            return (
              <div
                key={i}
                className="glass-dark rounded-2xl p-6 hover:border-blue-300 transition-all group hover:shadow-lg hover:shadow-blue-500/15"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-slate-900 font-bold text-lg mb-2">{highlight.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{highlight.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
