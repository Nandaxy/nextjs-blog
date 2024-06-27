import Link from "next/link";
import { useEffect, useState } from "react";

const MenuCategory = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await fetch('/api/cate');
        const categories = await res.json();
        setData(categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategory();
  }, []);

  const renderCategories = () => {
    if (data.length <= 5) {
      return data.map((category) => (
        <li key={category}>
          <Link href={`/category/${category.toLowerCase()}`}>{category}</Link>
        </li>
      ));
    } else {
      const visibleCategories = data.slice(0, 5);
      return (
        <>
          {visibleCategories.map((category) => (
            <li key={category}>
              <Link href={`/category/${category.toLowerCase()}`} className="whitespace-nowrap">{category}</Link>
            </li>
          ))}
          <li>
            <Link href="/category" className="whitespace-nowrap underline">Lihat Semua</Link>
          </li>
        </>
      );
    }
  };

  return (
    <ul className="p-2 rounded-t-none bg-white dark:bg-bgDark text-gray-600 dark:text-gray-200 whitespace-nowrap">
      {renderCategories()}
    </ul>
  );
};

export default MenuCategory;