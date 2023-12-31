import { useState } from "react";

import { usePages } from "./contexts/PageContext";

import NavBar from "./NavBar";
import Menu from "./menu";

import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

function AppLayout() {
  const { curPage, goPage, getPageBg } = usePages();

  const [menuOpen, setMenuOpen] = useState(false);

  function switchMenu() {
    setMenuOpen((menuOpen) => !menuOpen);
  }

  function switchPage(e) {
    e.preventDefault();

    const node = e.target.closest(".page-btn");

    if (node) {
      if (node.classList.contains("border-b-2")) return;
      const parentNode = e.target.closest(".nav-list");
      if (parentNode) {
        for (let i = 0; i < parentNode.children.length; i++) {
          parentNode.children[i].classList.remove("border-b-2");
        }
        e.target.classList.add("border-b-2");
      }

      const pageName = node.textContent.split(" ")[1].toLowerCase();
      goPage(pageName);

      if (menuOpen) setMenuOpen((menuOpen) => !menuOpen);

      console.log(node.textContent, pageName);
    }
  }
  //relative bg-mobile-homebg md:bg-tablet-homebg lg:bg-desktop-homebg
  //relative bg-mobile-destinationbg md:bg-tablet-destinationbg lg:bg-desktop-destinationbg
  //relative bg-mobile-crewbg md:bg-tablet-crewbg lg:bg-desktop-crewbg
  //relative bg-mobile-technologybg md:bg-tablet-technologybg lg:bg-desktop-technologybg
  let style = `relative bg-cover min-h-[56.25rem] bg-center ${getPageBg()}`;

  // console.log(style);

  // style = "relative bg-mobile-homebg md:bg-tablet-homebg lg:bg-desktop-homebg";
  return (
    <main className={style}>
      <NavBar openMenu={switchMenu} goPage={switchPage} />
      {menuOpen && <Menu closeMenu={switchMenu} goPage={switchPage} />}

      {/* lg:ml-32 */}
      <div className="grid items-center justify-center lg:grid-cols-2 lg:justify-start">
        {curPage === "home" && <Home />}
        {curPage === "destination" && <Destination />}
        {curPage === "crew" && <Crew />}
        {curPage === "technology" && <Technology />}
      </div>
    </main>
  );
}

export default AppLayout;
