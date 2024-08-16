import React from 'react';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Home } from '@mui/icons-material';

function LinkHome(props: any) {
    return (
        <ListItem key={"Home"} disablePadding sx={{ display: 'block' }}>
            <Link to={'/'}>
                <ListItemButton
                    sx={{
                        minHeight: 48,
                        justifyContent: props.open ? 'initial' : 'center',
                        px: 2.5,
                    }}
                >
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: props.open ? 3 : 'auto',
                            justifyContent: 'center',
                        }}
                    >
                        <Home />
                    </ListItemIcon>
                    <ListItemText primary={"Home"} sx={{ opacity: props.open ? 1 : 0 }} />
                </ListItemButton>
            </Link>
        </ListItem>
    );
}

export default LinkHome;
