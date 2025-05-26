
import React from 'react';
import Header from '@/components/Header';
import AboutEvent from '@/components/AboutEvent';
import RegistrationOptions from '@/components/RegistrationOptions';
import Prizes from '@/components/Prizes';
import MapSection from '@/components/MapSection';
import FAQ from '@/components/FAQ';
import ContactInfo from '@/components/ContactInfo';
import Footer from '@/components/Footer';
import InfiniteMarquee from '@/components/InfiniteMarquee';

const Index: React.FC = () => {
  const marqueeItems = [
    "🏆 ГТО - Командный Турнир 2025",
    "💪 Создай команду мечты",
    "🎯 Борись за призы до 1 000 000 ₽",
    "⚽ Мини-футбол и ГТО",
    "🔥 #СЛЁТ #МИР #ЛЕТО",
    "📅 31 мая 2025",
    "🏢 АО «НПП «МИР»"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <title>ГТО - Командный Турнир</title>
      <Header />
      
      {/* Бегущая строка */}
      <InfiniteMarquee 
        items={marqueeItems} 
        speed={25}
        className="border-b border-white/20"
      />
      
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
