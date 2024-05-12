import { useRef } from "react";
import { competitions, schools } from "../docs/experiences";

const Experience = () => {
  const pendidikanRef = useRef();
  const lombaRef = useRef();

  const pendidikanContent = document.querySelectorAll(".pendidikan");
  const lombaContent = document.querySelectorAll(".lomba");

  const handlePendidikan = () => {
    pendidikanContent.forEach((pendidikan) => {
      pendidikan.classList.add("show");
    });
    lombaContent.forEach((lomba) => {
      lomba.classList.remove("show");
    });

    lombaRef.current.classList.remove("btn-active");
    pendidikanRef.current.classList.add("btn-active");
  };

  const handleLomba = () => {
    pendidikanContent.forEach((pendidikan) => {
      pendidikan.classList.remove("show");
    });
    lombaContent.forEach((lomba) => {
      lomba.classList.add("show");
      // lomba.className.display = 'hidden'
    });

    lombaRef.current.classList.add("btn-active");
    pendidikanRef.current.classList.remove("btn-active");
  };
  return (
    <section id="pengalaman" class="pb-32">
      <div class="container">
        <div class="flex flex-wrap">
          <div class="w-full text-center">
            <h1 class="hover-underline-animation py-3 text-center text-3xl font-bold uppercase text-primary md:text-5xl lg:mb-6">
              Pengalaman
            </h1>
          </div>
          <div class="flex w-full items-center justify-center px-4 py-4 lg:w-1/5 lg:flex-col lg:justify-start">
            <button
              ref={pendidikanRef}
              onClick={handlePendidikan}
              class="btn-active mx-2 px-2 text-center font-poppins text-base font-bold text-primary lg:my-2 lg:text-lg">
              Pendidikan
            </button>
            <button
              ref={lombaRef}
              onClick={handleLomba}
              class="mx-2 px-3 py-1 text-center font-poppins text-base font-bold text-primary lg:my-2 lg:text-lg">
              lomba
            </button>
          </div>
          <div class="timeline w-full px-4 lg:w-2/3">
            {competitions.map((competition) => (
              <div class="wrap right lomba hidden">
                <div class="content">
                  <h2 class="text-primary">{competition.year}</h2>
                  <p>{competition.description}</p>
                </div>
              </div>
            ))}

            {schools.map((school) => (
              <div class="wrap right pendidikan show">
                <div class="content">
                  <h2 class="text-primary">{school.year}</h2>
                  <p>{school.description}</p>
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
