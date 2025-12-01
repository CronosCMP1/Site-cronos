
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import PainPoints from './components/PainPoints';
import ClientLogos from './components/ClientLogos';
import Methodology from './components/Methodology';
import Services from './components/Services';
import Showcase from './components/Showcase';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-cronos-black min-h-screen text-cronos-white selection:bg-cronos-orange selection:text-white">
      <Header />
      {/* Main Sections */}
      <main className="relative">
        <Hero />
        <Marquee />
        <div className="relative z-10 bg-cronos-black">
          <PainPoints />
          <ClientLogos />
          <Methodology />
          <Services />
          <Showcase />
          <FAQ />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default App;
