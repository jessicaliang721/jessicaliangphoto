import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { pages, siteTitle } from "../../constants";
import {Link} from "react-router-dom";

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    }
    const handleCloseNavMenu = (event) => {
        setAnchorElNav(null);
    }
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            mr: 2,
                            display: {
                                xs: 'none',
                                md: 'flex'
                            }
                        }}
                    >
                        {siteTitle}
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {
                                xs: 'flex',
                                md: 'none'
                            }
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="jl photo menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left"
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left"
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {
                                    xs: "block",
                                    md: "none"
                                }
                            }}
                        >
                            {pages.map((page) => (
                                <Link to={`/${page.url}`}>
                                    <MenuItem
                                        key={page.name}
                                        onClick={handleCloseNavMenu}
                                    >
                                            <Typography textAlign="center">{page.name}</Typography>
                                    </MenuItem>
                                </Link>

                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        {siteTitle}
                    </Typography>
                    <Box sx={{
                        justifyContent: 'flex-end',
                        flexGrow: 1,
                        display: {
                            xs: 'none',
                            md: 'flex'
                        }
                    }}>
                        {pages.map((page) => (
                            <Link to={`/${page.url}`}>
                                <Button
                                    key={page.name}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page.name}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar;