"use client";

import Link from "next/link";
import SwicthTheme from "../navbar/SwichTheme";
import InputSearch from "../navbar/InputSearch";
import MenuCategory from "../navbar/MenuCategory";

const Navbar = () => {
  return (
    <div className="fixed top-0 shadow shadow-black/10 dark:shadow-white/10 navbar bg-white dark:bg-bgDark z-30">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl dark:text-white">
          Zenn Blog
        </Link>
      </div>
      <InputSearch type="desktop" />
      <InputSearch type="mobile" />
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className="hidden md:block">
            <Link href="/">News</Link>
          </li>
          <li>
            <Link href="/tags">Tags</Link>
          </li>
          <li className="hidden md:block">
            <details>
              <summary>Menu</summary>
              <MenuCategory />
            </details>
          </li>
          <li>
            <SwicthTheme />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
