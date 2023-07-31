function NavBar() {
  return (
    <nav className="flex items-center justify-between px-10 pt-7">
      <img src="./assets/shared/logo.svg" alt="Logo" />
      <ul className="font-barlow-condensed flex gap-3 text-sm font-bold text-white">
        <li className="">
          <span className="hidden">00</span> Home
        </li>
        <li>
          <span className="hidden">01</span> Destination
        </li>
        <li>
          <span className="hidden">02</span> Crew
        </li>
        <li>
          <span className="hidden">03</span> Technology
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
