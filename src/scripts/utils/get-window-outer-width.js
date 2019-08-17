export const getWindowOuterWidth = () => {
  return window.outerWidth === 0 ? window.innerWidth : window.outerWidth;
};
