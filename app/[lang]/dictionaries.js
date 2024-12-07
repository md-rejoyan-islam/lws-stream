import "server-only";

const dictionaries = {
  bn: () =>
    import("./dictionaries/bn.dictionary.json").then(
      (module) => module.default
    ),
  en: () =>
    import("./dictionaries/en.dictionary.json").then(
      (module) => module.default
    ),
};

export const getDictionary = async (locale) => {
  const locales = process.env.LOCALES.split(",");

  if (locales?.includes(locale) && locale in dictionaries) {
    const key = locale;
    return dictionaries[key]();
  } else return undefined;
};
