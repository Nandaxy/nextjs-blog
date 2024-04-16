import GetPostMetadata from "./components/lib/GetPostMetada";
import PostPreview from "./components/ui/posPreview";

const HomePage = () => {
  const postMetadata = GetPostMetadata().sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="pt-28">
      <div className="px-2 pb-8">
        <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-100">
          Postingan Terbaru
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {postPreviews}
      </div>
    </div>
  );
};

export default HomePage;
