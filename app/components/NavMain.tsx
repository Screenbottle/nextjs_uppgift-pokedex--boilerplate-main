import Link from "next/link";
import Image from "next/image";
import data from "@/lib/data/pages.json"

export default async function NavMain() {
    return (
        <nav className="breakout flex items-center justify-between">
            <Link href={"/"}>
                <span className="flex flex-row items-center gap-3">
                    <Image src="/logo.png" alt="Logo" width={40} height={40} />
                    <h2 className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">Pokédex</h2>
                </span>
            </Link>
            <ul className="flex gap-4">
                {data["pages"].map((link, index) => (
                    <li key={index}>
                        <Link
                            className="p-4 block text-lg uppercase hover:bg-neutral-700 hover:text-neutral-100"
                            href={link.href}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}