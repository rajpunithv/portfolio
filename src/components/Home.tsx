import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  const profilePicUrl = "https://i.imgur.com/KcaTQUZ.jpeg";

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center px-4">
      <img
        src={profilePicUrl}
        alt="Rajpunith"
        className="w-48 h-48 rounded-full shadow-xl mb-8 object-cover"
      />
      <h1 className="text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100">
        Rajpunith Vishnumolakala
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
        AI&DS Student passionate in Artificial Intelligence
      </p>
      
      <Link
        to="/projects"
        className="group flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
      >
        <span className="text-lg mb-2">View Projects</span>
        <ChevronDown className="animate-bounce" />
      </Link>
    </div>
  );
}

export default Home;