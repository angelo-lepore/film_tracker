// Import Outlet
import { Outlet } from "react-router-dom";

// Import Header
import Header from "../components/Header.jsx";

// Layout di default
export default function DefaultLayout() {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
}
