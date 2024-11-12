"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [randomPosts, setRandomPost] = useState([]);
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    const fetchrandomPosts = async () => {
      try {
        const response = await fetch("/api/random-posts");
        const data = await response.json();
        setRandomPost(data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        console.log("Error fetching:", err);
      }
    };

    const fetchTags = async () => {
      try {
        const response = await fetch("/api/tags");
        const data = await response.json();
        setTags(data);
      } catch (err) {
        console.log("Error fetching:", err);
      }
    };

    fetchrandomPosts();
    fetchTags();
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const profile = {
    name: "Zenn",
    bio: "Programmer, Designer, and Creator",
    avatar: "/asset/pepet.jpeg",
  };

  const sidebarContent = (
    <div className="z-10">
      <div className="mb-8 mt-4 text-center">
        <Image
          src={profile.avatar}
          alt={profile.name}
          width={100}
          height={100}
          className="rounded-full mx-auto object-cover"
        />
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2 mt-2">
          {profile.name}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {profile.bio}
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          Tags
        </h3>
        {!tags.length ? (
          <div className="flex items-center justify-center">
            <span className="loading loading-dots loading-lg mx-auto"></span>
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 9).map((tagObj, index) => (
              <Link
                key={index}
                href={`/tags/${tagObj.tag.toLowerCase()}`}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
              >
                {tagObj.tag} <span className="text-xs">({tagObj.count})</span>
              </Link>
            ))}
            {tags.length > 9 && (
              <Link
                href="/tags"
                className="opacity-50 px-3 py-1 bg-gray-200 dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300 flex items-center justify-center gap-1"
              >
                Lainnya..
                <span className="text-xs bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 px-2 py-0.5 rounded-full">
                  {tags.length - 9}
                </span>
              </Link>
            )}
          </div>
        )}
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          Random Posts
        </h3>
        {isLoading ? (
          <div className="skeleton h-32 w-full"></div>
        ) : (
          <ul className="space-y-2">
            {randomPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/posts/${post.slug}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );

  return (
    <>
      <button
        className="fixed top-4 left-2 z-50 lg:hidden bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg"
        onClick={toggleSidebar}
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-800 dark:text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-800 dark:text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      <div
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform pt-20 md:overflow-y-auto border-r border-gray-200 dark:border-gray-800 ${
          isOpen || !isMobile ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 bg-white dark:bg-bgDark p-4 overflow-y-auto`}
      >
        {sidebarContent}
      </div>

      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}
