
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutEvent: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-event-light">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-event-dark">О мероприятии</h2>
            
            <p className="text-gray-700 mb-4">
              Командный турнир ГТО — это уникальное соревнование, объединяющее спортивный дух и корпоративную культуру.
              Событие включает нормативы ГТО и мини-футбол в формате дружеского соревнования между подразделениями компаний.
            </p>
            
            <p className="text-gray-700 mb-6">
              Участники смогут не только проверить свою физическую форму, но и укрепить командный дух. 
              Для болельщиков предусмотрена насыщенная программа с конкурсами и активностями.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button className="btn-primary h-12 px-6 text-base">
                Зарегистрироваться
                <ArrowRight size={18} />
              </Button>
              
              <Button variant="outline" className="h-12 px-6 text-base border-mir text-mir hover:bg-mir hover:text-white">
                Фото с прошлых мероприятий
              </Button>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-400">Фото мероприятия</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEvent;
