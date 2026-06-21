import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Footer from '../components/Footer'

const faqData = [
  {
    q: 'Can I list a room I rent, not own?',
    a: 'Yes — anyone with the legal right to rent out a property can host, including tenants with permission, property managers, and authorized representatives. You\'ll need to confirm you have that right when you list.',
  },
  {
    q: 'Are guests screened before they can book?',
    a: 'Verified guests carry a badge on their profile, and we encourage hosts to prioritize them. Unverified guests can still book, so the final call on who stays is always yours.',
  },
  {
    q: 'How does payout timing work?',
    a: 'Completed stays are credited to your host wallet right away. Withdrawals are processed weekly, covering the previous Monday-through-Sunday period.',
  },
  {
    q: 'Can I change my price or availability later?',
    a: 'Anytime. Pricing, calendar availability, and booking preferences are fully adjustable from your dashboard — there\'s no lock-in period.',
  },
  {
    q: 'What happens if a guest cancels?',
    a: 'Refunds follow whichever cancellation policy you\'ve set — Flexible, Moderate, or Strict. The refunded amount goes back to the guest\'s wallet, not necessarily your earnings.',
  },
  {
    q: 'Can I message a guest before they book?',
    a: 'Yes, through in-platform chat. Sharing personal contact details before a confirmed booking isn\'t allowed, and doing so can put your account at risk.',
  },
]

