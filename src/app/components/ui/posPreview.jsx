import Link from "next/link";

const PostPreview = (props) => {
  // console.log(props);
  return (
    <div
      className="border border-slate-300 dark:border-slate-700 p-4 rounded-md shadow-sm
    bg-white dark:bg-bgDark"
    >
      <Link href={`/posts/${props.slug}`}>
        <h2 className="text-lg text-violet-500 hover:underline mb-2 mt-1">
          {props.title}
        </h2>
      </Link>
      <p className="text-black/70 dark:text-white/70">{props.subtitle}</p>
      <div className="flex justify-between items-center mt-2 text-sm text-black/60 dark:text-white/60">
        <Link href={`/category/${props.category.toLowerCase()}`} className="flex items-center hover:underline">
          <span className="mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-4 h-4 fill-black/60 dark:fill-white/60"
            >
              <path d="m21.41 11.58l-9-9A2 2 0 0 0 11 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 .59 1.42l9 9A2 2 0 0 0 13 22a2 2 0 0 0 1.41-.59l7-7A2 2 0 0 0 22 13a2 2 0 0 0-.59-1.42M13 20l-9-9V4h7l9 9M6.5 5A1.5 1.5 0 1 1 5 6.5A1.5 1.5 0 0 1 6.5 5" />
            </svg>
          </span>
          {props.category}
        </Link>
        <p className=" text-right">{props.date}</p>
      </div>
    </div>
  );
};

export default PostPreview;
