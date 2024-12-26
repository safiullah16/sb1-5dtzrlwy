import React, { useState } from 'react';
import { Calculator, Apple } from 'lucide-react';

const NutritionTracker = () => {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const [age, setAge] = useState(30);
  const [gender, setGender] = useState('male');

  const calculateBMR = () => {
    if (gender === 'male') {
      return 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    }
    return 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
  };

  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <Apple className="w-8 h-8 text-indigo-400 mr-3" />
          <h2 className="text-3xl font-bold text-gray-100">Nutrition Guide</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center text-indigo-300">
              <Calculator className="w-5 h-5 mr-2" />
              Calorie Calculator
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300">Weight (kg)</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="mt-1 block w-full rounded-lg bg-gray-700 border-gray-600 text-gray-100 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Height (cm)</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="mt-1 block w-full rounded-lg bg-gray-700 border-gray-600 text-gray-100 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Age</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="mt-1 block w-full rounded-lg bg-gray-700 border-gray-600 text-gray-100 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Daily Calories Goal</label>
                <div className="text-2xl font-bold text-indigo-400 mt-2">
                  {Math.round(calculateBMR())} kcal
                </div>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-4 text-indigo-300">Nutrition Tips</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-indigo-900 text-indigo-400 flex items-center justify-center mr-2">✓</span>
                <span>Aim for 1.6-2.2g of protein per kg of body weight</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-indigo-900 text-indigo-400 flex items-center justify-center mr-2">✓</span>
                <span>Include complex carbs for sustained energy</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-indigo-900 text-indigo-400 flex items-center justify-center mr-2">✓</span>
                <span>Stay hydrated with 2-3 liters of water daily</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-indigo-900 text-indigo-400 flex items-center justify-center mr-2">✓</span>
                <span>Eat within 30 minutes post-workout</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionTracker;