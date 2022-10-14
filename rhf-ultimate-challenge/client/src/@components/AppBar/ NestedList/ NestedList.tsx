import * as React from 'react';

import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/Home';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import ListItemLink from '../ListItemLink';

const NestedList = () => {
  const [open1, setOpen1] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);
  const [open3, setOpen3] = React.useState(true);

  const handleClick1 = () => {
    setOpen1(!open1);
  };

  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const handleClick3 = () => {
    setOpen3(!open3);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-label="primary routes"
    >
      <ListItemLink to="/" primary="Home" icon={<HomeIcon />} />
      {/* Resolvers */}
      <ListItemButton onClick={handleClick1}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Resolvers" />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemLink
            sx={{ pl: 4 }}
            to="/resolvers/basic"
            primary="Basic"
            icon={<AutoGraphIcon />}
          />
          <ListItemLink
            sx={{ pl: 4 }}
            to="/resolvers/yup"
            primary="Yup"
            icon={<AutoGraphIcon />}
          />
          <ListItemLink
            sx={{ pl: 4 }}
            to="/resolvers/zod"
            primary="Zod"
            icon={<AutoGraphIcon />}
          />
        </List>
      </Collapse>
      {/* /Resolvers */}
      <ListItemLink
        to="/logrocket"
        primary="LogRocket"
        icon={<AutoGraphIcon />}
      />
      {/* Ivanov Tuts */}
      <ListItemButton onClick={handleClick3}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Ivanov Tutorials" />
        {open3 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemLink
            sx={{ pl: 4 }}
            to="/ivanov/signin"
            primary="Signin"
            icon={<AutoGraphIcon />}
          />
          <ListItemLink
            sx={{ pl: 4 }}
            to="/ivanov/dependent"
            primary="Dependent"
            icon={<AutoGraphIcon />}
          />
          <ListItemLink
            sx={{ pl: 4 }}
            to="/ivanov/mask"
            primary="Mask"
            icon={<AutoGraphIcon />}
          />
        </List>
      </Collapse>
      {/* Ivanov end */}
      <ListItemLink to="/stepper" primary="Stepper" icon={<AutoGraphIcon />} />
      <ListItemLink
        to="/ultimate"
        primary="Ultimate"
        icon={<AutoGraphIcon />}
      />
    </List>
  );
};

export default NestedList;
