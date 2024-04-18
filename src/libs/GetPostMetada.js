import fs from "fs";
import path from "path";
import matter from "gray-matter";

const GetPostMetadata = async () => {
  try {
    const folder = path.join(process.cwd(), "./src/posts/");
    const files = await fs.promises.readdir(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md") || file.endsWith(".mdx"));

    const posts = await Promise.all(markdownPosts.map(async (fileName) => {
      const fileContents = await fs.promises.readFile(path.join(folder, fileName), "utf8");
      const matterResult = matter(fileContents);
      return {
        title: matterResult.data.title,
        date: matterResult.data.date,
        subtitle: matterResult.data.subtitle,
        minRead: matterResult.data.minRead,
        category: matterResult.data.category,
        slug: fileName.replace(/\.mdx?$/, ""),
      };
    }));

    return posts;
  } catch (error) {
    console.error("Error reading post metadata: ", error);
    return [];
  }
};

export default GetPostMetadata;
