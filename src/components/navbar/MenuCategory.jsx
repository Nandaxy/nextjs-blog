import Link from "next/link";

const MenuCategory = async() => {
  return (
    <ul className="p-2 rounded-t-none bg-white dark:bg-bgDark text-gray-600 dark:text-gray-200 whitespace-nowrap">
      <li>
        <Link href="/category/teknologi">Teknologi</Link>
      </li>
      <li>
        <Link href="/category/makanan">Makanan</Link>
      </li>
      <li>
        <Link href="/category/cerita">Cerita</Link>
      </li>
    </ul>
  );
};

export default MenuCategory;
