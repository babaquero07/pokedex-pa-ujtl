import React from "react";
import { Link } from "react-router";
import { MappedPokemon } from "../../interfaces/pokeApi";
import usePokemon from "../../hooks/usePokemon";
import { getRandomPastelColor } from "../../utils/pokemonColors";
import PokemonTypeTag from "../atoms/PokemonTypeTag";

interface PokemonCardProps {
  pokemon: MappedPokemon;
  className?: string;
}

const PokemonCard = ({ pokemon, className = "" }: PokemonCardProps) => {
  const { getPokemonIdText, pokemonTypes } = usePokemon();

  return (
    <Link to={`/pokemon/${pokemon.name}`} key={pokemon.id}>
      <li
        className={`flex flex-col gap-4 p-3 pt-4 relative rounded-xl bg-gradient-to-t from-white to-[var(--color)] border-2 border-solid border-black shadow-[3px_3px_3px_rgba(0,0,0,0.2)] hover:scale-105 transition-all duration-300 cursor-pointer ${className}`}
        style={
          {
            "--color": getRandomPastelColor(),
          } as React.CSSProperties
        }
      >
        <span className="w-[60px] text-center absolute top-[-16px] right-[14px] bg-white rounded-[12px] font-bold border border-b-3 border-r-3 border-solid border-black">
          {getPokemonIdText(pokemon.id)}
        </span>
        <img
          src={pokemon.image}
          alt={pokemon.name}
          loading="lazy"
          className="object-contain "
        />
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold capitalize">{pokemon.name}</h2>
          <div className="flex gap-2">
            {pokemon.types.map((type) => {
              const pokemonType = pokemonTypes.find((t) => t.name === type);

              return (
                pokemonType && <PokemonTypeTag pokemonType={pokemonType} />
              );
            })}
          </div>
        </div>
      </li>
    </Link>
  );
};

export default PokemonCard;
