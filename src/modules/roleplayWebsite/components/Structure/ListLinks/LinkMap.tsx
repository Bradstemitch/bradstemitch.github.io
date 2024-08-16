import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Explore } from '@mui/icons-material';

function LinkMap(props: any) {
    return (
        <ListItem key='Map' disablePadding sx={{ display: 'block' }}>
            <Link to={'/map'}>
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
                        <Explore />
                    </ListItemIcon>
                    <ListItemText primary='Map' sx={{ opacity: props.open ? 1 : 0 }} />
                </ListItemButton>
            </Link>
        </ListItem>
    );
}

export default LinkMap;
