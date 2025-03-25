import { useMemo } from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS_BY_TYPE } from "../../queries/getPokemons";
import { MappedPokemon, PokemonV2Pokemon } from "../../interfaces/pokeApi";
import Loading from "../molecules/Loading";
import { toast } from "react-toastify";
import PokemonCard from "../molecules/PokemonCard";
import { useParams } from "react-router";

const PokemonsByType = () => {
  const { type } = useParams();

  const gqlVariables = useMemo(() => {
    return {
      limit: 500,
      offset: 0,
      type,
    };
  }, [type]);

  const { data, loading, error } = useQuery(GET_POKEMONS_BY_TYPE, {
    variables: gqlVariables,
  });

  const pokemons: MappedPokemon[] | [] = useMemo(() => {
    if (!data) return [];

    return data.pokemon_v2_pokemon.map((pokemon: PokemonV2Pokemon) => ({
      id: pokemon.id,
      name: pokemon.name,
      types: pokemon.pokemon_v2_pokemontypes.map(
        (type) => type.pokemon_v2_type.name
      ),
      image: pokemon.pokemon_v2_pokemonsprites[0].sprites.front_default,
    }));
  }, [data]);

  if (loading) return <Loading />;
  if (error) {
    toast.error(error.message, {
      position: "top-right",
      autoClose: 5000,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  }

  return (
    <>
      <h1 className="my-16 text-[40px] font-bold">
        Pokémon with this type ({pokemons.length})
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4 lg:p-0">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </ul>
    </>
  );
};

export default PokemonsByType;
