import { NavLink } from "react-router-dom";
import React, { FC, MouseEvent, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

import style from "./NavLink.module.css";

const pages = [
  { pageName: "Tracking", linkTo: "/tracking" },
  { pageName: "Departures", linkTo: "/departures" },
];

export const HeaderBar: FC = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) =>
    setAnchorElNav(event.currentTarget);

  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <AppBar position="static" component="header" sx={{ background: "#da291c" }}>
      <Container>
        <Toolbar disableGutters>
          <LocalShippingIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <NavLink to="/">
            <Typography
              variant="h6"
              noWrap
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
              }}
            >
              NovaPoshta
            </Typography>
          </NavLink>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
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
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, idx) => (
                <MenuItem key={idx} onClick={handleCloseNavMenu}>
                  <NavLink to={page.linkTo} color="white">
                    <Typography textAlign="center">{page.pageName}</Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <LocalShippingIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <NavLink to="/">
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
              }}
            >
              NovaPoshta
            </Typography>
          </NavLink>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page, idx) => (
              <Button
                key={idx}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <NavLink
                  to={page.linkTo}
                  className={({ isActive }) => (isActive ? style.active : "")}
                >
                  {page.pageName}
                </NavLink>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
