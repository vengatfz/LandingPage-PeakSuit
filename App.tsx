import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Results } from './components/Results';
import { OfferStack } from './components/OfferStack';
import { Security } from './components/Security';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { Button } from './components/Button';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Header openModal={openModal} />
      
      <main>
        <Hero openModal={openModal} />
        <Results />
        <OfferStack openModal={openModal} />
        <Security />
        <FAQ />
        
        {/* Final CTA Section */}
        <section className="py-24 bg-brand-900 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Cost of Inaction is Compound Interest on Inefficiency.
            </h2>
            <p className="text-brand-100 text-lg mb-10 max-w-2xl mx-auto">
              Your competitors are already automating. Secure your infrastructure audit before Q4 capacity is filled.
            </p>
            <div className="flex justify-center">
              <Button 
                onClick={openModal} 
                className="bg-white text-brand-900 hover:bg-brand-50 shadow-xl"
                withArrow
              >
                Schedule Executive Briefing
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;