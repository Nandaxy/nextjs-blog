import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import GetPostMetadata from "@/libs/GetPostMetadata";
import Custom404 from "@/app/not-found";

const getPostContent = async (slug) => {
  const folder = "./src/posts/";
  const file = `${folder}${slug}.md`;

  try {
    const content = await fs.promises.readFile(file, "utf8");
    const matterResult = matter(content);

    if (!matterResult.data.minRead) {
      const wordsPerMinute = 200;
      const wordCount = matterResult.content.split(/\s+/).length;
      matterResult.data.minRead = Math.ceil(wordCount / wordsPerMinute);
    }

    return matterResult;
  } catch (error) {
    return null;
  }
};

export const generateStaticParams = async () => {
  const posts = await GetPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = async (props) => {
  const slug = props.params.slug;
  const post = await getPostContent(slug);

  if (!post) {
    return <Custom404 />;
  }

  return (
    <div className="pt-28">
      <div className="pb-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-200 text-center">
          {post.data.title}
        </h1>
        <div className="flex items-center gap-2 justify-center text-sm">
          <p className="text-gray-800/70 dark:text-gray-200/70 mt-2">
            {post.data.minRead} min read
          </p>
          <span className="text-gray-800/70 dark:text-gray-200/70 mt-2">•</span>
          <p className="text-gray-800/70 dark:text-gray-200/70 mt-2">
            {new Date(post.data.date).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
      <article className="prose dark:prose-invert">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export const generateMetadata = async (slug) => {
  const posts = await getPostContent(slug.params.slug);
  if (!posts) {
    return {
      title: "Not Found",
      description: "Data not found",
    };
  }

  const metadata = posts.data;
  return {
    title: `${metadata.title}`,
    description: `${metadata.subtitle}`,
  };
};

export default PostPage;
