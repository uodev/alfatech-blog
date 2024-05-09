"use client";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import H6 from "@/components/H6";
import userStore from "@/stores/userStore";
import { Fragment, useEffect, useState } from "react";

const NavbarIcons = () => {
  const [loading, setLoading] = useState(true);
  const user = userStore((state) => state.user);



  const handleTheme = (theme: string) => {
    console.log("theme", theme);
    Cookies.set("theme", theme);
    //html elementine data-theme attribute'u ekleyebilirsini
    document.documentElement.setAttribute("data-theme", theme);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLoading(false);
    }
  }, []);
  return (
    !loading && (
      <div className="flex gap-5 items-center">
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
        {user ? (
          <Fragment>
            <div className="text-accent bg-accent py-2 px-5 w-44 rounded-lg shadow-md group z-20 relative">
              <div className="flex gap-2">
                <Image
                  src={user.avatar}
                  alt="user"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <H6 text={user.fullName.length > 14 ? user.fullName.substring(0, 15) : user.fullName} className="text-white" />
                  <p className="text-white text-xs" >
                    {user.title.length > 14 ? user.title.substring(0, 15) : user.title}
                  </p>
                </div>
              </div>
              <div className=" absolute -bottom-[130px] left-0 right-0 text-text-color bg-accent/90 py-2 px-5 w-44 rounded-bl-lg rounded-br-lg shadow-md group-hover:visible invisible">
                <ul className="flex flex-col gap-2">
                  <li><Link className="hover:underline" href={"/"}>Profil</Link></li>
                  <li><Link className="hover:underline" href={"/author/add-article"}>Yazı Oluştur</Link></li>
                  <li><Link className="hover:underline" href={"/"}>Ayarlar</Link></li>
                  <li><Link className="hover:underline" href={"/"}>Çıkış</Link></li>
                </ul>
              </div>
            </div>

          </Fragment>
        ) : (
          <Link href={"/author/signin"} className="text-accent">Yazar Girişi</Link>
        )}
      </div>
    )

  )

};

export default NavbarIcons;
