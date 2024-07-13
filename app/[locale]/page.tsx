import Image from "next/image";

export default async function Home() {
  return (
    <div className="flex items-center justify-center mt-20">
      <div className="flex items-center justify-center">
        <Image
          src="/images/duskiesLogo.png"
          alt="logo"
          priority
          className="mt-10"
          width={250}
          height={250}
        />
      </div>
    </div>
  );
}
