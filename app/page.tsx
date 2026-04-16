'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#111]">

      {/* ─── HERO ─── */}
      <section className="relative w-full bg-[#111] overflow-hidden" style={{ minHeight: '100svh' }}>
        <Image
          src="https://gyatanutrition.com/wp-content/uploads/2025/09/pexels-823sl-2294361-scaled.jpg"
          alt="Hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-black/30" />

        {/* Cutout image — right side, clean transparent PNG on dark bg */}
        <div className="absolute bottom-0 right-0 h-[95%] w-[42vw] max-w-md pointer-events-none">
          <Image
            src="/no bg shaker.png"
            alt="Ceecefit"
            fill
            priority
            sizes="(max-width: 768px) 42vw, 480px"
            className="object-contain object-bottom"
          />
        </div>

        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 pt-8 z-10">
          <span className="text-white/60 text-xs uppercase tracking-[0.3em]">ceecefit</span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-white/40 text-xs uppercase tracking-widest">fitness creator</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-8 pb-14 z-10 md:max-w-[58%]">
          <p className="text-white/40 text-xs uppercase tracking-[0.3em] mb-4">@ceecefit</p>
          <h1
            className="font-black text-white leading-[0.88] mb-8 uppercase"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)' }}
          >
            Real food.<br />
            Real reps.<br />
            <span className="text-yellow-400">Real you.</span>
          </h1>
          <div className="flex items-center gap-4 mb-5">
            <button className="px-7 py-3.5 bg-yellow-400 text-black font-bold rounded-full text-sm hover:bg-yellow-300 transition-all">
              Get 20% off ↓
            </button>
            <span className="text-white/30 text-xs uppercase tracking-widest">scroll</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
            <span className="text-white/80 text-xs font-bold uppercase tracking-[0.2em]">20% off both · code CEECEFIT</span>
          </div>
        </div>
      </section>

      {/* ─── HOOK ─── */}
      <section className="px-8 py-20 md:py-28 max-w-4xl mx-auto">
        <div className="relative">
          <span
            className="absolute -top-6 -left-2 font-black text-[#EDECEA] leading-none select-none pointer-events-none"
            style={{ fontSize: 'clamp(6rem, 18vw, 11rem)' }}
          >"</span>
          <p className="relative text-2xl md:text-4xl font-bold leading-snug text-[#222] pt-10 md:pt-14">
            Not here to sell you a lifestyle —<br />
            just sharing what&apos;s{' '}
            <em className="not-italic text-yellow-500">actually been working</em>{' '}
            for me.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <div className="w-8 h-px bg-[#CCC]" />
            <span className="text-xs text-[#AAA] uppercase tracking-widest">Ceecefit</span>
          </div>
        </div>
      </section>

      {/* ─── DISCOUNT ─── wider, 20 visible on right */}
      <section className="px-6 pb-6 max-w-4xl mx-auto">
        <div className="bg-yellow-400 rounded-3xl relative overflow-hidden">
          <div className="flex items-stretch">
            {/* Left: content */}
            <div className="p-8 md:p-12 flex-1">
              <p className="text-[10px] uppercase tracking-[0.35em] text-black/40 font-bold mb-3">Limited offer</p>
              <h2 className="font-black text-black leading-[0.9] mb-2" style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)' }}>
                20% OFF
              </h2>
              <p className="text-xl md:text-2xl font-bold text-black/60 mb-6">everything.</p>
              <p className="text-black/50 text-sm mb-6">Drop this at checkout. Works on both products.</p>
              <div className="inline-flex bg-black rounded-2xl px-6 py-4 mb-6">
                <span className="text-yellow-400 font-black text-xl md:text-2xl tracking-[0.2em]">CEECEFIT</span>
              </div>
              <button className="w-full py-4 bg-black hover:bg-[#1a1a1a] text-white font-bold rounded-2xl text-lg transition-all">
                Grab the deal →
              </button>
            </div>
            {/* Right: big decorative 20 — fully visible */}
            <div className="hidden md:flex items-center justify-end pr-10 shrink-0">
              <span className="font-black text-yellow-300/60 leading-none select-none pointer-events-none" style={{ fontSize: 'clamp(8rem, 14vw, 14rem)' }}>
                20
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TALKING HEAD + WHY ─── */}
      <section className="bg-[#111] text-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-0">
          <div className="md:w-[36%] shrink-0 flex justify-center md:justify-start">
            <div className="w-full max-w-[320px] md:max-w-none aspect-9/16 rounded-2xl overflow-hidden bg-[#1a1a1a] relative mx-6 md:mx-0">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/CeeCefit Promo Video_1.mp4" type="video/mp4" />
              </video>
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 z-10">
                <div className="w-6 h-6 rounded-full bg-white/20" />
                <span className="text-[10px] text-white/50 uppercase tracking-wider">@ceecefit</span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center px-8 py-16 md:py-0 md:px-14 xl:px-20">
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/30 mb-6">why these</p>
            <p
              className="font-black text-white leading-[0.92] mb-8 uppercase"
              style={{ fontSize: 'clamp(2.6rem, 5vw, 4.5rem)' }}
            >
              Spotted them.<br />
              Got curious.<br />
              <span className="text-yellow-400">Now trying.</span>
            </p>
            <div className="space-y-4 text-white/50 text-sm leading-relaxed max-w-sm">
              <p>Kept seeing Gyata everywhere. Decided to actually pick it up instead of just scrolling past.</p>
              <p>Clean label. Nothing weird in it. That was enough for me to try.</p>
            </div>
            <div className="mt-10 flex items-center gap-3">
              <div className="w-1 h-6 bg-yellow-400 rounded-full" />
              <p className="text-[11px] text-white/25 italic">in collab with Gyata Nutrition</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STACK ─── */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-14 max-w-3xl">
          <h2 className="font-black" style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>The stack.</h2>
          <p className="text-[#888] text-sm max-w-32.5 text-right leading-relaxed hidden md:block font-semibold">
            two products.<br />that&apos;s it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">

          {/* PRODUCT 1 — Whey Protein */}
          <div className="bg-white rounded-3xl overflow-hidden hover:-translate-y-1 transition-transform duration-300 shadow-[0_2px_24px_rgba(0,0,0,0.06)] flex flex-col">
            <div className="relative bg-[#111] flex items-end justify-center overflow-hidden" style={{ height: '340px' }}>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 font-black text-white/5 leading-none select-none uppercase pointer-events-none whitespace-nowrap" style={{ fontSize: '8rem' }}>Whey</span>
              <Image
                src="https://gyatanutrition.com/wp-content/uploads/2025/11/VAF04046_83a9a8e1-a138-4b5f-bef9-bc6b08e51ea2-scaled.jpg"
                alt="Gyata Whey Protein"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            <div className="p-7 md:p-9 flex-1 flex flex-col">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#BBB] mb-1">Gyata Nutrition</p>
              <h3 className="text-3xl font-black mb-2">Whey Protein</h3>
              <p className="text-[#999] text-sm mb-6 leading-relaxed">Grass-fed isolate. Clean macros, two flavors.</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Vanilla', 'Chocolate'].map((f) => (
                  <button key={f} className="px-4 py-1.5 rounded-full border border-[#E8E8E4] text-xs font-semibold text-[#666] hover:border-yellow-400 hover:text-black transition-all">
                    {f}
                  </button>
                ))}
              </div>
              <button className="mt-auto w-full py-3.5 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-xl text-sm transition-all">
                Shop
              </button>
            </div>
          </div>

          {/* PRODUCT 2 — Twin Pack */}
          <div className="bg-[#111] text-white rounded-3xl overflow-hidden hover:-translate-y-1 transition-transform duration-300 flex flex-col">
            <div className="relative bg-[#f5f4f1] flex items-end justify-center overflow-hidden" style={{ height: '340px' }}>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 font-black text-black/5 leading-none select-none uppercase pointer-events-none whitespace-nowrap" style={{ fontSize: '8rem' }}>Twin</span>
              <Image
                src="/Gyata_Protein_Twin_Pack.png.webp"
                alt="Gyata Twin Pack"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain object-bottom"
              />
            </div>
            <div className="p-7 md:p-9 flex-1 flex flex-col">
              <div className="inline-flex items-center gap-1.5 bg-yellow-400 text-black rounded-full px-3 py-1 text-[11px] font-black mb-4 w-fit uppercase tracking-wide">
                ★ Best value
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/25 mb-1">Gyata Nutrition</p>
              <h3 className="text-3xl font-black mb-2">Twin Pack</h3>
              <p className="text-white/50 text-sm mb-6 leading-relaxed">Two proteins, one price. Whey + Casein bundled for less.</p>
              <div className="flex gap-2 mb-8">
                <span className="px-4 py-1.5 rounded-full bg-white/10 text-xs font-semibold text-white/60">Whey</span>
                <span className="px-4 py-1.5 rounded-full bg-white/10 text-xs font-semibold text-white/60">Casein</span>
              </div>
              <button className="mt-auto w-full py-3.5 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-xl text-sm transition-all">
                Shop
              </button>
            </div>
          </div>

        </div>

        <p className="text-center text-[#888] text-sm font-bold mt-8 uppercase tracking-[0.2em]">
          20% off both · code CEECEFIT
        </p>
      </section>

      {/* ─── GYATA BRAND CTA ─── */}
      <section className="bg-[#FAFAF8] px-6 py-16 md:py-20">
        <div className="max-w-5xl mx-auto bg-[#111] rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-16">

            {/* Logo + Canadian badge */}
            <div className="shrink-0 flex flex-col items-start gap-5">
              <div className="relative w-48 h-20">
                <Image
                  src="https://gyatanutrition.com/wp-content/uploads/2025/12/gyata-big.png"
                  alt="Gyata Nutrition"
                  fill
                  sizes="192px"
                  className="object-contain object-left"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl">🇨🇦</span>
                <p className="text-sm font-bold text-white tracking-wide">Proudly Canadian</p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px self-stretch bg-white/10" />

            {/* Copy + CTA */}
            <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-white/30 mb-3">the brand behind it</p>
                <h3
                  className="font-black text-white leading-tight"
                  style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)' }}
                >
                  The protein<br />
                  <span className="text-yellow-400">Ceecefit reached for.</span>
                </h3>
                <p className="text-white/40 text-sm mt-3 leading-relaxed max-w-xs">
                  Clean formula. No fillers. Made for people who actually show up.
                </p>
              </div>
              <a
                href="https://gyatanutrition.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-2xl text-sm transition-all shrink-0 w-fit"
              >
                Visit Gyata Nutrition →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ─── POSTER ─── taller, dark */}
      <section className="relative bg-[#0d0d0d] overflow-hidden" style={{ minHeight: '680px', maxHeight: '88vh' }}>
        <span
          className="absolute inset-0 flex items-center justify-center font-black text-white/4 leading-none select-none pointer-events-none whitespace-nowrap"
          style={{ fontSize: 'clamp(7rem, 26vw, 22rem)' }}
        >
          CEECEFIT
        </span>
        <div className="absolute bottom-0 right-0 md:right-8 h-full w-[38vw] max-w-xs md:max-w-sm">
          <Image
            src="/no bg product .png"
            alt="Ceecefit"
            fill
            sizes="(max-width: 768px) 38vw, 360px"
            className="object-contain object-bottom"
          />
        </div>
        <div className="relative z-10 px-8 pt-16 md:pt-20 max-w-sm">
          <p className="text-[10px] uppercase tracking-[0.35em] text-white/30 mb-4">the face behind it</p>
          <p
            className="font-black leading-tight text-white mb-8"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
          >
            Real person.<br />
            Real tries.<br />
            <span className="text-yellow-400">No script.</span>
          </p>
          <button className="px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-full text-sm transition-all">
            Follow @ceecefit →
          </button>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="bg-[#111] text-white px-8 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.35em] text-white/30 mb-6">ready to try it?</p>
          <h2
            className="font-black leading-[0.88] uppercase mb-12"
            style={{ fontSize: 'clamp(2.8rem, 9vw, 7rem)' }}
          >
            20% off.<br />
            <span className="text-yellow-400">my code.</span><br />
            your call.
          </h2>
          <button className="w-full max-w-xs mx-auto block py-5 bg-yellow-400 hover:bg-yellow-300 active:scale-[0.99] text-black font-black rounded-2xl text-xl transition-all mb-8">
            CEECEFIT →
          </button>
          <div className="flex justify-center gap-3">
            <a href="#" className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-white/50 hover:text-white hover:border-white/30 transition-all text-sm">
              <span>📸</span> @ceecefit
            </a>
            <a href="#" className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-white/50 hover:text-white hover:border-white/30 transition-all text-sm">
              <span>▶</span> YouTube
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#0a0a0a] px-8 py-6 text-center text-[10px] text-white/15 uppercase tracking-widest">
        © 2024 Ceecefit · in collab with Gyata Nutrition
      </footer>

    </div>
  );
}
