"use client";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";

import clsx from "clsx";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { CheckDownIcon, CheckIcon } from "./svg";

export default function LanguageSwitch() {
  const router = useRouter();
  const { lang } = useParams();

  const languages = [
    { id: 1, name: "English", code: "en" },
    { id: 2, name: "Bengali", code: "bn" },
  ];

  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(
    languages.find((language) => language.code === lang)
  );

  const filteredLanguage =
    query === ""
      ? languages
      : languages.filter((language) => {
          return language.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="mx-auto  w-32">
      <Combobox
        value={selected}
        onChange={(value) => {
          setSelected(value);
          router.push(`/${value.code}`);
        }}
        onClose={() => setQuery("")}
      >
        <div className="relative">
          <ComboboxInput
            className={clsx(
              "w-full rounded-lg bg-gray-800/70  py-1 pr-8 pl-3 text-sm/6 dark:text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 dark:data-[focus]:outline-white/25"
            )}
            displayValue={(language) => language?.name}
            onChange={(event) => setQuery(event.target.value)}
          />
          <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
            <CheckDownIcon />
          </ComboboxButton>
        </div>

        <ComboboxOptions
          anchor="bottom"
          transition
          className={clsx(
            "w-[var(--input-width)] rounded-md border border-gray-800 bg-gray-900 border-border_color  text-black dark:text-white dark:bg-dark_bg_primary p-1 [--anchor-gap:var(--spacing-1)] empty:invisible",
            "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0  absolute mt-1  z-[100] "
          )}
          style={{
            top: "80px",
          }}
        >
          {filteredLanguage.map((language) => (
            <ComboboxOption
              key={language.id}
              value={language}
              className="group flex  items-center gap-2  cursor-pointer py-1  px-3 select-none data-[focus]:bg-white/10"
            >
              {/* <HiCheck className="invisible size-4 dark:fill-white group-data-[selected]:visible" /> */}
              <CheckIcon />
              <div className="text-sm/6 dark:text-white">{language?.name}</div>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  );
}
