import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Art Gallery',
      description: 'A Django-based web platform for showcasing and managing artwork.',
      technologies: ['Python', 'Django', 'HTML&CSS'],
      link: 'https://github.com/rajpunithv/artgallery'
    },
    {
      title: 'Tic-Tac-Toe',
      description: 'A simple and interactive Tic-Tac-Toe game built using HTML, CSS, and JavaScri',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/rajpunithv/Tic-Tac-Toe'
    },
    // Add more projects as needed
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects