import React, { useState, useEffect } from 'react';
import './Projects.css';

const LOCAL_STORAGE_KEY = 'projects';
const ADMIN_PASSWORD = 'Sonu'; 
const initialProjects = [
  // Your initial projects here
];

const Projects = () => {
  const getSavedProjects = () => {
    const savedProjects = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedProjects ? JSON.parse(savedProjects) : initialProjects;
  };

  const [projects, setProjects] = useState(getSavedProjects);
  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    technologies: '',
    github: '',
    liveDemo: '',
    image: '',
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(projects));
  }, [projects]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const verifyPassword = () => {
    const enteredPassword = prompt('Enter admin password:');
    return enteredPassword === ADMIN_PASSWORD;
  };

  const addProject = () => {
    if (!verifyPassword()) {
      alert('Incorrect password! Action denied.');
      return;
    }

    if (!newProject.name || !newProject.description) {
      alert('Please fill in the required fields.');
      return;
    }

    const formattedTechnologies = newProject.technologies.split(',').map(tech => tech.trim());

    const projectToAdd = {
      id: projects.length + 1,
      ...newProject,
      technologies: formattedTechnologies,
    };

    setProjects([...projects, projectToAdd]);
    setNewProject({ name: '', description: '', technologies: '', github: '', liveDemo: '', image: '' });
  };

  const deleteProject = (id) => {
    if (!verifyPassword()) {
      alert('Incorrect password! Action denied.');
      return;
    }

    if (window.confirm('Are you sure you want to delete this project?')) {
      const updatedProjects = projects.filter((project) => project.id !== id);
      setProjects(updatedProjects);
    }
  };

  return (
    <div className="projects-container">
      <h2>My Projects</h2>

      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <h3>{project.name}</h3>
            <img
              src={project.image || 'https://placehold.co/300x200?text=No+Image'}
              alt={project.name}
              className="project-image"
              onError={(e) => (e.target.src = 'https://placehold.co/300x200?text=No+Image')}
            />
            <p>{project.description}</p>
            <p><strong>Technologies Used:</strong> {project.technologies.join(', ')}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
            <button onClick={() => deleteProject(project.id)} className="delete-btn">Delete</button>
          </div>
        ))}
      </div>

      <div className="admin-panel">
        <h3>Admin Panel: Add New Project</h3>
        <input type="text" name="name" placeholder="Project Name" value={newProject.name} onChange={handleInputChange} />
        <input type="text" name="description" placeholder="Project Description" value={newProject.description} onChange={handleInputChange} />
        <input type="text" name="technologies" placeholder="Technologies (comma-separated)" value={newProject.technologies} onChange={handleInputChange} />
        <input type="text" name="github" placeholder="GitHub URL" value={newProject.github} onChange={handleInputChange} />
        <input type="text" name="liveDemo" placeholder="Live Demo URL" value={newProject.liveDemo} onChange={handleInputChange} />
        <input type="text" name="image" placeholder="Image URL" value={newProject.image} onChange={handleInputChange} />
        <button onClick={addProject} className="add-btn">Add Project</button>
      </div>
    </div>
  );
};

export default Projects;
