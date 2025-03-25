import React from "react";
import { BsHypnotize } from "react-icons/bs";
import { CgDarkMode } from "react-icons/cg";
import { FaBug, FaDragon, FaFire, FaGhost, FaRegCircle } from "react-icons/fa";
import { FaMountainSun, FaHandBackFist } from "react-icons/fa6";
import { GiFairyWand, GiLibertyWing, GiPoisonBottle } from "react-icons/gi";
import { IoIosWater } from "react-icons/io";
import { MdElectricBolt, MdGrass } from "react-icons/md";
import { PiNut } from "react-icons/pi";
import { WiSnowflakeCold } from "react-icons/wi";

const getPokemonIdText = (id: number): string => {
  console.log("🚀 ~ getPokemonIdText ~ id:", id);
  if (id > 9 && id < 99) return `#0${id}`;
  if (id > 99) return `#${id}`;

  return `#00${id}`;
};

const pokemonTypes: { name: string; color: string; icon: React.ReactNode }[] = [
  {
    name: "grass",
    color: "#77CC55",
    icon: <MdGrass />,
  },
  {
    name: "poison",
    color: "#7B62A3",
    icon: <GiPoisonBottle />,
  },
  {
    name: "fire",
    color: "#ecad37",
    icon: <FaFire />,
  },
  {
    name: "water",
    color: "#6FA8DC",
    icon: <IoIosWater />,
  },
  {
    name: "bug",
    color: "#92BC2C",
    icon: <FaBug />,
  },
  {
    name: "flying",
    color: "#888787",
    icon: <GiLibertyWing />,
  },
  {
    name: "electric",
    color: "#FFD700",
    icon: <MdElectricBolt />,
  },
  {
    name: "ground",
    color: "#c09926",
    icon: <FaMountainSun />,
  },
  {
    name: "fairy",
    color: "#ecabd3",
    icon: <GiFairyWand />,
  },
  {
    name: "ice",
    color: "#5bbff8",
    icon: <WiSnowflakeCold />,
  },
  {
    name: "fighting",
    color: "#800000",
    icon: <FaHandBackFist />,
  },
  {
    name: "normal",
    color: "#797778",
    icon: <FaRegCircle />,
  },
  {
    name: "rock",
    color: "#645221",
    icon: <FaMountainSun />,
  },
  {
    name: "ghost",
    color: "#3c0baf",
    icon: <FaGhost />,
  },
  {
    name: "steel",
    color: "#30757a",
    icon: <PiNut />,
  },
  {
    name: "psychic",
    color: "#860b4b",
    icon: <BsHypnotize />,
  },
  {
    name: "dragon",
    color: "#093b97",
    icon: <FaDragon />,
  },
  {
    name: "dark",
    color: "#242424",
    icon: <CgDarkMode />,
  },
];

const usePokemon = () => {
  return {
    getPokemonIdText,
    pokemonTypes,
  };
};

export default usePokemon;
