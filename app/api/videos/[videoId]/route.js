import videos from "@/libs/data/videos.json";
import { writeFileSync } from "fs";
import { NextResponse } from "next/server";
import path from "path";

// Path to the JSON file
const filePath = path.join(process.cwd(), "/libs/data/videos.json");

// Get Video by id

export async function GET(_, { params }) {
  const { videoId } = params;

  const video = videos.find((video) => video?.videoId === videoId);

  if (!video) {
    return NextResponse.json({ error: "Video not found" }, { status: 404 });
  }

  return NextResponse.json(video, { status: 200 });
}

// Update Video by id
export async function PATCH(req, { params }) {
  const { videoId } = params;

  const body = await req.json();
  const { title, description } = body;

  // key without title and description
  const extraKeys = Object.keys(body)?.filter(
    (key) => key !== "title" && key !== "description"
  );

  if (extraKeys.length > 0) {
    return NextResponse.json(
      {
        error: extraKeys.join(",") + " is not allowed",
      },
      {
        status: 404,
      }
    );
  }

  const video = videos.find((video) => video?.videoId === videoId);
  if (!video) {
    return NextResponse.json({ error: "Video not found" }, { status: 404 });
  }

  // update data
  video.title = title ? title : video.title;
  video.description = description ? description : video.description;

  // updated local data
  const updatedData = videos.map((data) => {
    if (data.videoId === videoId) {
      data = video;
    }
    return data;
  });

  writeFileSync(filePath, JSON.stringify(updatedData));

  return NextResponse.json(video, { status: 200 });
}

// Delete Video by id
export async function DELETE(_, { params }) {
  const { videoId } = params;

  const video = videos.find((video) => video?.videoId === videoId);

  if (!video) {
    return NextResponse.json({ error: "Video not found" }, { status: 404 });
  }
  // delete from videos
  const WithoutDeletedVideos = videos.filter(
    (video) => video?.videoId !== videoId
  );
  // update local data
  writeFileSync(filePath, JSON.stringify(WithoutDeletedVideos));

  return NextResponse.json(video, { status: 200 });
}
