import GetPostMetadata from "@/app/components/lib/GetPostMetada";
import PostPreview from "@/app/components/ui/posPreview";
import Custom404 from "@/app/not-found";

const CategoryPage = ({ params }) => {
  const category = params.slug;
  //   console.log(category);
  const postMetadata = GetPostMetadata()
    .filter((post) => post.category.toLowerCase() === category)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  //   console.log(postMetadata);

  if (postMetadata.length === 0) {
    return <Custom404 />;
  }

  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="pt-28">
      <div className="px-2 pb-8">
        <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-100">
          Kategori {category.charAt(0).toUpperCase() + category.slice(1)}
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
    title: `Kategori untuk ${dynamicTitle}`,
  };
};

export default CategoryPage;
