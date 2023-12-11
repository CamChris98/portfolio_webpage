// src/App.js
import React, { useState } from 'react';
import './App.css';

// add the information of the portfolio projects here with the description and the demonstration video url.
const projectsData = [
  {
    id: 1,
    title: 'Address Book',
    description: 'A simple command line app that keeps record of contacts, an address book.',
    technologies: ['C++'],
    videourl:'https://youtu.be/k7ud2wcC2zs?si=9tmzF3lbmZHWuc2K',
  },
  {
    id: 2,
    title: 'Adventure Game',
    description: 'A text based adventure game written in C# to demonstrate familiarity of the C# language.',
    technologies: ['C#'],
    videourl:'https://youtu.be/_HSd-pZpzhg?si=eB2ddqG5f2c-jv_M',
  },
  {
    id:3,
    title: 'BatBat Attack',
    description: 'A simple side scrolling game inspired by flappy bird made by me.',
    technologies:['Unity 3d engine', 'C#'],
    videourl:'https://youtu.be/rIk1v18Sdug?si=wfjb8gnbBedaCdsz',

  },
  {
    id:4,
    title: 'Currency Converter',
    description: 'A small program for a webpage that allows the user to convert currency, from dollars to Mexican pesos, euros, or Canadian dollars, written in Javascript.',
    technologies:['HTML', 'CSS'],
    videourl:'https://youtu.be/zNDYJn1IZpg?si=WePnXqOP-KL3mwpU',

  },
  {
    id:5,
    title: 'Number Guess',
    description: 'A small number guessing game written in java with the purpose of showcasing an understanding of java syntax and operation.',
    technologies:['Java', 'VIM'],
    videourl:'https://youtu.be/CC1r07fgJ4Q?si=pasysIIVv6URMIFy',

  },



  
];
// create the project card elements to be interacted with
const ProjectCard = ({ project }) => (
  <div className="project-card">
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <p>Technologies: {project.technologies.join(', ')}</p>
    {/* Render video player if videoUrl is provided */}
    {project.videoUrl && (
      <div className="video-container">
        <video controls width="100%">
          <source src={project.videoUrl} type="video/mp4" />
        </video>
      </div>
    )}
  </div>
);

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="app">
      <h1>My Portfolio</h1>
      <div className="project-list">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className={`project-list-item ${selectedProject === project.id ? 'selected' : ''}`}
            onClick={() => setSelectedProject(project.id)}
          >
            {project.title}
          </div>
        ))}
      </div>
      <div className="project-details">
        {selectedProject ? (
          <ProjectCard project={projectsData.find((project) => project.id === selectedProject)} />
        ) : (
          <p>Select a project to view details.</p>
        )}
      </div>
    </div>
  );
};

export default App;
