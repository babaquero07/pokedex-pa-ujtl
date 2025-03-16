interface ModalProps {
  children: React.ReactNode;
  position?: "middle" | "top" | "bottom";
}

const Modal = ({ children, position = "middle" }: ModalProps) => {
  const getPositionClass = (): string => {
    switch (position) {
      case "top":
        return "items-start";
      case "middle":
        return "items-center";
      case "bottom":
        return "items-end";
      default:
        return "items-center";
    }
  };

  return (
    <div
      className={`z-50 fixed inset-0 flex justify-center animate-fade-in ${getPositionClass()}`}
    >
      {children}
    </div>
  );
};

export default Modal;
