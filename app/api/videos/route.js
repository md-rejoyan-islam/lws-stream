import videos from "@/libs/data/videos.json";
import { NextResponse } from "next/server";

// Get all videos
export async function GET() {
  if (videos.length === 0)
    return NextResponse.json({ error: "No videos found" }, { status: 404 });

  return NextResponse.json(videos, {
    status: 200,
  });
}
