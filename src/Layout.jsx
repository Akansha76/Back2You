import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar"; // adjust path if needed

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="pt-10"> {/* Adjust padding for fixed navbar */}
        <Outlet />
      </main>
    </>
  );
}
