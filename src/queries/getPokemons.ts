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
