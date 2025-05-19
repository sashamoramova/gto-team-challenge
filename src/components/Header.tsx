
import React from 'react';
import ProgressBar from './ProgressBar';
import { EventStage } from '@/types';
import { Calendar } from 'lucide-react';

const eventStages: EventStage[] = [
  {
    id: 1,
    title: 'Регистрация',
    description: 'Создайте команду и зарегистрируйтесь',
    isActive: true,
    isCompleted: false
  },
  {
    id: 2,
    title: 'Подготовка',
    description: 'Тренировки и подготовка к соревнованиям',
    isActive: false,
    isCompleted: false
  },
  {
    id: 3,
    title: 'Турнир',
    description: 'День проведения спортивного мероприятия',
    isActive: false,
    isCompleted: false
  },
  {
    id: 4,
    title: 'Награждение',
    description: 'Церемония награждения победителей',
    isActive: false,
    isCompleted: false
  }
];

const Header: React.FC = () => {
  return (
    <header className="relative bg-white py-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-mir/5 to-zaslon/5 -z-10" />
      
      <div className="container">
        {/* Company logos */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-6">
            <div className="relative w-24 h-12 bg-gray-200 flex items-center justify-center rounded-md">
              <span className="text-mir font-bold">МИР</span>
            </div>
            <div className="relative w-24 h-12 bg-gray-200 flex items-center justify-center rounded-md">
              <span className="text-zaslon font-bold">ЗАСЛОН</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar size={16} />
            <span>31 мая 2025</span>
            <span className="mx-2">•</span>
            <span>АО «НПП «МИР»</span>
          </div>
        </div>

        {/* Main title */}
        <div className="flex flex-col items-center text-center my-10">
          <h1 className="text-4xl md:text-6xl font-bold text-event-dark mb-2 animate-fade-in">
            ГТО - Командный Турнир
          </h1>
          <div className="h-2 w-24 bg-gradient-to-r from-mir to-zaslon rounded-full mb-4"></div>
          <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
            Покори новый рубеж!
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Создай команду из 10 друзей и борись за звание лучшей сборной АО «ЗАСЛОН и ГК»
          </p>

          {/* Hashtags */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['#СЛЁТ', '#МИР', '#ЛЕТО'].map((tag) => (
              <span 
                key={tag} 
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="max-w-3xl mx-auto">
          <ProgressBar stages={eventStages} />
        </div>
      </div>
    </header>
  );
};

export default Header;
