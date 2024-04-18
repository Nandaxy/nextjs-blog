import GetPostMetadata from "@/libs/GetPostMetada";
import DisplayPost from "@/components/ui/DisplayPost";
import Custom404 from "@/app/not-found";

const CategoryPage = async ({ params }) => {
  const category = params.slug;
  const postMetadata = await GetPostMetadata();
  const filteredPostMetadata = postMetadata.filter(
    (post) => post.category.toLowerCase() === category
  );
  const sortedPostMetadata = filteredPostMetadata.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  if (sortedPostMetadata.length === 0) {
    return <Custom404 />;
  }

  return (
    <div className="pt-28">
      <div className="px-2 pb-8">
        <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-100 flex items-center">
          <span className="mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-black/60 dark:fill-white/60"
            >
              <path d="m21.41 11.58l-9-9A2 2 0 0 0 11 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 .59 1.42l9 9A2 2 0 0 0 13 22a2 2 0 0 0 1.41-.59l7-7A2 2 0 0 0 22 13a2 2 0 0 0-.59-1.42M13 20l-9-9V4h7l9 9M6.5 5A1.5 1.5 0 1 1 5 6.5A1.5 1.5 0 0 1 6.5 5" />
            </svg>
          </span>
          Kategori {category.charAt(0).toUpperCase() + category.slice(1)}
        </h1>
      </div>
      <DisplayPost data={sortedPostMetadata} />
    </div>
  );
};

export const generateMetadata = (title) => {
  const dynamicTitle = title.params.slug;
  return {
    title: `Kategori untuk ${dynamicTitle}`,
  };
};

export default CategoryPage;
