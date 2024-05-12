const Illustration = () => {
  return (
    <>
      <div className="pointer-events-none absolute left-0 top-8 -translate-x-2/4 rotate-180 -scale-x-100 opacity-50 blur-3xl">
        <img src="/shape.svg" className="scale-125" />
      </div>
      <div className="pointer-events-none absolute right-3 top-10 -translate-y-52 translate-x-1/2 rotate-180 -scale-x-100 opacity-70 blur-3xl">
        <img src="/shape.svg" alt="" />
      </div>
      <div className="pointer-events-none absolute -right-[30%] top-[23%] -rotate-45 opacity-70 blur-3xl">
        <img src="/shape.svg" className="-scale-x-1250" />
      </div>
      <div className="pointer-events-none absolute -right-[10%] top-[60%] -rotate-45 opacity-15 blur-3xl">
        <img src="/shape.svg" className="-scale-125" />
      </div>
      <div className="pointer-events-none absolute left-[10%] top-[45%] -rotate-45 opacity-30 blur-3xl">
        <img src="/shape.svg" className="-scale-x-100" />
      </div>
      <div className="pointer-events-none absolute -left-[20%] bottom-[10%] rotate-180 opacity-20 blur-3xl">
        <img src="/shape.svg" className="-scale-150" />
      </div>
      <div className="pointer-events-none absolute -right-1/2 top-40 rotate-180 opacity-70 blur-3xl">
        <img src="/shape.svg" className="-scale-75" />
      </div>
    </>
  );
};

export default Illustration;
