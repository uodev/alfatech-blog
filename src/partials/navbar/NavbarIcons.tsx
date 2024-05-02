"use client";
import Cookies from "js-cookie";

const NavbarIcons = () => {
  // const handleDarkMode = () => {
  //   console.log("dark mode");

  //   const darkMode = document.documentElement.classList.contains("dark");

  //   if (darkMode) {
  //     Cookies.set("dark", "");
  //     document.documentElement.classList.remove("dark");
  //     //body'e de dark class'ı ekleyebilirsiniz
  //   } else {
  //     Cookies.set("dark", "dark");
  //     document.documentElement.classList.add("dark");
  //     //body'e de dark class'ı ekleyebilirsiniz
  //   }
  // };

  const handleTheme = (theme: string) => {
    console.log("theme", theme);
    Cookies.set("theme", theme);
    //html elementine data-theme attribute'u ekleyebilirsini
    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <div className="flex gap-10 items-center">
      <div className={"flex gap-3 items-center"}>
        <svg
          className="max-lg:hidden cursor-pointer text-white"
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.52 6.52 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5"
          />
        </svg>
        <div className="group relative cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="1.7em"
            height="1.7em"
            className="text-white"
            fill={"none"}
          >
            <path
              d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C12.8417 22 14 22.1163 14 21C14 20.391 13.6832 19.9212 13.3686 19.4544C12.9082 18.7715 12.4523 18.0953 13 17C13.6667 15.6667 14.7778 15.6667 16.4815 15.6667C17.3334 15.6667 18.3334 15.6667 19.5 15.5C21.601 15.1999 22 13.9084 22 12Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M7 15.0024L7.00868 15.0001"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="9.5"
              cy="8.5"
              r="1.5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle
              cx="16.5"
              cy="9.5"
              r="1.5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>

          <div className="invisible absolute z-50 flex flex-col -bottom-32 rounded-lg right-0  shadow-xl group-hover:visible  w-52 h-10 items-center justify-center">
            <div
              onClick={() => handleTheme("hallowen")}
              className="bg-white dark:bg-gray-800/40 w-full h-full flex items-center justify-center p-1"
            >
              <p className="text-white text-lg font-semibold">Hallowen</p>
            </div>
            <div
              onClick={() => handleTheme("christmas")}
              className="bg-white dark:bg-gray-800/40 w-full h-full flex items-center justify-center p-1"
            >
              <p className="text-white text-lg font-semibold">Christmas</p>
            </div>
            <div
              onClick={() => handleTheme("winter")}
              className="bg-white dark:bg-gray-800/40 w-full h-full flex items-center justify-center p-1"
            >
              <p className="text-white text-lg font-semibold">Winter</p>
            </div>
            <div
              onClick={() => handleTheme("summer")}
              className="bg-white dark:bg-gray-800/40 w-full h-full flex items-center justify-center p-1"
            >
              <p className="text-white text-lg font-semibold">Summer</p>
            </div>
            <div
              onClick={() => handleTheme("party")}
              className="bg-white dark:bg-gray-800/40 w-full h-full flex items-center justify-center p-1"
            >
              <p className="text-white text-lg font-semibold">Party</p>
            </div>
            <div
              onClick={() => handleTheme("dark")}
              className="bg-white dark:bg-gray-800/40 w-full h-full flex items-center justify-center p-1"
            >
              <p className="text-white text-lg font-semibold">Dark</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarIcons;
