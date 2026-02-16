import { useState } from 'react';
import { 
  Play, 
  MapPin, 
  ArrowUpRight, 
  Zap, 
  Mic2, 
  Menu, 
  X,
  Star,
  MessageCircle,
  Video
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', business: '', email: '' });
  const [formStatus, setFormStatus] = useState({ submitting: false, success: false, error: null });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, error: null });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          business: formData.business,
          email: formData.email,
          subject: `New Contact from ${formData.name} - ${formData.business}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', business: '', email: '' });
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (error) {
      setFormStatus({ submitting: false, success: false, error: error.message });
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-yellow-300 font-sans text-black selection:bg-black selection:text-yellow-300 overflow-x-hidden">
      
      {/* Nav - Floating Brutalist Block */}
      <nav className="fixed w-full z-50 top-4 px-4 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
          {/* Logo */}
          <div className="bg-white border-4 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer">
            <span className="font-black text-xl tracking-tighter italic">
              SKETCHY<span className="text-purple-600">ADS</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-4">
            {['Vibe', 'Services', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="bg-white border-4 border-black px-6 py-2 font-black uppercase hover:bg-purple-600 hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="lg:hidden bg-white border-4 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-purple-600 z-40 flex flex-col justify-center items-center space-y-8">
          {['Vibe', 'Services', 'Contact'].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-white text-5xl font-black uppercase hover:text-yellow-300 italic transform -rotate-2 hover:rotate-2 transition-transform"
            >
              {item}
            </button>
          ))}
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 min-h-screen flex flex-col justify-center relative overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute top-20 right-[-100px] w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-20 left-[-100px] w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10 text-center lg:text-left">
          
          <div className="inline-block bg-black text-white px-4 py-2 font-bold transform -rotate-3 mb-6 border-2 border-white shadow-[4px_4px_0px_0px_rgba(147,51,234,1)]">
            Warning: Contains Comedy
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] mb-8 uppercase tracking-tighter">
            Stop <br/>
            Being <br/>
            <span className="text-white bg-purple-600 px-2 box-decoration-clone shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">Boring</span>
          </h1>

          <p className="text-xl md:text-3xl font-bold max-w-2xl mb-10 leading-tight bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
            I write and shoot short-form ads in Calgary that make your customers <span className="text-purple-600 underline decoration-4 decoration-wavy">actually laugh</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <button onClick={() => scrollToSection('contact')} className="bg-pink-500 text-black border-4 border-black px-8 py-4 font-black text-xl uppercase tracking-wider shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-3">
              <Zap size={28} className="fill-yellow-300 stroke-black" />
              Wake Them Up
            </button>
            <button onClick={() => scrollToSection('services')} className="bg-white text-black border-4 border-black px-8 py-4 font-black text-xl uppercase tracking-wider shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:bg-slate-100 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
              How I Do It
            </button>
          </div>
        </div>

        {/* Floating Sticker Element */}
        <div className="hidden lg:block absolute right-20 top-1/3 transform rotate-12 bg-white p-4 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] max-w-xs text-center">
          <div className="bg-black text-white font-bold text-xs uppercase p-1 mb-2">My Guarantee</div>
          <p className="font-black text-xl leading-none">&quot;IF THEY DON&apos;T LAUGH, I&apos;LL EAT MY HAT.&quot;</p>
          <div className="text-xs mt-2 text-gray-500">(Disclaimer: I don&apos;t wear hats)</div>
        </div>
      </section>

      {/* Marquee Divider */}
      <div className="bg-black text-yellow-300 py-6 border-y-4 border-black overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee font-black text-4xl uppercase tracking-widest">
          No More Generic Ads • Calgary Based • Viral Strategy • Google & YouTube • No More Generic Ads • Calgary Based • Viral Strategy • Google & YouTube •
        </div>
      </div>

      {/* Vibe / Philosophy Section */}
      <section id="vibe" className="py-24 px-4 bg-white pattern-grid-lg text-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative">
              {/* Stacked Cards Visual */}
              <div className="absolute inset-0 bg-black translate-x-4 translate-y-4 border-4 border-black"></div>
              <div className="absolute inset-0 bg-purple-600 translate-x-2 translate-y-2 border-4 border-black"></div>
              <div className="relative bg-white border-4 border-black p-8 md:p-12">
                <h3 className="text-4xl font-black uppercase mb-6">The &quot;Me&quot; Factor</h3>
                <p className="text-lg font-bold mb-4">
                  Big agencies send you a 40-page PDF and charge you $5k for &quot;strategy.&quot;
                </p>
                <p className="text-lg mb-4">
                  I send you a script that makes you spit out your coffee.
                </p>
                <p className="text-lg font-bold">
                  I&apos;m a solo operator. I don&apos;t have overhead. I have a camera, a weird sense of humor, and a deep understanding of what makes locals click.
                </p>
                <div className="mt-8 flex gap-2">
                   <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-black"></div>
                   <div className="w-4 h-4 rounded-full bg-yellow-500 border-2 border-black"></div>
                   <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-black"></div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-yellow-300 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 hover:rotate-1 transition-transform cursor-crosshair">
                <h4 className="font-black text-2xl uppercase mb-2 flex items-center gap-2">
                  <Video className="w-8 h-8" /> Short Form King
                </h4>
                <p className="font-medium">The world has the attention span of a goldfish. I make 15-second masterpieces that fit right into YouTube Shorts and Google feeds.</p>
              </div>

              <div className="bg-pink-400 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1 hover:-rotate-1 transition-transform cursor-crosshair">
                <h4 className="font-black text-2xl uppercase mb-2 flex items-center gap-2">
                  <Mic2 className="w-8 h-8" /> Pro Voice Talent
                </h4>
                <p className="font-medium">I&apos;m solo, but I&apos;m not alone. I contract professional voice actors who sound like they belong in a Marvel trailer.</p>
              </div>

              <div className="bg-blue-400 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 hover:rotate-1 transition-transform cursor-crosshair">
                <h4 className="font-black text-2xl uppercase mb-2 flex items-center gap-2">
                  <MapPin className="w-8 h-8" /> Hyper-Local
                </h4>
                <p className="font-medium">We aren&apos;t targeting &quot;America.&quot; We are targeting the 5-mile radius around your front door. Zero wasted spend.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 px-4 bg-purple-700">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white text-6xl md:text-8xl font-black text-center mb-20 uppercase tracking-tighter" style={{ textShadow: '4px 4px 0 #000' }}>
            What I Actually Do
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Script Writing", desc: "Comedy first. Sales second. If they laugh, they buy.", icon: <Star size={40} className="fill-current" /> },
              { title: "Filming & Editing", desc: "Fast cuts. Sound effects. Visual gags. The good stuff.", icon: <Play size={40} className="fill-current" /> },
              { title: "Ad Management", desc: "I pull the levers on Google & YouTube so the right people see it.", icon: <ArrowUpRight size={40} /> }
            ].map((service, i) => (
              <div key={i} className="group bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(255,255,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all">
                <div className="mb-6 text-purple-600 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-black uppercase mb-4">{service.title}</h3>
                <p className="text-lg font-bold text-gray-800 border-l-4 border-yellow-400 pl-4">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-yellow-300 relative overflow-hidden">
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="bg-black p-8 md:p-16 border-4 border-white shadow-[20px_20px_0px_0px_rgba(147,51,234,1)] transform -rotate-1">
            
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase">Let&apos;s Get Weird</h2>
              <p className="text-xl text-yellow-300 font-bold max-w-lg mx-auto">
                Tell me about your business. I&apos;ll tell you a joke about it. If you laugh, we work together.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-white font-black uppercase mb-2 group-hover:text-yellow-300 transition-colors">Who are you?</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white border-4 border-transparent focus:border-purple-500 p-4 font-bold outline-none transition-all" 
                    placeholder="Your Name" 
                  />
                </div>
                <div className="group">
                  <label className="block text-white font-black uppercase mb-2 group-hover:text-yellow-300 transition-colors">What do you sell?</label>
                  <input 
                    type="text" 
                    name="business"
                    value={formData.business}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white border-4 border-transparent focus:border-purple-500 p-4 font-bold outline-none transition-all" 
                    placeholder="Tacos? Insurance? Lawnmowers?" 
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-white font-black uppercase mb-2 group-hover:text-yellow-300 transition-colors">Where can I reach you?</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white border-4 border-transparent focus:border-purple-500 p-4 font-bold outline-none transition-all" 
                  placeholder="email@address.com" 
                />
              </div>

              {formStatus.success && (
                <div className="bg-green-500 border-4 border-white p-4 text-white font-black text-center uppercase">
                  🎉 BOOM! Message sent! I&apos;ll be in touch soon.
                </div>
              )}

              {formStatus.error && (
                <div className="bg-red-500 border-4 border-white p-4 text-white font-black text-center uppercase">
                  ⚠️ {formStatus.error}
                </div>
              )}

              <button 
                type="submit"
                disabled={formStatus.submitting}
                className="w-full bg-purple-600 hover:bg-white hover:text-purple-600 text-white border-4 border-transparent hover:border-purple-600 p-6 font-black text-2xl uppercase tracking-widest transition-all transform hover:-translate-y-1 hover:shadow-[0px_10px_0px_0px_rgba(0,0,0,1)] flex justify-center items-center gap-4 mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus.submitting ? 'Sending...' : 'Unleash the Chaos'} <MessageCircle size={32} />
              </button>
            </form>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t-8 border-purple-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="font-black text-4xl mb-4 italic">
            SKETCHY<span className="text-yellow-300">ADS</span>
          </div>
          <p className="font-bold uppercase tracking-widest text-sm text-gray-500">
            Making boring businesses look cool.
          </p>
        </div>
      </footer>

      {/* CSS for custom animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .pattern-grid-lg {
          background-image: radial-gradient(#000 2px, transparent 2px);
          background-size: 30px 30px;
        }
      `}</style>
    </div>
  );
}
