import {useState, useEffect} from "react";

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false);

useEffect (() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode == "true") {
        setDarkMode(true);
        document.documentElement.classList.add("dark");
    }

}, []);

const toggleDarkMode = () => {
   setDarkMode((prevMode) => { 
     const newMode = !prevMode;
     localStorage.setItem("darkMode",String(newMode));
     document.documentElement.classList.toggle("dark", newMode);
     
     return newMode;
   });
};

return (
    <button
        onClick={toggleDarkMode}
        className="p-2 rounded-md border dark:border-gray-500 bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
        >
        {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
);
};

export default DarkModeToggle;
