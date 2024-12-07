import { getDictionary } from "@/app/[lang]/dictionaries";
import Link from "next/link";
import StreamCard from "./StreamCard";

export default async function Streams({ lang }) {
  // Dynamically import the JSON
  const { default: videos } = await import("@/libs/data/videos.json");
  const dictionary = await getDictionary(lang);

  return (
    <section className="mt-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">
          {dictionary?.streams_of_the_day}
        </h2>
        <Link
          href="#"
          className="bg-color-gray hover:bg-opacity-80 text-sm px-4 py-2 rounded-full"
        >
          {dictionary?.view_all}
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {videos.map((video) => (
          <StreamCard key={video.videoId} {...video} lang={lang} />
        ))}
      </div>
    </section>
  );
}
