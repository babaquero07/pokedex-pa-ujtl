import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
  query getPokemons($limit: Int, $offset: Int) {
    pokemon_v2_pokemon(offset: $offset, limit: $limit) {
      id
      name
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          id
          name
        }
      }
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
`;

export const GET_POKEMONS_BY_TYPE = gql`
  query getPokemons($limit: Int, $offset: Int, $type: String) {
    pokemon_v2_pokemon(
      offset: $offset
      limit: $limit
      where: {
        pokemon_v2_pokemontypes: { pokemon_v2_type: { name: { _eq: $type } } }
      }
    ) {
      id
      name
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          id
          name
        }
      }
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
`;

export const GET_ALL_POKEMONS = gql`
  query getAllPokemons {
    pokemon_v2_pokemon {
      id
      name
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
`;

export const GET_POKEMON_BY_NAME = gql`
  query getPokemonByName($name: String!) {
    pokemon_v2_pokemon(where: { name: { _eq: $name } }) {
      id
      name
      height
      weight
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          id
          name
        }
      }
      pokemon_v2_pokemonsprites {
        sprites
      }
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          name
        }
      }
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          name
        }
      }
    }
  }
`;
