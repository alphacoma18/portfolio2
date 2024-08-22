"use client";
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon, CodeIcon, GithubIcon, InstagramIcon, LinkedinIcon, MenuIcon, TwitterIcon, XIcon } from 'lucide-react';
import { useRef, useState } from 'react';



const coreCompetencies = [
  { title: 'Software Engineering', icon: CodeIcon },
  { title: 'Project Management', icon: CodeIcon },
  { title: 'AI/ML', icon: CodeIcon },
  { title: 'Cloud Computing', icon: CodeIcon },
];

const projects = [
  { id: 1, title: 'Project 1', description: 'Description for Project 1', link: '#', image: '/placeholder.svg?height=200&width=300' },
  { id: 2, title: 'Project 2', description: 'Description for Project 2', link: '#', image: '/placeholder.svg?height=200&width=300' },
  { id: 3, title: 'Project 3', description: 'Description for Project 3', link: '#', image: '/placeholder.svg?height=200&width=300' },
  { id: 4, title: 'Project 4', description: 'Description for Project 4', link: '#', image: '/placeholder.svg?height=200&width=300' },
  { id: 5, title: 'Project 5', description: 'Description for Project 5', link: '#', image: '/placeholder.svg?height=200&width=300' },
  { id: 6, title: 'Project 6', description: 'Description for Project 6', link: '#', image: '/placeholder.svg?height=200&width=300' },
];

const certificates = [
  { id: 1, title: 'Certificate 1', category: 'software' },
  { id: 2, title: 'Certificate 2', category: 'project-management' },
  { id: 3, title: 'Certificate 3', category: 'ai-ml' },
];

const affiliations = [
  { id: 1, name: 'Affiliation 1', image: '/placeholder.svg?height=100&width=100' },
  { id: 2, name: 'Affiliation 2', image: '/placeholder.svg?height=100&width=100' },
  { id: 3, name: 'Affiliation 3', image: '/placeholder.svg?height=100&width=100' },
  { id: 4, name: 'Affiliation 4', image: '/placeholder.svg?height=100&width=100' },
  { id: 5, name: 'Affiliation 5', image: '/placeholder.svg?height=100&width=100' },
  { id: 6, name: 'Affiliation 6', image: '/placeholder.svg?height=100&width=100' },
  { id: 7, name: 'Affiliation 7', image: '/placeholder.svg?height=100&width=100' },
  { id: 8, name: 'Affiliation 8', image: '/placeholder.svg?height=100&width=100' },
  { id: 9, name: 'Affiliation 9', image: '/placeholder.svg?height=100&width=100' },
  { id: 10, name: 'Affiliation 10', image: '/placeholder.svg?height=100&width=100' },
];

const recommendations = [
  { id: 1, name: 'John Smith', position: 'CEO', company: 'Tech Co', image: '/placeholder.svg?height=50&width=50', date: '2023-05-15' },
  { id: 2, name: 'Jane Doe', position: 'CTO', company: 'Innovation Inc', image: '/placeholder.svg?height=50&width=50', date: '2023-06-20' },
  { id: 3, name: 'Alice Johnson', position: 'Lead Developer', company: 'Software Solutions', image: '/placeholder.svg?height=50&width=50', date: '2023-07-25' },
  { id: 4, name: 'Bob Brown', position: 'Project Manager', company: 'Tech Solutions', image: '/placeholder.svg?height=50&width=50', date: '2023-08-30' },
  { id: 5, name: 'Eve Wilson', position: 'Lead Designer', company: 'Design Co', image: '/placeholder.svg?height=50&width=50', date: '2023-09-05' },
  { id: 6, name: 'Charlie Davis', position: 'Software Engineer', company: 'Tech Co', image: '/placeholder.svg?height=50&width=50', date: '2023-10-10' },
];

const honorsAndAwards = [
  { id: 1, title: 'Best Developer Award', year: '2023' },
  { id: 2, title: 'Innovation Prize', year: '2022' },
  { id: 3, title: 'Tech Excellence Award', year: '2021' },
  { id: 4, title: 'Design Award', year: '2020' },
  { id: 5, title: 'Project Management Award', year: '2019' },
  { id: 6, title: 'AI/ML Award', year: '2018' },
];
const navItems = ['home', 'about', 'projects', 'blog', 'gallery', 'engagement', 'contact'];

