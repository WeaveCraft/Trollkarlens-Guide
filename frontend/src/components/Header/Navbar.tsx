import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

// Define the types for the props
interface NavbarProps {
  title: string;
  links: { text: string; url: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <Button color="inherit" onClick={toggleDrawer}>
          Menu
        </Button>
      </Toolbar>
      {/* Drawer */}
      <div style={{ display: isOpen ? "block" : "none" }}>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.url}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </AppBar>
  );
};

export default Navbar;
