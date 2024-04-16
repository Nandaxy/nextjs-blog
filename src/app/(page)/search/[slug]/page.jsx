import GetPostMetadata from "@/app/components/lib/GetPostMetada";
import PostPreview from "@/app/components/ui/posPreview";

const SearchPage = ({ params }) => {
  const searchKeywords = params.slug
    .split("%20")
    .map((keyword) => keyword.toLowerCase());
  //   console.log(searchKeywords)

  const allPostMetadata = GetPostMetadata();

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
        <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-100">
          Hasil Pencarian untuk "{params.slug.replace(/%20/g, " ")}"
        </h1>
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
