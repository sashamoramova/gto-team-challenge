
import React from 'react';
import { Trophy } from 'lucide-react';
import { Prize } from '@/types';
import { Card, CardContent } from '@/components/ui/card';

const prizes: Prize[] = [
  {
    place: 1,
    amount: '1 000 000 ₽',
    description: 'И звание лучшей команды года'
  },
  {
    place: 2,
    amount: '500 000 ₽',
    description: 'И памятные награды'
  },
  {
    place: 3,
    amount: '250 000 ₽',
    description: 'И памятные награды'
  }
];

const Prizes: React.FC = () => {
  return (
    <section id="prizes" className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <Trophy className="mx-auto h-12 w-12 text-yellow-500 mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Призовой фонд</h2>
          <p className="text-gray-600 mt-2">За победу в соревнованиях команды получат ценные призы</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {prizes.map((prize) => {
            // Determine styles based on place
            let bgGradient = 'from-gray-100 to-white';
            let borderColor = 'border-gray-200';
            let medalColor = 'text-gray-400';
            
            if (prize.place === 1) {
              bgGradient = 'from-yellow-100 to-yellow-50';
              borderColor = 'border-yellow-300';
              medalColor = 'text-yellow-500';
            } else if (prize.place === 2) {
              bgGradient = 'from-gray-200 to-gray-50';
              borderColor = 'border-gray-300';
              medalColor = 'text-gray-500';
            } else if (prize.place === 3) {
              bgGradient = 'from-amber-100 to-amber-50';
              borderColor = 'border-amber-300';
              medalColor = 'text-amber-600';
            }
            
            return (
              <Card 
                key={prize.place}
                className={`text-center overflow-hidden border-2 ${borderColor} hover:shadow-md transition-shadow`}
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${bgGradient} -z-10`}></div>
                
                <CardContent className="pt-8 pb-6 px-4">
                  <div className="relative mb-4">
                    <div className={`text-5xl font-bold ${medalColor}`}>
                      {prize.place}
                    </div>
                    <div className="text-sm text-gray-500 uppercase font-medium">
                      место
                    </div>
                  </div>
                  
                  <div className="my-6">
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {prize.amount}
                    </div>
                    {prize.description && (
                      <div className="text-sm text-gray-600">
                        {prize.description}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Prizes;
