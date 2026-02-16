import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', business: '', email: '' });
  const [formStatus, setFormStatus] = useState({ submitting: false, success: false, error: null });
  const sectionRef = useScrollReveal();

  useEffect(() => {
    if (!formStatus.success) return;
    const timer = setTimeout(() => {
      setFormStatus((prev) => ({ ...prev, success: false }));
    }, 5000);
    return () => clearTimeout(timer);
  }, [formStatus.success]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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

  return (
    <section id="contact" className="py-28 px-4 bg-yellow-300 relative overflow-hidden">
      <div ref={sectionRef} className="reveal max-w-4xl mx-auto relative z-10">
        <div className="bg-black p-8 md:p-16 border-4 border-white shadow-[20px_20px_0px_0px_rgba(147,51,234,1)] transform -rotate-1 relative overflow-hidden">
          <div className="absolute inset-0 pattern-dots pointer-events-none"></div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-7xl font-display font-extrabold text-white mb-6 uppercase">Let&apos;s Get Weird</h2>
              <p className="text-xl text-yellow-300 font-bold max-w-lg mx-auto">
                Tell me about your business. I&apos;ll tell you a joke about it. If you laugh, we work together.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-white font-display font-bold uppercase mb-2 group-hover:text-yellow-300 transition-colors">Who are you?</label>
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
                  <label className="block text-white font-display font-bold uppercase mb-2 group-hover:text-yellow-300 transition-colors">What do you sell?</label>
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
                <label className="block text-white font-display font-bold uppercase mb-2 group-hover:text-yellow-300 transition-colors">Where can I reach you?</label>
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

              <div aria-live="polite">
                {formStatus.success && (
                  <div className="bg-green-500 border-4 border-white p-4 text-white font-display font-bold text-center uppercase">
                    BOOM! Message sent! I&apos;ll be in touch soon.
                  </div>
                )}

                {formStatus.error && (
                  <div className="bg-red-500 border-4 border-white p-4 text-white font-display font-bold text-center uppercase">
                    {formStatus.error}
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={formStatus.submitting}
                className="w-full bg-purple-600 hover:bg-white hover:text-purple-600 text-white border-4 border-transparent hover:border-purple-600 p-6 font-display font-extrabold text-2xl uppercase tracking-widest transition-all transform hover:-translate-y-1 hover:shadow-[0px_10px_0px_0px_rgba(0,0,0,1)] flex justify-center items-center gap-4 mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus.submitting ? 'Sending...' : 'Unleash the Chaos'} <MessageCircle size={32} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
