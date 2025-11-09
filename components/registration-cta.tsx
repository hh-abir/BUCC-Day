export function RegistrationCTA() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600"></div>

          {/* Glass effect overlay */}
          <div className="absolute inset-0 backdrop-blur-md bg-white/10"></div>

          {/* Content */}
          <div className="relative px-8 md:px-16 py-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
              Ready for an Unforgettable Experience?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto text-balance">
              Join us for the BUCC Day Trip and create memories that will last a lifetime. Secure your spot now before
              it's too late!
            </p>

            <button className="inline-block px-10 py-4 bg-white text-blue-600 font-bold text-lg rounded-full hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl shadow-blue-500/30">
              Register Now
            </button>

            <p className="text-white/70 text-sm mt-6">Limited spots available • Early bird discount available</p>
          </div>
        </div>
      </div>
    </section>
  )
}
