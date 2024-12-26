import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Achievements from './components/Achievements';
import WorkoutPlans from './components/WorkoutPlans';
import NutritionTracker from './components/NutritionTracker';
import Challenges from './components/Challenges';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navigation />
      <Hero />
      <Achievements />
      <WorkoutPlans />
      <NutritionTracker />
      <Challenges />
      <Footer />
    </div>
  );
};

export default App;