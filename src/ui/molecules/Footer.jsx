import { FaCode, FaGithub } from "react-icons/fa";

const Footer = () => {
  // TODOL: Refactor repeated code
  return (
    <footer className="h-[25vh] bg-gray-300 py-16 md:py-8 flex flex-col items-center gap-8 md:flex-row md:justify-around md:gap-0">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Integrantes</h2>
        <ul className="flex flex-col gap-1">
          <li className="flex items-center gap-2">
            <FaGithub />
            <a
              className="hover:underline"
              href="https://github.com/babaquero07"
              target="_blank"
            >
              Alexander Baquero
            </a>
          </li>
          {/* <li className="flex items-center gap-2">
              <FaGithub />
              <a
                className="hover:underline"
                href="https://github.com/sepas8"
                target="_blank"
              >
                Sebastian
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaGithub />
              <a
                className="hover:underline"
                href="https://github.com/juanpabon1"
                target="_blank"
              >
                Alexander Herrera
              </a>
            </li> */}
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Repositorio</h1>
        <div className="flex items-center gap-2">
          <FaCode className="text-2xl text-red-700" />
          <a
            className="hover:underline"
            href="https://github.com/juanpabon1/pokemon-app"
            target="_blank"
          >
            Pokedex - PA - UJTL
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
