import { getDictionary } from "@/app/[lang]/dictionaries";

export const YouMayLike = async ({ lang }) => {
  const dictionary = await getDictionary(lang);

  return (
    <h2 className="text-xl font-semibold mb-4">{dictionary?.you_may_like}</h2>
  );
};
