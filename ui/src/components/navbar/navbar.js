import React, {useContext} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './navbar.css';
import {AuthContext} from "../../context/auth";

export const NavBar = (isAuthenticated) => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    if (isAuthenticated) {
        return (
            <>
                <nav id="navWrapper">
                    <Box sx={{flexGrow: 1}}>
                        <AppBar position="static" className="appbar">
                            <Toolbar>
                                <Typography sx={{flexGrow: 1}}>
                                    <NavLink to='/cars' className="navlink-1">
                                        BestDeal
                                    </NavLink>
                                </Typography>
                                <div>
                                    <NavLink to='/cars' className="navlink-2">View Cars</NavLink>
                                </div>
                                <div>
                                    <NavLink to='/cars/new' className="navlink-2">Sell Car</NavLink>
                                </div>
                                {/*<div>*/}
                                {/*    <NavLink to={'/users/' + auth.userId} className="navlink-2">My Profile</NavLink>*/}
                                {/*</div>*/}
                                <div>
                                    <NavLink to='/logout' className="navlink-2" onClick={logoutHandler}>Logout</NavLink>
                                </div>
                            </Toolbar>
                        </AppBar>
                    </Box>
                </nav>
            </>
        );
    }


    return (
        <>
            <nav id="navWrapper">
                <Box sx={{flexGrow: 1}}>
                    <AppBar position="static" className="appbar">
                        <Toolbar>
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
                            }
                        </Toolbar>
                    </AppBar>
                </Box>
            </nav>
        </>
    );
}
