function Content() {
  return (
    <div className="text-center max-w-md px-2 flex flex-col justify-center items-center">
      <p className="font-barlow-condensed text-xl tracking-medium text-primary">
        So, you want to travel to
      </p>
      <p className="text-[9.375rem] font-bellefair uppercase text-white">
        Space
      </p>
      <p className="text-base text-center font-barlow text-primary">
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
      <button className="w-60 h-60 bg-white rounded-full mt-[10rem] mb-[5rem] font-bellefair text-[2rem] tracking-[2px] uppercase">
        Explore
      </button>
    </div>
  );
}

export default Content;
