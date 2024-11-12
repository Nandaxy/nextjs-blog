"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname();
  const paths = pathname.split("/").filter((path) => path);

  // SVG untuk ikon Home
  const HomeIcon = (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 12l9-9 9 9M4 10v10a2 2 0 002 2h12a2 2 0 002-2V10"
      ></path>
    </svg>
  );

  // SVG untuk ikon ChevronRight
  const ChevronRightIcon = (
    <svg
      className="h-4 w-4 text-gray-400"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 5l7 7-7 7"
      ></path>
    </svg>
  );

  return (
    <nav aria-label="Breadcrumb" className="text-sm mb-4">
      <ol className="flex items-center space-x-2">
        <li>
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            {HomeIcon}
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {paths.map((path, index) => {
          const href = `/${paths.slice(0, index + 1).join("/")}`;
          const isLast = index === paths.length - 1;
          const title = path.charAt(0).toUpperCase() + path.slice(1);

          return (
            <li key={path} className="flex items-center">
              {ChevronRightIcon}
              {isLast ? (
                <span
                  className="ml-2 text-gray-700 dark:text-gray-200"
                  aria-current="page"
                >
                  {title}
                </span>
              ) : (
                <Link
                  href={href}
                  className="ml-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  {title}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
