import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
      <div className="px-10 py-10 flex items-center">
        Powered by the &nbsp; 
        <Link href="https://www.hiro.so/" target="_blank">
        <Image src="/hirologo.png" alt="Hiro Logo" width="20" />
        </Link>&nbsp; Runes API.
      </div>
    )
  }