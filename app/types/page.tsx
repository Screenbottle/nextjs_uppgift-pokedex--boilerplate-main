import TypeList from "../components/TypeList";
import Image from "next/image";



export default async function TypePage({ searchParams }: { searchParams: Promise<{ type?: string }> }) {
    const params = await searchParams;

    return (
        <div>
            <div className="flex flex-col items-center gap-4 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)] p-14">
                <h1 className="text-center text-6xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">
                    Pokémon Types
                </h1>
            </div>
            <div className="p-4 justify-center">
                <ul className="flex flex-row flex-wrap gap-2 justify-center mb-4">
                    <li className="px-2 py-1 text-sm font-semibold font-jaldi text-white rounded-full" style={{ backgroundColor: `var(--normal)` }}>
                        <a href="?type=normal" className="flex flex-row items-center justify-center">
                            <Image src="/Normal_icon_SV.svg" alt="Normal" width={32} height={32} />
                            <p className="font-semibold font-jaldi mx-1">Normal</p>
                        </a>
                    </li>
                    <li className="px-2 py-1 text-sm font-semibold font-jaldi text-white rounded-full" style={{ backgroundColor: `var(--fire)` }}>
                        <a href="?type=fire" className="flex flex-row items-center justify-center">
                            <Image src="/Fire_icon_SV.svg" alt="Fire" width={32} height={32} />
                            <p className="font-semibold font-jaldi mx-1">Fire</p>
                        </a>
                    </li>
                    <li className="px-2 py-1 text-sm font-semibold font-jaldi text-white rounded-full" style={{ backgroundColor: `var(--fighting)` }}>
                        <a href="?type=fighting" className="flex flex-row items-center justify-center">
                            <Image src="/Fighting_icon_SV.svg" alt="Fighting" width={32} height={32} />
                            <p className="font-semibold font-jaldi mx-1">Fighting</p>
                        </a>
                    </li>
                    <li className="px-2 py-1 text-sm font-semibold font-jaldi text-white rounded-full " style={{ backgroundColor: `var(--water)` }}>
                        <a href="?type=water" className="flex flex-row items-center justify-center">
                            <Image src="/Water_icon_SV.svg" alt="Water" width={32} height={32} />
                            <p className="font-semibold font-jaldi mx-1">Water</p>
                        </a>
                    </li>
                    <li className="px-2 py-1 text-sm font-semibold font-jaldi text-white rounded-full" style={{ backgroundColor: `var(--flying)` }}>
                        <a href="?type=flying" className="flex flex-row items-center justify-center">
                            <Image src="/Flying_icon_SV.svg" alt="Flying" width={32} height={32} />
                            <p className="font-semibold font-jaldi mx-1">Flying</p>
                        </a>
                    </li>
                    <li className="px-2 py-1 text-sm font-semibold font-jaldi text-white rounded-full " style={{ backgroundColor: `var(--grass)` }}>
                        <a href="?type=grass" className="flex flex-row items-center justify-center">
                            <Image src="/Grass_icon_SV.svg" alt="Grass" width={32} height={32} />
                            <p className="font-semibold font-jaldi mx-1">Grass</p>
                        </a>
                    </li>
                    <li className="px-2 py-1 text-sm font-semibold font-jaldi text-white rounded-full" style={{ backgroundColor: `var(--poison)` }}>
                        <a href="?type=poison" className="flex flex-row items-center justify-center">
                            <Image src="/Poison_icon_SV.svg" alt="Poison" width={32} height={32} />
                            <p className="font-semibold font-jaldi mx-1">Poison</p>
                        </a>
                    </li>
                    <li className="px-2 py-1 text-sm font-semibold font-jaldi text-white rounded-full" style={{ backgroundColor: `var(--electric)` }}>
                        <a href="?type=electric" className="flex flex-row items-center justify-center">
                            <Image src="/Electric_icon_SV.svg" alt="Electric" width={32} height={32} />
                            <p className="font-semibold font-jaldi mx-1">Electric</p>
                        </a>
                    </li>
                    <li className="px-2 py-1 text-sm font-semibold font-jaldi text-white rounded-full" style={{ backgroundColor: `var(--ground)` }}>
                        <a href="?type=ground" className="flex flex-row items-center justify-center">
                            <Image src="/Ground_icon_SV.svg" alt="Ground" width={32} height={32} />
                            <p className="font-semibold font-jaldi mx-1">Ground</p>
                        </a>
                    </li>
                    <li className="px-2 py-1 text-sm font-semibold font-jaldi text-white rounded-full" style={{ backgroundColor: `var(--psychic)` }}>
                        <a href="?type=psychic" className="flex flex-row items-center justify-center">
                            <Image src="/Psychic_icon_SV.svg" alt="Psychic" width={32} height={32} />
                            <p className="font-semibold font-jaldi mx-1">Psychic</p>
                        </a>
                    </li>
                    <li className="px-2 py-1 text-sm font-semibold font-jaldi text-white rounded-full" style={{ backgroundColor: `var(--rock)` }}>
                        <a href="?type=rock" className="flex flex-row items-center justify-center">
                            <Image src="/Rock_icon_SV.svg" alt="Rock" width={32} height={32} />
                            <p className="font-semibold font-jaldi mx-1">Rock</p>
                        </a>
                    </li>
                    <li className="px-2 py-1 text-sm font-semibold font-jaldi text-white rounded-full" style={{ backgroundColor: `var(--ice)` }}>
                        <a href="?type=ice" className="flex flex-row items-center justify-center">
                            <Image src="/Ice_icon_SV.svg" alt="Ice" width={32} height={32} />
                            <p className="font-semibold font-jaldi mx-1">Ice</p>
                        </a>
                    </li>
                    <li className="px-2 py-1 text-sm font-semibold font-jaldi text-white rounded-full" style={{ backgroundColor: `var(--bug)` }}>
                        <a href="?type=bug" className="flex flex-row items-center justify-center">
                            <Image src="/Bug_icon_SV.svg" alt="Bug" width={32} height={32} />
                            <p className="font-semibold font-jaldi mx-1">Bug</p>
                        </a>
                    </li>
                    <li className="px-2 py-1 text-sm font-semibold font-jaldi text-white rounded-full" style={{ backgroundColor: `var(--dragon)` }}>
                        <a href="?type=dragon" className="flex flex-row items-center justify-center">
                            <Image src="/Dragon_icon_SV.svg" alt="Dragon" width={32} height={32} />
                            <p className="font-semibold font-jaldi mx-1">Dragon</p>
                        </a>
                    </li>
                    <li className="px-2 py-1 text-sm font-semibold font-jaldi text-white rounded-full" style={{ backgroundColor: `var(--ghost)` }}>
                        <a href="?type=ghost" className="flex flex-row items-center justify-center">
                            <Image src="/Ghost_icon_SV.svg" alt="Ghost" width={32} height={32} />
                            <p className="font-semibold font-jaldi mx-1">Ghost</p>
                        </a>
                    </li>
                    <li className="px-2 py-1 text-sm font-semibold font-jaldi text-white rounded-full" style={{ backgroundColor: `var(--dark)` }}>
                        <a href="?type=dark" className="flex flex-row items-center justify-center">
                            <Image src="/Dark_icon_SV.svg" alt="Dark" width={32} height={32} />
                            <p className="font-semibold font-jaldi mx-1">Dark</p>
                        </a>
                    </li>
                    <li className="px-2 py-1 text-sm font-semibold font-jaldi text-white rounded-full" style={{ backgroundColor: `var(--steel)` }}>
                        <a href="?type=steel" className="flex flex-row items-center justify-center">
                            <Image src="/Steel_icon_SV.svg" alt="Steel" width={32} height={32} />
                            <p className="font-semibold font-jaldi mx-1">Steel</p>
                        </a>
                    </li>
                    <li className="px-2 py-1 text-sm font-semibold font-jaldi text-white rounded-full" style={{ backgroundColor: `var(--fairy)` }}>
                        <a href="?type=fairy" className="flex flex-row items-center justify-center">
                            <Image src="/Fairy_icon_SV.svg" alt="Fairy" width={32} height={32} />
                            <p className="font-semibold font-jaldi mx-1">Fairy</p>
                        </a>
                    </li>
                </ul>
                {params.type && <TypeList pokemonType={params.type} />}
            </div>
        </div>
    );
}
