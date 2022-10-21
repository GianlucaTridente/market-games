import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton'
import { makeStyles } from '@mui/material';


/* const useStyles = makeStyles(theme =>({
    offset: theme.mixins.toolbar
})) */

const useStyles = makeStyles((theme)=>({
    menuButton:{
        marginRight: theme.spacing(2),
    }
}));

const Navbar = () => {
    const classes = useStyles();
  return (
    <div>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label='menu'>
              <MenuIcon/>
            </IconButton>
            <Typography variant="h6">
              LOGO
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.toolbar}></div>
    </div>
  )
}

export default Navbar;

