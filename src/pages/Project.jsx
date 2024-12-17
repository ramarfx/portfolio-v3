import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../docs/projects";

const Project = () => {
  const [visibleProjects, setVisibleProjects] = useState(3); // Jumlah awal proyek yang ditampilkan

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 3); // Tambah jumlah proyek yang ditampilkan
  };

  return (
    <section id="project" className="pb-32">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="flex w-full flex-col items-center px-4 py-4 text-center">
            <h1 className="hover-underline-animation py-3 text-3xl font-bold uppercase text-primary md:text-5xl">
              Proyek
            </h1>
            <p className="text-base text-secondary lg:w-1/2">
              Berikut adalah beberapa proyek yang telah saya buat sebelumnya
            </p>
          </div>

          <div className="grid w-full grid-cols-1 justify-center gap-5 px-8 sm:grid-cols-2 md:grid-cols-3">
            {projects.slice(0, visibleProjects).map((project) => (
              <ProjectCard key={project.title} title={project.title} preview={project.preview} source={project.sourceCode} description={project.description}>
                <ProjectCard.Image image={project.image} />
              </ProjectCard>
            ))}
          </div>

          {visibleProjects < projects.length && (
            <div className="mt-8 flex justify-center w-full">
              <button
                onClick={loadMoreProjects}
                className="bg-lightDark-100 rounded-lg bg-opacity-25 hover:bg-lightDark-200 transition ease-in-out text-white backdrop-blur px-10 py-3"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Project;
