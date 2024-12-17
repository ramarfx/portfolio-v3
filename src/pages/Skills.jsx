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
                {tech.title === 'Django' ? (
                  <SVG title={tech.title}>
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path x={0} d="M14.135,4H18.1V22.169a26.218,26.218,0,0,1-5.143.535c-4.842-.005-7.362-2.168-7.362-6.322,0-4,2.673-6.6,6.816-6.6a6.448,6.448,0,0,1,1.724.2V4Zm0,9.142a3.992,3.992,0,0,0-1.337-.2c-2,0-3.163,1.223-3.163,3.366,0,2.087,1.107,3.239,3.138,3.239a9.355,9.355,0,0,0,1.362-.1v-6.3Z" style={{ fill: '#44b78b' }} /><path d="M24.4,10.059v9.1c0,3.133-.235,4.639-.923,5.938A6.316,6.316,0,0,1,20.237,28l-3.678-1.733A5.708,5.708,0,0,0,19.7,23.638c.566-1.121.745-2.42.745-5.837V10.059Z" style={{ fill: '#44b78b' }} /><rect x="20.441" y="4.02" width="3.964" height="4.028" style={{ fill: '#44b78b' }} /></svg>
                  </SVG>
                ) : (
                  <SVG title={tech.title} fill={tech.fill} path={tech.path} />
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
