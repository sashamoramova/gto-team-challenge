
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
    <img key="icon1" src="/datWhite.svg" alt="separator" style={{height: '20px', width: 'auto'}} />,
    "💪 Создай команду мечты",
    <img key="icon2" src="/datWhite.svg" alt="separator" style={{height: '20px', width: 'auto'}} />,
    "🎯 Борись за призы до 1 000 000 ₽",
    <img key="icon3" src="/datWhite.svg" alt="separator" style={{height: '20px', width: 'auto'}} />,
    "⚽ Мини-футбол и ГТО",
    <img key="icon4" src="/datWhite.svg" alt="separator" style={{height: '20px', width: 'auto'}} />,
    "🔥 #СЛЁТ #МИР #ЛЕТО",
    <img key="icon5" src="/datWhite.svg" alt="separator" style={{height: '20px', width: 'auto'}} />,
    "📅 31 мая 2025",
    <img key="icon6" src="/datWhite.svg" alt="separator" style={{height: '20px', width: 'auto'}} />,
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
