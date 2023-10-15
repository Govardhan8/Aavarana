import React from "react";
import Menu from "./utils/Menu";

const Navbar = () => {
  return (
    <nav className="bg-slate-200 sticky top-0 flex justify-center">
      <Menu />
      <h1 className="font-youngSerif text-3xl font-bold text-slate-700">
        Aavarana
      </h1>
    </nav>
  );
};

export default Navbar;
