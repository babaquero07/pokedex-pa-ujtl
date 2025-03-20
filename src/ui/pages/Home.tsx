import { Link } from "react-router";
import Button from "../atoms/Button";
import Pokedex from "../atoms/Pokedex";
import Footer from "../molecules/Footer";

const Home = () => {
  return (
    <>
      <main className="relative h-[75vh] bg-red-700">
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <h1 className="text-6xl font-bold text-white">
            Quién es ese Pokémon?
          </h1>
          <p className="text-[20px] text-white font-medium">
            Explora la lista completa de Pokémon disponibles en la región y
            descubre sus habilidades y características.
          </p>

          <Button className="text-2xl px-6">
            <Link to="/pokemon">Explorar</Link>
          </Button>
        </div>
        <Pokedex />
      </main>

      <Footer />
    </>
  );
};

export default Home;
