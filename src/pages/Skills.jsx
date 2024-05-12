import Card from "../components/Card";
import SVG from "../components/Svg";
import { techs } from "../docs/techs";

const Skills = () => {
  return (
    <section id="skills" className="pb-32">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="flex w-full justify-center px-4 lg:w-fit lg:justify-start">
            <h1 className="skill text-3xl font-bold uppercase text-primary lg:rotate-180 lg:text-6xl">
              keahlian
            </h1>
          </div>
          <div className="mt-10 grid w-full grid-cols-2 flex-wrap gap-5 px-4 lg:w-[90%] lg:grid-cols-3 lg:px-0">
            {techs.map((tech) => (
              <Card key={tech.title} title={tech.title}>
                <SVG title={tech.title} fill={tech.fill} path={tech.path} />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
