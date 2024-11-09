import GetPostMetadata from "@/libs/GetPostMetadata";
import DisplayPost from "@/components/ui/DisplayPost";

const HomePage = async () => {
  const postMetadata = await GetPostMetadata();
  postMetadata.sort((a, b) => new Date(b.date) - new Date(a.date));
  const dataPost = postMetadata;

  return (
    <div className="pt-28">
      <div className="px-4 pb-8">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Postingan Terbaru
        </h1>
      </div>
      <DisplayPost data={dataPost} />
    </div>
  );
};

export default HomePage;
