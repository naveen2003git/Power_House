import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import TwitterIcon from '@mui/icons-material/Twitter';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import {
  companyAddress,
  companyEmail,
  companyPhone,
  companyTagline,
} from '../../content/siteContent';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Output', to: '/output' },
  { label: 'Team', to: '/team' },
  { label: 'Contact', to: '/contact' },
];

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        borderTop: `1px solid ${theme.palette.divider}`,
        background:
          `linear-gradient(180deg, ${alpha(theme.palette.background.default, 0.25)} 0%, ` +
          `${theme.palette.background.default} 100%)`,
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.4fr 1fr 1fr' },
            gap: 4,
          }}
        >
          <Stack spacing={2}>
            <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
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
                <Typography variant="h6">Power House</Typography>
                <Typography variant="body2" color="text.secondary">
                  {companyTagline}
                </Typography>
              </Box>
            </Stack>
            <Typography color="text.secondary" sx={{ maxWidth: 360, lineHeight: 1.8 }}>
              Bold strategy, clear reporting, and modern digital systems for brands ready to scale.
            </Typography>
            <Stack direction="row" spacing={1}>
              {[LinkedInIcon, TwitterIcon, InstagramIcon].map((Icon, index) => (
                <IconButton
                  key={index}
                  aria-label="social link"
                  sx={{
                    border: `1px solid ${theme.palette.divider}`,
                    color: theme.palette.text.secondary,
                    '&:hover': {
                      color: theme.palette.primary.main,
                      borderColor: alpha(theme.palette.primary.main, 0.45),
                    },
                  }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Stack>
          </Stack>

          <Stack spacing={1.5}>
            <Typography variant="h6">Quick Links</Typography>
            {quickLinks.map((link) => (
              <Typography
                key={link.to}
                component={RouterLink}
                to={link.to}
                sx={{
                  color: theme.palette.text.secondary,
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: theme.palette.primary.main,
                    transform: 'translateX(4px)',
                  },
                }}
              >
                {link.label}
              </Typography>
            ))}
          </Stack>

          <Stack spacing={1.75}>
            <Typography variant="h6">Contact Info</Typography>
            <Stack direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }}>
              <EmailIcon sx={{ color: theme.palette.secondary.main, mt: 0.25 }} />
              <Typography color="text.secondary">{companyEmail}</Typography>
            </Stack>
            <Stack direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }}>
              <PhoneIcon sx={{ color: theme.palette.secondary.main, mt: 0.25 }} />
              <Typography color="text.secondary">{companyPhone}</Typography>
            </Stack>
            <Stack direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }}>
              <LocationOnIcon sx={{ color: theme.palette.secondary.main, mt: 0.25 }} />
              <Typography color="text.secondary">{companyAddress}</Typography>
            </Stack>
          </Stack>
        </Box>

        <Divider sx={{ my: 4, borderColor: theme.palette.divider }} />

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={1}
          sx={{ justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' } }}
        >
          <Typography variant="body2" color="text.secondary">
            Copyright 2026 Power House. All rights reserved.
          </Typography>
          <Typography
            component={RouterLink}
            to="/contact"
            variant="body2"
            sx={{ color: theme.palette.text.secondary, textDecoration: 'none' }}
          >
            Privacy
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
