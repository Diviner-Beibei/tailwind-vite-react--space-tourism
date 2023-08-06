import PropTypes from "prop-types";
NavBar.propTypes = {
  openMenu: PropTypes.func,
  goPage: PropTypes.func,
};
function NavBar({ openMenu, goPage }) {
  return (
    <nav className="flex items-center justify-between lg:pt-10">
      <img
        src="./shared/logo.svg"
        alt="Logo"
        className="pl-7 pt-7 md:pl-10 md:pt-0 lg:pl-12"
      />
      <img
        src="./shared/icon-hamburger.svg"
        alt="menu button"
        className="pr-8 pt-6 md:hidden"
        onClick={openMenu}
      />

      <div className="absolute left-36 z-0 hidden h-[1px] w-1/4 lg:block lg:bg-divide-color"></div>
      <ul
        className="nav-list z-10 hidden font-barlow-condensed text-sm font-semibold tracking-[2.36px] text-white md:flex md:h-[96px] md:w-[450px] md:items-center md:justify-center md:gap-6 md:bg-[#979797]/10 lg:w-[830px] lg:gap-28"
        onClick={goPage}
      >
        <li className="home page-btn border-b-2 py-9">
          <span className="hidden lg:inline">00</span> Home
        </li>
        <li className="destination page-btn py-9">
          <span className="hidden lg:inline">01</span> Destination
        </li>
        <li className="crew page-btn py-9">
          <span className="hidden lg:inline">02</span> Crew
        </li>
        <li className="technology page-btn py-9">
          <span className="hidden lg:inline">03</span> Technology
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
