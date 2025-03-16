import { CiSearch } from "react-icons/ci";
import Modal from "../atoms/Modal";
import { IoIosClose } from "react-icons/io";
import { useEffect, useMemo, useState } from "react";
import usePokemon from "../../hooks/usePokemon";
import { Link } from "react-router";
import { GET_ALL_POKEMONS } from "../../queries/getPokemons";
import { useQuery } from "@apollo/client";
import Loading from "./Loading";
import { PokemonV2Pokemon } from "../../interfaces/pokeApi";
import { toast } from "react-toastify";

interface SearchModalProps {
  onCloseModal: () => void;
}

interface mappedPokemon {
  id: number;
  name: string;
  image: string;
}

interface filteredType {
  name: string;
  color: string;
  icon: React.ReactNode;
}

const SearchModal = ({ onCloseModal }: SearchModalProps) => {
  const { data, loading, error } = useQuery(GET_ALL_POKEMONS);

  const [searchQuery, setSearchQuery] = useState("");
  const [pokemonsFiltered, setPokemonsFiltered] = useState<
    mappedPokemon[] | []
  >([]);
  const [filteredTypes, setFilteredTypes] = useState<filteredType[]>([]);

  const { pokemonTypes } = usePokemon();

  const mappedPokemons = useMemo(() => {
    if (!data) return [];

    return data.pokemon_v2_pokemon.map((pokemon: PokemonV2Pokemon) => ({
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.pokemon_v2_pokemonsprites[0].sprites.front_default,
    }));
  }, [data]);

  useEffect(() => {
    if (mappedPokemons.length > 0 && pokemonTypes.length > 0) {
      setPokemonsFiltered(
        searchQuery
          ? mappedPokemons.filter((pokemon: mappedPokemon) =>
              pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
          : mappedPokemons
      );

      setFilteredTypes(
        searchQuery
          ? pokemonTypes.filter((type) =>
              type.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
          : pokemonTypes
      );
    }
  }, [mappedPokemons, pokemonTypes, searchQuery]);

  const handleSearchQueryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    setSearchQuery(value);
  };

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
    <Modal position="middle">
      <div className="md:w-[506px] md:h-[348px] bg-gray-200 rounded-lg border-3 border-solid shadow-lg border-black">
        {loading && (
          <div className="w-full h-full flex items-center justify-center">
            <Loading />
          </div>
        )}

        {!loading && (
          <>
            <div className="w-full flex items-center justify-between p-4 border-b border-solid border-black">
              <div className="w-full flex items-center gap-2">
                <CiSearch className="text-[20px] text-gray-500" />
                <input
                  className="w-full focus:outline-none"
                  type="text"
                  placeholder="Ejecuta un comando o busca..."
                  value={searchQuery}
                  onChange={handleSearchQueryChange}
                />
              </div>
              <IoIosClose
                onClick={onCloseModal}
                className="text-2xl cursor-pointer text-gray-500 hover:text-gray-700"
              />
            </div>

            <div className="h-[260px] w-full p-2 flex flex-col items-start overflow-y-auto">
              {filteredTypes.length > 0 && (
                <div className="w-full flex flex-col gap-2">
                  <h4 className="text-[14px] text-gray-500 font-medium">
                    Types
                  </h4>
                  <ul className="w-full flex flex-col gap-1">
                    {filteredTypes.map((type) => (
                      <li
                        className="relative z-10 rounded-lg px-2 py-3 hover:bg-white flex items-center gap-3 cursor-pointer"
                        key={type.name}
                      >
                        <div
                          className="text-[20px] rounded-full"
                          style={{ color: type.color }}
                        >
                          {type.icon}
                        </div>
                        <span className="text-sm capitalize">{type.name}</span>
                        <Link
                          className="absolute inset-0"
                          to={`/pokemon/types/${type.name}`}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {pokemonsFiltered.length > 0 && (
                <div className="w-full flex flex-col gap-2">
                  <h4 className="text-[14px] text-gray-500 font-medium">
                    Pokémon
                  </h4>
                  <ul className="w-full flex flex-col gap-1">
                    {pokemonsFiltered.map((pokemon) => (
                      <li
                        key={pokemon.id}
                        className="relative z-10 rounded-lg px-2 py-3 hover:bg-white flex items-center justify-between cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <img
                            className="w-6 h-6 object-contain"
                            src={pokemon.image}
                            alt="pokemon front image"
                            loading="lazy"
                          />
                          <p className="text-sm capitalize">{pokemon.name}</p>
                        </div>
                        <span className="text-sm text-gray-500">
                          #{pokemon.id}
                        </span>
                        <Link
                          className="absolute inset-0"
                          to={`/pokemon/${pokemon.name}`}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};

export default SearchModal;
