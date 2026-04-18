import { useEffect, useState } from "react";
import axios from "axios";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
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