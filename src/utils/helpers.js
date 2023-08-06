export function getCurText(pageData, page, key, selected) {
  return pageData[page].filter((ele) => ele.name === selected)[0][key];
}