function HostLandingPage() {
  const navigate = useNavigate()
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      {/* HERO */}
      <section className="bg-primary text-white overflow-hidden pt-16 pb-0">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="grid grid-cols-[1.1fr_0.9fr] gap-10 items-center max-lg:grid-cols-1">
            <div>
              <span className="text-xs tracking-[0.08em] uppercase text-accent font-semibold mb-5 flex items-center gap-2.5">
                <span className="w-[7px] h-[7px] bg-accent rounded-full inline-block"></span>
                Hosting · Open enrollment
              </span>
              <h1 className="text-white text-[clamp(40px,6vw,68px)] leading-[1.05] font-bold tracking-tight mb-5">
                Your place,<br /><em className="italic text-accent not-italic">your terms</em>,<br />zero cut.
              </h1>
              <p className="text-[#B8C9D4] text-lg leading-relaxed max-w-[480px] mb-8">
                List your space, set your own price, and keep every rupee you earn. No commission, no fine print — just a straightforward way to host.
              </p>
              <div className="flex items-center gap-5 flex-wrap">
                <button
                  onClick={() => navigate('/signup?host=true')}
                  className="bg-accent hover:bg-[#247a97] text-white px-8 py-4 rounded-full font-semibold text-[15px] border-none cursor-pointer inline-flex items-center gap-2.5 transition-all duration-200 hover:-translate-y-0.5"
                >
                  List your space <span className="inline-block">→</span>
                </button>
                <span className="text-[13px] text-[#8DA9B9]">Takes about 10 minutes to publish</span>
              </div>
            </div>

            {/* LISTING CARD + SEAL */}
            <div className="relative flex items-center justify-center min-h-[380px]">
              <div className="bg-white text-charcoal w-[300px] rounded-[4px] rotate-[4deg] shadow-[0_30px_60px_-20px_rgba(28,27,25,0.45)] relative z-10 max-lg:rotate-0">
                <div
                  className="h-[190px] relative"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(28,27,25,0) 40%, rgba(28,27,25,0.85) 100%), repeating-linear-gradient(115deg, #6b5d4f 0px, #6b5d4f 2px, #5a4d41 2px, #5a4d41 40px)',
                  }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: 'linear-gradient(90deg, rgba(250,246,238,0.06) 1px, transparent 1px)',
                      backgroundSize: '14px 100%',
                    }}
                  ></div>
                  <span className="absolute top-3.5 left-3.5 bg-accent text-white text-[11px] px-2.5 py-1 rounded-[3px] uppercase tracking-[0.08em] font-semibold">
                    Live listing
                  </span>
                </div>
                <div className="p-[18px_20px_22px]">
                  <h4 className="font-serif text-[17px] font-medium mb-1.5 text-charcoal">The Quiet Courtyard House</h4>
                  <p className="text-[12.5px] text-gray-400 mb-3.5">2BHK · Sleeps 4 · Hosted since today</p>
                  <div className="flex justify-between items-baseline border-t border-gray-100 pt-3.5">
                    <div className="font-serif text-xl text-primary">
                      ₹3,200<span className="font-sans text-[11px] text-gray-400">/night</span>
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.08em] text-accent font-semibold">You keep 100%</span>
                  </div>
                </div>
              </div>

              {/* SEAL */}
              <div className="absolute -right-1.5 -top-7 w-32 h-32 z-20 -rotate-12 max-lg:hidden">
                <svg viewBox="0 0 140 140" className="w-full h-full">
                  <circle cx="70" cy="70" r="66" fill="none" stroke="#C45B3E" strokeWidth="2" />
                  <circle cx="70" cy="70" r="56" fill="none" stroke="#C45B3E" strokeWidth="1" strokeDasharray="2 4" />
                  <text x="70" y="58" textAnchor="middle" fill="#1C1B19" fontWeight="700" fontFamily="'Space Mono', monospace" fontSize="9.5" letterSpacing="0.05em">ZERO</text>
                  <text x="70" y="74" textAnchor="middle" fontFamily="'Fraunces', serif" fontSize="22" fontWeight="700" fill="#C45B3E">0%</text>
                  <text x="70" y="92" textAnchor="middle" fill="#1C1B19" fontWeight="700" fontFamily="'Space Mono', monospace" fontSize="9.5" letterSpacing="0.05em">COMMISSION</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <div className="border-t border-b border-gray-200 bg-gray-50 py-3.5 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap w-max animate-[scroll-strip_28s_linear_infinite] will-change-transform">
          {[
            'No listing fees',
            'Set your own price',
            'Weekly payouts',
            'Cancel-policy control',
            'Verified guests',
          ].map((item, i) => (
            <span key={i} className="text-[13px] font-semibold flex items-center gap-12">
              {item}
              <span className="text-accent font-bold">·</span>
            </span>
          ))}
          {[
            'No listing fees',
            'Set your own price',
            'Weekly payouts',
            'Cancel-policy control',
            'Verified guests',
          ].map((item, i) => (
            <span key={`dup-${i}`} className="text-[13px] font-semibold flex items-center gap-12">
              {item}
              <span className="text-accent font-bold">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* WHY CHOOSE */}
      <section className="py-36 bg-gradient-to-b from-white via-blue-50/30 to-white relative">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="max-w-[700px] mx-auto text-center mb-16">
            <span className="text-sm uppercase tracking-[0.08em] text-accent font-semibold mb-4 block relative inline-flex items-center gap-4 before:block before:w-8 before:h-px before:bg-accent after:block after:w-8 after:h-px after:bg-accent">Why host here</span>
            <h2 className="text-primary text-[clamp(34px,5vw,52px)] font-bold tracking-tight leading-[1.08]">
              Hosting that doesn't take a cut<br className="max-md:hidden" /> to take an interest.
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1 max-lg:max-w-lg max-lg:mx-auto">
            {[
              {
                num: '01',
                title: 'Nothing taken off the top',
                desc: 'No commission, no listing fee, no quiet deductions. <strong>Whatever a guest pays lands in your account in full</strong> — it\'s the simplest math in hosting.',
              },
              {
                num: '02',
                title: 'Run it your way',
                desc: 'Change your rate tonight, block off next weekend, accept or decline a booking on your own schedule. <strong>The property stays entirely under your direction</strong>, with nothing to wait on.',
              },
              {
                num: '03',
                title: 'Earn more, not just list',
                desc: 'You\'re placed in front of a steady stream of <strong>identity-checked travelers</strong>, and we actively push your listing through our own marketing — so visibility isn\'t something you have to chase alone.',
              },
            ].map((item) => (
              <div key={item.num} className="bg-white rounded-xl px-10 py-12 border border-gray-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="font-mono text-sm text-accent font-bold mb-6">{item.num}</div>
                <h3 className="font-serif text-[25px] font-semibold text-primary mb-4 leading-tight">{item.title}</h3>
                <p className="text-[15.5px] leading-relaxed text-gray-600" dangerouslySetInnerHTML={{ __html: item.desc }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (LEDGER) */}
      <section className="bg-primary text-white py-24">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="max-w-[560px] mb-14">
            <span className="text-xs uppercase tracking-[0.08em] text-[#e3a78f] font-semibold mb-3.5 block">The process</span>
            <h2 className="text-white text-[clamp(30px,4vw,42px)] font-bold tracking-tight">From empty room to first booking.</h2>
            <p className="text-[#c9c5ba] mt-4 text-[15.5px] leading-relaxed">Three steps, no waiting on approval calls. Most hosts are live the same day they start.</p>
          </div>

          <div className="border-t border-white/20 max-w-[780px]">
            {[
              { step: '1', title: 'Open an account', desc: 'Sign up with email, phone, or a social login. Identity verification usually clears in under two minutes.', stat: '~2 MIN' },
              { step: '2', title: 'Publish your listing', desc: 'Add photos, amenities, house rules, and a price. Our step-by-step builder handles the rest — your space goes live and becomes searchable immediately.', stat: '~10 MIN' },
              { step: '3', title: 'Get paid', desc: 'Earnings land in your host wallet the moment a stay wraps up. Withdraw weekly to your linked bank account — no holding period games.', stat: 'WEEKLY' },
            ].map((item) => (
              <div key={item.step} className="grid grid-cols-[90px_1fr_140px] gap-6 items-start py-8 border-b border-white/20 max-sm:grid-cols-[50px_1fr]">
                <div className="font-serif italic text-[34px] text-[#7d7468]">{item.step}</div>
                <div>
                  <h3 className="font-serif text-[21px] font-medium text-white mb-2">{item.title}</h3>
                  <p className="text-[14.5px] leading-relaxed text-[#c9c5ba] max-w-[480px]">{item.desc}</p>
                </div>
                <div className="font-mono text-xs text-[#e3a78f] text-right pt-1.5 max-sm:hidden">{item.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="max-w-[560px] mb-14">
            <span className="text-xs uppercase tracking-[0.08em] text-accent font-semibold mb-3.5 block">Before you list</span>
            <h2 className="text-primary text-[clamp(28px,3.4vw,38px)] font-bold tracking-tight">Common questions</h2>
          </div>

          <div className="max-w-[760px]">
            {faqData.map((item, i) => (
              <div key={i} className="border-b border-gray-200">
                <div
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex justify-between items-center gap-5 cursor-pointer py-[26px]"
                >
                  <span className="font-serif text-lg font-medium text-charcoal">{item.q}</span>
                  <span className={`font-mono text-lg text-accent shrink-0 transition-transform duration-250 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-60' : 'max-h-0'}`}>
                  <p className="pb-[26px] text-[15px] leading-relaxed text-gray-600 max-w-[640px]">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="mx-8 mb-24 max-sm:mx-5 max-sm:mb-[70px]">
        <div className="bg-accent text-white rounded-md py-[70px] px-[60px] relative overflow-hidden max-sm:py-12 max-sm:px-7">
          <div className="absolute -right-16 -top-16 w-60 h-60 border border-white/25 rounded-full"></div>
          <div className="absolute right-5 -bottom-[90px] w-[200px] h-[200px] border border-white/18 rounded-full"></div>
          <h2 className="text-white text-[clamp(28px,4vw,40px)] max-w-[520px] mb-7 font-bold tracking-tight relative z-10">
            Your first guest is closer than you think.
          </h2>
          <button
            onClick={() => navigate('/signup?host=true')}
            className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-[15px] border-none cursor-pointer inline-flex relative z-10 transition-all duration-200 hover:-translate-y-0.5 items-center gap-2.5"
          >
            List your space <span className="inline-block">→</span>
          </button>
        </div>
      </section>

      <Footer />
    </motion.div>
  )
}

export default HostLandingPage
