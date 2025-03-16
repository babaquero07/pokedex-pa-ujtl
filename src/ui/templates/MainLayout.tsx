import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Header from "../molecules/Header";
import SearchModal from "../molecules/SearchModal";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);

  const handleCloseSearchModal = () => {
    setIsSearchModalOpen((prev) => !prev);
  };

  const handleButtonKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>
  ) => {
    if (event.ctrlKey && event.key === "k") {
      event.preventDefault();
      handleCloseSearchModal();
    }
  };

  const keyDownHandler = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === "k") {
      event.preventDefault();
      handleCloseSearchModal();
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
        handleSearchModal={handleCloseSearchModal}
        handleButtonKeyDown={handleButtonKeyDown}
      />

      <main>
        <Outlet />
      </main>

      {isSearchModalOpen && (
        <SearchModal onCloseModal={handleCloseSearchModal} />
      )}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default MainLayout;
