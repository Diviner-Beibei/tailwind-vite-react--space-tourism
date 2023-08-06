import PropTypes from "prop-types";
import { usePages } from "../contexts/PageContext";
Home.propTypes = {
  goPage: PropTypes.func,
};

function Home() {
  const { goPage } = usePages();

  function handleExplore(e) {
    e.preventDefault();

    goPage("destination");
  }

  return (
    <div className="mt-14 flex max-w-md flex-col items-center justify-center px-2 text-center md:mt-24 lg:max-w-full lg:flex-row lg:gap-48">
      <div className="lg:max-w-[450px]">
        <p className="font-barlow-condensed text-base font-semibold uppercase tracking-small text-primary md:text-xl md:tracking-medium lg:text-3xl lg:tracking-big">
          So, you want to travel to
        </p>
        <p className="font-bellefair text-[5rem] uppercase text-white md:text-[9.375rem]">
          Space
        </p>
        <p className="px-8 text-center font-barlow text-sm leading-6 text-primary md:px-0 md:text-base lg:text-lg">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <button
        onClick={handleExplore}
        className="mb-8 mt-20 h-40 w-40 rounded-full  bg-white font-bellefair text-xl uppercase tracking-tiny md:mb-[5rem] md:mt-[10rem] md:h-60 md:w-60 md:text-[2rem] md:tracking-[2px] lg:h-[274px] lg:w-[274px]"
      >
        Explore
      </button>
    </div>
  );
}

export default Home;
