// pages/api/categories.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const folder = path.join(process.cwd(), "./src/posts/");
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter(
      (file) => file.endsWith(".md") || file.endsWith(".mdx")
    );

    const categories = new Set();

    markdownPosts.forEach((fileName) => {
      const fileContents = fs.readFileSync(path.join(folder, fileName), "utf8");
      const { data } = matter(fileContents);
      if (data.category) {
        categories.add(data.category);
      }
    });

    return NextResponse.json(Array.from(categories));
  } catch (error) {
    console.error("Error getting categories:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
