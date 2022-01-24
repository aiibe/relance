import Image from "next/image";
import Logo from "../icons/logo.svg";

export default function Header() {
  return (
    <nav className="sticky top-0 z-40 w-full bg-white">
      <div className="max-w-8xl mx-auto">
        <div className="py-4 border-b mx-4">
          <div className="">
            <Image src={Logo} height={45} />
          </div>
        </div>
      </div>
    </nav>
  );
}
