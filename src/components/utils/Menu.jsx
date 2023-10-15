import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";

import { categories, listItems } from "../constant";
import MainMenu from "./MainMenu";
import SubMenu from "./SubMenu";

export default function Menu() {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const [isCategoriesOpen, setCategoriesOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setMenuIsOpen(open);
  };

  const MenuItems = () => (
    <Box role="presentation">
      {isCategoriesOpen ? (
        <SubMenu categories={categories} handleClose={setCategoriesOpen} />
      ) : (
        <MainMenu listItems={listItems} handleOpen={setCategoriesOpen} />
      )}
    </Box>
  );

  return (
    <div className="fixed left-0">
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon style={{ color: "black" }} />
      </Button>
      <SwipeableDrawer
        className="bg-slate-400"
        anchor={"left"}
        open={menuIsOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <MenuItems />
      </SwipeableDrawer>
    </div>
  );
}
