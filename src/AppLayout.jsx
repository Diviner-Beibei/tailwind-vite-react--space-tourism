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
      const pageName = node.textContent.split(" ")[1].toLowerCase();
      goPage(pageName);

      setMenuOpen((menuOpen) => !menuOpen);
      console.log(node.textContent, pageName);
    }
  }
  //container relative bg-mobile-homebg md:bg-tablet-homebg lg:bg-desktop-homebg
  const style = `container relative ${getPageBg()}`;

  console.log(style);
  return (
    <main className={style}>
      <NavBar openMenu={switchMenu} />
      {menuOpen && <Menu closeMenu={switchMenu} goPage={switchPage} />}

      <div className="mt-14 grid items-center justify-center md:mt-24">
        {curPage === "home" && <Home />}
        {curPage === "destination" && <Destination />}
        {curPage === "crew" && <Crew />}
        {curPage === "technology" && <Technology />}
      </div>
    </main>
  );
}

export default AppLayout;
