const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <h1 className="text-center text-primary text-2xl font-bold font-poppins md:text-4xl">HUBUNGI SAYA</h1>

                <div className="flex flex-col md:flex-row max-w-screen-md mx-auto mt-10">
                    <div className="w-full md:w-1/2">
                        <div className="flex gap-3 items-center mb-4">
                            <i className="fa-brands fa-linkedin text-primary text-3xl"></i>
                            <div>
                                <a href="https://linkedin.com/in/ramarfx" className="text-secondary text-base font-semibold hover:underline">Ramadina Al Muzthazam</a>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center mb-4">
                            <i className="fa-solid fa-envelope text-primary text-3xl"></i>
                            <div>
                                <a href="mailto:ramadinaalmuthazam@gmail.com" className="text-secondary text-base hover:underline">ramadinaalmuthazam@gmail.com</a>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center mb-4">
                            <i className="fa-brands fa-instagram text-primary text-3xl"></i>
                            <div>
                                <a href="https://www.instagram.com/ramtxh" className="text-secondary text-base hover:underline">ramtxh</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="mb-3">
                            <label htmlFor="name" className="text-secondary">Nama</label>
                            <input type="text" placeholder="input nama" className="w-full placeholder:text-secondary bg-opacity-25 backdrop-blur px-2 py-2 bg-lightDark-100 text-white focus:outline focus:outline-lightDark-100" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="text-secondary">Email</label>
                            <input type="email" placeholder="input email" className="w-full placeholder:text-secondary bg-opacity-25 backdrop-blur px-2 py-2 bg-lightDark-100 text-white focus:outline focus:outline-lightDark-100" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="text-secondary">Pesan</label>
                            <textarea name="message" id="message" className="w-full placeholder:text-secondary bg-opacity-25 backdrop-blur h-[250px] px-2 py-2 bg-lightDark-100 text-white focus:outline focus:outline-lightDark-100" placeholder="input pesan"></textarea>
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="bg-primary rounded-xl hover:bg-primary/50 transition ease-in-out text-white backdrop-blur px-10 py-3">Kirim</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;