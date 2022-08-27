import * as React from 'react';

import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import ListItemLink from '../ListItemLink';

const NestedList = () => {
  const [open1, setOpen1] = React.useState(true);

  const handleClick1 = () => {
    setOpen1(!open1);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      //   subheader={
      //     <ListSubheader component="div" id="nested-list-subheader">
      //       Nested List Items
      //     </ListSubheader>
      //   }
    >
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
    </List>
  );
};

export default NestedList;
