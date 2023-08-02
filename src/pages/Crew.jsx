import { useState } from "react";
import { usePages } from "../contexts/PageContext";

function Crew() {
  const { pageData } = usePages();

  const [crew, setCrew] = useState("Douglas Hurley");
  // console.log(pageData["crew"]);

  function getCurText(key) {
    return pageData["crew"].filter((ele) => ele.name === crew)[0][key];
  }

  function switchCrew(e) {
    if (
      e.target.classList.contains("bg-white") ||
      e.target.classList.contains("crew-list")
    )
      return;

    const nameArr = e.target.classList[0].split("-");
    const name =
      nameArr[0][0].toUpperCase() +
      nameArr[0].slice(1) +
      " " +
      nameArr[1][0].toUpperCase() +
      nameArr[1].slice(1);

    console.log(nameArr, name);
    setCrew(name);
    // console.log(e.target.classList[0]);
    const parentNode = e.target.closest(".crew-list");
    for (let i = 0; i < parentNode.children.length; i++) {
      parentNode.children[i].classList.remove("bg-white");
      parentNode.children[i].classList.add("bg-gray-500");
    }
    e.target.classList.remove("bg-gray-500");
    e.target.classList.add("bg-white");
  }

  return (
    <div className="mt-6 flex h-full w-full flex-col items-center gap-8 pb-10 pt-4 text-center">
      <p className="font-barlow-condensed text-base uppercase tracking-small text-white">
        <span className="font-bold opacity-25">02</span> Meet your crew
      </p>
      <div className="min-w-[327px] border-b-[1px] border-gray-700">
        <picture>
          <source srcSet={getCurText("images")["webp"]} type="image/webp" />
          <source srcSet={getCurText("images")["png"]} type="image/png" />
          <img
            src={getCurText("images")["png"]}
            alt="picture"
            className="mx-auto h-56"
          />
        </picture>
      </div>

      <div className="crew-list flex gap-5" onClick={switchCrew}>
        <button className="douglas-hurley h-3 w-3 rounded-full bg-white"></button>
        <button className="mark-shuttleworth h-3 w-3 rounded-full bg-gray-500"></button>
        <button className="victor-glover h-3 w-3 rounded-full bg-gray-500"></button>
        <button className="anousheh-ansari h-3 w-3 rounded-full bg-gray-500"></button>
      </div>

      <div>
        <p className="font-bellefair text-base uppercase text-white opacity-50">
          {getCurText("role")}
        </p>
        <h1 className="mt-1 font-bellefair text-2xl uppercase text-white">
          {getCurText("name")}
        </h1>
        <p className="mt-2 px-4 font-barlow text-base text-primary">
          {getCurText("bio")}
        </p>
      </div>
    </div>
  );
}

export default Crew;
