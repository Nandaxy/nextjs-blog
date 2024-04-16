"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const Navbar = () => {
  const searchRefDesk = useRef();
  const searchRefMobi = useRef();
  const router = useRouter();

  const [isDarkMode, setIsDarkMode] = useState(true);
  // tema
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  useEffect(() => {
    let theme = localStorage.getItem("theme");
    if (theme === null) {
      theme = "dark";
      localStorage.setItem("theme", theme);
    }

    if (theme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Funsgi searcingg...
  const handleSearchMobiDesk = (event) => {
    const keyword = searchRefDesk.current.value;

    if (!keyword || keyword.trim() == "") return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };

  const handleSearchMobi = (event) => {
    const keyword = searchRefMobi.current.value;

    if (!keyword || keyword.trim() == "") return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${keyword}`);
      document.getElementById("closeSearchModal").click();
    }
  };

  return (
    <div className="fixed top-0 shadow shadow-black/10 dark:shadow-white/10 navbar bg-white dark:bg-bgDark">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl dark:text-white">
          Zenn Blog
        </Link>
      </div>
      {/* search untuk desktop */}
      <div className="hidden md:block">
        <label className="flex items-center gap-2 border rounded-lg dark:border-gray-700 bg-white dark:bg-bgDark">
          <input
            type="text"
            className="grow px-4 py-2 focus:outline-none bg-white dark:bg-bgDark text-gray-600 dark:text-gray-200"
            placeholder="Search"
            ref={searchRefDesk}
            onKeyDown={handleSearchMobiDesk}
          />
          <span className="pr-2 cursor-pointer" onClick={handleSearchMobiDesk}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="w-6 h-6 opacity-70 fill-black dark:fill-white"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </label>
      </div>
      {/* search untuk Mobile */}
      <div className="block md:hidden mr-1">
        <span
          className="flex justify-center items-center"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-6 h-6 opacity-70 m-auto"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <dialog id="my_modal_2" className="modal  modal-top">
          <div className="modal-box bg-white dark:bg-bgDark text-gray-600 dark:text-gray-200">
            <h3 className="font-bold text-lg">Cari di Blog!</h3>
            <label className="input input-bordered flex items-center gap-2 mt-8 bg-white dark:bg-bgDark text-gray-600 dark:text-gray-200">
              <input
                type="text"
                className="grow"
                placeholder="Search"
                ref={searchRefMobi}
                onKeyDown={handleSearchMobi}
              />
              <svg
                onClick={handleSearchMobi}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button id="closeSearchModal">close</button>
          </form>
        </dialog>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className="hidden md:block">
            <Link href="/">News</Link>
          </li>
          <li>
            <details>
              <summary>Menu</summary>
              <ul className="p-2 rounded-t-none bg-white dark:bg-bgDark text-gray-600 dark:text-gray-200 whitespace-nowrap">
                <li>
                  <Link href="/category/teknologi">Teknologi</Link>
                </li>
                <li>
                  <Link href="/category/makanan">Makanan</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <div onClick={toggleDarkMode}>
              {isDarkMode ? (
                <svg
                  className="swap-off fill-current w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
              ) : (
                <svg
                  className="swap-on fill-current w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
