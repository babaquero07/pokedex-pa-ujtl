interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  children?: React.ReactNode;
  isLoading?: boolean;
}

const Button = ({
  text,
  children,
  className = "",
  disabled = false,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "bg-gray-300 px-4 py-2 border border-solid border-black border-b-2 border-r-2 hover:border-b-3 hover:border-r-3 rounded-md font-medium transition-all duration-200";

  return (
    <button
      className={`
        ${baseStyles}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {children ? children : text}
    </button>
  );
};

export default Button;
