"use client";
import React, { useEffect } from "react";

const DarkCOmp = () => {
  useEffect(() => {
    // console.log("shiva");

    const handleThemeChange = (e) => {
      const htmlElement = document.documentElement;
      if (e.matches) {
        htmlElement.classList.add("dark");
        htmlElement.classList.remove("light");
      } else {
        htmlElement.classList.remove("dark");
        htmlElement.classList.add("light");
      }
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    // console.log(mediaQuery.matches);

    handleThemeChange(mediaQuery);
    mediaQuery.addEventListener("change", handleThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, []);

  return null; // This component doesn't render anything itself
};

export default DarkCOmp;
