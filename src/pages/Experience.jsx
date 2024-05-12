import { useRef, useState } from "react";
import { competitions, schools } from "../docs/experiences";

const Experience = () => {
  const [showSchool, setShowSchool] = useState(true);
  const pendidikanRef = useRef();
  const lombaRef = useRef();

  const handleClick = () => {
    setShowSchool(!showSchool);

    lombaRef.current.classList.remove("btn-active");
    pendidikanRef.current.classList.add("btn-active");
  };

  const pendidikanContent = document.querySelectorAll(".pendidikan");
  const lombaContent = document.querySelectorAll(".lomba");

  const handlePendidikan = () => {
    setShowSchool(true);

    lombaRef.current.classList.remove("btn-active");
    pendidikanRef.current.classList.add("btn-active");
  };

  const handleLomba = () => {
    setShowSchool(false);

    lombaRef.current.classList.add("btn-active");
    pendidikanRef.current.classList.remove("btn-active");
  };
  return (
    <section id="pengalaman" className="pb-32">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full text-center">
            <h1 className="hover-underline-animation py-3 text-center text-3xl font-bold uppercase text-primary md:text-5xl lg:mb-6">
              Pengalaman
            </h1>
          </div>
          <div className="flex w-full items-center justify-center px-4 py-4 lg:w-1/5 lg:flex-col lg:justify-start">
            <button
              ref={pendidikanRef}
              onClick={handlePendidikan}
              className="btn-active mx-2 px-2 text-center font-poppins text-base font-bold text-primary lg:my-2 lg:text-lg">
              Pendidikan
            </button>
            <button
              ref={lombaRef}
              onClick={handleLomba}
              className="mx-2 px-3 py-1 text-center font-poppins text-base font-bold text-primary lg:my-2 lg:text-lg">
              lomba
            </button>
          </div>
          <div className="timeline w-full px-4 lg:w-2/3">
            {showSchool
              ? schools.map((school) => (
                  <div className="wrap right pendidikan show" key={school.id}>
                    <div className="content">
                      <h2 className="text-primary">{school.year}</h2>
                      <p>{school.description}</p>
                    </div>
                  </div>
                ))
              : competitions.map((competition) => (
                  <div className="wrap right lomba show" key={competition.id}>
                    <div className="content">
                      <h2 className="text-primary">{competition.year}</h2>
                      <p>{competition.description}</p>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
