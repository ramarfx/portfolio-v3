const About = () => {
  return (
    <section id="about" class="pb-32 pt-36 lg:pt-44">
      <div class="container">
        <div class="flex flex-wrap">
          <div class="flex w-full items-center justify-center px-4">
            <span class="line-about"></span>
            <h1
              id="aboutText"
              class="text-center font-poppins text-2xl font-bold uppercase text-primary md:text-4xl">
              Tentang Saya
            </h1>
            <span class="line-about"></span>
          </div>
          <div class="flex flex-wrap items-center">
            <div class="mt-10 w-full px-4 lg:w-1/2">
              <div class="mask mx-auto">
                <img
                  src="/profil.png"
                  class="h-auto w-[350px] max-w-full"
                />
              </div>
            </div>
            <div class="mt-10 w-full self-center px-4 lg:w-1/2">
              <p class="mb-8 block text-base text-secondary md:text-lg">
                Saya adalah seorang siswa yang pada awalnya ingin masuk ke
                teknik jaringan tetapi nyasar ke software enginer kemudian
                berujung suka dan memiliki minat dalam pengembangan aplikasi
                web. Saya berusaha keras disaat sedang ditimpa error dan itu
                adalah tantangan yang harus saya terima serta saya hadapi
              </p>

              <div class="flex flex-wrap justify-around gap-2 md:justify-normal md:gap-10">
                <div class="flex flex-col gap-1 font-poppins font-bold text-primary">
                  <p class="text-sm md:text-base">Nama</p>
                  <p class="text-sm md:text-base">Umur</p>
                  <p class="text-sm md:text-base">Asal</p>
                </div>

                <div class="flex flex-col items-start gap-1 font-poppins font-medium text-secondary">
                  <p class="text-sm md:text-base">Ramadina Al Muzthazam</p>
                  <p class="text-sm md:text-base">16 Tahun</p>
                  <p class="text-sm md:text-base">Air Molek, Riau</p>
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
