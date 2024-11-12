import { NextResponse } from "next/server";
import GetPostMetadata from "@/libs/GetPostMetadata";

export async function GET(request) {
  const allPosts = await GetPostMetadata();
  const shuffled = allPosts.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 3);
  return NextResponse.json(selected);
}
