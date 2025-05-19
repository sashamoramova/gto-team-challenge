
import React from 'react';
import { FAQ as FAQType } from '@/types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems: FAQType[] = [
  {
    id: 1,
    question: 'Какая форма одежды необходима для участия?',
    answer: 'Для участия в ГТО рекомендуется спортивная форма и кроссовки. Для мини-футбола необходима спортивная форма, футбольная обувь и защита голени. Каждая команда должна иметь отличительные элементы (футболки одного цвета).',
  },
  {
    id: 2,
    question: 'Будет ли предоставлена вода и питание?',
    answer: 'Да, на мероприятии будут организованы пункты с питьевой водой для участников. Также будет работать фуд-корт, где можно будет приобрести еду.',
  },
  {
    id: 3,
    question: 'Как будет проходить регистрация в день мероприятия?',
    answer: 'Регистрация команд начнется за 1,5 часа до начала соревнований. Капитану необходимо подойти к стойке регистрации с документами всех членов команды.',
  },
  {
    id: 4,
    question: 'Что делать, если участник не может выполнить норматив по здоровью?',
    answer: 'В случае медицинских противопоказаний, команда может произвести замену участника до начала соревнований, предварительно уведомив организаторов.',
  },
  {
    id: 5,
    question: 'Будет ли медицинская помощь на мероприятии?',
    answer: 'Да, на протяжении всего мероприятия будет дежурить медицинский персонал для оказания первой помощи.',
  },
  {
    id: 6,
    question: 'Будет ли фото и видеосъемка мероприятия?',
    answer: 'Да, на мероприятии будет работать фотограф и видеограф. Все материалы будут доступны после мероприятия на официальном сайте.',
  },
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-16">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Часто задаваемые вопросы</h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={`item-${item.id}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
