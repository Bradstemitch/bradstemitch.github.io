import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled, useTheme, Theme, CSSObject, ThemeProvider, createTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Home, Pets } from '@mui/icons-material';
import HomeListLink from './ListLinks/LinkHome';
import LinkCreatures from './ListLinks/LinkCreatures';
import LinkArmoury from './ListLinks/LinkArmoury';
import LinkMagicItems from './ListLinks/LinkMagicItems';
import LinkReligions from './ListLinks/LinkReligions';
import LinkMap from './ListLinks/LinkMap';
import LinkNations from './ListLinks/LinkNations';
import LinkCharacters from './ListLinks/LinkCharacters';

interface LayoutProps {
    setRoleplaySystem: Function
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});

function RoleplayLayout(props: LayoutProps) {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <Box sx={{ display: 'flex' }}>
                <AppBar position="fixed" open={open} color="primary">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                marginRight: 5,
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Grund Wiki:
                        </Typography>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" style={{ "marginLeft": "20px", "height": "140%" }}>
                            <Tab label="D&D 5E" {...a11yProps(0)} onClick={(event) => props.setRoleplaySystem('DnD5e')} />
                            <Tab label="Pathfinder 2E" {...a11yProps(1)} onClick={(event) => props.setRoleplaySystem('Path2e')} />
                            <Tab label="Warhammer 4E" {...a11yProps(2)} onClick={(event) => props.setRoleplaySystem('WFRP4e')} />
                        </Tabs>
                    </Toolbar>
                </AppBar>

                <Drawer variant="permanent" open={open}>
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        <HomeListLink open={open} />
                    </List>
                    <Divider />
                    <List>
                        <LinkCreatures open={open} />
                        <LinkArmoury open={open} />
                        <LinkMagicItems open={open} />
                        <LinkReligions open={open} />
                        <LinkNations open={open} />
                        <LinkCharacters open={open} />
                    </List>
                        <Divider />
                    <List>
                        <LinkMap open={open} />
                    </List>
                </Drawer>

                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
                    <Outlet />
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default RoleplayLayout;
