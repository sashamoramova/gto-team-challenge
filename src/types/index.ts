
export interface EventStage {
  id: number;
  title: string;
  description: string;
  isActive: boolean;
  isCompleted: boolean;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface Prize {
  place: number;
  amount: string;
  description?: string;
}

export interface ContactPerson {
  name: string;
  position: string;
  photo: string;
  phone?: string;
  email?: string;
}

export interface RegistrationFormData {
  teamName: string;
  captain: {
    name: string;
    phone: string;
    email: string;
  };
  participants: {
    name: string;
    age: number;
    division?: string;
  }[];
  motivation?: string;
  videoLink?: string;
}
