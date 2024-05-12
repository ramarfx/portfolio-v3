import ProjectCard from "../components/ProjectCard";
import { projects } from "../docs/projects";

const Project = () => {
  return (
    <section id="project" className="pb-32">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="flex w-full flex-col items-center px-4 py-4 text-center">
            <h1 className="hover-underline-animation py-3 text-3xl font-bold uppercase text-primary md:text-5xl">
              Project
            </h1>
            <p className="text-base text-secondary lg:w-1/2">
              Berikut adalah project-project yang sudah saya buat sebelumnya.
              Mulai dari project sekolah maupun project individu
            </p>
          </div>

          <div className="grid w-full grid-cols-1 justify-items-center gap-5 px-8 md:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} title={project.title} preview={project.preview} source={project.sourceCode}>
                <ProjectCard.Image image={project.image} />
              </ProjectCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
