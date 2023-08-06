import { useState } from "react";
import { usePages } from "../contexts/PageContext";

function Destination() {
  const { pageData } = usePages();

  const [planet, setPlanet] = useState("Moon");

  function switchPlanet(e) {
    e.preventDefault();
    const parentNode = e.target.closest(".planet-list");
    const node = e.target.closest(".planet");

    if (node) {
      const key = node.textContent;
      setPlanet(key);
      for (let i = 0; i < parentNode.children.length; i++) {
        parentNode.children[i].classList.remove("border-b-2");
      }

      node.classList.add("border-b-2");
    }
  }

  function getCurText(key) {
    return pageData["destinations"].filter((ele) => ele.name === planet)[0][
      key
    ];
  }

  return (
    <div className="mt-6 flex h-full w-full flex-col items-center gap-6 px-5 pb-8 pt-4 text-center font-barlow-condensed md:mt-8 md:items-start md:gap-10 lg:gap-20 lg:px-0 lg:pr-4">
      <p className="font-barlow-condensed text-base uppercase tracking-small text-white md:pl-6 md:text-xl lg:mt-12 lg:pl-0 lg:text-3xl lg:tracking-big">
        <span className="font-bold opacity-25">01</span> Pick your destination
      </p>
      <div className="flex flex-col items-center gap-6 md:gap-10 lg:flex-row lg:items-start lg:gap-32">
        <div className="md:self-center">
          <picture>
            <source srcSet={getCurText("images")["webp"]} type="image/webp" />
            <source srcSet={getCurText("images")["png"]} type="image/png" />
            <img
              src={getCurText("images")["png"]}
              className="h-44 w-44 md:h-[18.75rem] md:w-[18.75rem] lg:h-[27.875rem] lg:w-[27.875rem]"
              alt="picture"
            />
          </picture>
        </div>

        <div className="flex flex-col items-center gap-6 md:gap-10 lg:mr-auto lg:max-w-[420px] lg:text-left">
          <ul
            onClick={switchPlanet}
            className="planet-list flex gap-4 text-sm font-light uppercase tracking-small text-white md:gap-8 md:self-center md:text-base md:font-semibold lg:self-start lg:tracking-small"
          >
            <li className="planet border-b-2 border-solid border-white pb-1 md:pb-2">
              Moon
            </li>
            <li className="planet border-solid border-white pb-1 md:pb-2">
              Mars
            </li>
            <li className="planet border-solid border-white pb-1 md:pb-2">
              Europa
            </li>
            <li className="planet border-solid border-white pb-1 md:pb-2">
              Titan
            </li>
          </ul>
          <div className="">
            <h1 className="font-bellefair text-6xl uppercase text-white md:text-[5rem] lg:text-[100px]">
              {getCurText("name")}
            </h1>
            <p className="mt-2 font-barlow text-base text-primary md:px-24 md:font-semibold lg:px-0 lg:text-lg">
              {getCurText("description")}
            </p>
          </div>

          <div className="h-[1px] w-full bg-gray-700"></div>
          <div className="flex flex-col gap-6 md:flex-row md:gap-24 md:self-center lg:self-start">
            <div className="uppercase">
              <p className="mb-1 text-sm tracking-small text-primary">
                Avg. distance
              </p>
              <p className="font-bellefair text-3xl text-white">
                {getCurText("distance")}
              </p>
            </div>

            <div className="uppercase">
              <p className="mb-1 text-sm tracking-small text-primary">
                Est. travel time
              </p>
              <p className="font-bellefair text-3xl text-white">
                {getCurText("travel")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
