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

  return (
    <div className="flex gap-10 items-center">
      <div className={"flex gap-3 items-center"}>
        <svg
          className="max-lg:hidden cursor-pointer text-black dark:text-white"
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
        {/* <svg
          onClick={handleDarkMode}
          xmlns="http://www.w3.org/2000/svg"
          className={`cursor-pointer max-lg:hidden  text-black dark:text-yellow`}
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 6a6 6 0 0 1 6 6c0 2.22-1.21 4.16-3 5.2V19a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1.8c-1.79-1.04-3-2.98-3-5.2a6 6 0 0 1 6-6m2 15v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1zm6-10h3v2h-3zM1 11h3v2H1zM13 1v3h-2V1zM4.92 3.5l2.13 2.14l-1.42 1.41L3.5 4.93zm12.03 2.13l2.12-2.13l1.43 1.43l-2.13 2.12z"
          />
        </svg> */}
      </div>
    </div>
  );
};

export default NavbarIcons;
