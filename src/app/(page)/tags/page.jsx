import GetPostMetadata from "@/libs/GetPostMetadata";
import Link from "next/link";

const AllTagsPage = async () => {
  const postMetadata = await GetPostMetadata();

  const tagCounts = postMetadata.reduce((acc, post) => {
    post.tags.forEach((tag) => {
      acc[tag] = acc[tag] ? acc[tag] + 1 : 1;
    });
    return acc;
  }, {});

  const allTags = [...new Set(postMetadata.flatMap((post) => post.tags))].sort(
    (a, b) => a.localeCompare(b)
  );

  return (
    <div className="px-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        Daftar Tag
      </h1>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        Total Tags: <span className="font-semibold">{allTags.length}</span>
      </p>
      <ul className=" grid grid-cols-1 md:grid-cols-2 gap-2 ">
        {allTags.map((tag) => (
          <li
            key={tag}
            className="flex items-center p-2 bg-gray-100 dark:bg-gray-800 rounded-md shadow hover:shadow-lg transition-shadow duration-200"
          >
            <span className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-black/60 dark:fill-white/60"
              >
                <path d="m21.41 11.58l-9-9A2 2 0 0 0 11 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 .59 1.42l9 9A2 2 0 0 0 13 22a2 2 0 0 0 1.41-.59l7-7A2 2 0 0 0 22 13a2 2 0 0 0-.59-1.42M13 20l-9-9V4h7l9 9M6.5 5A1.5 1.5 0 1 1 5 6.5A1.5 1.5 0 0 1 6.5 5" />
              </svg>
            </span>
            <Link
              href={`/tags/${tag.toLowerCase()}`}
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
            >
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </Link>
            <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
              ({tagCounts[tag]} Postingan)
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllTagsPage;
