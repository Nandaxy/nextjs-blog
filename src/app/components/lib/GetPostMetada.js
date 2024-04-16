import fs from "fs";
import matter from "gray-matter";

const GetPostMetadata = () => {
  const folder = "./src/posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md") || file.endsWith(".mdx"));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`./src/posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      minRead: matterResult.data.minRead,
      category: matterResult.data.category,
      slug: fileName.replace(/\.mdx?$/, ""),
    };
  });

  return posts;
};

export default GetPostMetadata;