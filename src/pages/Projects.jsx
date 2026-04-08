import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <div style={{ padding: "60px" }}>
      <h1>Projects</h1>

      <ProjectCard 
        title="Publycity"
        desc="Creator economy platform with React + Supabase"
        link="https://github.com/sandeepsp1300/Publycity"
      />

      <ProjectCard 
        title="AI Career Analyzer"
        desc="Predict job demand & automation risk"
        link="https://github.com/sandeepsp1300/AutoLabAI"
      />

      <ProjectCard 
        title="Network Security Lab"
        desc="Wireshark & Nmap analysis project"
        link="#"
      />
    </div>
  );
}

export default Projects;