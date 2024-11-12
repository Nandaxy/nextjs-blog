"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function RandomPostRecommendations() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRandomPosts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/random-posts");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRandomPosts();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-32 animate-pulse bg-gray-200 my-10"></div>
    );
  }

  return (
    <div className="bg-white dark:bg-bgDark rounded-lg shadow-md dark:shadow-white/5 border border-gray-200 dark:border-gray-700 p-4 my-10">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
        <span className="badge badge-outline badge-secondary mr-1">CEK</span>
        Baca Juga
      </h2>
      <ul className="space-y-3">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/posts/${post.slug}`}
              className="group flex items-center text-blue-600 dark:text-blue-400 hover:underline tooltip w-fit"
              data-tip={post.subtitle}
            >
              <span className="flex-grow">{post.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
