import { useEffect, useState } from "react";
export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (isDarkMode === "dark" || (isDarkMode === null && prefersDark)) {
      setIsDarkMode(true);
      localStorage.setItem("darkmode", "dark");
    }
  }, []);
  useEffect(() => {}, []);
  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    if (isDarkMode) {
      body.dataset.theme = "darkTheme";
      localStorage.setItem("darkmode", "dark");
    } else {
      body.dataset.theme = "lightTheme";
      localStorage.setItem("darkmode", "light");
    }
  });
  const toggle = () => {
    setIsDarkMode((prev) => !prev);
  };
  return { isDarkMode, toggle };
};
