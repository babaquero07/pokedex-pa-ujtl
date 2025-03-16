import React from "react";
import { Link } from "react-router";
import Button from "./button";

interface PokeMonTypeTagsProps {
  pokemonType: { name: string; color: string; icon: React.ReactNode };
}

const PokemonTypeTag = ({ pokemonType }: PokeMonTypeTagsProps) => {
  return (
    <div className="relative z-10">
      <Button
        className={`bg-transparent rounded-[12px]`}
        style={{
          borderColor: pokemonType.color,
          color: pokemonType.color,
          padding: "4px 8px",
        }}
      >
        <div className="flex items-center gap-1">
          {pokemonType.icon}
          <span className="text-sm capitalize">{pokemonType.name}</span>
        </div>
      </Button>
      <Link
        className="absolute inset-0"
        to={`/pokemon/types/${pokemonType.name}`}
      />
    </div>
  );
};

export default PokemonTypeTag;
