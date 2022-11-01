import React, { useState } from "react";
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavbarList = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const PAGES = ["Products", "Categories", "About us", "Login", "Logout"]; //* Mejor las pages dentro del componnete

  return (
    <React.Fragment>
      <Drawer
        sx={{ my: 8 }}
        PaperProps={{ sx: { backgroundColor: "#161515" } }}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {PAGES.map((pages, index) => (
            <ListItemButton onClick={() => setOpenDrawer(false)} key={index}>
              <ListItemIcon>
                <ListItemText sx={{ color: "white" }}>{pages}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} aria-label="menu" sx={{ color: "white" }}>
        <MenuIcon></MenuIcon>
      </IconButton>
    </React.Fragment>
  );
};

export default NavbarList;
