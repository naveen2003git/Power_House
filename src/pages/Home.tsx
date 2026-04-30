import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import heroImage from '../assets/hero.png';
import PrimaryButton from '../components/ui/PrimaryButton';
import SecondaryButton from '../components/ui/SecondaryButton';
import ServiceCard from '../components/ui/ServiceCard';
import StatsCard from '../components/ui/StatsCard';
import {
  companySubheading,
  companyTagline,
  primaryCtaText,
  secondaryCtaText,
  services,
  stats,
} from '../content/siteContent';

const Home = () => {
  const theme = useTheme();

  return (
    <Box component="main">
      <Box
        sx={{
          position: 'relative',
          minHeight: 'calc(100vh - 76px)',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              `radial-gradient(circle at 10% 20%, ${alpha(theme.palette.primary.main, 0.22)} 0%, transparent 35%),` +
              `radial-gradient(circle at 85% 25%, ${alpha(theme.palette.secondary.main, 0.18)} 0%, transparent 30%),` +
              `linear-gradient(180deg, ${alpha(theme.palette.background.paper, 0.6)} 0%, ${theme.palette.background.default} 100%)`,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '12%',
            right: { xs: '-20%', md: '8%' },
            width: { xs: 220, md: 420 },
            height: { xs: 220, md: 420 },
            borderRadius: '50%',
            background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.16)} 0%, transparent 68%)`,
            filter: 'blur(10px)',
            animation: 'floatPulse 8s ease-in-out infinite',
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', py: { xs: 10, md: 14 } }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1.1fr 0.9fr' },
              alignItems: 'center',
              gap: { xs: 6, md: 8 },
            }}
          >
            <Box>
              <Typography
                variant="overline"
                sx={{ color: theme.palette.primary.main, letterSpacing: '0.2em' }}
              >
                Digital Marketing Agency
              </Typography>
              <Typography variant="h5" sx={{ mt: 2, maxWidth: 720, fontSize: { xs: '3rem', md: '4rem' } }}>
                Bold campaigns that turn attention into growth.
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ mt: 3, maxWidth: 640, lineHeight: 1.8, fontWeight: 400 }}
              >
                {companySubheading}
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 4 }}>
                <PrimaryButton endIcon={<ArrowForwardIcon />} href="/contact" size="large">
                  {primaryCtaText}
                </PrimaryButton>
                <SecondaryButton href="/output" size="large">
                  {secondaryCtaText}
                </SecondaryButton>
              </Box>
              <Typography color="text.secondary" sx={{ mt: 4 }}>
                {companyTagline}
              </Typography>
            </Box>

            <Box
              sx={{
                position: 'relative',
                minHeight: { xs: 360, md: 540 },
                borderRadius: 6,
                overflow: 'hidden',
                border: `1px solid ${alpha(theme.palette.common.white, 0.08)}`,
                background:
                  `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.82)} 0%, ` +
                  `${alpha(theme.palette.background.default, 0.52)} 100%)`,
              }}
            >
              <Box
                component="img"
                src={heroImage}
                alt="Power House hero"
                sx={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.45,
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    `linear-gradient(180deg, ${alpha(theme.palette.background.default, 0.08)} 0%, ` +
                    `${alpha(theme.palette.background.default, 0.82)} 100%)`,
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  right: 24,
                  bottom: 24,
                  left: 24,
                  p: 3,
                  borderRadius: 4,
                  backdropFilter: 'blur(12px)',
                  backgroundColor: alpha(theme.palette.background.paper, 0.62),
                  border: `1px solid ${alpha(theme.palette.common.white, 0.08)}`,
                }}
              >
                <Typography variant="h5" sx={{ mb: 1 }}>
                  Strategy. Creative. Conversion.
                </Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  Power House blends brand storytelling with performance systems so every campaign feels sharp and proves its value.
                </Typography>
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

      <Box sx={{ py: { xs: 8, md: 14 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 6,
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr auto' },
              gap: 3,
              alignItems: 'center',
              background:
                `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.2)} 0%, ` +
                `${alpha(theme.palette.background.paper, 0.9)} 50%, ${alpha(theme.palette.secondary.main, 0.14)} 100%)`,
              border: `1px solid ${alpha(theme.palette.common.white, 0.08)}`,
            }}
          >
            <Box>
              <Typography variant="h2" sx={{ mb: 1.5 }}>
                Ready to grow?
              </Typography>
              <Typography color="text.secondary" sx={{ maxWidth: 640, lineHeight: 1.8 }}>
                Let&apos;s build a digital growth plan that looks premium, performs hard, and scales with your goals.
              </Typography>
            </Box>
            <PrimaryButton href="/contact" size="large">
              {primaryCtaText}
            </PrimaryButton>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
