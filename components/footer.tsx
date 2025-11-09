import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-16 px-4 mt-20 bg-white/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
                <span className="text-white font-bold">B</span>
              </div>
              <h3 className="text-slate-900 font-bold text-lg">BUCC</h3>
            </div>
            <p className="text-slate-600 text-sm">
              Creating unforgettable adventures and experiences for our community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Events", "Community", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-slate-900 font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              {["FAQ", "Help Center", "Book a Guide", "Feedback"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-slate-900 font-bold mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600" />
                <a
                  href="mailto:hello@bucc.com"
                  className="text-slate-600 hover:text-slate-900 transition-colors text-sm"
                >
                  hello@bucc.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-600" />
                <a href="tel:+1234567890" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="text-slate-600 text-sm">Northern Skies, Adventure Land</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-slate-200 pt-8">
          <div className="flex items-center justify-between">
            <p className="text-slate-600 text-sm">© 2025 BUCC Adventures. All rights reserved.</p>
            <div className="flex gap-4">
              {[
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-10 h-10 rounded-full glass-dark flex items-center justify-center text-slate-700 hover:text-blue-600 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
