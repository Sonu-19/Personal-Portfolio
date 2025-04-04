import React, { useState } from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiFlutter, SiDart, SiAndroid, SiC, SiPython, SiDotnet, SiExpress, SiMongodb } from 'react-icons/si';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

const ADMIN_PASSWORD = "Sonu"; // Change this to a strong password

const verifyAdmin = () => {
  const enteredPassword = prompt("Enter Admin Password:");
  return enteredPassword === ADMIN_PASSWORD;
};

const initialSkills = [
  { name: 'HTML', level: 90, icon: <FaHtml5 />, description: 'Markup language for web pages.' },
  { name: 'CSS', level: 80, icon: <FaCss3Alt />, description: 'Styling language for web pages.' },
  { name: 'JavaScript', level: 75, icon: <FaJsSquare />, description: 'Programming language for interactive web.' },
  { name: 'React', level: 70, icon: <FaReact />, description: 'JavaScript library for building user interfaces.' },
  { name: 'Node.js', level: 65, icon: <FaNodeJs />, description: 'JavaScript runtime environment for server-side development.' },
  { name: 'Python', level: 75, icon: <SiPython />, description: 'General-purpose programming language for various fields.' },
  { name: '.NET', level: 70, icon: <SiDotnet />, description: 'Framework for building web, mobile, and desktop applications.' },
  { name: 'Express', level: 75, icon: <SiExpress />, description: 'Minimalist web framework for Node.js.' },
  { name: 'MongoDB', level: 70, icon: <SiMongodb />, description: 'NoSQL database system for storing data in JSON-like format.' },
  { name: 'Dart', level: 70, icon: <SiDart />, description: 'Programming language for Flutter development.' },
  { name: 'Flutter', level: 75, icon: <SiFlutter />, description: 'UI toolkit for building natively compiled applications.' },
  { name: 'Android', level: 65, icon: <SiAndroid />, description: 'Android app development platform.' },
  { name: 'C', level: 80, icon: <SiC />, description: 'General-purpose programming language used for system and application software.' },
];

const Skills = () => {
  const [skills, setSkills] = useState(initialSkills);
  const [newSkill, setNewSkill] = useState({
    name: '',
    level: 0,
    description: '',
    icon: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSkill({ ...newSkill, [name]: value });
  };

  const addSkill = () => {
    if (!verifyAdmin()) {
      alert("Incorrect password. Access denied.");
      return;
    }

    if (!newSkill.name || !newSkill.description || newSkill.level === 0) {
      alert('Please fill in all fields.');
      return;
    }

    const skillToAdd = {
      ...newSkill,
      icon: <FaHtml5 />, // Default icon, replace with dynamic icon selection if needed
    };

    setSkills([...skills, skillToAdd]);
    setNewSkill({ name: '', level: 0, description: '', icon: '' });
  };

  const deleteSkill = (index) => {
    if (!verifyAdmin()) {
      alert("Incorrect password. Access denied.");
      return;
    }

    if (window.confirm("Are you sure you want to delete this skill?")) {
      const updatedSkills = skills.filter((_, i) => i !== index);
      setSkills(updatedSkills);
    }
  };

  return (
    <div className="skills-container">
      <h2 className="skills-heading">My Skills</h2>
      <p>
        I am a passionate Full-Stack Developer with experience in building web and mobile applications.
        My expertise spans across front-end, back-end, and mobile development, allowing me to create
        seamless and interactive digital experiences.
      </p>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <h3 className="skill-name">
              <span className="skill-icon">{skill.icon}</span>
              <span>{skill.name}</span>
            </h3>
            <p>{skill.description}</p>
            <div className="progress-container">
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id={`tooltip-${index}`}>{skill.level}%</Tooltip>}
              >
                <div
                  className="progress-bar"
                  style={{
                    width: `${skill.level}%`,
                    animation: 'progress-animation 2s ease-in-out',
                  }}
                  aria-label={`${skill.name} proficiency ${skill.level}%`}
                >
                  <span className="progress-text">{`${skill.level}%`}</span>
                </div>
              </OverlayTrigger>
            </div>
            <button onClick={() => deleteSkill(index)} className="delete-btn">Delete</button>
          </div>
        ))}
      </div>

      {/* Admin Panel */}
      <div className="admin-panel">
        <h3>Admin Panel: Add New Skill</h3>
        <input
          type="text"
          name="name"
          placeholder="Skill Name"
          value={newSkill.name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="level"
          placeholder="Skill Level (0-100)"
          value={newSkill.level}
          onChange={handleInputChange}
          min="0"
          max="100"
        />
        <input
          type="text"
          name="description"
          placeholder="Skill Description"
          value={newSkill.description}
          onChange={handleInputChange}
        />
        <button onClick={addSkill} className="add-btn">Add Skill</button>
      </div>
    </div>
  );
};

export default Skills;