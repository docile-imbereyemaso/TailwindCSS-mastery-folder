import React, { useEffect, useState } from "react";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Read theme from localStorage on first render
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark"; // true if stored theme is "dark"
  });

  useEffect(() => {
    // Store theme in localStorage whenever darkMode changes
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const handleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex justify-end px-4 py-3">
        <button
          onClick={handleDarkMode}
          className={`bg-indigo-600 px-10 py-3 rounded-md text-lg font-semibold dark:bg-slate-800 transition-all duration-400 ease-in-out dark:text-rose-200 text-white`}
        >
          {!darkMode ? "Light" : "Dark"}
        </button>
      </div>
      <div className="mx-auto w-70 text-justify font-semibold bg-gray-200 py-2 px-2 rounded-lg dark:bg-slate-800 dark:text-white transition-all duration-400 ease-in-out">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          doloribus magni fugit eaque minima debitis quam est commodi odit
          exercitationem.
        </p>
      </div>
    </div>
  );
};

export default DarkMode;
