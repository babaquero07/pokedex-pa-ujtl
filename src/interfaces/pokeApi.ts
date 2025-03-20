export interface Data {
  data: DataClass;
}

export interface DataClass {
  pokemon_v2_pokemon: PokemonV2Pokemon[];
}

export interface PokemonV2Pokemon {
  id: number;
  name: string;
  pokemon_v2_pokemontypes: PokemonV2Pokemontype[];
  pokemon_v2_pokemonsprites: PokemonV2Pokemonsprite[];
  __typename: string;
}

export interface PokemonV2Pokemonsprite {
  sprites: Sprites;
  __typename: string;
}

export interface GenerationV {
  "black-white": Sprites;
}

export interface GenerationIv {
  platinum: Sprites;
  "diamond-pearl": Sprites;
  "heartgold-soulsilver": Sprites;
}

export interface Versions {
  "generation-i": GenerationI;
  "generation-v": GenerationV;
  "generation-ii": GenerationIi;
  "generation-iv": GenerationIv;
  "generation-vi": { [key: string]: Home };
  "generation-iii": GenerationIii;
  "generation-vii": GenerationVii;
  "generation-viii": GenerationViii;
}

export interface Other {
  home: Home;
  showdown: Sprites;
  dream_world: DreamWorld;
  "official-artwork": OfficialArtwork;
}

export interface Sprites {
  other?: Other;
  versions?: Versions;
  back_shiny: string;
  back_female: null | string;
  front_shiny: string;
  back_default: string;
  front_female: null | string;
  front_default: string;
  back_shiny_female: null | string;
  front_shiny_female: null | string;
  animated?: Sprites;
}

export interface GenerationI {
  yellow: RedBlue;
  "red-blue": RedBlue;
}

export interface RedBlue {
  back_gray: string;
  front_gray: string;
  back_default: string;
  front_default: string;
  back_transparent: string;
  front_transparent: string;
}

export interface GenerationIi {
  gold: Gold;
  silver: Gold;
  crystal: Crystal;
}

export interface Crystal {
  back_shiny: string;
  front_shiny: string;
  back_default: string;
  front_default: string;
  back_transparent: string;
  front_transparent: string;
  back_shiny_transparent: string;
  front_shiny_transparent: string;
}

export interface Gold {
  back_shiny: string;
  front_shiny: string;
  back_default: string;
  front_default: string;
  front_transparent?: string;
}

export interface GenerationIii {
  emerald: OfficialArtwork;
  "ruby-sapphire": Gold;
  "firered-leafgreen": Gold;
}

export interface OfficialArtwork {
  front_shiny: string;
  front_default: string;
}

export interface Home {
  front_shiny: string;
  front_female: null | string;
  front_default: string;
  front_shiny_female: null | string;
}

export interface GenerationVii {
  icons: DreamWorld;
  "ultra-sun-ultra-moon": Home;
}

export interface DreamWorld {
  front_female: null;
  front_default: string;
}

export interface GenerationViii {
  icons: DreamWorld;
}

export interface PokemonV2Pokemontype {
  pokemon_v2_type: PokemonV2Type;
  __typename: PokemonV2PokemontypeTypename;
}

export enum PokemonV2PokemontypeTypename {
  PokemonV2Pokemontype = "pokemon_v2_pokemontype",
}

export interface PokemonV2Type {
  id: number;
  name: string;
  __typename: PokemonV2TypeTypename;
}

export enum PokemonV2TypeTypename {
  PokemonV2Type = "pokemon_v2_type",
}

export interface MappedPokemon {
  id: number;
  name: string;
  types: string[];
  image: string;
}

export interface PokemonDetail extends MappedPokemon {
  height: number;
  weight: number;
  abilities: { name: string }[];
  stats: { name: string; value: number }[];
}

export interface PokemonAbility {
  pokemon_v2_ability: PokemonV2Ability;
}

export interface PokemonV2Ability {
  name: string;
}

export interface PokemonStat {
  base_stat: number;
  pokemon_v2_stat: PokemonV2Stat;
}

export interface PokemonV2Stat {
  name: string;
}
