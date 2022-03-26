import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-scroll'



const pages = ['about','skills', 'projects','contacts'];

const Appbar = ({setTheme}) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const pagesOnClick = (page) => {
        setAnchorElNav(null);
    }


    return (<AppBar position="sticky" sx={{ bgcolor: "#222222" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }} keepMounted transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{
            display: { xs: 'block', md: 'none' },
        }}>
              {pages.map((page) => (<MenuItem sx={{ color: "#222222" }} key={page} onClick={() => pagesOnClick(page)}>



                         <Link activeClass="active" to={page} offset={-80}>
                {page}
                </Link>
                </MenuItem>))}
            </Menu>
          </Box>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, fontWeight: 'bold', display: { xs: 'flex', md: 'none' } }}>
            Portfolio
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (<Button key={page} style={{ fontSize: '2.1vh' }} onClick={() => pagesOnClick(page)} sx={{ my: 2, display: 'block', color: 'white'}}>
            <Link activeClass="active" to={page} offset={-80}>
                {page}
                </Link>
              </Button>))}
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
              <Button onClick={setTheme} sx={{ my: 2, display: 'block', color: 'white'}}>
                  Theme
              </Button>

          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>);
};
export default Appbar;

