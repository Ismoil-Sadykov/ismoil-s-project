import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import { menuItems } from '../constants/menuItems'; // импорт массива

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} button onClick={() => navigate(item.path)}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
