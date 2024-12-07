import Image from "next/image";
import Link from "next/link";

export default function StreamCard({
  title,
  thumbnail,
  channelTitle,
  videoId,
  lang,
}) {
  return (
    <Link
      href={`/${lang}/videos/${videoId}`}
      className="rounded-lg overflow-hidden bg-color-gray"
    >
      <Image
        src={thumbnail}
        alt={title}
        height={350}
        width={500}
        className="w-full h-40 object-cover"
      />
      <div className="p-2">
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-gray-400">{channelTitle}</p>
      </div>
    </Link>
  );
}
