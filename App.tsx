import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import ClientLogos from './components/ClientLogos';
import Methodology from './components/Methodology';
import Showcase from './components/Showcase';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import { ModalProvider } from './context/ModalContext';

const App: React.FC = () => {
  return (
    <ModalProvider>
      <div className="bg-cronos-black min-h-screen text-cronos-white selection:bg-cronos-orange selection:text-white">
        <Header />
        <main className="relative">
          <Hero />
          <Marquee />
          <div className="relative z-10 bg-cronos-black">
            <ClientLogos />
            <Methodology />
            <Showcase />
            <FAQ />
          </div>
          <Footer />
        </main>
        <ContactModal />
      </div>
    </ModalProvider>
  );
};

export default App;
