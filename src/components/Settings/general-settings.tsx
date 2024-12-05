"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  Divider,
  Button,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  IconButton,
  useMediaQuery,
  Theme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import PaymentIcon from "@mui/icons-material/Payment";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";

interface GeneralSettingsProps {
  storeDetails: {
    name: string;
    email: string;
    address: string;
  };
  initialValues: {
    unitSystem: string;
    defaultWeight: string;
    timeZone: string;
    prefix: string;
    suffix: string;
    orderProcessing: string;
    autoArchive: boolean;
  };
}

const GeneralSettings: React.FC<GeneralSettingsProps> = ({
  storeDetails,
  initialValues,
}) => {
  const [unitSystem, setUnitSystem] = useState<string>(initialValues.unitSystem);
  const [defaultWeight, setDefaultWeight] = useState<string>(
    initialValues.defaultWeight
  );
  const [timeZone, setTimeZone] = useState<string>(initialValues.timeZone);
  const [prefix, setPrefix] = useState<string>(initialValues.prefix);
  const [suffix, setSuffix] = useState<string>(initialValues.suffix);
  const [orderProcessing, setOrderProcessing] = useState<string>(
    initialValues.orderProcessing
  );
  const [autoArchive, setAutoArchive] = useState<boolean>(
    initialValues.autoArchive
  );
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const isMobile = useMediaQuery("(max-width:768px)");

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { icon: <PersonIcon />, text: "Users" },
    { icon: <SettingsIcon />, text: "General" },
    { icon: <PaymentIcon />, text: "Payments" },
    { icon: <ShoppingCartIcon />, text: "Checkout" },
    { icon: <LocationOnIcon />, text: "Locations" },
    { icon: <NotificationsIcon />, text: "Notifications" },
    { icon: <PrivacyTipIcon />, text: "Customer Privacy" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
      }}
    >
      {/* Sidebar for Mobile */}
      {isMobile ? (
        <>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{ position: "absolute", top: 10, left: 10 }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
            <Box
              sx={{
                width: "250px",
                backgroundColor: "#f5f5f5",
                p: 2,
                borderRight: "1px solid #ddd",
              }}
            >
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Vendor 1
              </Typography>
              <List>
                {menuItems.map((item, index) => (
                  <ListItem key={index}>
                    <Button sx={{ textAlign: "left", width: "100%" }}>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} sx={{ color: "black" }} />
                    </Button>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </>
      ) : (
        // Sidebar for Desktop
        <Box
          sx={{
            width: "250px",
            backgroundColor: "#f5f5f5",
            p: 2,
            borderRight: "1px solid #ddd",
          }}
        >
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Vendor 1
          </Typography>
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={index}>
                <Button sx={{ textAlign: "left", width: "100%" }}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} sx={{ color: "black" }} />
                </Button>
              </ListItem>
            ))}
          </List>
        </Box>
      )}

      {/* Main Content */}
      <Box
        sx={{
          flex: 1,
          p: 3,
          overflowY: "auto",
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          General Settings
        </Typography>

        {/* Store Details */}
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Store details
          </Typography>
          <Typography variant="body2">{storeDetails.name}</Typography>
          <Typography variant="body2">{storeDetails.email}</Typography>
          <Typography variant="body2">{storeDetails.address}</Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Box>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Store defaults
          </Typography>
          <FormControl fullWidth margin="normal">
            <InputLabel>Unit system</InputLabel>
            <Select
              value={unitSystem}
              onChange={(e) => setUnitSystem(e.target.value)}
            >
              <MenuItem value="imperial">Imperial system</MenuItem>
              <MenuItem value="metric">Metric system</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel>Default weight unit</InputLabel>
            <Select
              value={defaultWeight}
              onChange={(e) => setDefaultWeight(e.target.value)}
            >
              <MenuItem value="pound">Pound (lb)</MenuItem>
              <MenuItem value="kilogram">Kilogram (kg)</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel>Time zone</InputLabel>
            <Select
              value={timeZone}
              onChange={(e) => setTimeZone(e.target.value)}
            >
              <MenuItem value="GMT+10:00 Sydney">(GMT+10:00) Sydney</MenuItem>
              <MenuItem value="GMT+00:00 London">(GMT+00:00) London</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Order ID */}
        <Box>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Order ID
          </Typography>
          <Box display="flex" gap={2}>
            <TextField
              label="Prefix"
              value={prefix}
              onChange={(e) => setPrefix(e.target.value)}
              fullWidth
            />
            <TextField
              label="Suffix"
              value={suffix}
              onChange={(e) => setSuffix(e.target.value)}
              fullWidth
            />
          </Box>
          <Typography variant="body2" mt={1}>
            Your order ID will appear as #{prefix}001, #{prefix}002...
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Order Processing */}
        <Box>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Order processing
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup
              value={orderProcessing}
              onChange={(e) => setOrderProcessing(e.target.value)}
            >
              <FormControlLabel
                value="auto-fulfill-line-items"
                control={<Radio />}
                label="Automatically fulfill the order's line items"
              />
              <FormControlLabel
                value="auto-fulfill-gift-cards"
                control={<Radio />}
                label="Automatically fulfill only the gift cards of the order"
              />
              <FormControlLabel
                value="no-auto-fulfill"
                control={<Radio />}
                label="Don't fulfill any of the order's line items automatically"
              />
            </RadioGroup>
          </FormControl>

          <FormControlLabel
            control={
              <Checkbox
                checked={autoArchive}
                onChange={(e) => setAutoArchive(e.target.checked)}
              />
            }
            label="Automatically archive the order"
          />
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Brand Assets */}
        <Box>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Brand assets
          </Typography>
          <Link href="#" underline="hover">
            Manage
          </Link>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Box textAlign="center">
          <Button variant="contained" color="primary">
            Save Changes
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default GeneralSettings;
