import GetPostMetadata from "@/libs/GetPostMetadata";
import DisplayPost from "@/components/ui/DisplayPost";
import RandomPostRecommendations from "@/components/RandomPostRecommendations";

const HomePage = async () => {
  const postMetadata = await GetPostMetadata();
  postMetadata.sort((a, b) => new Date(b.date) - new Date(a.date));
  const dataPost = postMetadata;

  return (
    <>
      <div className="px-4 pb-8">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center">
          <div className="badge badge-secondary badge-outline mr-1">NEW </div>
          Postingan Terbaru
        </h1>
      </div>
      <DisplayPost data={dataPost} />
      <RandomPostRecommendations />
    </>
  );
};

export default HomePage;