export default function Component() {
  const [activeTab, setActiveTab] = useState('home');
  const [certificateFilter, setCertificateFilter] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const gridRef = useRef(null);



  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="/placeholder.svg?height=40&width=40" alt="Logo" className="w-10 h-10" />
            <span className="text-xl font-bold">John Doe</span>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
          <ul className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => setActiveTab(item)}
                  className={`text-sm font-medium transition-colors hover:text-gray-300 ${activeTab === item ? 'text-white' : 'text-gray-400'
                    }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black bg-opacity-95 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveTab(item);
                    setIsMenuOpen(false);
                  }}
                  className={`text-2xl font-medium my-4 transition-colors hover:text-gray-300 ${activeTab === item ? 'text-white' : 'text-gray-400'
                    }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div
              ref={gridRef}
              className="w-full h-full bg-black"
              style={{
                backgroundImage: `radial-gradient(circle 8px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15) 0%, transparent 0.5%),
                                  repeating-linear-gradient(transparent 0px, transparent 1px, rgba(255,255,255,0.05) 1px, rgba(255,255,255,0.05) 2px),
                                  repeating-linear-gradient(90deg, transparent 0px, transparent 1px, rgba(255,255,255,0.05) 1px, rgba(255,255,255,0.05) 2px)`,
                backgroundSize: '100% 100%, 20px 20px, 20px 20px',
              }}
            />
          </div>
          <div className="relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              John Doe
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8"
            >
              Full-Stack Developer & UI/UX Enthusiast
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center space-x-4"
            >
              <a
                href="#about"
                className="inline-flex items-center justify-center px-6 py-3 border border-white rounded-full text-sm font-medium hover:bg-white hover:text-black transition-colors"
              >
                Explore My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <a
              href="#about"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors"
            >
              <ChevronDownIcon className="w-6 h-6" />
              <span className="sr-only">Scroll down</span>
            </a>
          </motion.div>
        </section>

        {/* Keep the rest of the sections as they were in the previous version */}

        <section id="about" className="py-20 bg-white text-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <p className="text-lg mb-8">
              I'm a passionate full-stack developer with a keen eye for design. With over 5 years of experience in
              building web applications, I specialize in creating seamless user experiences that blend form and
              function.
            </p>
            <h3 className="text-2xl font-bold mb-4">Core Competencies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {coreCompetencies.map((competency, index) => (
                <div key={index} className="flex items-center space-x-2 p-4 bg-gray-100 rounded-lg">
                  <competency.icon className="w-6 h-6" />
                  <span>{competency.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-black text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="bg-white bg-opacity-10 rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <a
                      href={project.link}
                      className="inline-block px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition-colors"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="certificates" className="py-20 bg-white text-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Certificates</h2>
            <div className="mb-8">
              <button
                onClick={() => setCertificateFilter('all')}
                className={`mr-4 ${certificateFilter === 'all' ? 'font-bold' : ''}`}
              >
                All
              </button>
              <button
                onClick={() => setCertificateFilter('software')}
                className={`mr-4 ${certificateFilter === 'software' ? 'font-bold' : ''}`}
              >
                Software
              </button>
              <button
                onClick={() => setCertificateFilter('project-management')}
                className={`mr-4 ${certificateFilter === 'project-management' ? 'font-bold' : ''}`}
              >
                Project Management
              </button>
              <button
                onClick={() => setCertificateFilter('ai-ml')}
                className={`mr-4 ${certificateFilter === 'ai-ml' ? 'font-bold' : ''}`}
              >
                AI/ML
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certificates
                .filter((cert) => certificateFilter === 'all' || cert.category === certificateFilter)
                .map((cert) => (
                  <div key={cert.id} className="p-4 bg-gray-100 rounded-lg">
                    {cert.title}
                  </div>
                ))}
            </div>
          </div>
        </section>

        <section id="affiliations" className="py-20 bg-black text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Affiliations</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {affiliations.map((affiliation) => (
                <div key={affiliation.id} className="flex flex-col items-center">
                  <img
                    src={affiliation.image}
                    alt={affiliation.name}
                    className="w-20 h-20 object-contain mb-2"
                  />
                  <span className="text-center">{affiliation.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="recommendations" className="py-20 bg-white text-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Recommendations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recommendations.map((rec) => (
                <div key={rec.id} className="bg-gray-100 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <img src={rec.image} alt={rec.name} className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <h3 className="font-bold">{rec.name}</h3>
                      <p className="text-sm text-gray-600">{rec.position} at {rec.company}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-800 mb-2">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  </p>
                  <p className="text-xs text-gray-500">Received on {new Date(rec.date).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="honors-awards" className="py-20 bg-black text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Honors & Awards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {honorsAndAwards.map((award) => (
                <div key={award.id} className="bg-white bg-opacity-10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
                  <p className="text-gray-300">{award.year}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img src="/placeholder.svg?height=40&width=40" alt="Logo" className="w-10 h-10 inline-block mr-2" />
              <span className="text-xl font-bold">John Doe</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gray-300 transition-colors">
                <GithubIcon className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <LinkedinIcon className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <TwitterIcon className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <InstagramIcon className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-400">
            &copy; 2024 John Doe. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}