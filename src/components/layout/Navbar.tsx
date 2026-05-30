import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import { useMemo, useState } from 'react';
import { Link as RouterLink, NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Output', to: '/output' },
  { label: 'Team', to: '/team' },
];

const Navbar = () => {
  const theme = useTheme();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const activeLabel = useMemo(
    () => navItems.find((item) => item.to === location.pathname)?.label,
    [location.pathname],
  );

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: '#381932',
        color: theme.palette.secondary.main,
        borderBottom: 'none',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 76, md: 96 },
            gap: { xs: 1, md: 3 },
          }}
        >
          <Stack
            component={RouterLink}
            direction="row"
            spacing={1.25}
            to="/"
            sx={{
              textDecoration: 'none',
              alignItems: 'center',
              color: 'inherit',
              flexShrink: 0,
              minWidth: 0,
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Power House logo"
              sx={{
                width: { xs: 58, md: 68 },
                height: { xs: 58, md: 68 },
                objectFit: 'contain',
              }}
            />
            <Box>
              <Typography
                variant="h6"
                sx={{
                  lineHeight: 1.05,
                  color: theme.palette.secondary.light,
                  fontWeight: 700,
                }}
              >
                Power House
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  lineHeight: 1.1,
                  color: alpha(theme.palette.secondary.main, 0.78),
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Marketing Agency
              </Typography>
            </Box>
          </Stack>

          <Stack
            direction="row"
            spacing={0.5}
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexGrow: 1,
              justifyContent: 'center',
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.to}
                component={NavLink}
                to={item.to}
                sx={{
                  px: 2,
                  py: 1.25,
                  color:
                    location.pathname === item.to
                      ? theme.palette.secondary.light
                      : alpha(theme.palette.secondary.main, 0.82),
                  position: 'relative',
                  fontSize: '1rem',
                  fontWeight: location.pathname === item.to ? 700 : 500,
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: 18,
                    right: 18,
                    bottom: 10,
                    height: 2,
                    borderRadius: 999,
                    backgroundColor: theme.palette.secondary.light,
                    transform: location.pathname === item.to ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'center',
                    transition: 'transform 0.3s ease',
                  },
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: theme.palette.secondary.light,
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>

          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            color="secondary"
            sx={{
              display: { xs: 'none', md: 'inline-flex' },
              minWidth: 132,
              px: 3,
              py: 1.35,
              borderRadius: 2,
              backgroundColor: theme.palette.secondary.light,
              color: '#0b3650',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: alpha(theme.palette.secondary.light, 0.92),
                boxShadow: 'none',
              },
            }}
          >
            Contact Us
          </Button>

          <IconButton
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            sx={{
              display: { xs: 'inline-flex', md: 'none' },
              color: theme.palette.secondary.light,
              ml: 'auto',
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: 300,
              backgroundColor: theme.palette.background.default,
              borderLeft: `1px solid ${theme.palette.divider}`,
              p: 3,
            },
          },
        }}
      >
        <Stack spacing={3} sx={{ height: '100%' }}>
          <Stack
            direction="row"
            sx={{ alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Typography variant="h6">{activeLabel ?? 'Navigate'}</Typography>
            <IconButton onClick={() => setOpen(false)} aria-label="Close menu">
              <CloseIcon />
            </IconButton>
          </Stack>
          <Stack spacing={1}>
            {navItems.map((item) => (
              <Button
                key={item.to}
                component={NavLink}
                to={item.to}
                onClick={() => setOpen(false)}
                sx={{
                  justifyContent: 'flex-start',
                  color:
                    location.pathname === item.to
                      ? theme.palette.primary.main
                      : theme.palette.text.primary,
                  border: `1px solid ${
                    location.pathname === item.to
                      ? alpha(theme.palette.primary.main, 0.45)
                      : theme.palette.divider
                  }`,
                  backgroundColor:
                    location.pathname === item.to
                      ? alpha(theme.palette.primary.main, 0.08)
                      : 'transparent',
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>
        </Stack>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
