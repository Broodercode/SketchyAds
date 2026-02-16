import { Zap } from 'lucide-react';

export default function Footer({ scrollToSection }) {
  return (
    <footer className="bg-black text-white py-12 border-t-8 border-purple-600">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="font-display font-extrabold text-4xl mb-4 italic">
          SKETCHY<span className="text-yellow-300">ADS</span>
        </div>
        <p className="font-bold uppercase tracking-widest text-sm text-gray-500 mb-8">
          Making boring businesses look cool.
        </p>

        <hr className="border-purple-600 border-t-2 max-w-md mx-auto mb-8" />

        <p className="font-display font-extrabold text-2xl md:text-3xl text-white mb-6 uppercase">
          Ready to go viral?
        </p>
        <button
          onClick={() => scrollToSection('contact')}
          className="inline-flex items-center gap-3 bg-yellow-300 text-black border-4 border-white px-8 py-4 font-display font-extrabold text-lg uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(147,51,234,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(147,51,234,1)] transition-all"
        >
          <Zap size={24} className="fill-purple-600 stroke-purple-600" />
          Let&apos;s Talk
        </button>
      </div>
    </footer>
  );
}
