
import React, { useState } from 'react';
import { ChevronRight, Users, Trophy, EyeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import RegistrationForm from './RegistrationForm';

const optionIcons = {
  gto: <Trophy className="h-12 w-12 text-mir" />,
  football: <Users className="h-12 w-12 text-zaslon" />,
  spectator: <EyeIcon className="h-12 w-12 text-gray-500" />,
};

const RegistrationOptions: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<'gto' | 'football' | 'spectator' | null>(null);
  
  return (
    <section id="registration" className="py-16">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-event-dark">Выберите вариант участия</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Присоединяйтесь к нашему спортивному празднику в качестве участника командных соревнований или болельщика
        </p>
        
        {!selectedOption ? (
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                id: 'gto',
                title: 'Регистрация на ГТО',
                description: 'Создайте команду из 10 человек для выполнения нормативов ГТО',
                icon: optionIcons.gto,
                color: 'from-mir/20 to-mir/5',
                border: 'border-mir/30',
                hover: 'hover:border-mir',
              },
              {
                id: 'football',
                title: 'Регистрация на мини-футбол',
                description: 'Соберите команду из 7 игроков для турнира по мини-футболу',
                icon: optionIcons.football,
                color: 'from-zaslon/20 to-zaslon/5',
                border: 'border-zaslon/30',
                hover: 'hover:border-zaslon',
              },
              {
                id: 'spectator',
                title: 'Пойду как зритель',
                description: 'Зарегистрируйтесь в качестве болельщика и поддержите команды',
                icon: optionIcons.spectator,
                color: 'from-gray-100 to-gray-50',
                border: 'border-gray-200',
                hover: 'hover:border-gray-400',
              },
            ].map(option => (
              <Card 
                key={option.id}
                className={`relative overflow-hidden border-2 ${option.border} ${option.hover} transition-all duration-300 cursor-pointer group`}
                onClick={() => setSelectedOption(option.id as any)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${option.color} -z-10`}></div>
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {option.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{option.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 min-h-[3rem]">
                    {option.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button 
                    variant="ghost" 
                    className="group-hover:translate-x-1 transition-transform flex items-center gap-1"
                    onClick={() => setSelectedOption(option.id as any)}
                  >
                    Выбрать <ChevronRight size={16} />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <RegistrationForm 
              type={selectedOption} 
              onBack={() => setSelectedOption(null)} 
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default RegistrationOptions;
