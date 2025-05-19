
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">О мероприятии</h3>
            <p className="text-gray-300 text-sm">
              Командный турнир ГТО — это спортивное мероприятие, объединяющее сотрудников
              компаний МИР и ЗАСЛОН в борьбе за звание самой спортивной команды.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              {['О турнире', 'Регистрация', 'Призы', 'Расписание', 'FAQ', 'Контакты'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Документы</h3>
            <ul className="space-y-2">
              {[
                'Положение о турнире',
                'Правила участия',
                'Техника безопасности',
                'Нормативы ГТО',
                'Политика конфиденциальности',
              ].map((doc) => (
                <li key={doc}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {doc}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Социальные сети</h3>
            <div className="flex flex-wrap gap-3 mb-6">
              {['#заслонгто', '#командагто', '#фотоотчет', '#спорт', '#слётмир', '#лето'].map((tag) => (
                <span key={tag} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {/* Social media icons placeholders */}
              {['VK', 'Telegram', 'YouTube'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-mir transition-colors"
                >
                  {social.charAt(0)}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-6 mt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © {currentYear} АО «НПП «МИР» и АО «ЗАСЛОН». Все права защищены.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 text-sm hover:text-white">Политика конфиденциальности</a>
            <a href="#" className="text-gray-400 text-sm hover:text-white">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
