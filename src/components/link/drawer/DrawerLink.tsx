import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { ReactNode } from 'react';

export interface IDrawerLink {
  icon?: ReactNode;
  text: string;
}

const DrawerLink: React.FC<IDrawerLink> = ({ icon, text }) => {
  return (
    <ListItem key={text} disablePadding>
      <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};

export default DrawerLink;
