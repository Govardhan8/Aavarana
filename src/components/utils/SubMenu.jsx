import React from "react";
import { List } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ListItemWithIcon from "./ListItemWithIcon";

const SubMenu = ({ categories, handleClose }) => {
  return (
    <List>
      <ListItemWithIcon
        text="Back"
        onClick={() => handleClose(false)}
        Icon={ArrowBackIcon}
      />
      {categories.map(({ text, url, Icon }) => (
        <ListItemWithIcon text={text} onClick={() => {}} Icon={Icon} />
      ))}
    </List>
  );
};

export default SubMenu;
