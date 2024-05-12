const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="flex flex-col-reverse flex-wrap items-center gap-2 p-8">
          <p className="font-poppins text-sm text-primary">2023 - Ramarfx</p>
          <div className="sosmed text-base text-primary">
            <a href="https://discordapp.com/users/755793484392300624" aria-label="link to my discord">
              <i className="fa-brands fa-discord"></i>
            </a>
            <a href="https://github.com/ramarfx" aria-label="link to my github">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.instagram.com/ramtxh/" aria-label="link to my instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://facebook.com/ramadinaalmuthazam" aria-label="link to my facebook">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
