"use client";

import React from "react";
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
  } from "@mui/material";
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
  const [unitSystem, setUnitSystem] = React.useState<string>(
    initialValues.unitSystem
  );
  const [defaultWeight, setDefaultWeight] = React.useState<string>(
    initialValues.defaultWeight
  );
  const [timeZone, setTimeZone] = React.useState<string>(initialValues.timeZone);
  const [prefix, setPrefix] = React.useState<string>(initialValues.prefix);
  const [suffix, setSuffix] = React.useState<string>(initialValues.suffix);
  const [orderProcessing, setOrderProcessing] = React.useState<string>(
    initialValues.orderProcessing
  );
  const [autoArchive, setAutoArchive] = React.useState<boolean>(
    initialValues.autoArchive
  );
  const [selectedItem, setSelectedItem] = React.useState<string>("General");

  const handleSelect = (item: string) => {
    setSelectedItem(item);
  };

  const handleSave = () => {
    const settings = {
      unitSystem,
      defaultWeight,
      timeZone,
      prefix,
      suffix,
      orderProcessing,
      autoArchive,
    };
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
      }}
    >
      {/* Sidebar */}
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
        <ListItem
          button="true"
          onClick={() => handleSelect("Users")}
          selected={selectedItem === "Users"}
        >
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem
          button="true"
          onClick={() => handleSelect("General")}
          selected={selectedItem === "General"}
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="General" />
        </ListItem>
        <ListItem
          button="true"
          onClick={() => handleSelect("Payments")}
          selected={selectedItem === "Payments"}
        >
          <ListItemIcon>
            <PaymentIcon />
          </ListItemIcon>
          <ListItemText primary="Payments" />
        </ListItem>
        <ListItem
          button="true"
          onClick={() => handleSelect("Checkout")}
          selected={selectedItem === "Checkout"}
        >
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Checkout" />
        </ListItem>
        <ListItem
          button="true"
          onClick={() => handleSelect("Locations")}
          selected={selectedItem === "Locations"}
        >
          <ListItemIcon>
            <LocationOnIcon />
          </ListItemIcon>
          <ListItemText primary="Locations" />
        </ListItem>
        <ListItem
          button="true"
          onClick={() => handleSelect("Notifications")}
          selected={selectedItem === "Notifications"}
        >
          <ListItemIcon>
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText primary="Notifications" />
        </ListItem>
        <ListItem
          button="true"
          onClick={() => handleSelect("Customer Privacy")}
          selected={selectedItem === "Customer Privacy"}
        >
          <ListItemIcon>
            <PrivacyTipIcon />
          </ListItemIcon>
          <ListItemText primary="Customer Privacy" />
        </ListItem>
      </List>
      </Box>

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
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default GeneralSettings;
