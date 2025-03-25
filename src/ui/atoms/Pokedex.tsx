interface PokedexProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

const Pokedex = ({ className, ...props }: PokedexProps) => {
  return (
    <img
      src="/images/pokeball.png"
      alt="pokeball"
      className={`w-[250px] sm:w-[300px] absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[50%] sm:animate-bounce ${className}`}
      {...props}
    />
  );
};

export default Pokedex;
