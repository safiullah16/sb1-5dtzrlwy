import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
          Transform Your Fitness Journey
        </h1>
        <p className="text-xl mb-8 text-gray-300">
          Personalized workouts, nutrition tracking, and challenges to help you reach your goals
        </p>
        <button className="btn-primary">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;