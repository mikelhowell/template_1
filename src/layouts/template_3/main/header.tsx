// File: Header.tsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { styled } from "@mui/system";

const CCY = ["Australia AUD$", "United States USD$", "Great Britain GBP"];
const LANGUAGES = ["English", "Spanish", "Chinese"];

export function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [languageAnchorEl, setLanguageAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const [selectedCCY, setSelectedCCY] = useState(CCY[0]);
  const [selectedLangauge, setSelectedLanguage] = useState(LANGUAGES[0]);

  // Handle the opening and closing of the dropdown menu
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setLanguageAnchorEl(null);
  };

  // Custom styling for the search input
  const SearchInput = styled(InputBase)(({ theme }) => ({
    backgroundColor: "#f4ede5",
    padding: "4px 8px",
    borderRadius: "4px",
    fontSize: "14px",
  }));

  return (
    <AppBar position="static" color="inherit" elevation={0}>
      {/* Top Bar */}
      <Box
        sx={{
          backgroundColor: "#f4ede5",
          textAlign: "center",
          padding: "8px 0",
          fontSize: "12px",
          color: "#333",
        }}
      >
        FREE SHIPPING TO AUSTRALIA ON ALL ORDERS ABOVE AU$500. TAXES & DUTIES
        INCLUDED.
      </Box>

      {/* Main Navigation Bar */}
      <Toolbar
        sx={{
          justifyContent: "space-between",
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          padding: "16px 32px",
        }}
      >
        {/* Left Section: Country and Currency Dropdown */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent={"space-between"}
          gap={2}
          width={280}
        >
          {/* Currency Dropdown */}
          <Box
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            onClick={handleMenuOpen}
          >
            <Typography variant="body1">{selectedCCY}</Typography>
            <ArrowDropDownIcon />
          </Box>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
          >
            {CCY.map((item) => (
              <MenuItem
                key={item}
                onClick={() => {
                  setSelectedCCY(item);
                  handleMenuClose();
                }}
              >
                {item}
              </MenuItem>
            ))}
          </Menu>
          {/* Language Dropdown */}
          <Box
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            onClick={handleLanguageMenuOpen}
          >
            <Typography variant="body1">{selectedLangauge}</Typography>
            <ArrowDropDownIcon />
          </Box>
          <Menu
            anchorEl={languageAnchorEl}
            open={Boolean(languageAnchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
          >
            {LANGUAGES.map((item) => (
              <MenuItem
                key={item}
                onClick={() => {
                  setSelectedLanguage(item);
                  handleMenuClose();
                }}
              >
                {item}
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* Middle Section: Logo */}
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Ballet",
            fontSize: "32px",
            textAlign: "center",
            color: "black",
          }}
        >
          Btab Corp
        </Typography>

        {/* Right Section: Icons */}
        <Box display="flex" alignItems="center" gap={1}>
          <IconButton sx={{ color: "black" }}>
            <AccountCircleIcon />
          </IconButton>
          <Typography sx={{ fontSize: "14px" }}>Account</Typography>
          <IconButton sx={{ color: "black" }}>
            <ShoppingBagIcon />
          </IconButton>
          <Typography sx={{ fontSize: "14px" }}>Bag (0)</Typography>
        </Box>
      </Toolbar>

      {/* Bottom Navigation Links */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
          padding: "8px 0",
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          position: "relative",
        }}
      >
        <Typography
          component="a"
          href="#"
          sx={{ textDecoration: "none", color: "black", fontWeight: "bold" }}
        >
          NEW ARRIVALS
        </Typography>
        <Typography
          component="a"
          href="#"
          sx={{ textDecoration: "none", color: "black", fontWeight: "bold" }}
        >
          WOMENSWEAR
        </Typography>
        <Typography
          component="a"
          href="#"
          sx={{ textDecoration: "none", color: "black", fontWeight: "bold" }}
        >
          KIDS
        </Typography>
        <Typography
          component="a"
          href="#"
          sx={{ textDecoration: "none", color: "black", fontWeight: "bold" }}
        >
          WEDDING
        </Typography>
        <Typography
          component="a"
          href="#"
          sx={{ textDecoration: "none", color: "black", fontWeight: "bold" }}
        >
          LOOKBOOK
        </Typography>
        <Typography
          component="a"
          href="#"
          sx={{ textDecoration: "none", color: "black", fontWeight: "bold" }}
        >
          THE WORLD OF N&T
        </Typography>
        {/* Search Input */}
        <Box sx={{ position: "absolute", right: 80 }}>
          <SearchInput placeholder="Search..." />
        </Box>
      </Box>
    </AppBar>
  );
}
