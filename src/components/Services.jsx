import { Star, Play, ArrowUpRight } from 'lucide-react';

export default function Services() {
  const services = [
    { title: 'Script Writing', desc: 'Comedy first. Sales second. If they laugh, they buy.', icon: <Star size={40} className="fill-current" /> },
    { title: 'Filming & Editing', desc: 'Fast cuts. Sound effects. Visual gags. The good stuff.', icon: <Play size={40} className="fill-current" /> },
    { title: 'Ad Management', desc: 'I pull the levers on Google & YouTube so the right people see it.', icon: <ArrowUpRight size={40} /> },
  ];

  return (
    <section id="services" className="py-24 px-4 bg-purple-700">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-6xl md:text-8xl font-display font-extrabold text-center mb-20 uppercase tracking-tighter" style={{ textShadow: '4px 4px 0 #000' }}>
          What I Actually Do
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="group bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(255,255,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all">
              <div className="mb-6 text-purple-600 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-3xl font-display font-extrabold uppercase mb-4">{service.title}</h3>
              <p className="text-lg font-bold text-gray-800 border-l-4 border-yellow-400 pl-4">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
