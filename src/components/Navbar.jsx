import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CartWidget from './CartWidget';
import logo from '../img/logo.jpg';
import { Tab, Tabs, Button, useMediaQuery, useTheme } from '@mui/material';
import NavbarList from './NavbarList';

const PAGES = ["Products", "Categories", "About us"];
const Navbar = () => {
    const [value, setValue] = useState();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <div>
        <AppBar position="fixed" sx={{backgroundColor:"#1f2023"}} >
          <Toolbar>
            <a href="../src/App.js"><img src={logo} className="logo-img" alt="logo" /></a>
            <Typography  variant="h6" className='texto-logo' sx={{ flexGrow: 1 }}>
              MARKET GAMES
            </Typography >
            {
              isMatch ? (
                <>
                  <NavbarList/>
                </>
              ) : (
                <>
                  <Tabs textColor="inherit" sx={{flexGrow: 1}} value={value} onChange={(e, value) => setValue(value)} indicatorColor="secondary">
                    {
                      PAGES.map((page, index)=>(
                        <Tab key={index} label={page}/>
                      ))
                    }
                  </Tabs>
                  <Button sx={{marginLeft:'auto'}} color="secondary" variant="outlined">Login</Button>
                  <Button sx={{marginLeft:'10px'}} color="secondary" variant="outlined">Logout</Button>
                </>
              )
            }
            <CartWidget/>
          </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar;