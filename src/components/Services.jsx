import { Star, Play, ArrowUpRight } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Services() {
  const featuredRef = useScrollReveal();
  const card1Ref = useScrollReveal();
  const card2Ref = useScrollReveal();

  return (
    <section id="services" className="py-28 px-4 bg-purple-700">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-6xl md:text-8xl font-display font-extrabold text-center mb-20 uppercase tracking-tighter" style={{ textShadow: '4px 4px 0 #000' }}>
          What I Actually Do
        </h2>

        <div ref={featuredRef} className="reveal mb-8">
          <div className="group bg-white border-4 border-black p-10 md:p-12 shadow-[12px_12px_0px_0px_rgba(250,204,21,1)] hover:shadow-[6px_6px_0px_0px_rgba(250,204,21,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:border-purple-600 transition-all">
            <div className="mb-6 text-purple-600 group-hover:scale-110 transition-transform duration-300">
              <Star size={48} className="fill-current" />
            </div>
            <h3 className="text-4xl md:text-5xl font-display font-extrabold uppercase mb-4">Script Writing</h3>
            <p className="text-xl md:text-2xl font-bold text-gray-800 border-l-4 border-yellow-400 pl-4">
              Comedy first. Sales second. If they laugh, they buy.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div ref={card1Ref} className="reveal reveal-delay-1">
            <div className="group bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(255,255,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:border-purple-600 transition-all h-full">
              <div className="mb-6 text-purple-600 group-hover:scale-110 transition-transform duration-300">
                <Play size={40} className="fill-current" />
              </div>
              <h3 className="text-3xl font-display font-extrabold uppercase mb-4">Filming &amp; Editing</h3>
              <p className="text-lg font-bold text-gray-800 border-l-4 border-yellow-400 pl-4">
                Fast cuts. Sound effects. Visual gags. The good stuff.
              </p>
            </div>
          </div>

          <div ref={card2Ref} className="reveal reveal-delay-2">
            <div className="group bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(255,255,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:border-purple-600 transition-all h-full">
              <div className="mb-6 text-purple-600 group-hover:scale-110 transition-transform duration-300">
                <ArrowUpRight size={40} />
              </div>
              <h3 className="text-3xl font-display font-extrabold uppercase mb-4">Ad Management</h3>
              <p className="text-lg font-bold text-gray-800 border-l-4 border-yellow-400 pl-4">
                I pull the levers on Google &amp; YouTube so the right people see it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
