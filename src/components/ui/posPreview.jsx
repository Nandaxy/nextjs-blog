import Image from "next/image";
import Link from "next/link";

const PostPreview = ({ slug, title, subtitle, tags, date, thumbnail }) => {
  return (
    <div
      className="border-2 border-slate-300 dark:border-slate-700 p-4 rounded-md shadow-sm
    bg-white dark:bg-bgDark transition-all duration-300 ease-in-out hover:shadow-md ]"
    >
      <div>
        <Link href={`/posts/${slug}`}>
          <div className="aspect-video overflow-hidden rounded-md">
            <Image
              src={thumbnail ? thumbnail : "/images/zenn-ocean-adventure.jpg"}
              alt={title}
              width={640}
              height={360}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>
          <h2 className="text-lg text-blue-500 mb-2 mt-3 truncate group">
            <span className="bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out">
              {title}
            </span>
          </h2>
        </Link>
        <p className="text-md text-black/70 dark:text-white/70">{subtitle}</p>
      </div>
      {/* tags and date */}
      <div className="flex flex-wrap justify-between items-center pt-4 mb-auto text-sm text-black/60 dark:text-white/60">
        <div className="flex flex-wrap items-center">
          {tags &&
            tags.map((tag, index) => (
              <Link
                key={index}
                href={`/tags/${tag.toLowerCase()}`}
                className="flex items-center group mr-2 mb-2"
              >
                <span className="mr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 fill-black/60 dark:fill-white/60 transition-transform duration-300 group-hover:scale-110"
                  >
                    <path d="m21.41 11.58l-9-9A2 2 0 0 0 11 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 .59 1.42l9 9A2 2 0 0 0 13 22a2 2 0 0 0 1.41-.59l7-7A2 2 0 0 0 22 13a2 2 0 0 0-.59-1.42M13 20l-9-9V4h7l9 9M6.5 5A1.5 1.5 0 1 1 5 6.5A1.5 1.5 0 0 1 6.5 5" />
                  </svg>
                </span>
                <span className="bg-left-bottom bg-gradient-to-r from-black/60 to-black/60 dark:from-white/60 dark:to-white/60 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-300 ease-out">
                  {tag}
                </span>
              </Link>
            ))}
        </div>
        <p className="text-right">{date.split("-").reverse().join("-")}</p>
      </div>
    </div>
  );
};

export default PostPreview;
