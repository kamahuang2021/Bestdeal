import React from 'react';
import {NavLink} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './navbar.css';

export const NavBar = () => {


    return (
        <>
            <nav id="navWrapper">
                <Box sx={{flexGrow: 1}}>
                    <AppBar position="static" className="appbar">
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{mr: 2}}
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Typography sx={{flexGrow: 1}}>
                                <NavLink to='/cars' className="navlink-1">
                                    BestDeal
                                </NavLink>
                            </Typography>
                            <div>
                                <NavLink to='/login' className="navlink-2">Login</NavLink>
                            </div>
                            <div>
                                <NavLink to='/signup' className="navlink-2">Sign Up</NavLink>
                            </div>
                            <div>
                                <NavLink to='/sell_car' className="navlink-2">Sell Car</NavLink>
                            </div>
                        </Toolbar>
                    </AppBar>
                </Box>
            </nav>
        </>
    );
}
