import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { sidebarCategories, sidebarGenres } from "../../utils/data";
import { SearchBar } from "../molecules";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import { selectGenreOrCategory } from "../../features/currentCategorySlice";

const drawerWidth = 240;

const blueLogo =
  "https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png";
const redLogo =
  "https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png";

export default function Layout({ children }) {
  const dispatch = useDispatch();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Box sx={{ display: "flex", justifyContent: "center", pl: 2, py: 3 }}>
        <Link to="/">
          <img
            src={blueLogo}
            alt="logo"
            style={{
              width: "170px",
            }}
          />
        </Link>
      </Box>

      <Divider />
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: 500,
          color: "gray",
          ml: 2,
          mt: 2,
        }}
      >
        Categories
      </Typography>
      <List>
        {sidebarCategories.map((category, index) => (
          <ListItem
            key={index}
            disablePadding
            onClick={() => dispatch(selectGenreOrCategory(category?.value))}
          >
            <ListItemButton>
              <ListItemIcon>
                <img src={category?.icon} alt="" style={{ width: "30px" }} />
              </ListItemIcon>
              <ListItemText primary={category?.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: 500,
          color: "gray",
          ml: 2,
          mt: 2,
        }}
      >
        Genres
      </Typography>
      <List>
        {sidebarGenres.map((genre, index) => (
          <ListItem
            key={genre}
            disablePadding
            onClick={() => dispatch(selectGenreOrCategory(genre?.id))}
          >
            <ListItemButton>
              <ListItemIcon>
                <img src={genre?.icon} alt="" style={{ width: "30px" }} />
              </ListItemIcon>
              <ListItemText primary={genre?.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          height: "80px",
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box>
            <SearchBar />
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
}
