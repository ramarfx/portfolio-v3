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
                  className="h-auto w-[350px] max-w-full relative z-10"
                />
                {/* backlight */}
                <div className="pointer-events-none absolute -left-52 -bottom-10 -rotate-45 opacity-70 blur-3xl">
                  <img src="/blob.svg" className="scale-125" />
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

              <div className="flex flex-wrap justify-around gap-2 md:justify-normal md:gap-10">
                <div className="flex flex-col gap-1 font-poppins font-bold text-primary">
                  <p className="text-sm md:text-base">Nama</p>
                  <p className="text-sm md:text-base">Umur</p>
                  <p className="text-sm md:text-base">Asal</p>
                </div>

                <div className="flex flex-col items-start gap-1 font-poppins font-medium text-secondary">
                  <p className="text-sm md:text-base">Ramadina Al Muzthazam</p>
                  <p className="text-sm md:text-base">16 Tahun</p>
                  <p className="text-sm md:text-base">Air Molek, Riau</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
