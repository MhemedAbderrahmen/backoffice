import DrawerLink from '@/components/link/drawer/DrawerLink';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import TaskRoundedIcon from '@mui/icons-material/TaskRounded';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
export interface IBaseDrawer {
  window?: () => Window;
  mobileIsOpen: boolean;
  handleDrawerToggle: () => void;
}

const drawerWidth = 240;
const BaseDrawer: React.FC<IBaseDrawer> = ({
  window,
  handleDrawerToggle,
  mobileIsOpen,
}) => {
  const drawer = (
    <div>
      <Toolbar />
      <List>
        <DrawerLink icon={<HomeRoundedIcon />} text={'Home'} />
        <DrawerLink icon={<TaskRoundedIcon />} text={'Tasks'} />
        <DrawerLink icon={<BuildRoundedIcon />} text={'Technicians'} />
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        elevation={0}
        container={container}
        variant="temporary"
        open={mobileIsOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default BaseDrawer;
