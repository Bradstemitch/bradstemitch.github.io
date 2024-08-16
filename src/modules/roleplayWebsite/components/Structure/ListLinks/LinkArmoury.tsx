import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { HomeRepairService } from '@mui/icons-material';

function LinkArmoury(props: any) {
    return (
        <ListItem key='Armoury' disablePadding sx={{ display: 'block' }}>
            <Link to={'/armoury'}>
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
                        <HomeRepairService />
                    </ListItemIcon>
                    <ListItemText primary='Armoury' sx={{ opacity: props.open ? 1 : 0 }} />
                </ListItemButton>
            </Link>
        </ListItem>
    );
}

export default LinkArmoury;
