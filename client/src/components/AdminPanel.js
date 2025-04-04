import React, { useState, useEffect } from "react";

const AdminPanel = ({ updateSkills }) => {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const [newLevel, setNewLevel] = useState(50);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");

  const ADMIN_PASSWORD = "admin123";

  useEffect(() => {
    const storedSkills = JSON.parse(localStorage.getItem("skills")) || [];
    setSkills(storedSkills);
  }, []);

  const saveSkills = (updatedSkills) => {
    setSkills(updatedSkills);
    localStorage.setItem("skills", JSON.stringify(updatedSkills));
    updateSkills(updatedSkills);
  };

  const addSkill = () => {
    if (newSkill.trim()) {
      const skillObj = { name: newSkill, level: newLevel };
      saveSkills([...skills, skillObj]);
      setNewSkill("");
      setNewLevel(50);
    }
  };

  const removeSkill = (skillToRemove) => {
    saveSkills(skills.filter((skill) => skill.name !== skillToRemove));
  };

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
    } else {
      alert("Incorrect password!");
    }
  };

  return (
    <div className="admin-panel">
      {!isLoggedIn ? (
        <div>
          <h2>Admin Login</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div>
          <h2>Admin Panel - Manage Skills</h2>
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Enter skill"
          />
          <input
            type="number"
            value={newLevel}
            onChange={(e) => setNewLevel(Number(e.target.value))}
            placeholder="Enter level (0-100)"
            min="0"
            max="100"
          />
          <button onClick={addSkill}>Add Skill</button>

          <h3>Added Skills</h3>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>
                {skill.name} ({skill.level}%)
                <button onClick={() => removeSkill(skill.name)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
