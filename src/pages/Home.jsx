import Typed from "typed.js";
import profile from "/profil.png";
import { useEffect, useRef } from "react";
const Home = () => {
  const typedRef = useRef();
  useEffect(() => {
    const type = new Typed(typedRef.current, {
      strings: ["web developer", "frontend developer"],
      typeSpeed: 120,
      backSpeed: 40,
      loop: true,
    });

    return () => {
      type.destroy();
    };
  }, []);

  return (
    <section id="home" className="pt-36">
      <div className="container">
        <div className="flex flex-wrap justify-between">
          <div className="w-full self-center px-4 lg:w-1/2">
            <p className="text-base text-slate-200 md:text-xl -mb-1">
              Hai, nama saya
            </p>
            <h1 className="mb-4 -mt-1 font-poppins text-4xl font-semibold text-primary md:whitespace-nowrap md:text-5xl lg:leading-relaxed">
              Ramadina Al Muzthazam
            </h1>
            <h2 className="-mt-5 mb-4 font-poppins text-lg font-medium text-slate-500 dark:text-white lg:-mt-8 lg:text-xl">
              <span ref={typedRef} className="bg-primary text-white"></span>
            </h2>
            <h3 className="text-base text-secondary md:text-lg">
              Saya adalah web developer yang senang belajar hal-hal baru dan
              juga menyukai desain grafis
            </h3>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:right-0">
              <img
                src={profile}
                className="mx-auto h-auto w-[350px] max-w-full lg:scale-110"
                alt="ramadina almuzthazam image"
              />
              <span className="absolute -bottom-24 left-1/2 -z-10 -translate-x-1/2 md:scale-125 lg:-bottom-20 lg:scale-150">
                <img src="/profile-blob.svg" alt="" />
              </span>
            </div>

            {/* <!-- Particles animation --> */}
            <div
              className="pointer-events-none absolute inset-0 -z-20"
              aria-hidden="true">
              <canvas data-particle-animation></canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
