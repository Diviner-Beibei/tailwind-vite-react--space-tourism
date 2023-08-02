import PropTypes from "prop-types";

import { createContext, useContext, useReducer, useEffect } from "react";

const GO_PAGE = "go-page";
const LOAD_PAGE_DATA = "load-page-data";

const PagesContext = createContext();

async function readJson() {
  const res = await fetch("./data.json");
  const data = await res.json();

  // console.log("111", data);
  return data;
}

const initialState = {
  curPage: "home", //home,destination
  pageData: "",
};

function reducer(state, action) {
  switch (action.type) {
    case GO_PAGE:
      return {
        ...state,
        curPage: action.payload,
      };
    case LOAD_PAGE_DATA:
      return {
        ...state,
        pageData: action.payload,
      };
    default:
      throw new Error("Unknown action type");
  }
}

PagesProvider.propTypes = {
  children: PropTypes.any,
};

function PagesProvider({ children }) {
  const [{ curPage, pageData }, dispatch] = useReducer(reducer, initialState);

  function goPage(page) {
    dispatch({ type: GO_PAGE, payload: page });
  }

  function getPageBg() {
    const bg = `bg-mobile-${curPage}bg md:bg-tablet-${curPage}bg lg:bg-desktop-${curPage}bg`;
    return bg;
  }

  useEffect(function () {
    readJson().then((data) => {
      dispatch({ type: LOAD_PAGE_DATA, payload: data });
    });
  }, []);

  return (
    <PagesContext.Provider value={{ curPage, goPage, getPageBg, pageData }}>
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
