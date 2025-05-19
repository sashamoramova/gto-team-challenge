
import React from 'react';
import Header from '@/components/Header';
import AboutEvent from '@/components/AboutEvent';
import RegistrationOptions from '@/components/RegistrationOptions';
import Prizes from '@/components/Prizes';
import MapSection from '@/components/MapSection';
import FAQ from '@/components/FAQ';
import ContactInfo from '@/components/ContactInfo';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <title>ГТО - Командный Турнир</title>
      <Header />
      <AboutEvent />
      <RegistrationOptions />
      <Prizes />
      <MapSection />
      <FAQ />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default Index;
