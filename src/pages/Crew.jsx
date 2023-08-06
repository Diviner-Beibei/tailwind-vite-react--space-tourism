import { useState } from "react";
import { usePages } from "../contexts/PageContext";

function Crew() {
  const { pageData } = usePages();

  const [crew, setCrew] = useState("Douglas Hurley");

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
    <div className="mt-6 flex h-full w-full flex-col items-center gap-8 pb-10 pt-4 text-center md:mt-8 md:min-h-[60rem] md:items-start md:gap-12 lg:min-h-[45rem]">
      <p className="font-barlow-condensed text-base uppercase tracking-small text-white md:pl-10 md:text-xl lg:mt-12 lg:pl-0 lg:text-3xl lg:tracking-big">
        <span className="font-bold opacity-25">02</span> Meet your crew
      </p>

      <div className="flex flex-col items-center gap-8 md:flex-col-reverse md:gap-10 lg:mt-20 lg:flex-row-reverse lg:gap-0">
        <div className="min-w-full border-b-[1px] border-gray-700 md:absolute md:bottom-0 md:self-center md:border-none lg:right-10 lg:min-w-0 lg:border-solid">
          <picture>
            <source srcSet={getCurText("images")["webp"]} type="image/webp" />
            <source srcSet={getCurText("images")["png"]} type="image/png" />
            <img
              src={getCurText("images")["png"]}
              alt="picture"
              className="mx-auto h-56 md:h-[35.75rem] md:w-[28.5rem] lg:mx-0 lg:h-[712px] lg:w-[456px]"
            />
          </picture>
        </div>

        <div className="flex flex-col gap-8 md:flex-col-reverse md:gap-12 lg:max-w-[550px] lg:text-left">
          <div
            className="crew-list flex gap-5 self-center lg:mt-20 lg:self-start"
            onClick={switchCrew}
          >
            <button className="douglas-hurley h-3 w-3 rounded-full bg-white lg:h-4 lg:w-4"></button>
            <button className="mark-shuttleworth h-3 w-3 rounded-full bg-gray-500 lg:h-4 lg:w-4"></button>
            <button className="victor-glover h-3 w-3 rounded-full bg-gray-500 lg:h-4 lg:w-4"></button>
            <button className="anousheh-ansari h-3 w-3 rounded-full bg-gray-500 lg:h-4 lg:w-4"></button>
          </div>

          <div>
            <p className="font-bellefair text-base uppercase text-white opacity-50 md:text-2xl lg:text-4xl">
              {getCurText("role")}
            </p>
            <h1 className="mt-1 font-bellefair text-2xl uppercase text-white md:mt-4 md:text-[2.5rem] md:leading-10 lg:text-5xl">
              {getCurText("name")}
            </h1>
            <p className="mt-2 px-4 font-barlow text-base text-primary md:mt-6 md:px-40 lg:px-0 lg:pr-32 lg:text-lg">
              {getCurText("bio")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crew;
