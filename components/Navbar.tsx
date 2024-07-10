import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex items-center justify-center">
        <Image
          src="/images/duskiesLogo.png"
          alt="logo"
          className="absolute top-3 left-3"
          width={80}
          height={80}
        />
      </div>
      <ul className="flex justify-center sm:space-x-12 space-x-4 text-white ">
        <li>
          <a className="cursor-pointer hover:underline" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="cursor-pointer hover:underline" href="/members">
            Members
          </a>
        </li>
        <li>
          <a className="cursor-pointer hover:underline" href="/products">
            Products
          </a>
        </li>
        <li>
          <a className="cursor-pointer hover:underline" href="/events">
            Events
          </a>
        </li>
        <li>
          <a className="cursor-pointer hover:underline" href="/contact">
            Contact
          </a>
        </li>
        <li>
          <a className="cursor-pointer hover:underline" href="/about-us">
            About us
          </a>
        </li>
      </ul>
    </div>
  );
}
