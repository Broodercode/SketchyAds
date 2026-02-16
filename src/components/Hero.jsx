import { Zap } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Hero({ scrollToSection }) {
  const descRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  return (
    <section className="pt-32 pb-28 px-4 min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="absolute top-20 right-[-100px] w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-20 left-[-100px] w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 text-center lg:text-left">
        <div className="inline-block bg-black text-white px-4 py-2 font-bold mb-6 border-2 border-white shadow-[4px_4px_0px_0px_rgba(147,51,234,1)] animate-wiggle">
          Warning: Contains Comedy
        </div>

        <h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-extrabold leading-[0.9] mb-8 uppercase tracking-tighter">
          Stop <br />
          Being <br />
          <span className="text-white bg-purple-600 px-2 box-decoration-clone shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">Boring</span>
        </h1>

        <div ref={descRef} className="reveal">
          <p className="text-xl md:text-3xl font-bold max-w-2xl mb-14 leading-tight bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
            I write and shoot short-form ads in Calgary that make your customers <span className="text-purple-600 underline decoration-4 decoration-wavy">actually laugh</span>.
          </p>
        </div>

        <div ref={ctaRef} className="reveal reveal-delay-1">
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <button onClick={() => scrollToSection('contact')} className="bg-pink-500 text-black border-4 border-black px-8 py-4 font-display font-extrabold text-xl uppercase tracking-wider shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-3">
              <Zap size={28} className="fill-lime-400 stroke-black" />
              Wake Them Up
            </button>
            <button onClick={() => scrollToSection('services')} className="bg-white text-black border-4 border-black px-8 py-4 font-display font-extrabold text-xl uppercase tracking-wider shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:bg-slate-100 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
              How I Do It
            </button>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute right-20 top-1/3 transform rotate-12 bg-white p-4 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] max-w-xs text-center">
        <div className="bg-black text-white font-bold text-xs uppercase p-1 mb-2">My Guarantee</div>
        <p className="font-display font-extrabold text-xl leading-none">&quot;IF THEY DON&apos;T LAUGH, I&apos;LL EAT MY HAT.&quot;</p>
        <div className="text-xs mt-2 text-gray-500">(Disclaimer: I don&apos;t wear hats)</div>
      </div>
    </section>
  );
}
