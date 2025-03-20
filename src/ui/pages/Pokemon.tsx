import { useMemo } from "react";
import { useParams } from "react-router";
import { GET_POKEMON_BY_NAME } from "../../queries/getPokemons";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  PolarRadiusAxis,
  Tooltip,
} from "recharts";
import Loading from "../molecules/Loading";
import { toast } from "react-toastify";
import { useQuery } from "@apollo/client";
import {
  PokemonAbility,
  PokemonDetail,
  PokemonStat,
  PokemonV2Pokemontype,
} from "../../interfaces/pokeApi";
import PokemonCard from "../molecules/PokemonCard";

const Pokemon = () => {
  const { name } = useParams();

  const { data, loading, error } = useQuery(GET_POKEMON_BY_NAME, {
    variables: { name },
  });

  const pokemon: PokemonDetail | null = useMemo(() => {
    if (!data) return null;

    const pokemon = data.pokemon_v2_pokemon[0];

    return {
      id: pokemon.id,
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight,
      types: pokemon.pokemon_v2_pokemontypes.map(
        (type: PokemonV2Pokemontype) => type.pokemon_v2_type.name
      ),
      image: pokemon.pokemon_v2_pokemonsprites[0].sprites.front_default,
      abilities: pokemon.pokemon_v2_pokemonabilities.map(
        (ability: PokemonAbility) => ({ name: ability.pokemon_v2_ability.name })
      ),
      stats: pokemon.pokemon_v2_pokemonstats.map((stat: PokemonStat) => ({
        name: stat.pokemon_v2_stat.name,
        value: stat.base_stat,
      })),
    };
  }, [data]);

  const formattedStats: { subject: string; value: number; fullMark: number }[] =
    useMemo(() => {
      if (!pokemon) return [];

      const mainStats = pokemon.stats.map((stat) => ({
        subject: stat.name,
        value: stat.value,
        fullMark: 100,
      }));

      return [
        { subject: "height", value: pokemon.height, fullMark: 100 },
        {
          subject: "weight",
          value: pokemon.weight,
          fullMark: 100,
        },
        ...mainStats,
      ];
    }, [pokemon]);

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
    <div className="flex flex-col md:flex-row items-center gap-6 mt-4">
      {pokemon && (
        <PokemonCard
          pokemon={pokemon}
          className="w-[320px] h-[320px] md:w-[386px] md:h-[386px]"
        >
          <div className="flex flex-col">
            <h2 className="text-lg font-bold capitalize">Habilidades</h2>
            <div className="flex gap-2">
              {pokemon.abilities.map((ability, index) => {
                return (
                  <p key={index}>
                    <span className="font-medium capitalize">
                      {ability.name}
                    </span>
                  </p>
                );
              })}
            </div>
          </div>
        </PokemonCard>
      )}
      <div className="w-[320px] h-[320px] md:w-[386px] md:h-[386px] bg-white rounded-[12px] overflow-hidden p-4 border border-b-3 border-r-3 border-solid border-black">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={formattedStats}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Tooltip />
            <Radar
              name={pokemon?.name}
              dataKey="value"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Pokemon;
