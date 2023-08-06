import { useState } from "react";
import { usePages } from "../contexts/PageContext";

function Technology() {
  const { pageData } = usePages();

  const [technology, setTechnology] = useState("Launch vehicle");

  console.log(pageData["technology"]);

  function switchTechnology(e) {
    //"Launch vehicle"    "Spaceport"   "Space capsule"
    if (
      e.target.classList.contains("bg-white") ||
      e.target.classList.contains("technology-list")
    )
      return;

    const nameArr = e.target.classList[0].split("-");
    let name = nameArr[0][0].toUpperCase() + nameArr[0].slice(1);

    if (nameArr.length > 1) {
      name += " " + nameArr[1];
    }

    console.log(nameArr, name);
    setTechnology(name);
    const parentNode = e.target.closest(".technology-list");
    for (let i = 0; i < parentNode.children.length; i++) {
      parentNode.children[i].classList.remove("bg-white");
      parentNode.children[i].classList.remove("text-selected-color");
    }
    e.target.classList.add("text-selected-color");
    e.target.classList.add("bg-white");
  }

  function getCurText(key) {
    return pageData["technology"].filter((ele) => ele.name === technology)[0][
      key
    ];
  }
  //"./technology/image-launch-vehicle-portrait.jpg"
  //"./technology/image-launch-vehicle-landscape.jpg"
  return (
    <div className="mt-6 flex h-full w-full flex-col items-center gap-8 pb-10 pt-4 text-center md:mt-8 md:items-start md:gap-10 lg:min-h-[700px] lg:gap-24">
      <p className="font-barlow-condensed text-base uppercase tracking-small text-white md:pl-10  md:text-xl lg:mt-12 lg:pl-0 lg:text-3xl lg:tracking-big">
        <span className="font-bold opacity-25">03</span> Space launch 101
      </p>
      <div className="lg:absolute lg:right-0 lg:top-48">
        <picture>
          <source
            srcSet={getCurText("images")["landscape"]}
            media="(max-width: 1099px)"
          />
          <img
            srcSet={getCurText("images")["portrait"]}
            src={getCurText("images")["portrait"]}
            alt="image"
            className="h-auto w-screen lg:w-auto"
          />
        </picture>
      </div>

      <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:self-start">
        <ul
          className="technology-list flex gap-4 self-center font-bellefair text-base text-white md:text-2xl lg:flex-col"
          onClick={switchTechnology}
        >
          <li className="launch-vehicle grid h-10 w-10 place-content-center rounded-full border-[1px] border-gray-500 bg-white text-selected-color md:h-16 md:w-16">
            1
          </li>
          <li className="spaceport grid h-10 w-10 place-content-center rounded-full border-[1px] border-gray-500 md:h-16 md:w-16">
            2
          </li>
          <li className="space-capsule grid h-10 w-10 place-content-center rounded-full border-[1px] border-gray-500 md:h-16 md:w-16">
            3
          </li>
        </ul>

        <div className="text-primary lg:text-left">
          <p className="font-barlow-condensed text-sm uppercase tracking-[2.36px] md:text-base md:tracking-small">
            The terminology...
          </p>
          <h1 className="mt-1 font-bellefair text-2xl uppercase text-white md:mt-3 md:text-[2.5rem] md:leading-10">
            {getCurText("name")}
          </h1>
          <p className="mx-8 mt-2 font-barlow text-[15px] font-semibold leading-6 md:mt-5 md:px-32 md:text-base lg:mx-0 lg:w-[21.875rem] lg:px-0">
            {getCurText("description")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Technology;
