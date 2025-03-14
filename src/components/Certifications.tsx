import React from 'react';
import { ExternalLink } from 'lucide-react';

function Certifications() {
  const certifications = [
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'AWS',
      date: '2024',
      image: 'https://i.imgur.com/LkN7F7A.jpeg',
      link: 'https://drive.google.com/file/d/1pwivnnkXz6E1GDmIWeKpTyPx83kBO5vO/view?usp=drive_link',
    },
    {
      title: 'SALESFORCE AI ASSOCIATE',
      issuer: 'Salesforce',
      date: '2024',
      image: 'https://i.imgur.com/ZciOaQV.jpeg',
      link: 'https://drive.google.com/file/d/1Um9nkPL5IIXuqyecRgT2vMIYcF1LHkNy/view?usp=sharing',
    },
    {
      title: 'ORACLE AI FOUNDATIONS ASSOCIATE(2025)',
      issuer: 'ORACLE',
      date: '2025',
      image: 'https://i.imgur.com/k9GvJUJ.jpeg',
      link: 'https://drive.google.com/file/d/1Hom6NUzvU9wCOpqeBCFaFuIqWeT7tCI1/view?usp=sharing',
    },
    {
      title: 'Multicloud Network Associate',
      issuer: 'Aviatrix Certified Engineer',
      date: '2024',
      image: 'https://i.imgur.com/2zcEg5J.jpeg',
      link: 'https://drive.google.com/file/d/1sL8iNKWJFtlI6T6WahJ7zKUyPQPnDNtU/view?usp=sharing',
    },
    {
      title: 'Python-Basic Certified',
      issuer: 'HackerRank',
      date: '2023',
      image: 'https://i.imgur.com/8EK8utP.jpeg',
      link: 'https://drive.google.com/file/d/1hVTy-kK8QGlrSDRGEzR3mPdFlN6MWrPL/view?usp=sharing',
    },
    {
      title: 'CSS-Basic Certified',
      issuer: 'HackerRank',
      date: '2024',
      image: 'https://i.imgur.com/JGWwQmP.jpeg',
      link: 'https://drive.google.com/file/d/1jH4-jmrqmuUZIG1sZxSHLljKSEHXMKmg/view?usp=sharing',
    },
    {
      title: 'RPA Professional',
      issuer: 'Automation Anywhere',
      date: '2024',
      image: 'https://i.imgur.com/vNMZrPH.jpeg',
      link: 'https://drive.google.com/file/d/1inYtXZUrJJLoFymj7M_1ez-sVHsHbFiJ/view?usp=sharing',
    },
    {
      title: 'Problem Solving (Basic)',
      issuer: 'HackerRank',
      date: '2024',
      image: 'https://i.imgur.com/rQl64rz.jpeg',
      link: 'https://drive.google.com/file/d/1HvanxA_chOGxiOfjYngVZwnqmvzQTVLJ/view?usp=sharing',
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group">
            <div className="relative">
              <img 
                src={cert.image} 
                alt={cert.title}
                className="w-full h-48 object-cover"
              />
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-700 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <ExternalLink className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </a>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{cert.title}</h3>
              <div className="flex justify-between items-center mt-2 text-gray-600 dark:text-gray-300">
                <span>{cert.issuer}</span>
                <span>{cert.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;