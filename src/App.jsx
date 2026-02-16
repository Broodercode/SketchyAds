import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeDivider from './components/MarqueeDivider';
import Vibe from './components/Vibe';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-yellow-300 font-sans text-black selection:bg-black selection:text-yellow-300 overflow-x-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-white focus:border-4 focus:border-black focus:p-3 focus:font-bold"
      >
        Skip to content
      </a>

      <Navbar scrollToSection={scrollToSection} />

      <main id="main-content">
        <Hero scrollToSection={scrollToSection} />
        <MarqueeDivider />
        <Vibe />
        <Services />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
