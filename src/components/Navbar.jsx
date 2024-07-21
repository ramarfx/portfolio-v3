import React from "react";

export const Navbar = () => {
  window.onscroll = () => {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;

    if (window.scrollY > fixedNav) {
      header.classList.add("navbar-fixed");
    } else {
      header.classList.remove("navbar-fixed");
    }
  };

  const handleToggle = () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
  };
  return (
    <>
      <header className="absolute left-0 top-0 z-50 flex w-full items-center bg-transparent">
        <div className="container">
          <div className="relative flex items-center justify-between">
            <div className="px-4">
              <a
                href="#home"
                className="block py-6 font-poppins text-2xl font-bold tracking-wide text-primary lg:text-3xl">
                Ramarfx
              </a>
            </div>
            <div className="flex items-center px-4">
              <button
                onClick={handleToggle}
                id="hamburger"
                name="hamburger"
                className="absolute right-4 block lg:hidden"
                aria-label="hamburger menu button">
                <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
              </button>

              <nav
                id="navMenu"
                className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-dark py-5 shadow-sm shadow-lightDark-100 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none">
                <ul className="block lg:flex">
                  <li className="group">
                    <a
                      href="#home"
                      className="mx-5 flex py-2 font-poppins text-base text-slate-300 group-hover:text-primary">
                      Beranda
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#about"
                      className="mx-5 flex py-2 font-poppins text-base text-slate-300 group-hover:text-primary">
                      Tentang Saya
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#skills"
                      className="mx-5 flex py-2 font-poppins text-base text-slate-300 group-hover:text-primary">
                      kemampuan
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#pengalaman"
                      className="mx-5 flex py-2 font-poppins text-base text-slate-300 group-hover:text-primary">
                      Pengalaman
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#project"
                      className="mx-5 flex py-2 font-poppins text-base text-slate-300 group-hover:text-primary">
                      Proyek
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
