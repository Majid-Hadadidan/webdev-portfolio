import { projects } from "./data";
import SectionTitle from "./SectionTitle";
import ProjectsCard from "./ProjectsCard";

function Projects() {
  return (
    <section className="align-element py-20" id="projects">
      <SectionTitle text="web creatins" />
      <div className="py-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3" >
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
}
export default Projects;
