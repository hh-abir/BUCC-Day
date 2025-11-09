export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 glass-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">B</span>
          </div>
          <h1 className="text-white font-bold text-xl">BUCC</h1>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#highlights" className="text-slate-300 hover:text-white transition-colors text-sm">
            Highlights
          </a>
          <a href="#timeline" className="text-slate-300 hover:text-white transition-colors text-sm">
            Timeline
          </a>
          <a href="#terms" className="text-slate-300 hover:text-white transition-colors text-sm">
            Details
          </a>
        </nav>

        <button className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold transition-all transform hover:scale-105 text-sm">
          Register
        </button>
      </div>
    </header>
  )
}
