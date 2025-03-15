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
      description: 'A simple and interactive Tic-Tac-Toe game built using HTML, CSS, and JavaScript',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/rajpunithv/Tic-Tac-Toe'
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-gray-800 dark:text-gray-100">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2 md:mb-3">{project.title}</h3>
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-2 md:px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs md:text-sm text-gray-700 dark:text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors text-sm md:text-base"
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

export default Projects;