import fs from "fs";
import path from "path";
import matter from "gray-matter";

const calculateReadingTime = (content) => {
  const wordsPerMinute = 200; 
  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime;
};

const GetPostMetadata = async () => {
  try {
    const folder = path.join(process.cwd(), "./src/posts/");
    const files = await fs.promises.readdir(folder);
    const markdownPosts = files.filter(
      (file) => file.endsWith(".md") || file.endsWith(".mdx")
    );

    const posts = await Promise.all(
      markdownPosts.map(async (fileName) => {
        const filePath = path.join(folder, fileName);
        const fileContents = await fs.promises.readFile(filePath, "utf8");
        const matterResult = matter(fileContents);

        const readingTime = calculateReadingTime(matterResult.content);

        return {
          title: matterResult.data.title,
          date: matterResult.data.date,
          subtitle: matterResult.data.subtitle,
          minRead: readingTime,
          tags: matterResult.data.tags || [],
          slug: fileName.replace(/\.mdx?$/, ""),
          thumbnail: matterResult.data.thumbnail,
        };
      })
    );

    return posts;
  } catch (error) {
    console.error("Error reading post metadata: ", error);
    return [];
  }
};

export default GetPostMetadata;