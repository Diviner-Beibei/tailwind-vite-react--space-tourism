import PropTypes from "prop-types";
NavBar.propTypes = {
  openMenu: PropTypes.func,
  goPage: PropTypes.func,
};
function NavBar({ openMenu, goPage }) {
  return (
    <nav className="flex items-center justify-between px-6 pt-6 md:px-10">
      <img src="./shared/logo.svg" alt="Logo" />
      <img
        src="./shared/icon-hamburger.svg"
        alt="menu button"
        className="md:hidden"
        onClick={openMenu}
      />

      <ul
        className="hidden gap-3 font-barlow-condensed text-sm font-semibold tracking-[2.36px] text-white md:flex"
        onClick={goPage}
      >
        <li className="home page-btn">
          <span className="hidden">00</span> Home
        </li>
        <li className="destination page-btn">
          <span className="hidden">01</span> Destination
        </li>
        <li className="crew page-btn">
          <span className="hidden">02</span> Crew
        </li>
        <li className="technology page-btn">
          <span className="hidden">03</span> Technology
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
