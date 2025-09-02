import React from "react";
import TypeList from "../components/TypeList";


export default function TypePage() {
    return (
        <div>
            <div className="flex flex-col items-center gap-4 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)] p-14">
                <h1 className="text-center text-6xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">Sort Pokemon by Type</h1>
            </div>
            <div>
                {<TypeList pokemonType="fire" />}
            </div>
        </div>
    );
}
