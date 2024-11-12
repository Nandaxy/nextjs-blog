import Link from "next/link";

const MenuCategory = () => {
  return (
    <ul className="p-2 rounded-t-none bg-white dark:bg-bgDark text-gray-600 dark:text-gray-200 whitespace-nowrap">
      <li className=" rounded-t-none hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">
        <Link href="/sitemap.xml">Sitemap</Link>
      </li>
    </ul>
  );
};

export default MenuCategory;
