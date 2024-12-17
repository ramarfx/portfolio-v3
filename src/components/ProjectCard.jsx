const ProjectCard = ({ title, source, preview, children, description }) => {
  return (
    <div className="project-card">
      <div className="w-full h-full">{children}</div>
      <div className="project-card-description h-full flex flex-col justify-between">
        <div>
          <h2 className="">{title}</h2>
          <p className="text-slate-400 text-sm">
            {description ? description 
            : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, nam alias voluptate nisi quisquam odit a quidem dolorem, aliquid rerum quia amet eveniet distinctio, illo magni velit similique sequi officia.'}
          </p>
        </div>
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

// eslint-disable-next-line react/display-name
ProjectCard.Image = ({ image }) => {
  return <img src={image} alt={image} className="w-full max-w-full h-[200px] object-cover object-left-top" />;
};

export default ProjectCard;
