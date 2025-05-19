
import React, { useState } from 'react';
import { ArrowLeft, Plus, Upload, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RegistrationFormData } from '@/types';

interface RegistrationFormProps {
  type: 'gto' | 'football' | 'spectator';
  onBack: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ type, onBack }) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<Partial<RegistrationFormData>>({
    teamName: '',
    captain: { name: '', phone: '', email: '' },
    participants: type === 'gto' ? Array(10).fill({ name: '', age: '' }) : Array(7).fill({ name: '', age: '' }),
    motivation: '',
    videoLink: '',
  });
  
  const titles = {
    gto: 'Регистрация на ГТО',
    football: 'Регистрация на мини-футбол',
    spectator: 'Регистрация болельщика',
  };

  const participantsCount = type === 'gto' ? 10 : type === 'football' ? 7 : 1;
  const totalSteps = type === 'spectator' ? 1 : type === 'football' ? 2 : 3;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name.startsWith('participant')) {
      const [_, index, field] = name.split('-');
      const updatedParticipants = [...(formData.participants || [])];
      updatedParticipants[Number(index)] = {
        ...updatedParticipants[Number(index)],
        [field]: value,
      };
      
      setFormData({
        ...formData,
        participants: updatedParticipants,
      });
    } else if (name.startsWith('captain')) {
      const field = name.split('-')[1];
      setFormData({
        ...formData,
        captain: {
          ...(formData.captain || {}),
          [field]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // Submit form data
      console.log('Form submitted:', formData);
      // You would typically send this to an API
      alert('Регистрация успешно отправлена!');
      onBack();
    }
  };
  
  const renderFormStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div className="space-y-4">
              {type !== 'spectator' && (
                <div className="space-y-2">
                  <Label htmlFor="teamName">Название команды</Label>
                  <Input 
                    id="teamName" 
                    name="teamName" 
                    value={formData.teamName || ''} 
                    onChange={handleChange} 
                    placeholder="Введите название команды"
                    required
                  />
                </div>
              )}
              
              <div className="pt-4 border-t border-gray-200">
                <h3 className="text-lg font-semibold mb-4">
                  {type === 'spectator' ? 'Ваши данные' : 'Капитан команды'}
                </h3>
                
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="captain-name">ФИО</Label>
                    <Input 
                      id="captain-name" 
                      name="captain-name" 
                      value={formData.captain?.name || ''} 
                      onChange={handleChange} 
                      placeholder="Введите ФИО"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="captain-phone">Телефон</Label>
                    <Input 
                      id="captain-phone" 
                      name="captain-phone" 
                      type="tel"
                      value={formData.captain?.phone || ''} 
                      onChange={handleChange} 
                      placeholder="+7 (___) ___-__-__"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="captain-email">Email</Label>
                    <Input 
                      id="captain-email" 
                      name="captain-email" 
                      type="email"
                      value={formData.captain?.email || ''} 
                      onChange={handleChange} 
                      placeholder="email@example.com"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {type === 'spectator' && (
              <div className="mt-6">
                <p className="text-sm text-gray-500">
                  Регистрируясь как болельщик, вы сможете поддержать команды и участвовать в конкурсах для зрителей
                </p>
              </div>
            )}
          </>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Участники команды</h3>
            <p className="text-sm text-gray-500 mb-4">
              {type === 'gto' 
                ? 'Добавьте информацию о 10 участниках команды' 
                : 'Добавьте информацию о 7 игроках команды'}
            </p>
            
            {Array.from({ length: participantsCount - 1 }).map((_, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-md space-y-3">
                <h4 className="font-medium">Участник {index + 1}</h4>
                <div className="grid gap-3">
                  <div className="space-y-1">
                    <Label htmlFor={`participant-${index}-name`}>ФИО</Label>
                    <Input 
                      id={`participant-${index}-name`} 
                      name={`participant-${index}-name`} 
                      value={(formData.participants?.[index]?.name as string) || ''} 
                      onChange={handleChange} 
                      placeholder="Введите ФИО участника"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <Label htmlFor={`participant-${index}-age`}>Возраст</Label>
                    <Input 
                      id={`participant-${index}-age`} 
                      name={`participant-${index}-age`} 
                      type="number"
                      min="18"
                      max="70"
                      value={(formData.participants?.[index]?.age as number) || ''} 
                      onChange={handleChange} 
                      placeholder="Возраст"
                    />
                  </div>
                  
                  {type === 'gto' && (
                    <div className="space-y-1">
                      <Label htmlFor={`participant-${index}-division`}>Подразделение</Label>
                      <Input 
                        id={`participant-${index}-division`} 
                        name={`participant-${index}-division`} 
                        value={(formData.participants?.[index]?.division as string) || ''} 
                        onChange={handleChange} 
                        placeholder="Название подразделения"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="motivation">Мотивация команды</Label>
              <Textarea 
                id="motivation" 
                name="motivation" 
                value={formData.motivation || ''} 
                onChange={handleChange} 
                placeholder="Расскажите, почему ваша команда должна победить"
                rows={4}
              />
              <p className="text-xs text-gray-500">Максимум 500 символов</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="videoLink">Ссылка на видео-презентацию команды</Label>
              <Input 
                id="videoLink" 
                name="videoLink" 
                value={formData.videoLink || ''} 
                onChange={handleChange} 
                placeholder="Ссылка на YouTube или другой видео-хостинг"
              />
              <p className="text-xs text-gray-500">
                Загрузите видео о вашей команде (необязательно)
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
              <div className="flex items-center gap-3">
                <Upload className="text-gray-400" size={24} />
                <div>
                  <p className="font-medium">Загрузить файлы</p>
                  <p className="text-xs text-gray-500">
                    Вы можете загрузить фото команды или другие документы
                  </p>
                </div>
              </div>
              <div className="mt-3">
                <Button variant="outline" className="w-full">
                  Выбрать файл
                </Button>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <Card className="border-2 border-gray-200 shadow-lg animate-fade-in">
      <CardHeader>
        <div className="flex items-center mb-2">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={step === 1 ? onBack : () => setStep(step - 1)}
            className="mr-2"
          >
            <ArrowLeft size={16} />
          </Button>
          <CardTitle>{titles[type]}</CardTitle>
        </div>
        
        {totalSteps > 1 && (
          <div className="flex gap-1 mt-2">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div 
                key={i}
                className={`h-1 rounded-full flex-1 ${
                  i + 1 <= step ? 'bg-mir' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        )}
        
        <CardDescription>
          {step === 1 && 'Введите основную информацию'}
          {step === 2 && 'Добавьте участников команды'}
          {step === 3 && 'Дополнительная информация'}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit}>
          {renderFormStep()}
        </form>
      </CardContent>
      
      <CardFooter className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={step === 1 ? onBack : () => setStep(step - 1)}
        >
          {step === 1 ? 'Назад к выбору' : 'Назад'}
        </Button>
        <Button onClick={handleSubmit}>
          {step < totalSteps ? 'Продолжить' : 'Отправить заявку'}
          {step < totalSteps ? <ChevronRight size={16} className="ml-1" /> : <Check size={16} className="ml-1" />}
        </Button>
      </CardFooter>
    </Card>
  );
};

// Import missing component
import { ChevronRight } from 'lucide-react';

export default RegistrationForm;
