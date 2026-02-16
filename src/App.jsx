import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeDivider from './components/MarqueeDivider';
import Vibe from './components/Vibe';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WaveDivider from './components/WaveDivider';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-lime-400 font-body text-black selection:bg-black selection:text-lime-400 overflow-x-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-white focus:border-4 focus:border-black focus:p-3 focus:font-bold"
      >
        Skip to content
      </a>

      <Navbar scrollToSection={scrollToSection} />

      <main id="main-content">
        <Hero scrollToSection={scrollToSection} />
        <WaveDivider color="#000000" bgColor="#a3e635" />
        <MarqueeDivider />
        <WaveDivider color="#ffffff" bgColor="#000000" />
        <Vibe />
        <WaveDivider color="#7e22ce" bgColor="#ffffff" />
        <Services />
        <WaveDivider color="#a3e635" bgColor="#7e22ce" />
        <ContactForm />
        <WaveDivider color="#000000" bgColor="#a3e635" />
      </main>

      <Footer scrollToSection={scrollToSection} />
      <ScrollToTop />
    </div>
  );
}
