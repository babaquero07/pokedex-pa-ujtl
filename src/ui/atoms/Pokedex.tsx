interface PokedexProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

const Pokedex = ({ className, ...props }: PokedexProps) => {
  return (
    <img
      src="/images/pokeball.png"
      alt="pokeball"
      className={`w-[300px] sm:w-[500px] absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[45%] animate-bounce ${className}`}
      {...props}
    />
  );
};

export default Pokedex;
