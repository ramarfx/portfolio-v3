const About = () => {
  return (
    <section id="about" className="pb-32 pt-36 lg:pt-44">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="flex w-full items-center justify-center px-4">
            <span className="line-about"></span>
            <h1
              id="aboutText"
              className="text-center font-poppins text-2xl font-bold uppercase text-primary md:text-4xl">
              Tentang Saya
            </h1>
            <span className="line-about"></span>
          </div>
          <div className="flex flex-wrap items-center">
            <div className="mt-10 w-full px-4 lg:w-1/2">
              <div className="mask mx-auto relative">

                <img
                  src="/profil.png"
                  className="h-auto w-[350px] max-w-full relative z-10 peer"
                  alt="ramadina almuzthazam image"
                />
                {/* backlight */}
                <div className="pointer-events-none transition duration-300 absolute -left-52 -bottom-10 -rotate-45 opacity-50 blur-3xl hover:opacity-100 peer-hover:opacity-80">
                  <img src="/blob.svg" className="scale-125" alt="backlight" draggable="false" />
                </div>

              </div>
            </div>
            <div className="mt-10 w-full self-center px-4 lg:w-1/2">
              <p className="mb-8 block text-base text-secondary md:text-lg">
                Saya adalah seorang siswa yang pada awalnya ingin masuk ke
                teknik jaringan tetapi nyasar ke software enginer kemudian
                berujung suka dan memiliki minat dalam pengembangan aplikasi
                web. Saya berusaha keras disaat sedang ditimpa error dan itu
                adalah tantangan yang harus saya terima serta saya hadapi
              </p>

              <a href="https://drive.google.com/file/d/1bh5Wf1mI2WvRlj97eXCyZl2A6e8DAlvm/view?usp=sharing" download={true} className="bg-lightDark-100 rounded-xl bg-opacity-25 hover:bg-lightDark-200 transition ease-in-out text-white backdrop-blur px-10 py-3">Download CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
