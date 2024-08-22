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
  { id: 4, title: 'Certificate 4', category: 'software' },
  { id: 5, title: 'Certificate 5', category: 'project-management' },
  { id: 6, title: 'Certificate 6', category: 'ai-ml' },
  { id: 7, title: 'Certificate 7', category: 'software' },
  { id: 8, title: 'Certificate 8', category: 'project-management' },
  { id: 9, title: 'Certificate 9', category: 'ai-ml' },
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
  { id: 1, name: 'Job Isaac Ong', position: 'CS Student', company: 'FEU Tech', image: '/ong.jpg', date: '2022-12-20', recommendation: "Working with Mr. Alpha Romer Coma on the project was a pleasure, since he has been very responsive and professional throughout. I hope to work with him again in the future. The project was delivered on time, and the quality of the work is excellent. I highly recommend working with Mr. Alpha Romer Coma" },
  { id: 2, name: 'Kristoffer Ian Sioson', position: 'CS Student', company: 'FEU Tech', image: '/sioson.jpg', date: '2022-12-21', recommendation: "It was enlightening to work on the same team as Mr. Alpha Romer Coma. Despite his youth, he demonstrated professionalism in all of the tasks he was given. I had a terrific experience working with him, he gave me a detailed explanation of the project that we are working on and brought me a new perspective on things that I usually can't figure."},
  { id: 3, name: 'John Rey Basilio', position: 'After Sales Support', company: 'Concentrix', image: '/basilio.jpg', date: '2023-2-14', recommendation: "Mr. Coma is an excellent teammate you can rely on. We both honed our skills through simultaneous exchange of ideas or solutions whether it may be design-related or code-related. Learning with Mr. Coma is such a pleasure." },
  { id: 4, name: 'John Kenneth Andales', position: 'Software Engineer', company: 'Samsung', image: '/andales.jpg', date: '2023-3-27', recommendation: "Mr. Coma is a development-oriented person, as his passion for the field is unparalleled. His enthusiasm for sharing ideas and collaborating with colleagues fosters a dynamic and engaging work environment. Mr. Coma consistently demonstrates the ability to inspire and motivate his peers, which in turn leads to innovative solutions and outstanding results. He is a true asset to any team and will no doubt contribute significantly to any organization he join." },
  { id: 5, name: 'Angelo Arguson, DIT', position: 'CS Faculty', company: 'FEU Tech ACM', image: '/default.jpg', date: '2023-07-14', recommendation: "Mr. Alpha Romer is my data structure student. He is an industrious and knowledgeable in computer programming. He is a multilingual person and a very competitive when it comes to project submissions. He can be a candidate for intern software development in the future of this school." },
  { id: 6, name: 'Michelle Anne Constantino', position: 'CS Faculty', company: 'FEU Tech', image: '/constantino.jpg', date: '2023-12-11', recommendation: "I was Alpha's Computer Systems Architecture professor, but I didn't see him just as a student of CSA, he has always given an effort towards class work and goes beyond what is being asked. I had always admired how you go beyond what classes are always." },
  { id: 7, name: 'Beau Gray Habal', position: 'CS Faculty', company: 'FEU Tech', image: '/default.jpg', date: '2024-1-20', recommendation: "Alpha consistently performs well academically. His work reflects a deep understanding of the material, and he consistently produces quality assignment. Alpha is exceptionally curious and displays a genuine eagerness to learn. He works well with his fellow classmates and is evident that he is a team player" },
  { id: 8, name: 'Jeneffer Sabonsolin', position: 'CS Faculty', company: 'FEU Tech', image: '/sabonsolin.jpg', date: '2024-03-21', recommendation: "Alpha Romer Coma, my student in design thinking, exhibits a profound passion for academic excellence, evident in the outstanding quality of his work. I eagerly anticipate witnessing his continued growth and achievements.”" },
  { id: 9, name: 'Justine Jude Pura, MBA', position: 'CS Faculty', company: 'FEU Tech', image: '/pura.jpg', date: '2024-03-23', recommendation: "What distinguishes Alpha further is his remarkable humility and positive attitude. Despite his impressive credentials and achievements, he remains grounded and approachable, always willing to learn and grow. His blend of intellectual curiosity, leadership qualities, and character make him a standout individual." },
  { id: 10, name: 'Xynil Jhed Lacap', position: 'CS Student', company: 'FEU Tech', image: '/lacap.jpg', date: '2024-03-30', recommendation: "Alpha is an amazing team player, who always steps up his game especially in developing a program. He is really adept at adapting in unfavorable situations, and his skills to turn the tide in our team's favor is incredible." },
  { id: 11, name: 'Rab Karl Colasino', position: 'Webmaster', company: 'FEU Tech ACM', image: '/colasino.jpg', date: '2024-7-29', recommendation: "It's wonderful to hear about Alpha Romer Coma's impressive contributions. As Webmaster at FEU Tech ACM, He demonstrated exceptional leadership and technical skills. Also, his commitment to the ACM Beyond Campus Initiative positively impacted over a lot of people. Alpha's full-stack and back-end expertise, combined with a passion for education, make him an outstanding developer and team player." },
  { id: 12, name: 'Guennevere Rito', position: 'Vice President', company: 'FEU Tech ACM', image: '/rito.jpg', date: '2024-8-21', recommendation: "I've had the pleasure of working alongside Alpha as part of the executive officers at ACM, and I can confidently say that he is an exceptional Webmaster with a forward-thinking mindset. Alpha never limited himself to his job responsibilities. Instead, he consistently ventured beyond his role, introducing ideas that greatly benefited the entire computer science community at FEU Tech :))" }
].reverse();

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
            <img src="/logo.svg" alt="Logo" className="w-10 h-10" />
            <span className="text-xl font-bold">Alpha Romer Coma</span>
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
              Alpha Romer Coma
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {recommendations.map((rec) => (
                <div key={rec.id} className="bg-gray-100 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <img src={`/recommendations${rec.image}`} alt={rec.name} className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <h3 className="font-bold">{rec.name}</h3>
                      <p className="text-sm text-gray-600">{rec.position} at {rec.company}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-800 mb-2">
                    {rec.recommendation || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'}
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
              <img src="/logo.svg" alt="Logo" className="w-10 h-10 inline-block mr-2" />
              <span className="text-xl font-bold">Alpha Romer Coma</span>
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
            &copy; 2024 Alpha Romer Coma. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}