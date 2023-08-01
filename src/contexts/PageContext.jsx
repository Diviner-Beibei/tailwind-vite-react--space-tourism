import PropTypes from "prop-types";

import { createContext, useContext, useReducer } from "react";

const GO_PAGE = "go-page";

const PagesContext = createContext();

const initialState = {
  curPage: "home",
};

function reducer(state, action) {
  switch (action.type) {
    case GO_PAGE:
      return {
        ...state,
        curPage: action.payload,
      };
    default:
      throw new Error("Unknown action type");
  }
}

PagesProvider.propTypes = {
  children: PropTypes.any,
};

function PagesProvider({ children }) {
  const [{ curPage }, dispatch] = useReducer(reducer, initialState);

  function goPage(page) {
    dispatch({ type: GO_PAGE, payload: page });
  }

  function getPageBg() {
    const bg = `bg-mobile-${curPage}bg md:bg-tablet-${curPage}bg lg:bg-desktop-${curPage}bg`;
    return bg;
  }

  return (
    <PagesContext.Provider value={{ curPage, goPage, getPageBg }}>
      {children}
    </PagesContext.Provider>
  );
}

function usePages() {
  const context = useContext(PagesContext);
  if (context === undefined)
    throw new Error("PagesContext was used outside the PagesProvider");
  return context;
}

export { PagesProvider, usePages };
