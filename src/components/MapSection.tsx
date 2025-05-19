
import React from 'react';
import { MapPin, Clock, Bus } from 'lucide-react';

const MapSection: React.FC = () => {
  return (
    <section id="location" className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Как добраться</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Информация о месте проведения</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">АО «НПП «МИР»</p>
                    <p className="text-gray-600">г. Санкт-Петербург, ул. Примерная, д. 123</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-mir mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Время проведения</p>
                    <p className="text-gray-600">31 мая 2025, 10:00 - 18:00</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Bus className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Как добраться</p>
                    <p className="text-gray-600">
                      На общественном транспорте: автобусы №123, №456 до остановки "НПП МИР".<br />
                      На личном транспорте: парковка доступна на территории предприятия.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-mir/5 border border-mir/20 rounded-lg">
              <p className="text-gray-700 text-sm">
                <strong>Важно:</strong> При входе на территорию необходимо предъявить документ, удостоверяющий личность. 
                Регистрация команд начинается за 1,5 часа до начала мероприятия.
              </p>
            </div>
          </div>
          
          <div className="h-[400px] bg-gray-200 rounded-lg relative overflow-hidden shadow-md">
            {/* Placeholder for map */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-500">Интерактивная карта</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
