import React from 'react';
import ProjectCard from '../components/ProjectCard';
import portfolio from '../assets/portfolio.png';
import deepfake from '../assets/Deepfake.jpg';
import text from '../assets/textOperation.png';


const projects = [
  {
    title: 'Deepfake Detection',
    desc: 'Detects deepfake videos using CNN-based ML model.',
    img: deepfake,
    tech: ['TensorFlow', 'OpenCV', 'Python', 'React'],
    link: 'https://github.com/Kalash-B/DeepFake-Detection-System',
  },
  {
    title: 'Portfolio Website',
    desc: 'Responsive and animated portfolio website built with React and Tailwind CSS.',
    img: portfolio,
    tech: ['React', 'Tailwind CSS', 'GSAP', 'Vite'],
    link: 'https://github.com/Kalash-B/portfolio',
  },
  {
    title: 'Text Manipulation Platform',
    desc: 'AI tool for translation, summarization, and text extraction using Python, Hugging Face.',
    img: text,
    tech: ['Python', 'Hugging Face', 'NLP'],
    link: '#',
  },
  // {
  //   title: 'Expense Tracker',
  //   desc: 'Track daily expenses with charts and insights using MERN stack.',
  //   img: '/assets/expense-tracker.png',
  //   tech: ['MongoDB', 'Express', 'React', 'Node.js'],
  //   link: 'https://github.com/kalashbaldota/expense-tracker',
  // },
  // {
  //   title: 'Code Editor Clone',
  //   desc: 'Web-based real-time code editor with syntax highlighting.',
  //   img: '/assets/code-editor.png',
  //   tech: ['React', 'Monaco Editor', 'WebSocket'],
  //   link: 'https://github.com/kalashbaldota/code-editor-clone',
  // },
  // {
  //   title: 'Blog Platform',
  //   desc: 'A full-stack blog application with authentication and markdown support.',
  //   img: '/assets/blog.png',
  //   tech: ['Next.js', 'MongoDB', 'Tailwind'],
  //   link: 'https://github.com/kalashbaldota/blog-platform',
  // }
];

const Projects = () => {
  return (
    <section id='Projects' className="min-h-screen px-6 py-12 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-400 mb-8">My Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
