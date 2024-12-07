"use client";
import { useParams } from "next/navigation";

export default function NotFound() {
  const params = useParams();

  return (
    <div className="flex items-center justify-center h-[calc(86vh)]">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          404 - Video Not Found
        </h1>
        <p className="text-gray-600 dark:text-white">
          This video with {"{"}
          {params?.videoId}
          {"}"} id was not found!
        </p>
      </div>
    </div>
  );
}
