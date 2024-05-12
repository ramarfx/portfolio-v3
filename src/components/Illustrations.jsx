const Illustration = () => {
  return (
    <>
      <div className="pointer-events-none absolute left-0 top-6 -translate-x-2/3 rotate-180 -scale-x-100 opacity-70 blur-3xl">
        <img src="/shape.svg" alt="" />
      </div>
      <div className="pointer-events-none absolute right-0 top-0 -translate-y-52 translate-x-1/2 rotate-180 -scale-x-100 opacity-70 blur-3xl">
        <img src="/shape.svg" alt="" />
      </div>
      <div className="pointer-events-none absolute right-2/3 top-[45%] -z-10 rotate-180 opacity-70 blur-3xl">
        <img src="/shape.svg" className="-scale-75" />
      </div>
      <div className="pointer-events-none absolute left-0 top-[37%] -z-10 -rotate-45 opacity-70 blur-3xl">
        <img src="./dist/img/blob.svg" className="-scale-x-100" />
      </div>
      <div className="pointer-events-none absolute -right-[20%] top-[45%] -z-10 -rotate-45 opacity-70 blur-3xl">
        <img src="./dist/img/blob.svg" className="-scale-x-100" />
      </div>
      <div className="pointer-events-none absolute left-0 top-[70%] -z-10 rotate-180 opacity-70 blur-3xl">
        <img src="/shape.svg" className="-scale-50" />
      </div>
      <div className="pointer-events-none absolute -right-1/2 top-40 -z-10 rotate-180 opacity-70 blur-3xl">
        <img src="/shape.svg" className="-scale-75" />
      </div>
    </>
  );
};

export default Illustration;
