import Banner from "@/components/banner";
import Streams from "@/components/streams";

export default function Home({ params: { lang = "en" } }) {
  return (
    <>
      <Banner lang={lang} />
      <Streams lang={lang} />
    </>
  );
}
