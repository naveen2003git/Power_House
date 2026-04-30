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

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Output', to: '/output' },
  { label: 'Team', to: '/team' },
  { label: 'Contact', to: '/contact' },
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
        backgroundColor: alpha(theme.palette.background.paper, 0.85),
        backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 76 }}>
          <Stack
            component={RouterLink}
            direction="row"
            spacing={1.5}
            to="/"
            sx={{ textDecoration: 'none', alignItems: 'center', color: 'inherit', flexGrow: 1 }}
          >
            <Box
              sx={{
                width: 42,
                height: 42,
                borderRadius: 2,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: theme.palette.primary.contrastText,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                fontWeight: 800,
              }}
            >
              PH
            </Box>
            <Box>
              <Typography variant="h6" sx={{ lineHeight: 1.1 }}>
                Power House
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Digital Marketing
              </Typography>
            </Box>
          </Stack>

          <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((item) => (
              <Button
                key={item.to}
                component={NavLink}
                to={item.to}
                sx={{
                  color:
                    location.pathname === item.to
                      ? theme.palette.primary.main
                      : theme.palette.text.primary,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: 16,
                    right: 16,
                    bottom: 8,
                    height: 2,
                    borderRadius: 999,
                    backgroundColor: theme.palette.primary.main,
                    transform: location.pathname === item.to ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'center',
                    transition: 'transform 0.3s ease',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>

          <IconButton
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: 'inline-flex', md: 'none' }, color: theme.palette.text.primary }}
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
