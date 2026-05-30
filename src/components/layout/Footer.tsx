import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import {
  companyAddress,
  companyEmail,
  companyTagline,
  primaryCtaText,
} from '../../content/siteContent';

const companyLinks = [
  { label: 'About', to: '/about' },
  { label: 'Our Team', to: '/team' },
  { label: 'Contact Us', to: '/contact' },
];

const usefulLinks = [
  { label: 'Our Work', to: '/output' },
  { label: 'Services', to: '/' },
  { label: 'Start Growing', to: '/contact' },
];

const legalLinks = [
  { label: 'Terms', to: '/contact' },
  { label: 'Privacy', to: '/contact' },
  { label: 'Cookies', to: '/contact' },
];

const Footer = () => {
  const theme = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderLinks = (links: { label: string; to: string }[]) =>
    links.map((link) => (
      <Typography
        key={link.label}
        component={RouterLink}
        to={link.to}
        sx={{
          color: alpha(theme.palette.secondary.main, 0.76),
          textDecoration: 'none',
          lineHeight: 1.8,
          transition: 'color 0.25s ease, transform 0.25s ease',
          '&:hover': {
            color: theme.palette.secondary.light,
            transform: 'translateX(4px)',
          },
        }}
      >
        {link.label}
      </Typography>
    ));

  return (
    <Box component="footer" sx={{ mt: 'auto' }}>
      <Box
        sx={{
          position: 'relative',
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.secondary.light,
          pt: { xs: 8, md: 11 },
          pb: { xs: 10, md: 14 },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', lg: '1.15fr auto' },
              gap: { xs: 4, md: 6 },
              alignItems: 'center',
            }}
          >
            <Box sx={{ maxWidth: 780 }}>
              <Typography
                variant="h2"
                sx={{
                  color: theme.palette.secondary.light,
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  lineHeight: 1.1,
                }}
              >
                Join with us and start building your brand with confidence.
              </Typography>
              <Typography
                sx={{
                  mt: 2.5,
                  maxWidth: 560,
                  color: alpha(theme.palette.secondary.main, 0.82),
                  lineHeight: 1.9,
                }}
              >
                Creative strategy, content, and digital growth systems designed to help
                your business stand out and scale faster online.
              </Typography>
            </Box>

            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              sx={{
                justifySelf: { xs: 'flex-start', lg: 'end' },
                minWidth: 180,
                px: 4,
                py: 1.7,
                borderRadius: 2,
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.primary.main,
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: theme.palette.secondary.dark,
                  boxShadow: 'none',
                },
              }}
            >
              {primaryCtaText}
            </Button>
          </Box>
        </Container>

        <IconButton
          aria-label="Scroll to top"
          onClick={scrollToTop}
          sx={{
            position: 'absolute',
            left: '50%',
            bottom: -28,
            transform: 'translateX(-50%)',
            width: { xs: 60, md: 72 },
            height: { xs: 60, md: 72 },
            border: { xs: `4px solid ${theme.palette.secondary.light}`, md: `5px solid ${theme.palette.secondary.light}` },
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.secondary.light,
            zIndex: 2,
            '&:hover': {
              backgroundColor: theme.palette.primary.light,
            },
          }}
        >
          <ArrowUpwardIcon />
        </IconButton>
      </Box>

      <Box
        sx={{
          position: 'relative',
          backgroundColor: theme.palette.primary.dark,
          color: theme.palette.secondary.light,
          pt: { xs: 12, md: 14 },
          pb: { xs: 7, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1.2fr 0.8fr 0.8fr 0.8fr' },
              gap: { xs: 5, md: 4, lg: 7 },
            }}
          >
            <Box sx={{ maxWidth: 380 }}>
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', mb: 3 }}>
                <Box
                  component="img"
                  src={logo}
                  alt="Power House logo"
                  sx={{
                    width: 66,
                    height: 66,
                    objectFit: 'contain',
                  }}
                />
                <Box>
                  <Typography variant="h4" sx={{ color: theme.palette.secondary.light }}>
                    Power House
                  </Typography>
                  <Typography
                    sx={{
                      color: alpha(theme.palette.secondary.main, 0.7),
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      fontSize: '0.72rem',
                    }}
                  >
                    Marketing Agency
                  </Typography>
                </Box>
              </Stack>

              <Typography
                sx={{
                  color: alpha(theme.palette.secondary.main, 0.76),
                  lineHeight: 1.95,
                  mb: 3,
                }}
              >
                {companyTagline}. We combine creative storytelling, smart strategy, and
                modern execution to build a stronger digital presence for growing brands.
              </Typography>

              <Stack direction="row" spacing={1.25}>
                {[LinkedInIcon, TwitterIcon, InstagramIcon].map((Icon, index) => (
                  <IconButton
                    key={index}
                    aria-label="social link"
                    sx={{
                      width: 42,
                      height: 42,
                      border: `1px solid ${alpha(theme.palette.secondary.main, 0.14)}`,
                      backgroundColor: alpha(theme.palette.secondary.main, 0.04),
                      color: theme.palette.secondary.light,
                      '&:hover': {
                        backgroundColor: alpha(theme.palette.secondary.main, 0.12),
                        borderColor: alpha(theme.palette.secondary.main, 0.28),
                      },
                    }}
                  >
                    <Icon fontSize="small" />
                  </IconButton>
                ))}
              </Stack>
            </Box>

            <Box>
              <Typography
                variant="h6"
                sx={{ mb: 2.5, color: theme.palette.secondary.light, fontWeight: 700 }}
              >
                Company
              </Typography>
              <Stack spacing={1.25}>{renderLinks(companyLinks)}</Stack>
            </Box>

            <Box>
              <Typography
                variant="h6"
                sx={{ mb: 2.5, color: theme.palette.secondary.light, fontWeight: 700 }}
              >
                Useful Links
              </Typography>
              <Stack spacing={1.25}>{renderLinks(usefulLinks)}</Stack>
            </Box>

            <Box>
              <Typography
                variant="h6"
                sx={{ mb: 2.5, color: theme.palette.secondary.light, fontWeight: 700 }}
              >
                Legal
              </Typography>
              <Stack spacing={1.25} sx={{ mb: 3 }}>
                {renderLinks(legalLinks)}
              </Stack>
              <Typography sx={{ color: alpha(theme.palette.secondary.main, 0.76), lineHeight: 1.8 }}>
                {companyEmail}
              </Typography>
              <Typography sx={{ color: alpha(theme.palette.secondary.main, 0.76), lineHeight: 1.8 }}>
                {companyAddress}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              mt: { xs: 6, md: 7 },
              pt: 3,
              borderTop: `1px solid ${alpha(theme.palette.secondary.main, 0.1)}`,
              textAlign: 'center',
            }}
          >
            <Typography sx={{ color: alpha(theme.palette.secondary.main, 0.56) }}>
              Copyright 2026 Power House. All rights reserved.
            </Typography>
          </Box>
        </Container>

        <IconButton
          aria-label="Scroll to top"
          onClick={scrollToTop}
          sx={{
            position: 'absolute',
            right: { xs: 20, md: 32 },
            bottom: { xs: 20, md: 28 },
            width: 56,
            height: 56,
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.secondary.light,
            '&:hover': {
              backgroundColor: theme.palette.primary.main,
            },
          }}
        >
          <ArrowUpwardIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
