const ProjectCard = ({ title, source, preview, children }) => {
  return (
    <div className="project-card">
      <div className="w-full">{children}</div>
      <div className="project-card-description">
        <h2>{title}</h2>
        <div className="mb-2 mt-5 grid grid-cols-2 gap-5">
          <a
            href={source}
            className="btn text-sm md:text-base">
            Source code
          </a>
          <a
            href={preview}
            className="btn text-sm md:text-base">
            Live preview
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectCard.Image = ({ image }) => {
  return <img src={image} alt={image} className="w-full max-w-full" />;
};

export default ProjectCard;
