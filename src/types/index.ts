export interface Exercise {
  name: string;
  sets: number;
  reps: string;
  description: string;
  muscleGroup: string;
  videoUrl?: string;
}

export interface WorkoutPlan {
  level: 'beginner' | 'intermediate' | 'advanced';
  exercises: Exercise[];
  duration: string;
  restBetweenSets: string;
}

export interface NutritionGuide {
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  recommendations: string[];
}

export interface Challenge {
  id: string;
  name: string;
  description: string;
  duration: string;
  difficulty: 'easy' | 'medium' | 'hard';
  exercises: Exercise[];
  completed: boolean;
}