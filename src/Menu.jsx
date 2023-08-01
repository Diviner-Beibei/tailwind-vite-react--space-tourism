import PropTypes from "prop-types";
Menu.propTypes = {
  closeMenu: PropTypes.func,
  goPage: PropTypes.func,
};

function Menu({ closeMenu, goPage }) {
  return (
    <div className="absolute right-0 top-0 h-full w-64 bg-menubg">
      <button className="absolute right-6 top-9" onClick={closeMenu}>
        <img src="./shared/icon-close.svg" alt="menu close" />
      </button>
      <ul
        onClick={goPage}
        className="ml-8 mt-32 flex h-full flex-col justify-start gap-5 font-barlow-condensed text-base tracking-small text-white"
      >
        <li className="home page-btn">
          <span className="font-bold">00</span> Home
        </li>
        <li className="destination page-btn">
          <span className="font-bold">01</span> Destination
        </li>
        <li className="crew page-btn">
          <span className="font-bold">02</span> Crew
        </li>
        <li className="technology page-btn">
          <span className="font-bold">03</span> Technology
        </li>
      </ul>
    </div>
  );
}

export default Menu;
