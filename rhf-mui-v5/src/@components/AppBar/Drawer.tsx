import * as React from 'react';

import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import { useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { AppBar, DrawerHeader, drawerWidth, Main } from './Drawer.styled';
import ListItemLink from './ListItemLink';
// import ThemeMenu from './ThemeMenu';

const PersistentDrawerLeft = ({ children }: { children?: React.ReactNode }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }} className="HolyGrail-content">
      <AppBar position="fixed" open={open}>
        <Toolbar>
          {/* DO NOT DELETE. USE WITH ROUTES */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            rhf-mui-v5
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          {/* Theme Menu */}
          {/* <ThemeMenu /> */}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List aria-label="primary routes">
          <ListItemLink to="/" primary="Home" icon={<HomeIcon />} />
          <ListItemLink
            to="/resolvers"
            primary="Resolvers"
            icon={<AutoGraphIcon />}
          />
          <ListItemLink
            to="/logrocket"
            primary="LogRocket"
            icon={<AutoGraphIcon />}
          />
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
};

export default PersistentDrawerLeft;
