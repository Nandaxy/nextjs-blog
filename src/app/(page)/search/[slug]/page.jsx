import GetPostMetadata from "@/libs/GetPostMetada";
import PostPreview from "@/components/ui/posPreview";

const SearchPage = async ({ params }) => {
  const searchKeywords = params.slug
    .split("%20")
    .map((keyword) => keyword.toLowerCase());
  //   console.log(searchKeywords)

  const allPostMetadata = await GetPostMetadata();

  const filteredPostMetadata = allPostMetadata.filter((post) => {
    return searchKeywords.some(
      (keyword) =>
        post.slug.toLowerCase().includes(keyword) ||
        post.title.toLowerCase().includes(keyword) ||
        post.subtitle.toLowerCase().includes(keyword)
    );
  });

  if (filteredPostMetadata.length === 0) {
    return (
      <div className="pt-28">
        <div className="px-2 pb-8">
          <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-100">
            Postingan Tidak Ditemukan!
          </h1>
        </div>
      </div>
    );
  }

  const postPreviews = filteredPostMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="pt-28">
      <div className="px-2 pb-8">
        <div className="flex items-center">
          <span className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-6 h-6 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-100 flex items-center">
            Hasil Pencarian untuk "{params.slug.replace(/%20/g, " ")}"
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {postPreviews}
      </div>
    </div>
  );
};

export const generateMetadata = (title) => {
  const dynamicTitle = title.params.slug;
  return {
    title: `Hasil Pencarian untuk ${dynamicTitle.replace(/%20/g, " ")}`,
  };
};

export default SearchPage;
