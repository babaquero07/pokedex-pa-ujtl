import Button from "../atoms/button";
import { Link } from "react-router";
import { MdCatchingPokemon, MdKeyboardCommandKey } from "react-icons/md";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  handleSearchModal: () => void;
  handleButtonKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
}

const Header = ({
  className = "",
  handleSearchModal,
  handleButtonKeyDown,
}: HeaderProps) => {
  return (
    <header
      className={`px-8 py-6 flex justify-between items-center ${className}`}
    >
      <Button>
        <Link to="/pokemon" className="flex items-center gap-2">
          <MdCatchingPokemon className="text-2xl" />
          Pokémon
        </Link>
      </Button>

      {/* TODO: Move this button to the SearchBtnAction component */}
      <Button
        className="w-[150px] text-gray-500 text-[16px]"
        onClick={handleSearchModal}
        onKeyDown={handleButtonKeyDown}
      >
        <div className="flex items-center justify-between">
          <p>Buscar...</p>
          <div className="flex items-center">
            <MdKeyboardCommandKey />
            <span>k</span>
          </div>
        </div>
      </Button>
    </header>
  );
};

export default Header;
