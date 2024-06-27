import { BASE_URL } from "@/libs/constants";
import GetPostMetadata from "@/libs/GetPostMetada";

export default async function sitemap() {
  const post = await GetPostMetadata();
  const sitemaps = post.map((post) => ({
    url: `${BASE_URL}/posts/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  sitemaps.push({
    url: `${BASE_URL}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 1,
  });

  console.log(sitemaps);
  return sitemaps.map((post) => ({
    url: post.url,
    lastModified: post.lastModified,
    changeFrequency: post.changeFrequency,
    priority: post.priority,
  }));
}
