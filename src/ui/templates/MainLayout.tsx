import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Header from "../molecules/Header";

const MainLayout = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);

  const handleSearchModal = () => {
    setIsSearchModalOpen((prev) => !prev);
  };

  const handleButtonKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>
  ) => {
    if (event.ctrlKey && event.key === "k") {
      event.preventDefault();
      handleSearchModal();
    }
  };

  const keyDownHandler = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === "k") {
      event.preventDefault();
      handleSearchModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keyDownHandler);

    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  });

  return (
    <div className="lg:max-w-[816px] lg:mx-auto lg:px-8 lg:pb-16">
      <Header
        handleSearchModal={handleSearchModal}
        handleButtonKeyDown={handleButtonKeyDown}
      />

      <main>
        <Outlet />
      </main>

      {/* {isSearchModalOpen && <SearchModal />} */}
    </div>
  );
};

export default MainLayout;
