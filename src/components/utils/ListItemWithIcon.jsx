import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";

const ListItemWithIcon = ({ onClick, Icon, text }) => {
  return (
    <ListItem key={text} disablePadding>
      <ListItemButton onClick={onClick}>
        <ListItemIcon>
          <Icon className="text-blue-400" />
        </ListItemIcon>
        <ListItemText className="text-slate-500" primary={text} />
      </ListItemButton>
    </ListItem>
  );
};

export default ListItemWithIcon;
