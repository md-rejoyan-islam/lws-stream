import { getDictionary } from "@/app/[lang]/dictionaries";

export default async function Banner({ lang }) {
  // Dynamically import the JSON
  const { default: videos } = await import("@/libs/data/videos.json");

  const randomVideo = videos[Math.floor(Math.random() * videos.length)];

  const dictionary = await getDictionary(lang);

  return (
    <main className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
      <div className="lg:col-span-2">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight font-play">
          {dictionary?.play}, {dictionary?.compete},
          <br />
          {dictionary.follow} {dictionary?.popular}
          <br />
          {dictionary?.streamers}
        </h1>
        <p className="text-gray-400 mb-8">
          {randomVideo.title} by {randomVideo.author}
        </p>
      </div>
      <div className="lg:col-span-2">
        <div className="relative rounded-lg overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${randomVideo.videoId}`}
            title="YouTube video player"
            className="w-full aspect-video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen=""
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4">
            <div className="text-right">
              <span className="bg-color-purple text-white px-2 py-1 rounded text-sm">
                {dictionary?.coming_soon}
              </span>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">04:03</div>
              <p className="text-sm">Broadcast starts in</p>
            </div>
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-400">{randomVideo.title}</p>
      </div>
    </main>
  );
}
