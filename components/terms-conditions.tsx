export function TermsConditions() {
  return (
    <section id="terms" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="glass-dark rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="gradient-text">Terms & Conditions</span>
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Registration & Payment</h3>
              <p className="text-slate-400 leading-relaxed">
                By registering for the BUCC Day Trip, you agree to provide accurate information and payment in full. A
                non-refundable deposit of 50% is required to secure your spot, with the remaining balance due 14 days
                before the event.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">Cancellation Policy</h3>
              <p className="text-slate-400 leading-relaxed">
                Cancellations made more than 30 days before the event will receive a full refund. Cancellations made
                15-30 days before will receive 50% refund. Cancellations made less than 15 days before are
                non-refundable.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">Health & Safety</h3>
              <p className="text-slate-400 leading-relaxed">
                Participants must be in good physical health and able to participate in outdoor activities in cold
                weather conditions. BUCC reserves the right to refuse participation to anyone deemed unsafe. Weather
                changes may necessitate modifications to the itinerary.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">Liability Waiver</h3>
              <p className="text-slate-400 leading-relaxed">
                Participants acknowledge the inherent risks associated with outdoor adventures and agree to release BUCC
                from any liability. Comprehensive travel insurance is recommended and not included in the event cost.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">Photography Rights</h3>
              <p className="text-slate-400 leading-relaxed">
                BUCC may capture photos and videos during the event for promotional purposes. By attending, you consent
                to these recordings. Personal photography equipment is welcome and encouraged.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-700/50">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" className="w-5 h-5 rounded border-blue-400 checked:bg-blue-500" />
              <span className="text-slate-300 group-hover:text-white transition-colors">
                I agree to the terms and conditions of the BUCC Day Trip event
              </span>
            </label>
          </div>
        </div>
      </div>
    </section>
  )
}
