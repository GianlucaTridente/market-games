import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CartWidget from "./CartWidget";
import logo from "../img/logo.jpg";
import { Tab, Tabs, Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const [value, setValue] = React.useState("one");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="navbar-m">
      <AppBar position="fixed" sx={{ backgroundColor: "#1f2023" }}>
        <Toolbar>
          <NavLink to="/">
            <img src={logo} className="logo-img" alt="logo" />
          </NavLink>
          <Typography variant="h6" className="texto-logo" sx={{ flexGrow: 1 }}>
            MARKET GAMES
          </Typography>
          <Tabs
            textColor="inherit"
            sx={{ flexGrow: 1 }}
            value={value}
            indicatorColor="secondary"
            label="PRODUCTS"
            onChange={handleChange}
          >
            <NavLink className="nav-link" to="/">
              <Tab value="one" label="PRODUCTS" />
            </NavLink>

            <Tab
              value="two"
              label="CATEGORIES"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            />
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <NavLink className="nav-link" to="/category/action">
                <MenuItem onClick={handleClose}>Action</MenuItem>
              </NavLink>
              <NavLink className="nav-link" to="/category/arcade">
                <MenuItem onClick={handleClose}>Arcade</MenuItem>
              </NavLink>
              <NavLink className="nav-link" to="/category/terror">
                <MenuItem onClick={handleClose}>Terror</MenuItem>
              </NavLink>
            </Menu>

            <NavLink className="nav-link" to="/checkout">
              <Tab value="three" label="CHECK OUT" />
            </NavLink>
          </Tabs>
          <Button
            sx={{ marginLeft: "auto" }}
            color="secondary"
            variant="outlined"
          >
            Login
          </Button>
          <Button
            sx={{ marginLeft: "10px" }}
            color="secondary"
            variant="outlined"
          >
            Logout
          </Button>
          <CartWidget />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
