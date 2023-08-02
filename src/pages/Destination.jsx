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
    <div className="mt-6 flex h-full flex-col items-center gap-6 px-5 pb-8 pt-4 text-center font-barlow-condensed">
      <p className="font-barlow-condensed text-base uppercase tracking-small text-white">
        <span className="font-bold opacity-25">01</span> Pick your destination
      </p>
      <picture>
        <source srcSet={getCurText("images")["webp"]} type="image/webp" />
        <source srcSet={getCurText("images")["png"]} type="image/png" />
        <img
          src={getCurText("images")["png"]}
          className="h-44 w-44"
          alt="picture"
        />
      </picture>

      <ul
        onClick={switchPlanet}
        className="planet-list flex gap-4 text-sm font-light uppercase tracking-small text-white"
      >
        <li className="planet border-b-2 border-solid border-white pb-1">
          Moon
        </li>
        <li className="planet border-solid border-white pb-1">Mars</li>
        <li className="planet border-solid border-white pb-1">Europa</li>
        <li className="planet border-solid border-white pb-1">Titan</li>
      </ul>
      <div>
        <h1 className="font-bellefair text-6xl uppercase text-white">
          {getCurText("name")}
        </h1>
        <p className="mt-2 font-barlow text-base text-primary">
          {getCurText("description")}
        </p>
      </div>

      <div className="h-[1px] w-full bg-gray-700"></div>
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
  );
}

export default Destination;
