import Navbar from "../../components/Navbar";
import ImageSlider from "../../components/ImageSlider";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function Home(props: {params: {locale: string}}) {
  const t = await getTranslations({ locale: props.params.locale });

  return (
    <div className="flex-col justify-center align-top min-h-screen w-screen bg-black p-5">
      <Navbar params={props.params} />

      <div className="w-full flex justify-center items-center">
        <ImageSlider />
      </div>

      <Image
        src="/images/duskiesLogo.png"
        alt="logo"
        className="fixed bottom-3 right-3"
        width={50}
        height={50}
      />
    </div>
  );
}

