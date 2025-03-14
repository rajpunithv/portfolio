import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Github, Linkedin } from 'lucide-react';
import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <ThemeProvider>
      <Router>
        {/* Apply dark mode to the entire page */}
        <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </main>
          <footer className="bg-white dark:bg-gray-800 shadow-lg py-4 transition-colors duration-200">
            <div className="container mx-auto px-4 flex justify-between items-center">
              <p className="text-gray-600 dark:text-gray-300">© 2024 Rajpunith. All rights reserved.</p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/rajpunithv" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/rajpunith-vishnumolakala-473644265/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
