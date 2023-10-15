import React from "react";
import { List } from "@mui/material";
import Divider from "@mui/material/Divider";
import CategoryIcon from "@mui/icons-material/Category";
import ListItemWithIcon from "./ListItemWithIcon";

const MainMenu = ({ listItems, handleOpen }) => {
  return (
    <List>
      {listItems.map(({ text, Icon }) => (
        <ListItemWithIcon text={text} onClick={() => {}} Icon={Icon} />
      ))}
      <Divider />
      <ListItemWithIcon
        text={"Category"}
        onClick={() => handleOpen(true)}
        Icon={CategoryIcon}
      />
    </List>
  );
};

export default MainMenu;
