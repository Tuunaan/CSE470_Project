export interface Plant {
  id: string;
  name: string;
  image: string;
  careLevel: 'Easy' | 'Moderate' | 'Expert';
  wateringFrequency: string;
  sunlight: string;
  temperature: string;
  description: string;
  problems: PlantProblem[];
  reviews: Review[];
}

export interface PlantProblem {
  id: string;
  issue: string;
  solution: string;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface CareSchedule {
  id: string;
  plantId: string;
  taskType: 'watering' | 'fertilizing' | 'pruning';
  date: string;
  completed: boolean;
}