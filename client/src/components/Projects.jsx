import { useEffect, useState } from "react";
import axios from "axios";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("https://portfolio-project-2-olq8.onrender.com/api/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Projects</h2>

      {projects.length === 0 ? (
        <p>Loading...</p>
      ) : (
        projects.map((p) => (
          <div key={p._id}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </div>
        ))
      )}
    </div>
  );
}