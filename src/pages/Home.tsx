import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import Logo from '../assets/logo.png';
import PrimaryButton from '../components/ui/PrimaryButton';
import SecondaryButton from '../components/ui/SecondaryButton';
import ServiceCard from '../components/ui/ServiceCard';
import StatsCard from '../components/ui/StatsCard';
import TestimonialsSection from '../components/ui/TestimonialsSection';
import {
  companySubheading,
  companyTagline,
  primaryCtaText,
  secondaryCtaText,
  services,
  stats,
  testimonials,
} from '../content/siteContent';

const Home = () => {
  const theme = useTheme();

  return (
    <Box component="main">
      <Box
        sx={{
          position: 'relative',
          backgroundColor: theme.palette.primary.main,
          overflow: 'hidden',
          pt: { xs: 10, md: 12 },
          pb: { xs: 8, md: 0 },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            left: '50%',
            top: { xs: 88, md: 112 },
            transform: 'translateX(-50%)',
            width: { xs: 320, md: 620 },
            height: { xs: 320, md: 620 },
            borderRadius: '50%',
            background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.06)} 0%, transparent 72%)`,
            filter: 'blur(24px)',
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative' }}>
          <Box
            sx={{
              textAlign: 'center',
              maxWidth: 920,
              mx: 'auto',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                zIndex: 1,
                pt: { xs: 2, md: 3 },
                pb: { xs: 8, md: 0 },
              }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: alpha(theme.palette.secondary.main, 0.72),
                  letterSpacing: '0.22em',
                }}
              >
                Digital Marketing Agency
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  mt: 2,
                  color: theme.palette.secondary.light,
                  fontSize: { xs: '2.7rem', sm: '3.4rem', md: '4.5rem' },
                  lineHeight: 1.05,
                  maxWidth: 860,
                  mx: 'auto',
                }}
              >
                Bold campaigns that turn attention into growth.
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mt: 3,
                  maxWidth: 640,
                  mx: 'auto',
                  lineHeight: 1.8,
                  fontWeight: 400,
                  color: alpha(theme.palette.secondary.main, 0.88),
                }}
              >
                {companySubheading}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 2,
                  flexWrap: 'wrap',
                  mt: 4,
                }}
              >
                <PrimaryButton
                  endIcon={<ArrowForwardIcon />}
                  href="/contact"
                  size="large"
                  sx={{
                    backgroundColor: theme.palette.secondary.main,
                    color: theme.palette.primary.main,
                    '&:hover': {
                      backgroundColor: theme.palette.secondary.dark,
                    },
                  }}
                >
                  {primaryCtaText}
                </PrimaryButton>
                <SecondaryButton
                  href="/output"
                  size="large"
                  sx={{
                    color: theme.palette.secondary.main,
                    borderColor: alpha(theme.palette.secondary.main, 0.35),
                    '&:hover': {
                      borderColor: theme.palette.secondary.main,
                      backgroundColor: alpha(theme.palette.secondary.main, 0.08),
                    },
                  }}
                >
                  {secondaryCtaText}
                </SecondaryButton>
              </Box>
              <Typography
                sx={{
                  mt: 3,
                  color: alpha(theme.palette.secondary.main, 0.7),
                }}
              >
                {companyTagline}
              </Typography>

              <Box
                sx={{
                  position: 'relative',
                  mt: { xs: 7, md: 9 },
                  minHeight: { xs: 320, md: 470 },
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    left: { xs: 0, md: 24 },
                    right: { xs: 0, md: 24 },
                    bottom: 0,
                    height: { xs: 170, md: 230 },
                    borderRadius: { xs: 5, md: 6 },
                    backgroundColor: alpha(theme.palette.secondary.main, 0.16),
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: { xs: -12, md: 20 },
                    left: { xs: 18, md: 160 },
                    width: { xs: 74, md: 108 },
                    height: { xs: 74, md: 108 },
                    opacity: 0.95,
                    background:
                      `radial-gradient(circle, transparent 38%, transparent 38%),` +
                      `linear-gradient(115deg, transparent 0 28%, ${theme.palette.secondary.light} 28% 40%, transparent 40% 48%, ${theme.palette.secondary.light} 48% 60%, transparent 60% 68%, ${theme.palette.secondary.light} 68% 80%, transparent 80%)`,
                    transform: 'rotate(8deg)',
                    pointerEvents: 'none',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    right: { xs: 28, md: 190 },
                    bottom: { xs: 28, md: 38 },
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 12px)',
                    gap: 1,
                    pointerEvents: 'none',
                  }}
                >
                  {Array.from({ length: 16 }).map((_, index) => (
                    <Box
                      key={index}
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        backgroundColor: alpha(theme.palette.secondary.light, 0.92),
                      }}
                    />
                  ))}
                </Box>
                <Box
                  sx={{
                    position: 'relative',
                    width: { xs: '86%', md: 500 },
                    mx: 'auto',
                    borderRadius: { xs: 4, md: 5 },
                    overflow: 'hidden',
                    boxShadow: `0 28px 70px ${alpha(theme.palette.primary.dark, 0.45)}`,
                    border: `1px solid ${alpha(theme.palette.secondary.main, 0.12)}`,
                  }}
                >
                  <Box
                    component="img"
                    src={Logo}
                    alt="Power House campaign showcase"
                    sx={{
                      display: 'block',
                      width: '100%',
                      aspectRatio: '4 / 3',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 14 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
              gap: 3,
            }}
          >
            {stats.map((stat) => (
              <StatsCard key={stat.label} {...stat} />
            ))}
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 14 } }}>
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 720, mb: 6 }}>
            <Typography variant="h2" sx={{ mb: 2 }}>
              Services built to move your market position.
            </Typography>
            <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
              We build focused growth systems across search, social, creative, and paid acquisition so your brand stays visible and converts with confidence.
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
              gap: 3,
            }}
          >
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                accentColor={theme.palette[service.accent].main}
                description={service.description}
                icon={service.icon}
                title={service.title}
              />
            ))}
          </Box>
        </Container>
      </Box>

      <TestimonialsSection items={testimonials} />

      
    </Box>
  );
};

export default Home;
