import React from 'react';

function Skills() {
  const skills = [
    { category: 'Programming', items: ['Python', 'JavaScript', 'TypeScript', 'C'] },
    { category: 'AI/ML', items: ['TensorFlow', 'PyTorch', 'Scikit-learn'] },
    { category: 'Data Science', items: ['Pandas', 'NumPy', 'Data Visualization', 'Statistical Analysis'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'Jupyter Notebook'] },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-gray-800 dark:text-gray-100">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
        {skills.map((skillGroup) => (
          <div key={skillGroup.category} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-blue-600 dark:text-blue-400">{skillGroup.category}</h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {skillGroup.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 md:px-4 md:py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;