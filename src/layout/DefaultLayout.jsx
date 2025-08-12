// Import Outlet
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

// Import Header
import Header from "../components/Header.jsx";

// Layout di default
export default function DefaultLayout() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearchReset = () => {
    setSearch("");
  };

  const handleSearch = (e) => {
    e.preventDefault(); // blocca submit standard

    if (search.trim() !== "") {
      // naviga a /search con query di ricerca
      navigate(`/search?query=${encodeURIComponent(search)}`);
    }
  };
  return (
    <>
      <Header
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
        resetSearch={handleSearchReset}
      />

      <Outlet />
    </>
  );
}
