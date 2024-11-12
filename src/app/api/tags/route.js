import { NextResponse } from "next/server";
import GetPostMetadata from "@/libs/GetPostMetadata";

export async function GET(request) {
  const postMetadata = await GetPostMetadata();

  const tagCounts = postMetadata.reduce((acc, post) => {
    post.tags.forEach((tag) => {
      acc[tag] = acc[tag] ? acc[tag] + 1 : 1;
    });
    return acc;
  }, {});

  const sortedTags = Object.entries(tagCounts)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => a.tag.localeCompare(b.tag));

  const tagsList = sortedTags.slice(0, 10);

  return NextResponse.json(tagsList);
}
