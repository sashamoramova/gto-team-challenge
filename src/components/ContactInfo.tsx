
import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { ContactPerson } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const contacts: ContactPerson[] = [
  {
    name: 'Иванов Иван',
    position: 'Руководитель мероприятия',
    photo: '/placeholder.svg',
    phone: '+7 (999) 123-45-67',
    email: 'ivanov@example.com'
  },
  {
    name: 'Петрова Анна',
    position: 'Координатор регистрации',
    photo: '/placeholder.svg',
    phone: '+7 (999) 765-43-21',
    email: 'petrova@example.com'
  }
];

const ContactInfo: React.FC = () => {
  return (
    <section id="contacts" className="py-16">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Контакты</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          {contacts.map((person) => (
            <Card key={person.name} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row">
                  <div className="w-full sm:w-1/3 bg-gray-100 p-4 flex justify-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200">
                      <img 
                        src={person.photo} 
                        alt={person.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="p-6 w-full sm:w-2/3">
                    <h3 className="font-bold text-lg">{person.name}</h3>
                    <p className="text-gray-600 mb-4">{person.position}</p>
                    
                    {person.phone && (
                      <div className="flex items-center mb-2">
                        <Phone size={16} className="text-mir mr-2" />
                        <a 
                          href={`tel:${person.phone.replace(/\D/g, '')}`}
                          className="text-gray-700 hover:text-mir"
                        >
                          {person.phone}
                        </a>
                      </div>
                    )}
                    
                    {person.email && (
                      <div className="flex items-center">
                        <Mail size={16} className="text-mir mr-2" />
                        <a 
                          href={`mailto:${person.email}`}
                          className="text-gray-700 hover:text-mir"
                        >
                          {person.email}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-gray-100 p-8 rounded-xl max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Остались вопросы?</h3>
            <p className="text-gray-600">Свяжитесь с нами любым удобным способом</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="bg-white">
              <Phone className="mr-2 h-4 w-4" />
              Горячая линия
            </Button>
            <Button variant="outline" className="bg-white">
              <Mail className="mr-2 h-4 w-4" />
              Email поддержка
            </Button>
            <Button variant="outline" className="bg-white">
              <MessageCircle className="mr-2 h-4 w-4" />
              Чат в Telegram
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
