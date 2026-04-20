import { useEffect, useState } from "react";
import axios from "axios";
const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: String,
  description: String
});

module.exports = mongoose.model("Project", projectSchema);
function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>My Projects</h2>

      {projects.length === 0 ? (
        <p>No projects found</p>
      ) : (
        projects.map((project, index) => {
          return (
            <div key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Projects;