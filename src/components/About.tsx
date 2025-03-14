import React from 'react';

function About() {
  const profilePicUrl = "https://i.imgur.com/KcaTQUZ.jpeg";

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center px-4">
      <img
        src={profilePicUrl}
        alt="Rajpunith"
        className="w-48 h-48 rounded-full shadow-xl mb-6"
      />
      <h1 className="text-5xl font-bold mb-3 text-gray-800 dark:text-gray-100">
        Rajpunith Vishnumolakala
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
        Passionate Software Engineer and AI Enthusiast, currently pursuing B.Tech in AI & Data Science at KL University.  
        Experienced in machine learning, cryptography, and full-stack development.  
        Always eager to explore new technologies and build impactful solutions! 🚀
      </p>
    </div>
  );
}

export default About